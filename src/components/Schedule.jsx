import PropTypes from 'prop-types';
import './schedule.css';
import '/scrollbar.css';
import { useState, useEffect } from 'react';
import ProfileNav from './ProfileNav';
import { Link } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import Scheduler from './Scheduler';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Scheduled from './Scheduled';
import axios from 'axios';
import toast from 'react-hot-toast';
import moment from 'moment-timezone';
import 'moment/locale/en-gb';
import ScheduledMeeting from './ScheduledMeetings';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import Products from './Products';

export default function Schedule({
  schedule,
  userId,
  showSchedule,
  profileDrop,
  showProfDrop,
  products,
  showProducts,
}) {
  const localizer = momentLocalizer(moment);
  moment.tz.setDefault('Africa/Lagos');
  const [showScheduledMeet, setShowScheduledMeet] = useState(false);
  // const colors = [
  //   '#FFA500',
  //   '#FFFF00',
  //   '#ff0000',
  //   '#00ff00',
  //   '#0000ff',
  //   '#000080',
  //   '#FF00FF',
  // ];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [selectedColor, setSelectedColor] = useState('#FFA500');
  const handleColorSelect = () => {
    setSelectedColor(getRandomColor);
  };
  const hrs = Array.from({ length: 24 }, (_, index) => index);
  const hours = hrs.map((number) => number.toString().padStart(2, '0'));

  const min = Array.from({ length: 60 }, (_, index) => index);
  const minutes = min.map((number) => number.toString().padStart(2, '0'));

  const apm = ['AM', 'PM'];

  const [scheduler, setScheduler] = useState(false);
  const showScheduler = () => {
    setScheduler(!scheduler);
    handleColorSelect();
  };

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [currentMonth, setCurrentMonth] = useState('');
  useEffect(() => {
    const updateMonth = () => {
      const date = new Date();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      setCurrentMonth(`${month} ${year}`);
    };
    updateMonth();
    const intervalid = setInterval(updateMonth, 1000);
    return () => clearInterval(intervalid);
  }, []);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // console.log(
    //   selectedDate.getFullYear(),
    //   selectedDate.getMonth(),
    //   selectedDate.getDate()
    // );
  };
  useEffect(() => {
    // Set the selected date to the current date when the component mounts
    setSelectedDate(new Date());
  }, []);

  const [startHour, setStartHour] = useState('12');
  const [startMinutes, setStartMinutes] = useState('00');
  const [startPeriod, setStartPeriod] = useState('PM');
  const [endHour, setEndHour] = useState('12');
  const [endMinutes, setEndMinutes] = useState('00');
  const [endPeriod, setEndPeriod] = useState('PM');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const startHourChange = (e) => {
    setStartHour(e.target.value);
  };
  const startMinutesChange = (e) => {
    setStartMinutes(e.target.value);
  };
  const startPeriodChange = (e) => {
    setStartPeriod(e.target.value);
  };
  const endHourChange = (e) => {
    setEndHour(e.target.value);
  };
  const endMinutesChange = (e) => {
    setEndMinutes(e.target.value);
  };
  const endPeriodChange = (e) => {
    setEndPeriod(e.target.value);
  };
  const [repeatBtn, setRepeatBtn] = useState('Never');
  const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   events;
  // }, []);
  const addEvent = (newEvent) => {
    console.log('event');
    console.log(events);
    console.log([...events, newEvent]);

    setEvents([...events, newEvent]);
  };
  const [lastId, setLastId] = useState(0);

  const handleAddEvent = () => {
    const newId = lastId + 1;
    const newEvent = {
      id: newId,
      title: title,
      start: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        startHour,
        startMinutes,
        0
      ),
      end: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        endHour,
        endMinutes,
        0
      ),
      backgroundColor: selectedColor,
    };
    // console.log(newEvent);
    addEvent(newEvent);
    setLastId(newId);
    console.log(newEvent.backgroundColor);
  };

  useEffect(() => {
    localStorage.setItem('calendar-events', JSON.stringify(events));
  }, [events]);
  const [titles, setTitles] = useState([]);
  const addTitles = () => {
    setTitles([...titles, title]);
  };
  const [description, setDescription] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [scheduled, setScheduled] = useState(false);
  const showScheduled = () => {
    setScheduled(!scheduled);
    setDescription(false);
    setReminder(false);
    setScheduler(false);
    handleAddEvent(
      title,
      selectedDate,
      startHour,
      endHour,
      startMinutes,
      endMinutes,
      selectedColor
    );
    addTitles(title, selectedColor);
  };

  const eventPropGetter = (event) => {
    return {
      style: {
        backgroundColor: event.backgroundColor,
        border: 'none',
        color: 'white',
      },
      // style.onClick = () => {

      // }
    };
  };

  const CustomEventContent = (event) => (
    <div>
      <strong>{event.title}</strong>
      <br />
      <span>
        {moment(event.start).format('h:mm A')} -{' '}
        {moment(event.end).format('h:mm A')}{' '}
      </span>
    </div>
  );
  const token = localStorage.getItem('userToken');
  const [meetings, setMeetings] = useState([]);

  //

  const allScheduledMeetings = async () => {
    try {
      const response = await axios.get(
        'https://api-meet.tm-dev.xyz/api/v1/meeting/all-schedule-meeting',

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const meet = response?.data?.data;
      const eventsMeet = [];
      const allMeetings = meet.map((meeting) => {
        const meetingDate = new Date(meeting.meetingTime);
        const endTime = new Date(meeting.endTime);
        const newEvent = {
          id: meeting.meetingId,
          title: meeting.meetingName,
          start: new Date(
            meetingDate.getFullYear(),
            meetingDate.getMonth(),
            meetingDate.getDate(),
            meetingDate.getHours(),
            meetingDate.getMinutes(),
            0
          ),
          end: new Date(
            meetingDate.getFullYear(),
            meetingDate.getMonth(),
            meetingDate.getDate(),
            meetingDate.getHours() + 1,
            meetingDate.getMinutes(),
            0
          ),
          backgroundColor: meeting.color,
        };
        eventsMeet.push(newEvent);
        // setEvents([...events, newEvent]);
        return [meeting.meetingName, meeting.meetingId];
      });
      setEvents(eventsMeet);
      setMeetings(allMeetings);
    } catch (error) {
      // console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    allScheduledMeetings();
  }, []);

  //

  const handleDeleteEvent = async (eventId) => {
    try {
      console.log({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await axios.post(
        `https://api-meet.tm-dev.xyz/api/v1/meeting/delete/${eventId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response;
      console.log(data);

      setEvents(events.filter((event) => event.id !== eventId));
      handleDeleteTitle();
      setTitle('');

      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      // console.log(error.response.data.status);
      console.log(error.response.data.message);
    }
    setShowScheduledMeet(false);
  };

  const getDetails = async (eventId) => {
    try {
      const response = await axios.get(
        `https://api-meet.tm-dev.xyz/api/v1/meeting/particular/${eventId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem('meetingRef', response?.data?.data?.meetingId);
      localStorage.setItem(
        'meetingDetails',
        JSON.stringify(response?.data?.data)
      );
      console.log(localStorage.getItem('meetingDetails'));
    } catch (error) {
      console.log(error);
      // console.log(error.response.data.status);
      console.log(error.message);
    }
  };
  const handleDeleteTitle = (index) => {
    const updatedTitles = [...titles];
    updatedTitles.splice(index, 1);
    setTitles(updatedTitles);
  };

  const [img, setImg] = useState('');
  const showImg = () => {
    setImg('/cross.svg');
  };
  const hideImg = () => {
    setImg('');
  };

  const showMeeting = (eventId) => {
    getDetails(eventId);
    setShowScheduledMeet(!showScheduledMeet);
  };
  const closeMeeting = () => {
    setShowScheduledMeet(false);
  };
  return (
    <div className="overflow-x-hidden">
      <div className="bg-white ">
        <div>
          <ProfileNav
            profileDrop={profileDrop}
            showProfDrop={showProfDrop}
            showProducts={showProducts}
            products={products}
          />
          <Link to="/login">
            <div className="flex gap-4 items-center px-[40px] py-[14px]">
              <img src="/arrowLeft.svg" alt="" width={14} />
              <p className="font-semibold text-[#1A1A1A] opacity-90 text-[14px]">
                Schedule Meeting
              </p>
            </div>
          </Link>
          <div className="flex px-[40px]">
            <div id=" " className=" w-1/5">
              <div className="border px-4 shadow-md rounded-md font-inter overflow-y-scroll h-[462px] mt-[36px] overflow-x-hidden scrollbar-webkit">
                <div className="px-2">
                  <p className="pt-4 text-[12px] font-semibold">
                    {currentTime.toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </p>
                  <p className="py-2 font-semibold text-[14px]">
                    {currentTime.toLocaleDateString('en-US', options)}
                  </p>
                </div>

                <button
                  className="flex gap-4 bg-[#36AAD9] items-center py-[12px] px-10 rounded-md text-white text-[12px] mt-4"
                  onClick={showScheduler}
                >
                  <img src="/add.svg" alt="" width={14} />
                  Schedule Meeting
                </button>

                <div className="">
                  <p
                    className="text-[#98A2B3] text-[12px] pt-2 mb-4 mt-6"
                    onClick={allScheduledMeetings}
                  >
                    Scheduled meetings
                  </p>
                  <ul className="text-[11px] text-[#344054] tracking-tight">
                    {events.map((event, index) => (
                      <li
                        key={event.id}
                        className="mb-4 flex items-center gap-2 font-DMSans font-medium text-[#344054] cursor-pointer "
                      >
                        {' '}
                        <span
                          alt=""
                          style={{ backgroundColor: event.backgroundColor }}
                          className=" w-[15px] h-[15px] border rounded-full"
                        ></span>
                        <p
                          className="flex items-center-justify-between w-full relative"
                          onClick={() => showMeeting(event.id)}
                        >
                          {' '}
                          {event.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="scrollbar-webkit rounded-md">
              <Calendar
                className="w-[1020px] h-screen -mr-[40px] ml-[20px]"
                localizer={localizer}
                defaultView={'week'}
                selectable
                defaultDate={new Date()}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventPropGetter={eventPropGetter}
                eventContent={({ event }) => (
                  <CustomEventContent event={event} />
                )}
              />
            </div>
          </div>
        </div>
        <Scheduler
          repeatBtn={repeatBtn}
          setRepeatBtn={setRepeatBtn}
          scheduler={scheduler}
          showScheduler={showScheduler}
          setScheduler={setScheduler}
          startHour={startHour}
          startMinutes={startMinutes}
          startPeriod={startPeriod}
          endHour={endHour}
          endMinutes={endMinutes}
          endPeriod={endPeriod}
          desc={desc}
          title={title}
          startHourChange={startHourChange}
          startMinutesChange={startMinutesChange}
          startPeriodChange={startPeriodChange}
          endHourChange={endHourChange}
          endMinutesChange={endMinutesChange}
          endPeriodChange={endPeriodChange}
          setTitle={setTitle}
          setDesc={setDesc}
          // colors={colors}
          selectedColor={selectedColor}
          handleColorSelect={handleColorSelect}
          setSelectedColor={setSelectedColor}
          hours={hours}
          setStartHour={setStartHour}
          setStartMinutes={setStartMinutes}
          minutes={minutes}
          apm={apm}
          setEndHour={setEndHour}
          setEndMinutes={setEndMinutes}
          setEndPeriod={setEndPeriod}
          setStartPeriod={setStartPeriod}
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          handleAddEvent={handleAddEvent}
          addTitles={addTitles}
          userId={userId}
          showScheduled={showScheduled}
          description={description}
          setDescription={setDescription}
          reminder={reminder}
          setReminder={setReminder}
          scheduled={scheduled}
          setScheduled={setScheduled}
        />
        <ProfileDropdown
          profileDrop={profileDrop}
          showProfDrop={showProfDrop}
        />
        <Scheduled
          scheduled={scheduled}
          showScheduled={showScheduled}
          selectedDate={selectedDate}
          title={title}
          setTitle={setTitle}
          startHour={startHour}
          setStartHour={setStartHour}
          startMinutes={startMinutes}
          setStartMinutes={setStartMinutes}
          startPeriod={startPeriod}
          setStartPeriod={setStartPeriod}
          endHour={endHour}
          setEndHour={setEndHour}
          endMinutes={endMinutes}
          setEndMinutes={setEndMinutes}
          endPeriod={endPeriod}
          setEndPeriod={setEndPeriod}
          desc={desc}
          repeatBtn={repeatBtn}
          selectedColor={selectedColor}
          // colors={colors}
          onSelect={handleColorSelect}
          setSelectedColor={setSelectedColor}
          setScheduled={setScheduled}
          addTitles={addTitles}
          handleAddEvent={handleAddEvent}
        />

        {showScheduledMeet && (
          <ScheduledMeeting
            closeMeeting={closeMeeting}
            repeatBtn={repeatBtn}
            handleDeleteEvent={handleDeleteEvent}
            selectedColor={selectedColor}
          />
        )}
      </div>
    </div>
  );
}
Schedule.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};
