import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Modal } from '../Modal';
import { isAuctionOpened } from '../../apiCalls/auction/isAuctionOpened';
import { ModalMessage } from '../ModalMessage';
import { Countdown } from '../Countdown/Countdown';

/**
 * Archive: src/components/Card.tsx
 *
 * Description: Card Component
 *
 * Date: 2022/08/20
 *
 * Author: Athos Balmant
 */

interface RespAuctionType {
  auction_id: string;
  winner_id: string | null;
  name: string;
  description: string;
  photo: string;
  initial_price: string;
  final_price: string | null;
  close_at: string;
  open_at: string;
  created_at: string;
  updated_at: string | null;
  closed_at: string | null;
}

interface ChildrenTypes {
  children?: ReactElement;
  auction: RespAuctionType;
}

const teste = () => {
  console.log('teste');
};

export const Card = ({ auction }: ChildrenTypes) => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpenAuction = () => {
    if (new Date(auction.open_at) >= new Date()) {
      const verifyState = isAuctionOpened(auction.name);
      verifyState.then((resp) => {
        if (resp.data) {
          setModalMessage(true);
        }
      });
    } else {
      navigate(`/auction/${auction.auction_id}`);
    }
  };

  function diferenceSeconds(data1: Date, data2: Date) {
    // const startDate = new Date();

    // const endDate = new Date('2022-09-25 18:30:00');
    const seconds = (data2.getTime() - data1.getTime()) / 1000;

    return seconds;
  }

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
      {modalMessage && (
        <ModalMessage
          title="Aguarde"
          message={`O leilão escolhido abre em:\n${new Date(
            auction.open_at,
          ).toLocaleString()}`}
          setModal={setModalMessage}
        />
      )}
      <div className="hover:bg-gray-100 grid  relative w-[195px] h-[192px] m-2 mb-7 bg-gray-200  justify-center border-solid border-2 hover:border-3 hover:border-purple-900 rounded-2xl hover:shadow-2xl">
        <div
          onClick={handleOpenAuction}
          className="flex flex-col justify-items-start justify-center items-center hover:cursor-pointer"
        >
          {new Date(auction.open_at) >= new Date() && (
            <div className="flex flex-col justify-center items-center absolute w-2/3 h-10 bg-opacity-90 bg-red-400 rounded-md">
              <p className="text-xs font-bold">Inicia em: </p>
              <Countdown
                duration={diferenceSeconds(
                  new Date(),
                  new Date(auction.open_at),
                )}
              />
            </div>
          )}
          {new Date(auction.open_at) <= new Date() && (
            <div className="flex flex-col justify-center items-center absolute w-2/3 h-10 bg-opacity-90 bg-green-400 rounded-md">
              <p className=" text-xs font-bold">Finaliza em: </p>
              <Countdown
                duration={diferenceSeconds(
                  new Date(),
                  new Date(auction.close_at),
                )}
              />
            </div>
          )}
          <img
            src={auction.photo}
            alt="Add Image"
            className="w-48 h-32 justify-center rounded-2xl"
          />
          <div className="flex justify-center flex-grow justify items-start">
            <h3 className="font-bold text-2xs mt-1  overflow-hidden p-1 ml-3 w-[120px] h-20  not-italic text-center text-sm text-header-dark dark:text-header-light">
              {auction.name}
            </h3>
            <div className="text-end h-[80px] w-[60px] mt-2 mr-3">
              <p className="text-[10px] mb-1">Preço Inicial:</p>
              <p className="font-medium text-[10px]">
                R$ {auction.initial_price}
              </p>
            </div>
            <div className="items-center w-32 flex flex-grow justify-center absolute -bottom-4 z-10"></div>
          </div>
        </div>
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
