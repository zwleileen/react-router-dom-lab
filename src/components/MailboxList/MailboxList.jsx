import { NavLink } from "react-router-dom";

const MailboxList = (props) => {
    return(
        <>
        <h2>Mailbox List</h2>
        <ul>
            <li><NavLink to="/mailboxes">Mailbox List</NavLink></li>
        </ul>
        </>
    )
}

export default MailboxList