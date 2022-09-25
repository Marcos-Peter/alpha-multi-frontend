import { ReactNode, useState } from 'react';
import { currencyMask } from '../../masks/currencyMask';
import { inputMask } from '../../masks/inputMask';
import { Countdown } from '../Countdown/Countdown';

interface PropsType {
  content: string[];
  actualBid: number;
  auctionData: RespAuctionType;
  setFinish: (bool: boolean) => void;
}

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

function scrollToBottom() {
  const el = document.getElementById('messages');
  if (el) {
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 100);
  }
}

export const AuctionChat = ({
  content,
  actualBid,
  auctionData,
  setFinish,
}: PropsType) => {
  // const [auction, setAuction] = useState<RespAuctionType>(JSON.parse(auctionData) as RespAuctionType);
  const message = content.map((messageItem, index) => {
    scrollToBottom();
    return (
      <div
        key={index}
        className="flex items-center justify-center bg-gray-300 h-6 w-96 rounded-lg m-1"
      >
        <p className="m-2 ml-8 text-center">{messageItem}</p>
      </div>
    );
  });

  function diferenceSeconds(data1: Date, data2: Date) {
    // const startDate = new Date();

    // const endDate = new Date('2022-09-25 18:30:00');
    const seconds = (data2.getTime() - data1.getTime()) / 1000;

    return seconds;
  }

  // console.log(auction);
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
              <p className="w-25 mb-2 text-sm">
                <Countdown
                  duration={diferenceSeconds(
                    new Date(),
                    new Date(auctionData.close_at),
                  )}
                  setFinish={setFinish}
                />
                para terminar
              </p>
            </div>
          </div>
          <p className="w-25 text-end m-3 mr-5">
            {content.length - 1} Lances Feitos
          </p>
        </div>
        <div className="flex flex-col mt-2 items-center">
          <div
            id="messages"
            onChange={scrollToBottom}
            className="flex flex-col h-[250px]  overflow-y-auto"
          >
            {message}
          </div>
          <div className="flex flex-col items-center">
            <p className="m-1">
              Valor Inicial R${auctionData.initial_price} / Atual:{' '}
              {`R$ ${inputMask(parseFloat(actualBid.toString()).toFixed(2))}`}
            </p>
            <p className="m-1">
              Leilão aberto às
              {new Date(auctionData.open_at).toTimeString().split(' ')[0]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
