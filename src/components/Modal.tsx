import { X } from 'phosphor-react';
import { MouseEvent, useEffect, useRef } from 'react';
import { Button } from './Button';
import image from '../images/image.svg';

interface PropTypes {
  title: string;
  message?: string;
  handleConfirmModal: () => void;
  setModal: (modal: boolean) => void;
}

/**
 * Archive: src/components/Card.tsx
 *
 * Description: Modal edit/insert
 *
 * Date: 2022/08/20
 *
 * Author: Athos Balmant e Rey
 */

export const Modal = ({
  title,
  message,
  handleConfirmModal,
  setModal,
}: PropTypes) => {
  const modalRef = useRef<HTMLDivElement>(null);

  function closeModal(event: MouseEvent<HTMLDivElement>) {
    if (event.target === modalRef.current) {
      setModal(false);
    }
  }

  useEffect(() => {
    window.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'Escape') {
          setModal(false);
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
      <div className=" w-screen md:w-[32rem] md:h-[26rem] py-4 px-3 flex flex-col rounded-t-2xl md:rounded-2xl bg-white ">
        <div className="flex justify-between items-center mb-2">
          <h3></h3>
          <h3 className="text-lg text-header-dark text-center "></h3>
          <X
            weight="bold"
            className="w-6 h-6 text-icon-dark-200"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="flex justify-center items-center">
          <h3 className="text-lg text-header-dark text-center">{title}</h3>
        </div>
        <div className="flex justify-center">
          <div
            className="grid md:flex relative justify-center items-center border-solid border-2 border-black rounded-md w-fit
          mb-5"
          >
            <div className="flex flex-col justify-center items-center w-fit">
              <img src={image} alt="Add Image" className="mt-2 w-16 h-24" />
              <textarea
                placeholder="Digite o nome do Projeto"
                cols={20}
                rows={6}
                className="resize-none outline-none border-solid border-2 border-gray-600 rounded-md m-2 mt-4"
              ></textarea>
            </div>
            <div className="flex flex-col justify-center items-center w-fit">
              <div className="flex flex-col justify-center items-start m-2">
                <label>Data inicial:</label>
                <input
                  type="date"
                  className="w-52 h-10 mt-1 border-solid border-2 border-gray-600 rounded-md"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-2">
                <label>Data final:</label>
                <input
                  type="date"
                  className="w-52 h-10 mt-1 border-solid border-2 border-gray-600 rounded-md"
                ></input>
              </div>
              <div className="flex flex-col justify-center items-start m-2">
                <label>Status</label>
                <select className="w-52 h-10 mt-1 mb-4 border-solid border-2 border-gray-600 rounded-md">
                  <option value="1">Ativo</option>
                  <option value="2">Inativo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 flex justify-center gap-5">
          <Button
            type="button"
            color="bg-[#ED8525]"
            category="cancel"
            label="Cancelar"
            onClick={() => setModal(false)}
          />
          <Button
            type="button"
            color="bg-[#00B682]"
            category="primary"
            label="Confirmar"
            onClick={() => handleConfirmModal()}
          />
        </div>
      </div>
    </div>
  );
};

/* 

vertical:
<div className="grid relative justify-center items-center border-solid border-2 border-black rounded-md w-fit mb-5">

horizontal:
<div className="flex relative justify-center items-center border-solid border-2 border-black rounded-md w-fit mb-5"> 

*/
