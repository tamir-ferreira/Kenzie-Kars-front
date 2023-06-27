import moment from "moment";
import { UserInitials } from "./UserInitials";

interface commentProps {
  userName: string;
  countMark: string;
  comment: string;
  color: string;
}

export const CommentCard = ({
  userName,
  countMark,
  comment,
  color,
}: commentProps) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const newDataString = String(today.toISOString()).substring(0, 10);

  const diff = moment(newDataString, "YYYY-MM-DD").diff(
    moment(countMark, "YYYY-MM-DD")
  );
  const diffDays = String(moment.duration(diff).asDays());

  //console.log(typeof diffDays);

  return (
    <li className="flex flex-col gap-3 h-max">
      <div className="flex items-center gap-2 w-max">
        <UserInitials name={userName} color={color} />
        <p className="text-body-2-500">{userName}</p>
        <small className="text-xs font-normal text-grey-3">
          {diffDays === "0" ? "há algumas horas" : `há ${diffDays} dias`}
        </small>
      </div>
      <div className="w-full h-max">
        <p className="text-body-2-400 leading-6 text-grey-2">{comment}</p>
      </div>
    </li>
  );
};
