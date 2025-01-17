// src/App.jsx

import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <>
    <NavBar/>
    <h1>Mailbox List</h1>
    <Routes>
      <Route path="/" element={<h2>Home</h2>}/>
      <Route path="/mailboxes" element={<MailboxList/>}/>
      <Route path="/new-mailbox" element={<MailboxForm/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails/>}/>
    </Routes>
    </>
  )
};

export default App;
