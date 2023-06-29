import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";
import { FilterHome } from "../components/FiltersHome";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import { Modal } from "../components/Modal";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/userAuth";

export const Home = () => {
  const {
    isMobile,
    adverts,
    pageHome,
    nextHomePage,
    prevHomePage,
    checkNextHomePage,
    checkPrevHomePage,
    getAllAdverts,
  } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getAllAdverts();
  }, [searchParams, pageHome]);

  return (
    <>
      {isOpen && (
        <Modal
          title="Filtros"
          toggleModal={() => setIsOpen(!true)}
          attributes="modal-filter">
          <FilterHome textButton="Ver anúncios" />
        </Modal>
      )}
      <Header />
      <Banner />
      <main className="flex flex-col items-center container mt-14 mb-16">
        <div className="w-full flex justify-between self-center ">
          {!isMobile && <FilterHome textButton="Limpar filtros" />}
          <section className="flex justify-start max-w-[1032px] w-screen sm:items-start">
            <ul className="flex gap-4 overflow-auto px-6 sm:px-0 sm:flex-wrap sm:gap-12">
              {adverts.length ? (
                adverts.map(
                  (card) =>
                    card.is_active && (
                      <Cards key={card.id} car={card} initialPage></Cards>
                    )
                )
              ) : (
                <li className="bg-grey-7 text-grey-2 font-semibold p-2 w-[312px] sm:w-[1100px] h-20 sm:h-[200px] sm:text-heading-4-600 mb-9 rounded flex justify-center items-center">
                  Nenhum anúncio ativo no momento
                </li>
              )}
            </ul>
          </section>
        </div>
        {isMobile ? (
          <>
            <Button
              btnColor="btn-brand-1"
              btnSize="btn-big"
              attributes="w-[80%] mt-12"
              handleClick={() => setIsOpen(true)}>
              Filtros
            </Button>
            <div className="flex items-center gap-8">
              {prevHomePage && (
                <button
                  onClick={() => checkPrevHomePage()}
                  className="flex items-center justify-center font-lexend text-brand-2 sm:text-heading-5-600 border-none bg-transparent">
                  Anterior
                </button>
              )}
              <span className="flex h-full gap-2 font-lexend text-grey-3 sm:text-heading-5-600">
                {pageHome}
              </span>
              {nextHomePage && (
                <button
                  onClick={() => checkNextHomePage()}
                  className="flex items-center justify-center font-lexend text-brand-2 sm:text-heading-5-600 border-none bg-transparent">
                  Seguinte
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="flex  items-center gap-8">
            {prevHomePage && (
              <button
                onClick={() => checkPrevHomePage()}
                className="flex items-center justify-center font-lexend text-brand-2 sm:text-heading-5-600 border-none bg-transparent">
                Anterior
              </button>
            )}
            <span className="flex h-full gap-2 font-lexend text-grey-3 sm:text-heading-5-600">
              {pageHome}
            </span>
            {nextHomePage && (
              <button
                onClick={() => checkNextHomePage()}
                className="flex items-center justify-center font-lexend text-brand-2 sm:text-heading-5-600 border-none bg-transparent">
                Seguinte
              </button>
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
