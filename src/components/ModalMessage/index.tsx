import { X } from 'phosphor-react';
import { MouseEvent, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import image from '../../images/image.svg';

interface PropTypes {
  title: string;
  message: string;
  endpoint?: string;
  setModal: (modal: boolean) => void;
}

/**
 * Archive: src/components/ModalMessage.tsx
 *
 * Description: Modal edit/insert
 *
 * Date: 2022/08/20
 *
 * Author: Bruno
 */

export const ModalMessage = ({
  title,
  message,
  setModal,
  endpoint,
}: PropTypes) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  function closeModal(event: MouseEvent<HTMLDivElement>) {
    if (event.target === modalRef.current) {
      setModal(false);
      if (endpoint) {
        navigate(endpoint);
      }
    }
  }

  useEffect(() => {
    window.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'Escape') {
          setModal(false);
          if (endpoint) {
            navigate(endpoint);
          }
        }
      },
      false,
    );
  }, []);

  return (
    <div
      className="z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center md:items-center items-end bg-black bg-opacity-50"
      ref={modalRef}
      onClick={closeModal}
    >
      <div className=" w-screen md:w-[32rem] md:h-fit py-4 px-3 flex flex-col rounded-t-2xl md:rounded-2xl bg-white ">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-center "> {title}</h3>
          <X
            weight="bold"
            className="w-6 h-6 text-icon-dark-200"
            onClick={() => {
              setModal(false);
              if (endpoint) {
                navigate(endpoint);
              }
            }}
          />
        </div>
        <div className="flex justify-center items-center my-6">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};
