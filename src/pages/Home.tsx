import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";
import { FilterHome } from "../components/FiltersHome";
import { Header } from "../components/Header";
import { mockCards } from "../mocks/cards";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <main className="flex container justify-between self-center mt-14">
        <FilterHome />
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
