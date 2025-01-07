import { useState } from "react"
import WorkExperienceItem from "./WorkExperienceItem";
import "../styles/WorkExperience.css"

export default function WorkExperience() {
  const [experience, setExperience] = useState([]);

  function handleAddButton() {
    const newItem = {
      id: crypto.randomUUID(), 
      editing: true,
      organization: "",
      jobTitle: "",
      description: "",
      startDate: "",
      endDate: ""
    }
    setExperience([...experience, newItem])
  }

  function handleItemUpdate(id, propertyName, value) {
    setExperience(experience.map(item => {
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
    setExperience(experience.filter(item => item.id !== id));
  }


  const listItems = experience.map(experienceItem => {
    return (
      <li key={experienceItem.id} >
        {<WorkExperienceItem
            id={experienceItem.id} 
            organization={experienceItem.organization}
            jobTitle={experienceItem.jobTitle}
            description={experienceItem.description}
            startDate={experienceItem.startDate}
            endDate={experienceItem.endDate}
            editing={experienceItem.editing}
            updateHandler={handleItemUpdate}
          />}
          {experienceItem.editing ? null
          : <>
              <button className="edit-button" onClick={() => handleItemUpdate(experienceItem.id, "editing", true)}>Edit</button>
            </>
        }
        <button className="delete-button" onClick={() => handleDeleteItem(experienceItem.id)}>Delete</button>
      </li>
    )
  });
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      <ul>
        {listItems}
      </ul>
      <button onClick={handleAddButton}>Add Experience</button>
    </div>
  )
}