// src/App.jsx

import { useState } from "react";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from 'react-router';
import NewLetter from "./components/NewLetter/NewLetter";

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

  const [letters, setLetters] = useState([]);
  
  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]) 
  }
 
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>}/>
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>}/>
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
      <Route path="/new-letter" element={<NewLetter mailboxes={mailboxes} letters={letters} addLetter={addLetter}/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>}/>
    </Routes>
    </>
  )
};

export default App;
