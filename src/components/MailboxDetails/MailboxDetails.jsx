import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {

    const { mailboxId } = useParams(); //gets the "mailboxId" from the url "/mailboxes/:mailboxId" e.g. "/mailboxes/1" would return 1
    const selectedBox = props.mailboxes.find((mailbox) => (mailbox._id === Number(mailboxId))); //.find returns one match
    
    const mailboxLetters = props.letters.filter((letter) => (letter.mailboxId === Number(mailboxId))); //.filter will return all matches e.g. all letters with the same id
    
    if (!selectedBox) {
        return <h2>Mailbox not found!</h2>
    }

    return(
        <>
        <h1>Mailbox {selectedBox._id}</h1>
        <h2>Details</h2>
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
        <h2>Letters</h2>
        {mailboxLetters.length ? (
        <ul>
            {mailboxLetters.map(letter => (
                <li key={letter.mailboxId}>
                  <p>{letter.message}</p>  
                </li>
            ))}
        </ul>
        ): (
            <p>No letter in this mailbox</p>
        )}
        </>
    )
}

export default MailboxDetails