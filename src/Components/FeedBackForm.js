import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    facultyName: '',
    communicationSkills: '',
    remarks: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      courseName: '',
      facultyName: '',
      communicationSkills: '',
      remarks: '',
    });
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fa',
    flexDirection: 'column',
    padding: '20px',
  };

  const formStyle = {
    width: '900px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333',
  };

  const labelStyle = {
    fontWeight: '600',
    fontSize: '14px',
    color: '#333',
    marginBottom: '5px',
    display: 'block',
    textAlign: 'left',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  };

  const selectStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const dataStyle = {
    marginTop: '20px',
    width: '900px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Feedback Form</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="courseName"><strong>Course Name</strong></label>
        <input 
          style={inputStyle} 
          type="text" 
          id="courseName" 
          name="courseName" 
          value={formData.courseName} 
          onChange={handleChange} 
        />

        <label style={labelStyle} htmlFor="facultyName"><strong>Faculty Name</strong></label>
        <input 
          style={inputStyle} 
          type="text" 
          id="facultyName" 
          name="facultyName" 
          value={formData.facultyName} 
          onChange={handleChange} 
        />

        <label style={labelStyle} htmlFor="communicationSkills"><strong>Communication Skills</strong></label>
        <select 
          style={selectStyle} 
          id="communicationSkills"           name="communicationSkills" 
          value={formData.communicationSkills} 
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="worst">Worst</option>
        </select>

        <label style={labelStyle} htmlFor="remarks"><strong>Remarks</strong></label>
        <input 
          style={inputStyle} 
          type="text" 
          id="remarks" 
          name="remarks" 
          value={formData.remarks} 
          onChange={handleChange} 
        />

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>

      {submittedData && (
        <div style={dataStyle}>
          <h2>Submitted Feedback</h2>
          <p><strong>Course Name:</strong> {submittedData.courseName}</p>
          <p><strong>Faculty Name:</strong> {submittedData.facultyName}</p>
          <p><strong>Communication Skills:</strong> {submittedData.communicationSkills}</p>
          <p><strong>Remarks:</strong> {submittedData.remarks}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
