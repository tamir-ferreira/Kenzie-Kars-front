import { AdvertInfo } from "../components/AdvertInfo";
import { CommentCard } from "../components/Comments";
import { Header } from "../components/Header";
import { NewComment } from "../components/NewComment";

export const Product = () => {
  return (
    <>
      <Header />
      <main className="bg-grey-7 flex justify-center">
        <div className="w-4/5 flex mt-[7rem] justify-between">
          <section className="flex flex-col w-3/5">
            <div className="flex justify-center items-center rounded bg-grey-10 py-7 px-7 sm:p-11 mb-4">
              <img
                src="../../images/mock-car.png"
                alt="Imagem carro"
                className="w-[450px]"
              />
            </div>
            <AdvertInfo />
            <div className="rounded bg-grey-10  py-7 px-7 sm:p-11 mt-2 mb-4">
              <h3 className="mb-6 text-heading-6-600">Descrição</h3>
              <p className="text-body-1-400 leading-7 text-grey-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
                modi! Pariatur eaque sequi blanditiis et commodi optio earum,
                ipsum animi excepturi, nihil, praesentium atque vel iure quaerat
                qui recusandae velit? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Esse, magni. Iste magni earum consectetur
                aliquam ratione commodi hic quidem rerum? Perferendis natus
                soluta necessitatibus pariatur! Deserunt asperiores itaque dicta
                hic.
              </p>
            </div>
            <div className="h-96 sm:h-[34rem] rounded bg-grey-10 py-7 px-7 sm:p-11">
              <h3 className="mb-6 text-heading-6-600">Comentários</h3>

              <ul className="w-full h-[90%] flex flex-col gap-11 no-scrollbar overflow-y-auto">
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
          </section>
          <section className="w-[35%]">
            <div className="w-full rounded bg-grey-10 py-9 px-11">
              <h3 className="text-heading-6-600">Fotos</h3>
              <ul className=" flex flex-wrap justify-between">
                <li className="w-[108px] h-[108px] bg-grey-7 rounded flex justify-center items-center mt-8 mt-8">
                  <img src="../../images/mock-car.png" alt="Foto carro" />
                </li>
                <li className="w-[108px] h-[108px] bg-grey-7 rounded flex justify-center items-center mt-8">
                  <img src="../../images/mock-car.png" alt="Foto carro" />
                </li>
                <li className="w-[108px] h-[108px] bg-grey-7 rounded flex justify-center items-center mt-8">
                  <img src="../../images/mock-car.png" alt="Foto carro" />
                </li>
                <li className="w-[108px] h-[108px] bg-grey-7 rounded flex justify-center items-center mt-8">
                  <img src="../../images/mock-car.png" alt="Foto carro" />
                </li>
                <li className="w-[108px] h-[108px] bg-grey-7 rounded flex justify-center items-center mt-8">
                  <img src="../../images/mock-car.png" alt="Foto carro" />
                </li>
                <li className="w-[108px] h-[108px] bg-grey-7 rounded flex justify-center items-center mt-8">
                  <img src="../../images/mock-car.png" alt="Foto carro" />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
