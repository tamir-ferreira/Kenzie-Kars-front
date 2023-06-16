import { AdvertInfo } from "../components/AdvertInfo";
import { CommentCard } from "../components/Comments";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NewComment } from "../components/NewComment";
import { UserCard } from "../components/UserCard";
import { useAuth } from "../hooks/userAuth";
import { carImages } from "../mocks/car-images";
import { comments } from "../mocks/comments";

export const Product = () => {
  const { advert } = useAuth();

  return (
    <>
      <Header />

      <div className="bg-brand-1 w-full h-[70vh] absolute top-0 -z[-1]"></div>
      <main className="bg-grey-8 flex justify-center w-full p-3">
        <div className="flex flex-col justify-center container sm:px-32">
          <div className=" flex mt-[7rem] justify-between max-sm:flex-col max-sm:w-[100%] z-0">
            <section className="flex flex-col w-[59%] max-sm:w-[100%]">
              <div className="flex justify-center items-center rounded bg-grey-10 py-7 px-7 sm:p-11 mb-4 max-sm:w-[100%]">
                <img
                  src={advert.cover_image}
                  alt="Imagem carro"
                  className="w-[450px]"
                />
              </div>
              <AdvertInfo />
              <div className="rounded bg-grey-10  py-7 px-7 sm:p-11 mt-5 mb-4 max-sm:w-[100%]">
                <h3 className="mb-6 text-heading-6-600">Descrição</h3>
                <p className="text-body-1-400 leading-7 text-grey-2">
                  {advert.description}
                </p>
              </div>
            </section>
            <section className="w-[36%] max-sm:w-[100%]">
              <div className="w-full rounded bg-grey-10 py-9 px-11 max-sm:w-[100%]">
                <h3 className="text-heading-6-600">Fotos</h3>
                <ul className=" flex flex-wrap justify-between">
                  {carImages.map((elem, index) => {
                    return (
                      <li
                        key={index}
                        className="w-[85px]  h-[85px] sm:w-[108px] -sm:h-[108px] bg-grey-7 rounded flex justify-center items-center mt-8"
                      >
                        <img src={elem.src_image} alt="Foto carro" />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <UserCard />
            </section>
          </div>
          <div className="h-96 sm:h-[34rem] rounded bg-grey-10 py-7 px-7 sm:p-11 w-[59%] mt-[1.25rem] max-sm:w-[100%]">
            <h3 className="mb-6 text-heading-6-600">Comentários</h3>

            <ul className="w-full h-[90%] flex flex-col gap-11 no-scrollbar overflow-y-auto">
              {comments.map((elem, index) => (
                <CommentCard
                  key={index}
                  userName={elem.userName}
                  countMark={elem.countMark}
                  comment={elem.comment}
                />
              ))}
            </ul>
          </div>
          <NewComment userName="Luiz Felipe" />
        </div>
      </main>
      <Footer />
    </>
  );
};
