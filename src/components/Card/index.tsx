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

      <div className="hover:bg-gray-100 grid  relative w-[195px] h-[192px] m-2 mb-7 bg-gray-200  justify-center border-solid border-2 hover:border-3 hover:border-purple-900 rounded-2xl hover:shadow-2xl">
        <Link
          to={`/auction/${id}`}
          className="flex flex-col justify-items-start justify-center items-center hover:cursor-pointer"
        >
          <img
            src={image}
            alt="Add Image"
            className="w-48 h-32 justify-center rounded-2xl"
          />
          <div className="flex justify-center flex-grow justify items-start">
            <h3 className="font-bold text-2xs mt-1  overflow-hidden p-1 ml-3 w-[120px] h-20  not-italic text-center text-sm text-header-dark dark:text-header-light">
              {title}
            </h3>
            <div className="text-end h-[80px] w-[60px] mt-2 mr-3">
              <p className="text-[10px] mb-1">Preço atual:</p>
              <p className="font-medium text-[10px]">R$ 25.000,00</p>
            </div>
            <div className="items-center w-32 flex flex-grow justify-center absolute -bottom-4 z-10"></div>
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
