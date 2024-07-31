import React from 'react'

const Faculty = () => {
  return (
    <div className='faculty-container'>
      <div className='faculty-item'>
        <ul>
          <li>
            <h3><em>Faculty-1</em></h3>
            <strong>ID</strong>: 001,<br />
           <strong> Name</strong>: Dr. Murali Mohan<br />
           <strong> Designation</strong>: Professor<br />
           <strong> Department</strong>: Computer Science<br /><br />
          </li>
        </ul>
      </div>
      <div className='faculty-item'>
        <ul>
          <li>
            <h3><em>Faculty-2</em></h3>
            <strong>ID</strong>: 002,<br />
           <strong>Name</strong>: Dr. Venkata Suresh<br />
            <strong>Designation</strong>: Associate Professor<br />
            <strong>Department</strong>: Mathematics<br /><br />
          </li>
        </ul>
      </div>
      <div className='faculty-item'>
        <ul>
          <li>
          <h3><em>Faculty-3</em></h3>
            <strong>ID</strong>: 003,<br />
           <strong> Name</strong>: Dr. Karthik<br />
           <strong> Designation</strong>: Assistant Professor<br />
            <strong>Department</strong>: Physics<br />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Faculty;

