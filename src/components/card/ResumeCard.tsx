import { BsFileEarmarkPerson } from "react-icons/bs";

const ResumeCard: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center justify-center w-12 h-12">
          <BsFileEarmarkPerson size={24} />
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
