import { useState } from "react";


function PersonalInfo(){
    const [personalInfo, setPersonalInfo] = useState({name: 'Name', email: 'email@email.com', phone: '999-888-777'})
    const [showForm, setShowForm] = useState(false)

    const handleNameChange = (name) => {
        const newPersonalInfo = {...personalInfo, name: name}
        setPersonalInfo(newPersonalInfo)
    }
    const handleEmailChange = (email) => {
        const newPersonalInfo = {...personalInfo, email: email}
        setPersonalInfo(newPersonalInfo)
    }
    const handlePhoneChange = (phone) => {
        const newPersonalInfo = {...personalInfo, phone: phone}
        setPersonalInfo(newPersonalInfo)
    }
    const onButtonClick = (bool) => {
        setShowForm(bool)
    }

    if (showForm === false){
        return (
            <div className='section'>
                <h2>Personal Info</h2>
                <p>Name: {personalInfo.name}</p>
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
                
                <button onClick={() => onButtonClick(true)} className="field">Edit</button>
            </div>
        )
    }
    
    else {
        return (
            <div className="section form">
                <h2>Edit Personal Info</h2>
                <input className='field' type="text" value = {personalInfo.name} onChange={e => handleNameChange(e.target.value) }/>
                <br />
                <input className='field' type="email" onChange={e => handleEmailChange(e.target.value)}/>
                <br />
                <input className='field' type="text" onChange={e => handlePhoneChange(e.target.value)}/>
                <br></br>
                <button onClick={() => onButtonClick(false)} className="field">Submit</button>
            </div>
        )
    }     
    
}

export default PersonalInfo