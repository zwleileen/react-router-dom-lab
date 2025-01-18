import { NavLink } from "react-router-dom";

const MailboxList = (props) => {
    return(
        <>
        <h1>Mailbox List</h1>
            <ul>
            {props.mailboxes.map((currentMailbox) => (
            <li key={currentMailbox._id} className="mail-box"><NavLink to={`/mailboxes/${currentMailbox._id}`}>Mailbox {currentMailbox._id}</NavLink></li>
            ))}
            </ul>
        </>
    )
}

export default MailboxList