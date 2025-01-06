export default function WorkExperienceItem({ id, organization, jobTitle, description, startDate, endDate, editing, updateHandler}) {

  const onChange = (e) => updateHandler(id, e.target.name, e.target.value);
  const handleSubmit = () => updateHandler(id, "editing", false);

  if (editing) {
    return (
      <div className="input-container">
        <label>
          Job Title <br/>
          <input 
            name="jobTitle"
            type="text"
            value={jobTitle} 
            onChange={onChange}
          />
        </label>
        <label>
          Organization <br/>
          <input 
            name="organization"
            type="text"
            value={organization} 
            onChange={onChange}
          />
        </label>
        <label>
          Description <br/>
          <textarea
            name="description"
            type="text"
            value={description} 
            onChange={onChange}>
          </textarea>
        </label>
        <label>
          Starting Date <br/>
          <input 
            name="startDate"
            type="text"
            value={startDate} 
            onChange={onChange}
          />
        </label>
        <label>
          Ending Date <br/>
          <input 
            name="endDate"
            type="text"
            value={endDate} 
            onChange={onChange}
          />
        </label>
        <button className="save-button" onClick={handleSubmit}>Save</button>
      </div>
    )
  } else {
    return (
      <div className="work-experience-item">
        <h3 className="job-title">{jobTitle}</h3>
        <span className="organization">{organization}</span>
        <p className="job-description">{description}</p>
        <span className="start-date">{startDate}</span>
        <span className="end-date">{endDate}</span>
      </div>
    )
  }
}