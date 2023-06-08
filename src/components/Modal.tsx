import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  toggleModal: () => void;
  blockClosing?: boolean;
  children: ReactNode;
  title: ReactNode;
  attributes?: string;
}

export const Modal = ({
  toggleModal,
  children,
  blockClosing,
  title,
  attributes,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return createPortal(
    <div className="fixed top-0 bg-black/50 w-screen h-screen flex justify-center items-center z-50">
      <div
        ref={blockClosing ? null : ref}
        className={`${attributes} bg-grey-10 px-6 py-5 shadow-lg width-modal rounded-lg `}
      >
        <div className="flex-col flex gap-8">
          <div className="flex justify-between items-center">
            <h2 className="font-lexend font-medium text-base text-grey-1">
              {title}
            </h2>
            <button onClick={toggleModal} className="btn-close-modal">
              X
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};
