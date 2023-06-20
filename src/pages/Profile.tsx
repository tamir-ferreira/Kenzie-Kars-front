import { useEffect } from "react";
import { Button } from "../components/Button";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { UserInitials } from "../components/UserInitials";
import { Modal } from "../components/Modal";
import { NewAdvert } from "../components/Modals/NewAdvert";
import { useAuth } from "../hooks/userAuth";
import { useParams } from "react-router-dom";
import { iUser } from "../contexts/UserContext";

export const Profile = () => {
  const {
    user,
    advertIsOpen,
    setAdvertIsOpen,
    setLogged,
    getParamInfo,
    currentUser,
    currentUserAdverts,
    isCreateAdvertSuccessModalOpen,
    toggleCreateAdvertSuccessModal,
    reload,
  } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  useEffect(() => {
    getParamInfo(id!);
    setLogged(true);
  }, [reload]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userString = localStorage.getItem("@USER");
    const userLocal: iUser = userString ? JSON.parse(userString) : null;

    if (!token) {
      user.seller = false;
      setLogged(false);
    }
    if (userLocal !== undefined && userLocal !== null) {
      if (userLocal.id !== Number(id)) {
        console.log("passando aqui");
        user.seller = false;
      } else {
        user.seller = true;
      }
    }
  }, [id, setLogged, user]);

  return (
    <>
      {advertIsOpen && (
        <Modal
          title="Criar Anuncio"
          toggleModal={() => setAdvertIsOpen(!advertIsOpen)}
          attributes="max-h-screen max-w-[520px] no-scrollbar overflow-y-auto w-auto"
          widthFull
        >
          <NewAdvert />
        </Modal>
      )}
      {isCreateAdvertSuccessModalOpen && (
        <Modal title="Sucesso!" toggleModal={toggleCreateAdvertSuccessModal}>
          <div className="flex flex-col gap-5">
            <h2 className="heading-7-500 text-grey-1">
              Seu anúncio foi criado com sucesso
            </h2>
            <p className="body-1-400 text-grey-2">
              Agora você poderá ver seus negócios crescendo em grande escala!
            </p>
          </div>
        </Modal>
      )}
      <Header />
      <div className="bg-brand-1 w-full h-[357px] absolute top-0 z-[1]"></div>
      <main className="flex flex-col items-center gap-14 w-full min-h-[90vh] bg-grey-8 ">
        <section className="flex h-fit flex-col container w-[93%] gap-6 z-[2] relative bg-white-fixed mt-40 px-7 py-10 sm:p-11 rounded sm:w-[1240px] ">
          <UserInitials
            name={currentUser.name}
            color={currentUser.color}
            bigSize
          />
          <div className="flex items-center gap-2">
            <h2 className="text-heading-6-600">{currentUser.name}</h2>
            <span className="flex items-center justify-center bg-brand-4 rounded text-brand-1 text-body-2-500 w-23 h-8">
              Anunciante
            </span>
          </div>
          <p className="text-body-1-400 text-grey-2 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsum
            est praesentium dolorem quidem aspernatur nemo aut eius eum
            delectus. Omnis nisi explicabo adipisci odit.
          </p>
          {user.seller && (
            <Button
              btnSize="btn-big"
              btnColor="btn-outline-brand-1"
              handleClick={() => setAdvertIsOpen(!advertIsOpen)}
            >
              Criar anuncio
            </Button>
          )}
        </section>
        <section className="flex flex-col justify-start max-w-[1392px] mt-4 w-screen sm:items-start">
          {!user.seller && (
            <h3 className="text-heading-5-600 mb-16 ml-5 sm:ml-0 sm:-translate-x-16 ">
              Anúncios
            </h3>
          )}
          <ul className="flex gap-6 overflow-auto px-6 sm:px-0 sm:flex-wrap sm:gap-12">
            {currentUserAdverts.map((car) => (
              <Cards key={car.id} car={car} seller={user.seller} />
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
