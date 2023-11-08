"use client"
import React from 'react';
import Login from './login/page';
export default function Home() {
  return (
    <div>
    
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div>  
         <Login/>
        </div>
      </main>

    </div>
  )
}
