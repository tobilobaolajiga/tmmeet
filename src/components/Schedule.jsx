import { useState } from 'react';
import ProfileNav from './ProfileNav';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function Schedule({ schedule, showScheduler, scheduler }) {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: 'Event 1',
      start: new Date(2024, 3, 1),
      end: new Date(2024, 3, 7),
    },
  ];

  return (
    <div>
      {/* {schedule && ( */}
      <div className="bg-white">
        <div>
          <ProfileNav />

          <div
            className="border-b flex gap-4 items-center px-[40px] py-[14px]"
            onClick={showScheduler}
          >
            <img src="/arrowLeft.svg" alt="" width={14} />
            <p className="font-semibold text-[#1A1A1A] opacity-90 text-base">
              Schedule Meeting
            </p>
          </div>
          <div className="flex px-[40px]">
            <div id=" ">
              <div className="">
                <p className="pt-4">Time</p>
                <p className="py-4 font-bold text-[18px]">March 2024</p>
              </div>
              <button className="flex gap-4 bg-[#36AAD9] items-center py-[12px] px-10 rounded-md text-white text-sm">
                <img src="/add.svg" alt="" width={16} />
                Schedule Meeting
              </button>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 300, width: 250 }}
                toolbar={false}
              />
            </div>
            <div className="flex-basis">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, width: 1050 }}
              />
            </div>
          </div>
        </div>
        {/* <Scheduler scheduler={scheduler} /> */}
      </div>
      {/* )} */}
    </div>
  );
}
