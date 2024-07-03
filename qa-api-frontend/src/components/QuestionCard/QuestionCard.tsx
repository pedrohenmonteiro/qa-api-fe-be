import questionMock from "./mock";

const defaultImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s.jpg";

export type QuestionCardProps = {
  title: string;
  userName?: string;
  userImg?: string;
};

const QuestionCard = ({
  title,
  userName,
  userImg = defaultImg,
}: QuestionCardProps) => {
  return (
    <div className="bg-white w-full  flex gap-4 p-4 border-b-[1px] border-gray-100">
      <a href="">
        <img src={userImg} alt="User image" width={50} height={50} />
      </a>
      <div>
        <p className="text-lg">{title}</p>
        <p className="text-sm text-gray-500">UserTest</p>
      </div>
    </div>
  );
};

export default QuestionCard;
