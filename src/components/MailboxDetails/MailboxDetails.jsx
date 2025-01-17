import { NavLink } from "react-router-dom";

const MailboxDetails = (props) => {
    return(
        <>
        <h2>Mailbox Details</h2>
        <ul>
            <li><NavLink to="/mailboxes/:mailboxId">Mailbox Details</NavLink></li>
        </ul>
        </>
    )
}

export default MailboxDetails