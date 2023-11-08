"use client"
import React, { useState } from 'react';
import Header from "../components/header";


const Profile = () => {
  const booksScanned = 50;
  const booksScannedtoday = 20;
   const pagesScanned = 500; 
  const pagesScannedtoday = 230;

  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('Padma Priya');
  const [email, setEmail] = useState('priya@example.com');

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    // Save the edited data to your backend or state here
  };
 
  return (
    <>
      <Header/>
      <div style={{ marginTop: '100px',marginLeft:'60px', 
            display: 'flex',
            alignItems: 'center',
            }}>

        <div style={{ // Set the width of the container
            padding: '150px', // Set the padding inside the container
            borderRadius: '8px', // Add border-radius for rounded corners
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
            backgroundColor:'#cfe2f3', 
             zIndex: 0,
            }}>
              
        <form>   
        <div style={{ marginTop:'10px', marginBottom:'80px',zIndex: 1 }}>
        <img src="/profile-logo.png" alt="Profile Logo" width="200px" height="250px" />
        </div>
          <div  style={{ marginBottom: '20px' }}>
            <label  style={{ marginRight: '10px' }}>Name: </label>
            {isEditMode ? (
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            ) : (
              <span>{name}</span>
            )}
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ marginRight: '10px' }}>Email: </label>
            {isEditMode ? (
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            ) : (
              <span>{email}</span>
            )}
          </div>
          {isEditMode ? (
            <button  onClick={handleSaveClick}>Save</button>
          ) : (
            <button  onClick={handleEditClick}>Edit</button>
          )}
        </form>
       </div>
        <div style={{ marginLeft: '400px',display:'flex',direction:'row' }}>
          <div style={{    
            textAlign: 'center',
            display: 'inline-block',
            height: '200px',
            width: '300px', // Set the width of the container
            padding: '20px', // Set the padding inside the container
            borderRadius: '8px', // Add border-radius for rounded corners
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
            backgroundColor: '#1e90ff',
            color:'white',
            }}>
            <h3 style={{color:'white',fontWeight:'bolder',marginBottom:'30px',marginTop:'10px'}}>Books Scanned</h3>
            <p><strong>Total Count:</strong> {booksScanned}</p>
            <p><strong>Today Count:</strong> {booksScannedtoday}</p>
          </div>
          <div style={{
              textAlign: 'center',
              display: 'inline-block',
              marginLeft:'40px',
              height: '200px',
              width: '300px', // Set the width of the container
              padding: '20px', // Set the padding inside the container
              borderRadius: '8px', // Add border-radius for rounded corners
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
              backgroundColor: '#1e90ff',
              color:'white',
          }}>
            <h3 style={{color:'white',fontWeight:'bolder',marginBottom:'30px',marginTop:'10px'}}>Pages Scanned</h3>
            <p><strong>Total Count:</strong> {pagesScanned}</p>
            <p><strong>Today Count:</strong> {pagesScannedtoday}</p>
          </div>
        </div>
        </div>
    </>
  );
};

export default Profile;
