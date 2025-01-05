import "../styles/EducationItem.css";

export default function EducationItem({ id, school, degree, year, editing, updateHandler}) {
  function range(min, max) {
    const values = [];
    for (let i = min; i < max; i++) {
      values.push(i);
    }
    return values;
  }

  const onChange = (e) => updateHandler(id, e.target.name, e.target.value);
  const handleSubmit = () => updateHandler(id, "editing", false);

  if (editing) {
    const graduationYears = range(1950, 2030);
    return (
      <div className="input-container">
        <label>
          School <br/>
          <input
            name="school"
            type="text" 
            value={school}
            onChange={onChange}
          />
        </label>
        <label>
          Degree <br/>
          <input
            name="degree"
            type="text" 
            value={degree}
            onChange={onChange}
          />
        </label>
        <label>
          Year Graduated <br/>
          <select name="year" value={year} onChange={onChange}>
            {graduationYears.map((year) => {
              return <option key={`year${year}`} value={year}>{year}</option>
            })}
          </select>
        </label>
        <button type="submit" onClick={handleSubmit}>Save</button>
      </div>
    )
  } else {
    return (
      <div className="education-item">
        <h3 className="school">{school}</h3>
        <span className="degree">{degree}</span>
        <span className="year">{year}</span>
      </div>
    );
  }
}