import { UserInitials } from "./UserInitials";
import { Button } from "./Button";

interface NewCommentProps {
  userName: string;
}

export const NewComment = ({ userName }: NewCommentProps) => {
  return (
    <div className="w-[98%] sm:w-[65%] h-96 sm:h-[18rem] rounded bg-grey-10 mt-10 sm:mt-8 mb-8 sm:mb-16 py-9 px-6 sm:p-11 flex flex-col gap-3.5">
      <div className="flex items-center gap-2 w-max">
        <UserInitials name={userName} />
        <p className="text-body-2-500">{userName}</p>
      </div>
      <div className="flex flex-col gap-[70px] sm:gap-3.5 w-full h-max sm:h-full">
        <div className="sm:relative w-full h-32 gap-8">
          <textarea
            placeholder="Deixe um comentário..."
            name="comment"
            cols={75}
            rows={5}
            className="resize-none rounded border-grey-7 border-2 focus:outline-0 w-full h-full p-2.5 sm:pr-[8rem] text-grey-2 no-scrollbar"
          ></textarea>
          <Button
            btnSize="btn-medium"
            btnColor="btn-brand-1"
            attributes="mt-[10px] sm:absolute sm:bottom-3 sm:right-3"
          >
            Comentar
          </Button>
        </div>
        <div className="h-8 py-1 flex flex-wrap gap-y-3 gap-x-2">
          <Button
            btnSize="h-full w-max"
            btnColor="bg-grey-7 text-grey-3"
            attributes="px-3 rounded-3xl text-xs"
          >
            Gostei muito!
          </Button>
          <Button
            btnSize="h-full w-max"
            btnColor="bg-grey-7 text-grey-3"
            attributes="px-3 rounded-3xl text-xs"
          >
            Incrível!
          </Button>
          <Button
            btnSize="h-full w-max"
            btnColor="bg-grey-7 text-grey-3"
            attributes="px-3 rounded-3xl text-xs"
          >
            Recomendarei para meus amigos!
          </Button>
        </div>
      </div>
    </div>
  );
};
