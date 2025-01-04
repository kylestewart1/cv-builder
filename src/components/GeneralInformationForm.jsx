
export default function GeneralInformationForm() {
  return (
    <div className="input-container">
      <h2>General Information</h2>
      <label>
        Name <br/>
        <input type="text" />
      </label>
      <label>
        Email <br/>
        <input type="email" />
      </label>
      <label>
        Phone Number <br/>
        <input type="tel" />
      </label>
    </div>
  )
}