import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";
import { FilterHome } from "../components/FiltersHome";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Modal } from "../components/Modal";

export const Home = () => {
  const { isMobile, getAllAdverts, adverts, setIsSeller, setCarsProfile } =
    useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getAllAdverts();
    setIsSeller(false);
    setCarsProfile(false);
  }, []);

  return (
    <>
      {isOpen && (
        <Modal
          title="Filtros"
          toggleModal={() => setIsOpen(!true)}
          attributes="modal-filter"
        >
          <FilterHome textButton="Ver anúncios" setIsOpen={setIsOpen} />
        </Modal>
      )}
      <Header />
      <Banner />
      <main className="flex flex-col items-center container mt-14 mb-16">
        <div className="w-full flex justify-between self-center ">
          {!isMobile && <FilterHome textButton="Limpar filtros" />}
          <section className="flex justify-start max-w-[1032px] w-screen sm:items-start">
            <ul className="flex gap-4 overflow-auto px-6 sm:px-0 sm:flex-wrap sm:gap-12">
              {adverts.map((card) => (
                <Cards key={card.id} car={card}></Cards>
              ))}
            </ul>
          </section>
        </div>
        {isMobile && (
          <>
            <Button
              btnColor="btn-brand-1"
              btnSize="btn-big"
              attributes="w-[80%] mt-12"
              handleClick={() => setIsOpen(true)}
            >
              Filtros
            </Button>
            <span className="pt-10 font-lexend text-grey-3 text-heading-5-600">
              1 <span className="opacity-50">de 2</span>
            </span>
            <span className="pt-4 font-lexend text-brand-2 text-heading-5-600">
              Seguinte &gt;
            </span>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};
