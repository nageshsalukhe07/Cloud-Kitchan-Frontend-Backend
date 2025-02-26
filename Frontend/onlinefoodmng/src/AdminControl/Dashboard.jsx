import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Layout/Header';

export default function Dashboard() {
    
    let [username,setUserName]=useState('');
    useEffect(()=>{

        const storedusername=localStorage.getItem('username')
        setUserName(storedusername);
    })
  return (
    <div>
        <Header></Header>
        <br /><br />
        <h1>welcome,{username}</h1>
    </div>
  )
}
