import "../styles/GeneralInformation.css"

export default function GeneralInformation() {
  return (
    <fieldset className="general-information">
      <h2>General Information</h2>
      <label>
        Name:  <input type="text" />
      </label>
      <label>
        Email:  <input type="email" />
      </label>
      <label>
        Phone Number:  <input type="tel" />
      </label>
    </fieldset>
  )
}