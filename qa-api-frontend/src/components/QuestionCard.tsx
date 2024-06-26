import Container from "./Container";

export type QuestionCardProps = {
  title: string;
  userName?: string;
  userImg?: string;
};

const QuestionCard = ({ title, userName, userImg }: QuestionCardProps) => {
  return (
    <div className="bg-white w-full py-20">
      <h1 className="text-lg">{title}</h1>
    </div>
  );
};

export default QuestionCard;
