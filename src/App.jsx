// src/App.jsx

import { useState } from "react";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from 'react-router';

const App = () => {

  const [mailboxes, setMailboxes] = useState([
    {
    _id: 1,
    boxSize: 'Small',
    boxOwner: 'Alex',
    },
  ]);

  const addBox = (formData) => {
    formData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, formData])
  }
 
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>}/>
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>}/>
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>}/>
    </Routes>
    </>
  )
};

export default App;
