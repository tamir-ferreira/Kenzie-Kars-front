import { UserInitials } from "./UserInitials";
import { Button } from "./Button";

interface userCardProps {
  userName: string;
  description: string;
}

export const UserCard = ({ userName, description }: userCardProps) => {
  return (
    <div className="bg-grey-10 w-[95%] h-96 sm:w-7/12 py-10 px-7 flex-column-center text-center gap-7 rounded">
      <UserInitials name={userName} />
      <h3 className="text-heading-6-600 text-grey-1">{userName}</h3>
      <div className="w-full h-24 overflow-y-auto no-scrollbar">
        <p className="body-1-400 text-grey-2">{description}</p>
      </div>
      <Button
        btnSize="w-[206px]"
        btnColor="bg-grey-0"
        attributes="text-[#FFFFFF] border-none"
      >
        Ver todos os anúncios
      </Button>
    </div>
  );
};
