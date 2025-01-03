import "../styles/GeneralInformation.css"

export default function GeneralInformation() {
  return (
    <div className="general-information">
      <label>
        Name:  <input type="text" />
      </label>
      <label>
        Email:  <input type="email" />
      </label>
      <label>
        Phone Number:  <input type="tel" />
      </label>
    </div>
  )
}