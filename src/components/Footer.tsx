import logo from "../../public/images/Logo.png";
import { RiArrowUpSLine } from "react-icons/ri";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full h:28 sm:h-32 bg-grey-0 pt-7 pb-7 sm:pt-11 sm:pb-11 place-content-around flex-column-center sm:flex-row-center space-y-[1rem] sm:space-x-[18rem]">
      <img src={logo} alt="logo" className="w-36 h-7" />
      <small className="text-white-fixed">
        © 2023 - Todos os direitos reservados.
      </small>
      <button
        onClick={scrollToTop}
        className="bg-grey-1 w-10 sm:w-14 h-8 sm:h-12 p-2 sm:p-4 rounded border-none"
      >
        <RiArrowUpSLine className="fill-white-fixed w-full h-full" />
      </button>
    </footer>
  );
};
