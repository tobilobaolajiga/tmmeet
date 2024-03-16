import { useState } from 'react';
import Home from './components/Home';
import LoginSuccessful from './components/LoginSuccessful';
import Schedule from './components/Schedule';
import Scheduler from './components/Scheduler';
import Description from './components/Description';
import Reminder from './components/Reminder';
import OTP from './components/OTP';
import Scheduled from './components/Scheduled';
import CreatePassword from './components/createPassword';
export default function App() {
  const [login, setLogin] = useState(false);

  const [options, setOptions] = useState(false);
  const showOptions = () => {
    setOptions(!options);
  };
  const closeOptions = () => {
    setOptions('');
  };

  const showLogin = () => {
    setLogin(!login);
    closeOptions();
    const body = document.querySelector('#body');
    body.style.position = 'fixed';
  };

  const closeLogin = () => {
    setLogin(!login);

    closeOptions();

    const body = document.querySelector('#body');
    body.style.position = '';
  };
  const [schedule, setSchedule] = useState(false);
  const showSchedule = () => {
    setSchedule(!schedule);
    closeOptions();
  };
  const [scheduler, setScheduler] = useState(false);
  const showScheduler = () => {
    setScheduler(!scheduler);
  };
  return (
    <div
      className="max-w-[1400px] w-screen h-screen mx-auto font-DMSans overflow-y-clip" //
      id="body"
    >
      <Home
        showLogin={showLogin}
        closeLogin={closeLogin}
        showOptions={showOptions}
        closeOptions={closeOptions}
        options={options}
        setOptions={setOptions}
        login={login}
      />
    </div>
  );
}
