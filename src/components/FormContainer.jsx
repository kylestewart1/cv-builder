import GeneralInformationForm from "./GeneralInformationForm";
import EducationForm from "./EducationForm";
import WorkExperienceForm from "./WorkExperienceForm";

export default function FormContainer() {
  return (
    <div className="form-container">
      <GeneralInformationForm />
      <EducationForm />
      <WorkExperienceForm />
      <button type="submit">Create CV</button>
    </div>
  )
}