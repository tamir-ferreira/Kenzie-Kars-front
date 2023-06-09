import logo from "../../public/images/Logo.png";
import { Button } from "./Button";
import { RiArrowUpSLine } from "react-icons/ri";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full h:28 sm:h-32 bg-grey-0 py-7 sm:py-11 flex-column-center sm:flex-row-center space-y-[1rem] sm:space-x-[25rem]">
      <img src={logo} alt="logo" className="w-36 h-7" />
      <small className="text-white-fixed">
        © 2023 - Todos os direitos reservados.
      </small>
      <Button
        btnSize="w-10 sm:w-14 h-8 sm:h-12"
        btnColor="bg-grey-1"
        attributes="p-2 sm:p-4 rounded border-none"
        handleClick={scrollToTop}
      >
        <RiArrowUpSLine className="fill-white-fixed w-full h-full" />
      </Button>
    </footer>
  );
};
