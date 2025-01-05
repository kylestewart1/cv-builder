import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

export default function Container() {
  return (
    <div className="container">
      <GeneralInformation />
      <Education />
      <WorkExperience />
      <button type="submit">Create CV</button>
    </div>
  )
}