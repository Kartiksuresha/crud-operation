import React from 'react';
import './App.css';
import NavBar from './module/layout/navbar';
import Home from './module/users/home';
import About from './module/users/about';
import Contact from './module/users/contacts';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './module/users/pageNotFound';
import AddUsers from './module/users/addusers';
import ViewContact from './module/users/viewContact';
import EditContact from './module/users/editContact';
let App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/users/addUsers" element={<AddUsers />} />
        <Route path="/users/viewcontact/:contactid" element={<ViewContact />} />
        <Route path="/users/editcontact/:contactid" element={<EditContact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>

  );
}

export default App;
