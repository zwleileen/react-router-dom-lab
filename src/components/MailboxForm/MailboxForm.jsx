import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {

    const [formData, setFormData] = useState([]);

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        setFormData([]);
        navigate('/mailboxes')
    }

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

    return(
        <>
        <h2>Mailbox Form</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxOwner">Enter a Box Owner:</label>
            <input type="text" id="boxOwner" name="boxOwner" value={formData.boxOwner} onChange={handleChange} />
            <label htmlFor="boxSize">Select a Box Size:</label>
            <select id="boxSize" name="boxSize" value={formData.boxSize} onChange={handleChange}><option value="Small">Small</option><option value="Medium">Medium</option><option value="Large">Large</option></select>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default MailboxForm