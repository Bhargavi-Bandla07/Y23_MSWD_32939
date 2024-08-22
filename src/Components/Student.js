// src/Components/Student.js
import React from 'react';
import AttendanceButton from './AttendanceButton'; // Ensure the path is correct

const Student = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2><em>Student</em></h2>
            </div>
            <div className="card-body">
                <div className="row">
                    {props.Students.map((student, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{student.name}</h5>
                                    <p className="card-text"><strong>ID:</strong> {student.id}</p>
                                    <p className="card-text"><strong>Year:</strong> {student.year}</p>
                                    <p className="card-text"><strong>Branch:</strong> {student.branch}</p>
                                    <AttendanceButton />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Student;
