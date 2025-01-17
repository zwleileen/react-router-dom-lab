import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => (mailbox._id === Number(mailboxId))); 

    if (!selectedBox) {
        return <h2>Mailbox not found!</h2>
    }

    return(
        <>
        <h2>{selectedBox.boxOwner}</h2>
        <dl>
            <div className="detail-row">
            <dt>Box Owner:</dt>
            <dd>{selectedBox.boxOwner}</dd>
            </div>
            <div className="detail-row">
            <dt>Box Size:</dt>
            <dd>{selectedBox.boxSize}</dd>
            </div>
        </dl>
        </>
    )
}

export default MailboxDetails