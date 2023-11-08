"use client"
import React from 'react';
import Link from 'next/link';
import Header from "../components/header";
import DashboardContainer from '../components/dashboardContainer'; 

const Dashboard = () => {

  const loggedInUsers = 10; // Fetch this data from your backend or state
  const booksScanned = 50; // Fetch this data from your backend or state
  const pagesScanned = 500; // Fetch this data from your backend or state
  const authorCount = 30; // Fetch this data from your backend or state
  const publisherCount = 20;


  
  return (
    <>
    <Header/>
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
    <h1 className='custom-heading'>Digitized Work Tracker</h1>
    </div>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <DashboardContainer title="Logged In Users" count={loggedInUsers} />
      <DashboardContainer title="Books Scanned" count={booksScanned} />
      <DashboardContainer title="Pages Scanned" count={pagesScanned} />
      <DashboardContainer title="Author Count" count={authorCount} />
      <DashboardContainer title="Publisher Count" count={publisherCount} />
    </div>
    <div style={{ position: 'fixed', bottom: '100px', left: '120px' }}>
    <Link href="/spreadsheet">
          <button>Go to Spreadsheet</button>
        </Link>
  </div>
    </>
  );
};

export default Dashboard;