import { CommentCard } from "../components/Comments";
import frame4 from "../../public/images/frame4.png";

export const Product = () => {
  return (
    <div className="w-7/12 h-[34rem] rounded bg-grey-10 ml-[11rem] p-11">
      <h3 className="mb-6 text-heading-6-600">Comentários</h3>
      <ul className="w-full h-full flex flex-col gap-11 no-scrollbar overflow-y-auto">
        <CommentCard
          img={frame4}
          userName="Monica"
          countMark="há 3 dias"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed eros nulla. Pellentesque ullamcorper sit amet nunc ut viverra. Curabitur lacinia imperdiet nunc, id sollicitudin turpis elementum ac. Duis et erat a dui malesuada auctor. Donec pulvinar eros in nulla elementum, ac volutpat diam venenatis. Donec at quam quis magna posuere condimentum non ac urna. Praesent viverra consectetur nisl vitae ultricies. Duis vulputate, nisi eu cursus accumsan, libero urna malesuada dui, eu sodales tortor libero gravida quam. Pellentesque ultrices orci nec sollicitudin fringilla. In in dolor et mauris laoreet volutpat. In bibendum feugiat ornare. Duis semper augue nec velit imperdiet porta ut non tortor. Integer hendrerit porta diam at eleifend. "
        />
        <CommentCard
          img={frame4}
          userName="Monica"
          countMark="há 3 dias"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed eros nulla. Pellentesque ullamcorper sit amet nunc ut viverra. Curabitur lacinia imperdiet nunc, id sollicitudin turpis elementum ac. Duis et erat a dui malesuada auctor. Donec pulvinar eros in nulla elementum, ac volutpat diam venenatis. Donec at quam quis magna posuere condimentum non ac urna. "
        />
        <CommentCard
          img={frame4}
          userName="Monica"
          countMark="há 3 dias"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed eros nulla. Pellentesque ullamcorper sit amet nunc ut viverra. Curabitur lacinia imperdiet nunc, id sollicitudin turpis elementum ac. Duis et erat a dui malesuada auctor. Donec pulvinar eros in nulla elementum, ac volutpat diam venenatis. Donec at quam quis magna posuere condimentum non ac urna. "
        />
        <CommentCard
          img={frame4}
          userName="Monica"
          countMark="há 3 dias"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed eros nulla. Pellentesque ullamcorper sit amet nunc ut viverra. Curabitur lacinia imperdiet nunc, id sollicitudin turpis elementum ac. Duis et erat a dui malesuada auctor. Donec pulvinar eros in nulla elementum, ac volutpat diam venenatis. Donec at quam quis magna posuere condimentum non ac urna. "
        />
      </ul>
    </div>
  );
};
