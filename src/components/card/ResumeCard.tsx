import React from "react";
import { BsFileEarmarkPerson } from "react-icons/bs";
import resumePdf from "../../assets/resume.pdf";

const ResumeCard: React.FC = () => {
  return (
    <a href={resumePdf} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-center opacity-50">
        <BsFileEarmarkPerson size={150} />
      </div>
      <p className="flex items-center justify-center mt-3">
        Check out my resume
      </p>
    </a>
  );
};

export default ResumeCard;
