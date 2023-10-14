import { useState } from "react";

function ExperienceInfo() {
    const [experienceInfo, setExperienceInfo] = useState({companyName: 'Somewhere County', position: 'PC Tech', 
    jobDescription: 'this is a job description', dateStart: '2024', dateEnd: 'date' })
    const [showForm, setShowForm] = useState(false)

    const handleCompanyChange = (companyName) => {
        const newExperienceInfo = {...experienceInfo, companyName: companyName}
        setExperienceInfo(newExperienceInfo)
    }
    const handlePositionChange = (position) => {
        const newExperienceInfo = {...experienceInfo, position: position}
        setExperienceInfo(newExperienceInfo)
    }
    const handleJobDescriptionChange = (jobDescription) => {
        const newExperienceInfo = {...experienceInfo, jobDescription: jobDescription}
        setExperienceInfo(newExperienceInfo)
    }
    const handleStartChange = (start) => {
        const newExperienceInfo = {...experienceInfo, dateStart: start}
        setExperienceInfo(newExperienceInfo)
    }
    const handleEndChange = (end) => {
        const newExperienceInfo = {...experienceInfo, dateEnd: end}
        setExperienceInfo(newExperienceInfo)
    }

    const onButtonClick = (bool) => {
        setShowForm(bool)
    }

    if (showForm === false) {
        return (
            <div className="section">
                <h2>Experience Info</h2>
                <p>{experienceInfo.companyName}</p>
                <p>{experienceInfo.position}</p>
                <p>{experienceInfo.jobDescription}</p>
                <p>{experienceInfo.dateStart}</p>
                <p>{experienceInfo.dateEnd}</p>
                <button onClick={() => onButtonClick(true)}>Edit</button>

            </div>
        )
    }

    else{
        return (
            <div className="section">
                <h2>Edit Experience</h2>
                <input className="field" type="text" value = {experienceInfo.companyName} onChange={e => handleCompanyChange(e.target.value) }/>
                <br />
                <input className="field" type="text" value = {experienceInfo.position} onChange={e => handlePositionChange(e.target.value)}/>
                <br />
                <input className="field" type="text" value = {experienceInfo.jobDescription} onChange={e => handleJobDescriptionChange(e.target.value)}/>
                <br />
                <input className="field" type="date" name="" id="" onChange={e => handleStartChange(e.target.value)}/>
                <br></br>
                <input className="field" type="date" name="" id="" onChange={e => handleEndChange(e.target.value)}/>
                <br></br>
                <button onClick={() => onButtonClick(false)} className="field" >Submit</button>
            </div>
        )
    }
}

export default ExperienceInfo