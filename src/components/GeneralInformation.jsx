import { useState } from "react"
import "../styles/GeneralInformation.css"

export default function GeneralInformation() {
  const [editing, setEditing] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: ""
  })

  function toggleEditing() {
    setEditing(!editing);
  }

  function changeHandler(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }

  function display(editing) {
    if (editing) {
      return (
        <div className="form">
          <h2>General Information</h2>
          <div className="input-container">
            <label>
              Name <br/>
              <input
                name="name"
                type="text"
                value={info.name}
                onChange={changeHandler}
              />
            </label>
            <label>
              Email <br/>
              <input
                name="email"
                type="email"
                value={info.email}
                onChange={changeHandler}
              />
            </label>
            <label>
              Phone Number <br/>
              <input
                name="phone"
                type="tel"
                value={info.phone}
                onChange={changeHandler}
              />
            </label>
            <button className="save-button" onClick={toggleEditing}>Save</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="general-information">
          <h1>{info.name}</h1>
          <button className="edit-button" onClick={toggleEditing}>Edit</button>
          <div className="contact-info">
            <span>{info.email}</span>
            <span>{info.phone}</span>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      {display(editing)}
    </>
  )
}