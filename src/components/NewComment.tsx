import { UserInitials } from "./UserInitials";
import { Button } from "./Button";

interface NewCommentProps {
  userName: string;
}

export const NewComment = ({ userName }: NewCommentProps) => {
  return (
    <div className="w-7/12 h-[18rem] rounded bg-grey-10 mt-8 mb-16 ml-[11rem] p-11 flex flex-col gap-3.5">
      <div className="flex items-center gap-2 w-max">
        <UserInitials name={userName} />
        <p className="text-body-2-500">{userName}</p>
      </div>
      <div className="flex flex-col gap-3.5 w-full h-full">
        <div className="relative w-full h-32">
          <textarea
            placeholder="Deixe um comentário..."
            name="comment"
            cols={75}
            rows={5}
            className="resize-none rounded border-grey-7 border-2 focus:outline-0 w-full h-full p-2.5 text-grey-2"
          ></textarea>
          <Button
            btnSize="w-28 h-9 border-none absolute bottom-3 right-3"
            btnColor="bg-brand-1 text-[#FFFFFF]"
          >
            Comentar
          </Button>
        </div>
        <div className="h-6 flex gap-2">
          <Button
            btnSize="h-full w-max px-3 rounded-3xl text-xs"
            btnColor="bg-grey-7 text-grey-3"
          >
            Gostei muito!
          </Button>
          <Button
            btnSize="h-full w-max px-3 rounded-3xl text-xs"
            btnColor="bg-grey-7 text-grey-3"
          >
            Incrível!
          </Button>
          <Button
            btnSize="h-full w-max px-3 rounded-3xl text-xs"
            btnColor="bg-grey-7 text-grey-3"
          >
            Recomendarei para meus amigos!
          </Button>
        </div>
      </div>
    </div>
  );
};
