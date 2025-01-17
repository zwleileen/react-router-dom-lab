import { NavLink } from "react-router-dom";

const MailboxList = (props) => {
    return(
        <>
        <h2>Mailbox List</h2>
        <ul>
            <li><NavLink to={`/mailboxes/${props.mailboxes[0]._id}`}>Mailbox {props.mailboxes[0]._id}</NavLink></li>
        </ul>
        </>
    )
}

export default MailboxList