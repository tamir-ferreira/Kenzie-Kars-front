import { useEffect, useState } from "react";
import { AdvertInfo } from "../components/AdvertInfo";
import { CommentCard } from "../components/Comments";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NewComment } from "../components/NewComment";
import { UserCard } from "../components/UserCard";
import { carImages } from "../mocks/car-images";
import { CardObj, UserObj } from "../components/Cards";
import { CommentsAuth } from "../hooks/commentsHook";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [carInfo, setCarInfo] = useState({} as CardObj);
  const [userInfo, setUserInfo] = useState({} as UserObj);
  const { getComments, currentComments } = CommentsAuth();
  const { id } = useParams();

  useEffect(() => {
    const userString = localStorage.getItem("@carInfo");
    setCarInfo(userString ? JSON.parse(userString) : null);
    const userCurrent = localStorage.getItem("@USER");
    setUserInfo(userCurrent ? JSON.parse(userCurrent) : null);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getComments(id!);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-brand-1 w-full h-[70vh] absolute top-0 -z[-1]"></div>
      <main className="bg-grey-8 flex justify-center w-full p-3">
        <div className="flex flex-col justify-center container sm:px-32">
          <div className=" flex mt-[7rem] justify-between max-sm:flex-col max-sm:w-[100%] z-0">
            <section className="flex flex-col w-[59%] max-sm:w-[100%]">
              <div className="flex justify-center items-center rounded bg-grey-10 py-7 px-7 xm:p-11  mb-4 max-sm:w-[100%] min-h-[300px]">
                <img
                  src={carInfo.cover_image}
                  alt="Imagem carro"
                  className="w-[450px] img-transition"
                />
              </div>
              <AdvertInfo />
              <div className="rounded bg-grey-10  py-7 px-7 sm:p-11 mt-5 mb-4 max-sm:w-[100%] min-h-[206px]">
                <h3 className="mb-6 text-heading-6-600">Descrição</h3>
                <p className="text-body-1-400 leading-7 text-grey-2">
                  {carInfo.description}
                </p>
              </div>
            </section>
            <section className="w-[38%] max-sm:w-[100%]">
              <div className="w-full rounded bg-grey-10 py-[5%] px-[8%] max-sm:w-[100%]">
                <h3 className="text-heading-6-600">Fotos</h3>
                <ul className="flex flex-wrap justify-center gap-x-[5.5px] gap-y-[50px] w-full my-8 sm:gap-x-0 sm:justify-between sm:w-full">
                  {carImages.map((elem, index) => {
                    return (
                      <li
                        key={index}
                        className="w-[85px]  h-[85px] sm:w-[103px] sm:h-[103px] bg-grey-7 rounded flex justify-center items-center"
                      >
                        <img
                          src={elem.src_image}
                          alt="Foto carro"
                          className="object-contain"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <UserCard />
            </section>
          </div>
          <div className="h-fit min-h-20 rounded bg-grey-10 py-7 px-7 sm:p-11 w-[59%]  max-sm:w-[100%]">
            <h3 className="mb-6 text-heading-6-600">Comentários</h3>

            <ul className="w-full h-[90%] flex flex-col gap-11 no-scrollbar overflow-y-auto">
              {currentComments.map((elem) => (
                <CommentCard
                  key={elem.id}
                  userName={elem.user.name}
                  countMark={elem.createdAt}
                  comment={elem.content}
                  color={elem.user.color}
                />
              ))}
            </ul>
          </div>
          <NewComment
            name={
              userInfo
                ? userInfo.name
                : "Ops! Para fazer comentários você precisa estar logado! :("
            }
            color={userInfo ? userInfo.color : "#4a9d9d"}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};
