// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Faculty from './Components/Faculty';
import User from './Components/User';
import Timetable from './Components/Timetable';
import Assignments from './Components/Assignments';

function App() {
  const [timetable] = useState([
    { date: '2024-07-27', hours: '09:00 - 10:00', subject: 'Mathematics', room: '101' },
    { date: '2024-07-27', hours: '10:00 - 11:00', subject: 'Physics', room: '102' },
    { date: '2024-07-27', hours: '11:00 - 12:00', subject: 'Chemistry', room: '103' }
  ]);

  const [assignments] = useState([
    { subject: 'Mathematics', dueDate: '2024-08-01', year: '2024', grading: 'A', assignmentType: 'Homework' },
    { subject: 'Physics', dueDate: '2024-08-02', year: '2024', grading: 'B', assignmentType: 'Lab Report' },
    { subject: 'Chemistry', dueDate: '2024-08-03', year: '2024', grading: 'A', assignmentType: 'Project' }
  ]);

  return (
    <div className="App">
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Faculty />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6" style={{ paddingTop: '70px' }}>
            <Timetable timetable={timetable} />
          </div>
          <div className="col-md-6" style={{ paddingTop: '70px' }}>
            <Assignments assignments={assignments} />
          </div>
          <div className="col-md-6">
            <User name="Bhargavi"/>   {/*it is using props in user.js*/}
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}


export default App;





