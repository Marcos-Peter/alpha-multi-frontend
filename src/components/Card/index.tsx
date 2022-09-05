import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../Modal';

/**
 * Archive: src/components/Card.tsx
 *
 * Description: Card Component
 *
 * Date: 2022/08/20
 *
 * Author: Athos Balmant
 */

interface ChildrenTypes {
  children?: ReactElement;
  title: string;
  image: string;
  id: string;
}

const teste = () => {
  console.log('teste');
};

export const Card = ({ title, image, id }: ChildrenTypes) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      {modal && (
        <Modal
          title="Editar projeto"
          message=""
          setModal={setModal}
          handleConfirmModal={teste}
        />
      )}

      <div className="hover:bg-gray-100 grid  relative w-48 h-72 m-2 mb-7 bg-gray-200  justify-start border-solid border-2 hover:border-3 hover:border-purple-900 rounded-2xl hover:shadow-2xl">
        <Link
          to={`/auction/${id}`}
          className="flex flex-col justify-items-start justify-center items-center hover:cursor-pointer"
        >
          <img
            src={image}
            alt="Add Image"
            className="w-48 h-48 justify-center rounded-2xl"
          />
          <div className="flex justify-center flex-grow justify items-start">
            <h3 className="font-semibold overflow-hidden p-1 m-2 w-[94px] h-20  not-italic text-start text-base text-header-dark dark:text-header-light">
              {title}
            </h3>
            <div className="text-end h-fit mt-4">
              <p className="text-[12px]">Preço atual:</p>
              <p className="font-medium">R$ 0,00</p>
            </div>
            <div className="items-center w-36 flex flex-grow justify-between absolute -bottom-6 z-10">
              <button className="text-white text-xs font-semibold w-24 h-8 bg-blue-500 rounded-lg">
                Dar um Lance
              </button>
              <button className="w-8 h-8 bg-red-500 rounded-lg bg-heart bg-no-repeat bg-center" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

/* 
Vertical Card:

<div className="grid relative w-[15rem] p-4 m-2  justify-items-center border-solid border-2 border-black rounded-md"> 

Horizontal Card:
 <div className="flex relative w-[25rem] p-4 m-2  justify-items-center border-solid border-2 border-black rounded-md">
*/
