// components/Dashboard.js
import React from "react";

const DashboardContainer = ({ title, count }) => {
  return (
    <>
    <div style={{
      textAlign: 'center',
      display: 'inline-block',
      margin: '10px',
      height:'200px',
      width: '300px', // Set the width of the container
      padding: '20px', // Set the padding inside the container
      borderRadius: '8px', // Add border-radius for rounded corners
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
      backgroundColor: '#cfe2f3', // Set background color
    }}>
      <h3 style={{ fontWeight:'bolder',textAlign:'center'}}>{title}</h3>
      <p style={{textAlign:"center"}}>{count}</p>
  </div>
    </>
  );
};

export default DashboardContainer;
