import "../styles/Education.css";

function range(min, max) {
  const values = [];
  for (let i = min; i < max; i++) {
    values.push(i);
  }
  return values;
}

export default function Education() {
  const graduationYears = range(1950, 2030);

  return (
    <fieldset className="education">
      <h2>Education</h2>
      <label>
        School <br/>
        <input type="text" />
      </label>
      <label>
        Degree <br/>
        <input type="text" />
      </label>
      <label>
        Year Graduated <br/>
        <select>
          {graduationYears.map((year) => {
            return <option key={`year${year}`} value={year}>{year}</option>
          })}
        </select>
      </label>
    </fieldset>
  )
}