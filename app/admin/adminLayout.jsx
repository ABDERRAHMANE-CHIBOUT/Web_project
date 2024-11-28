'use client'
import '../../styles/adminLayout.css'
import SideBar from '@/components/SideBar';
import NavBar from '@/components/NavBar';
import { useState } from 'react';

const AdminLayout = ({ children }) => {
  const [open,setOpen] = useState(false)
  const toggleSideBar = () =>{
    setOpen(!open)
  }
  return (
    <div className='adminLayout'>
      <NavBar toggleSideBar={toggleSideBar}/>
      <main className='adminChildren'>{children}</main>
      <SideBar open={open} toggleSideBar={toggleSideBar}/>
    </div>
  );
};

export default AdminLayout;
