import { useRef } from "react";
import { useOnClickOutside } from "../../utils/useClickOutside";

export default function ModalWrapper({ children, setIsOpen, modalBg }) {
  const modalRef = useRef(null);

  const closeHandler = () => setIsOpen(false);

  useOnClickOutside(modalRef, closeHandler);

  return (
    <>
      <div className="fixed left-0 top-0 z-[50] !m-0 h-dvh w-screen bg-black/[0.40] backdrop-blur" />
      <div
        ref={modalRef}
        onClick={closeHandler}
        className="fixed left-0 top-0 z-[50] flex h-dvh w-screen items-start justify-center overflow-auto overscroll-y-none"
      >
        <section
          className={`${modalBg} relative z-[50] my-16 flex w-full max-w-lg flex-col rounded-2xl py-8 outline-none [box-shadow:0_10px_15px_-3px_rgba(0,_0,_0,_0.1),0_4px_6px_-2px_rgba(0,_0,_0,_0.05)]`}
        >
          {children}
        </section>
      </div>
    </>
  );
}
