import { UserInitials } from "./UserInitials";
import { Button } from "./Button";
import { Link } from "react-router-dom";

interface userCardProps {
  userName: string;
  description: string;
}

export const UserCard = ({ userName, description }: userCardProps) => {
  return (
    <div className="bg-grey-10 mt-[1.25rem] rounded w-full h-96 sm:h-[26.625rem] flex-column-center px-7 sm:px-11 text-center gap-y-7 sm:gap-y-8">
      <UserInitials name={userName} bigSize />
      <h3 className="text-heading-6-600 text-grey-1">{userName}</h3>
      <div className="w-full h-24 overflow-y-auto no-scrollbar">
        <p className="body-1-400 text-grey-2">{description}</p>
      </div>
      <Link to={"/profile"}>
        <Button btnSize="btn-big" btnColor="btn-grey-1">
          Ver todos os anúncios
        </Button>
      </Link>
    </div>
  );
};
