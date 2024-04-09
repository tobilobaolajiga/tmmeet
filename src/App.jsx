import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginSuccessful from './components/LoginSuccessful';
import Schedule from '../src/components/Schedule';
import VideoLiveStream from './components/VideoLivestream';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import CheckCamera from './components/CheckCamera';

export default function App() {
  const [login, setLogin] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [options, setOptions] = useState(false);
  const [otp, setOTP] = useState(false);

  const showOptions = () => {
    setOptions(!options);
  };
  const closeOptions = () => {
    setOptions('');
  };

  const showLogin = () => {
    setLogin(!login);

    const body = document.querySelector('#body');
    body.style.position = 'fixed';
  };

  const closeLogin = () => {
    setLogin(!login);
    setUserEmail('');
    setUserPassword('');
    closeOptions();

    const body = document.querySelector('#body');
    body.style.position = '';
  };

  const [schedule, setSchedule] = useState(false);
  const showSchedule = () => {
    setSchedule(!schedule);
    closeOptions();
  };

  const [profileDrop, setProfileDrop] = useState(false);
  const showProfDrop = () => {
    setProfileDrop(!profileDrop);
  };
  const [error, setError] = useState('');

  const [userId, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const [loading, setLoading] = useState(false);

  const sendOTP = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://89.38.135.41:9877/api/v1/auth/onboard',
        {
          email: email || userEmail,
          fullName: name,
          password: pwd,
        }
      );

      const data = response;

      localStorage.setItem('userId', data?.data?.data?.userId);
      console.log(userId);
      setLoading(false);
      setOTP(!otp);
      setPassword(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
      toast.error(error.response.data.message);
      console.log(error.response.data.status);
      console.log(error.response.data.message);
      console.log(userId);
    }
  };

  const showOtp = () => {
    sendOTP();
    setOTP(!otp);
    setPassword(false);
    setLogin(false);
  };
  const [resendOtp, setResendOtp] = useState(false);
  const resendOTP = async () => {
    try {
      const response = await axios.post(
        'http://89.38.135.41:9877/api/v1/auth/resend-otp',
        {
          email: email || userEmail,
        }
      );

      const data = response;
      const id = data?.data?.data?.userId;
      setId(id);
      setResendOtp(!resendOtp);
      setOTP(!otp);
      setPassword(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const [newAccount, setNewAccount] = useState(false);
  const [name, setName] = useState('');
  const [lastname, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(false);

  const showCreateAccount = () => {
    setNewAccount(!newAccount);
    setLogin(false);
    // !passwordModal();
  };
  const closeCreate = () => {
    showCreateAccount();
  };
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <Routes>
          <Route
            className="max-w-[1400px] w-screen h-screen mx-auto font-DMSans overflow-y-clip" //
            id="body"
            path="/"
            element={
              <Home
                showLogin={showLogin}
                closeLogin={closeLogin}
                showOptions={showOptions}
                closeOptions={closeOptions}
                options={options}
                setOptions={setOptions}
                login={login}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                userPassword={userPassword}
                setUserPassword={setUserPassword}
                otp={otp}
                setOTP={setOTP}
                showOtp={showOtp}
                resendOTP={resendOTP}
                resendOtp={resendOtp}
                closeCreate={closeCreate}
                newAccount={newAccount}
                setNewAccount={setNewAccount}
                showCreateAccount={showCreateAccount}
                setLogin={setLogin}
                name={name}
                setName={setName}
                lastname={lastname}
                setLast={setLast}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                pwd={pwd}
                setPwd={setPwd}
                loading={loading}
              />
            }
          />
          <Route
            className="max-w-[1400px] w-screen h-screen mx-auto font-DMSans overflow-y-clip" //
            id="body"
            path="/login"
            element={
              <LoginSuccessful
                schedule={schedule}
                showSchedule={showSchedule}
                profileDrop={profileDrop}
                showProfDrop={showProfDrop}
                setProfileDrop={setProfileDrop}
              />
            }
          />
          <Route
            path="/schedule"
            element={
              <Schedule
                schedule={schedule}
                showSchedule={showSchedule}
                profileDrop={profileDrop}
                showProfDrop={showProfDrop}
                email={email}
                userId={userId}
              />
            }
          />

          <Route
            // path="/check/:meetingId"
            path="/check"
            element={
              <CheckCamera
                profileDrop={profileDrop}
                setProfileDrop={setProfileDrop}
                showProfDrop={showProfDrop}
              />
            }
          />

          <Route path="/video" element={<VideoLiveStream />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
