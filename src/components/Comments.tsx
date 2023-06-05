interface commentProps {
  img: string;
  userName: string;
  countMark: string;
  comment: string;
}

export const CommentCard = ({
  img,
  userName,
  countMark,
  comment,
}: commentProps) => {
  return (
    <li className="flex flex-col gap-3 h-max">
      <div className="flex items-center gap-2 w-max">
        <img src={img} alt="user_icon" />
        <p className="text-body-2-500">{userName}</p>
        <small className="text-xs font-normal text-grey-3">{countMark}</small>
      </div>
      <div className="w-full h-max">
        <p className="text-body-2-400 leading-6 text-grey-1">{comment}</p>
      </div>
    </li>
  );
};
