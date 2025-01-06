import EducationItem from "./EducationItem";
import { useState } from "react";
import "../styles/Education.css";

export default function Education() {
  const [ education, setEducation ] = useState([]);

  function handleAddButton() {
    const newItem = {
      id: crypto.randomUUID(), 
      editing: true,
      school: "",
      degree: "",
      year: 2025
    }
    setEducation([...education, newItem])
  }

  function handleItemUpdate(id, propertyName, value) {
    setEducation(education.map(item => {
      if (item.id === id) {
        return {
          ...item,
          [propertyName]: value
        };
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(id) {
    setEducation(education.filter(item => item.id !== id));
  }



  const listItems = education.map(educationItem => {
    return (
      <li key={educationItem.id}>
        {<EducationItem
            id={educationItem.id} 
            school={educationItem.school}
            degree={educationItem.degree}
            year={educationItem.year}
            editing={educationItem.editing}
            updateHandler={handleItemUpdate}
          />} 
        {educationItem.editing ? null
          : <>
              <button className="edit-button" onClick={() => handleItemUpdate(educationItem.id, "editing", true)}>Edit</button>
            </>
        }
        {<button className="delete-button" onClick={() => handleDeleteItem(educationItem.id)}>Delete</button>}
      </li>
    )
  });
  return (
    <div className="education">
      <h2>Education</h2>
      <ul>
        {listItems}
      </ul>
      <button onClick={handleAddButton}>Add Education</button>
    </div>
  )
}