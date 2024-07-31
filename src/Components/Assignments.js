// src/components/Assignments.js
import React from 'react';

const Assignments = (props) => (
  <div className="card">
    <div className="card-header">
      <h2><em>Assignments</em></h2>
    </div>
    <div className="card-body">
      <div className="row">
        {props.assignments.map((assignment, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{assignment.subject}</h5>
                <p className="card-text"><strong>Due Date:</strong> {assignment.dueDate}</p>
                <p className="card-text"><strong>Year:</strong> {assignment.year}</p>
                <p className="card-text"><strong>Grading:</strong> {assignment.grading}</p>
                <p className="card-text"><strong>Type:</strong> {assignment.assignmentType}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Assignments;
