import { ReactNode } from 'react';

interface PropsType {
  content: string[];
}

export const AuctionChat = ({ content }: PropsType) => {
  const message = content.map((messageItem, index) => {
    return (
      <div
        key={index}
        className="flex items-center justify-center bg-gray-300 h-6 w-96 rounded-lg m-1"
      >
        <p className="m-2 ml-8 text-center">{messageItem}</p>
      </div>
    );
  });

  return (
    <>
      <div className="flex flex-col justify-start bg-white w-[418px] h-[395px] rounded-3xl ">
        <div className="flex justify-between">
          <div>
            <div className="flex">
              <div className="mt-4 ml-8 animate-pulse bg-live bg-no-repeat h-5 w-5"></div>
              <h2 className=" mt-3 text-base font-bold ">Lances Ao Vivo</h2>
            </div>
            <div className="flex">
              <div className="ml-8 bg-clock-time bg-no-repeat h-5 w-5"></div>
              <p className="w-20 text-sm">01:23s para terminar</p>
            </div>
          </div>
          <p className="w-20 text-end m-3 mr-5">14 Lances Feitos</p>
        </div>
        <div className="flex flex-col mt-2 items-center justify-center overflow-y-auto">
          <div className="h-[250px] overflow-auto">{message}</div>
          <div className="flex flex-col items-center">
            <p className="m-1">Valor Inicial R$5.000,00</p>
            <p className="m-1">Leilão aberto às 14:35</p>
          </div>
        </div>
      </div>
    </>
  );
};
