import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";
import { Header } from "../components/Header";
import { mockCards } from "../mocks/cards";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <main className="flex container justify-between self-center mt-14">
        <aside className="flex items-center flex-col bg-grey-6 h-screen max-w-[12.5rem] w-full">
          Filtros
        </aside>
        <section className="max-w-[1032px] w-full">
          <ul className="flex gap-12 flex-wrap">
            {mockCards.map((card, index) => (
              <Cards key={index} car={card}></Cards>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};
