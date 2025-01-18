import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewLetter = (props) => {

    const [newLetter, setNewLetter] = useState({
        mailboxId: 1,
        boxOwner: "",
        message: "" 
    });

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addLetter(newLetter);
        setNewLetter({
            mailboxId: "",
            boxOwner: "",
            message: ""
        });
        navigate(`/mailboxes/${newLetter.mailboxId}`)
    }

    const handleChange = ({target}) => {
        const value = target.name === "mailboxId" ? Number(target.value) : target.value; //this ensures that the id is always a number (instead of string) because when we retrieve the id from the html element <option value={box._id}>, the id is returned as a string
        setNewLetter({...newLetter, [target.name]: value})
    } 

    return(
        <>
        <h1>New Letter</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="mailboxId">Select a Mailbox</label>
            <select id="mailboxId" name="mailboxId" value={newLetter.mailboxId} onChange={handleChange}>
            {props.mailboxes.map(box => (
                <option key={box._id} value={box._id}>Mailbox {box._id}</option>
            ))} 
            </select>
            <label htmlFor="boxOwner">Recipient</label>
            <input type="text" id="boxOwner" name="boxOwner" value={newLetter.boxOwner} onChange={handleChange} />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={newLetter.message} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default NewLetter
