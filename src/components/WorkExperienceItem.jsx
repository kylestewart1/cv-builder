export default function WorkExperienceItem() {
  return (
    <div className="work-experience-item">
      <label>
        Organization <br/>
        <input type="text" />
      </label>
      <label>
        Job Title <br/>
        <input type="text" />
      </label>
      <label>
        Description <br/>
        <textarea></textarea>
      </label>
      <label>
        Starting Date <br/>
        <input type="date" />
      </label>
      <label>
        Ending Date <br/>
        <input type="date" />
      </label>
    </div>
  )
}