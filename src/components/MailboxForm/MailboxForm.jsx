import { NavLink } from "react-router-dom";

const MailboxForm = (props) => {
    return(
        <>
        <h2>Mailbox Form</h2>
        <ul>
            <li><NavLink to="/new-mailbox">Mailbox Form</NavLink></li>
        </ul>
        </>
    )
}

export default MailboxForm