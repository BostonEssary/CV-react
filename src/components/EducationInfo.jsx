import { useState } from "react";

function EducationInfo() {
    const [educationInfo, setEducationInfo] = useState({schoolName: 'Hard Knocks Uni', study: 'Computers Degree', graduationYear: '2024' })
    const [showForm, setShowForm] = useState(false)

    const handleNameChange = (schoolName) => {
        const newEducationInfo = {...educationInfo, schoolName: schoolName}
        setEducationInfo(newEducationInfo)
    }
    const handleStudyChange = (study) => {
        const newEducationInfo = {...educationInfo, study: study}
        setEducationInfo(newEducationInfo)
    }
    const handleGraduationChange = (graduationYear) => {
        const newEducationInfo = {...educationInfo, graduationYear: graduationYear}
        setEducationInfo(newEducationInfo)
    }

    const onButtonClick = (bool) => {
        setShowForm(bool)
    }

    if (showForm === false) {
        return (
            <div className="section">
                <h2>Education Info</h2>
                <p>{educationInfo.schoolName}</p>
                <p>{educationInfo.study}</p>
                <p>{educationInfo.graduationYear}</p>
                <button onClick={() => onButtonClick(true)}>Edit</button>

            </div>
        )
    }

    else{
        return (
            <div className="section">
                <h2>Edit Education Info</h2>
                <input className="field" type="text" value = {educationInfo.schoolName} onChange={e => handleNameChange(e.target.value) }/>
                <br />
                <input className="field" type="text" onChange={e => handleStudyChange(e.target.value)}/>
                <br />
                <input className="field" type="text" onChange={e => handleGraduationChange(e.target.value)}/>
                <br></br>
                <button onClick={() => onButtonClick(false)} className="field" >Submit</button>
            </div>
        )
    }
}

export default EducationInfo