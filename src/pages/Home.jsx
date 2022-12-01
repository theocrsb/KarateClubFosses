import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Home = () => {
 const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
  return (
    <div className="bg-grey">
       <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'cours Karaté jeudi', date: '2022-12-01' },
          { title: 'cours Karaté lundi', date: '2022-12-05' },
        ]}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Home;
