import { CommentCard } from "../components/Comments";
import { Header } from "../components/Header";
import { NewComment } from "../components/NewComment";

export const Product = () => {
  return (
    <>
      <Header />
      <div className=" w-[95%] sm:w-7/12 h-96 sm:h-[34rem] rounded bg-grey-10 ml-2 sm:ml-[11rem] py-7 px-7 sm:p-11">
        <h3 className="mb-6 text-heading-6-600">Comentários</h3>

        <ul className="w-full h-full flex flex-col gap-11 no-scrollbar overflow-y-auto">
          <CommentCard
            userName="Carla Souza"
            countMark="há 3 dias"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed eros nulla. Pellentesque ullamcorper sit amet nunc ut viverra. Curabitur lacinia imperdiet nunc, id sollicitudin turpis elementum ac. Duis et erat a dui malesuada auctor. Donec pulvinar eros in nulla elementum, ac volutpat diam venenatis. Donec at quam quis magna posuere condimentum non ac urna. Praesent viverra consectetur nisl vitae ultricies. Duis vulputate, nisi eu cursus accumsan, libero urna malesuada dui, eu sodales tortor libero gravida quam. Pellentesque ultrices orci nec sollicitudin fringilla. In in dolor et mauris laoreet volutpat. In bibendum feugiat ornare. Duis semper augue nec velit imperdiet porta ut non tortor. Integer hendrerit porta diam at eleifend. "
          />
          <CommentCard
            userName="Ana Maria"
            countMark="há 3 dias"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed eros nulla. Pellentesque ullamcorper sit amet nunc ut viverra. Curabitur lacinia imperdiet nunc, id sollicitudin turpis elementum ac. Duis et erat a dui malesuada auctor. Donec pulvinar eros in nulla elementum, ac volutpat diam venenatis. Donec at quam quis magna posuere condimentum non ac urna. "
          />
          <CommentCard
            userName="João Pedro"
            countMark="há 3 dias"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed eros nulla. Pellentesque ullamcorper sit amet nunc ut viverra. Curabitur lacinia imperdiet nunc, id sollicitudin turpis elementum ac. Duis et erat a dui malesuada auctor. Donec pulvinar eros in nulla elementum, ac volutpat diam venenatis. Donec at quam quis magna posuere condimentum non ac urna. "
          />
          <CommentCard
            userName="Carlos Henrique"
            countMark="há 3 dias"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed eros nulla. Pellentesque ullamcorper sit amet nunc ut viverra. Curabitur lacinia imperdiet nunc, id sollicitudin turpis elementum ac. Duis et erat a dui malesuada auctor. Donec pulvinar eros in nulla elementum, ac volutpat diam venenatis. Donec at quam quis magna posuere condimentum non ac urna. "
          />
        </ul>
      </div>
      <NewComment userName="Luiz Felipe" />
    </>
  );
};
