import { useState } from "react";
import { Button } from "../components/Button";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { UserInitials } from "../components/UserInitials";
import { mockCards } from "../mocks/cards";

export const Profile = () => {
  const [isSeller, setIsSeller] = useState(true);

  return (
    <>
      <Header />
      <div className="bg-brand-1 w-full h-[357px] absolute top-0 z-[5]"></div>
      <main className="flex flex-col items-center gap-14 w-full min-h-[90vh] bg-grey-8 ">
        <section className="flex h-fit flex-col container w-[93%] gap-6 z-[7] relative bg-white-fixed mt-40 px-7 py-10 sm:p-11 rounded sm:w-[1240px] ">
          <UserInitials name="Samuel Leão" bigSize />
          <div className="flex items-center gap-2">
            <h2 className="text-heading-6-600">Samuel Leão</h2>
            <span className="flex items-center justify-center bg-brand-4 rounded text-brand-1 text-body-2-500 w-23 h-8">
              Anunciante
            </span>
          </div>
          <p className="text-body-1-400 text-grey-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsum est praesentium
            dolorem quidem aspernatur nemo aut eius eum delectus. Omnis nisi explicabo adipisci
            odit.
          </p>
          {isSeller && (
            <Button btnSize="btn-big" btnColor="btn-outline-brand-1">
              Criar anuncio
            </Button>
          )}
        </section>
        <section className="flex flex-col justify-start max-w-[1392px] mt-4 w-screen sm:items-start">
          {!isSeller && (
            <h3 className="text-heading-5-600 mb-16 ml-5 sm:ml-0 sm:-translate-x-16 ">Anúncios</h3>
          )}
          <ul className="flex gap-4 overflow-auto px-6 sm:px-0 sm:flex-wrap sm:gap-12">
            {mockCards.map((card, index) => (
              <Cards key={index} car={card} isSeller={isSeller} />
            ))}
          </ul>
        </section>
        <div className="flex mb-16 items-center gap-16">
          <span className="flex h-full gap-2 font-lexend text-grey-3 text-heading-5-600">
            1 <span className="opacity-50"> de 2</span>
          </span>
          <span className="flex items-center justify-center font-lexend text-brand-2 text-heading-5-600">
            Seguinte &gt;
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
};
