// src/App.jsx

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
    </Routes>
    </>
  )
};

export default App;
