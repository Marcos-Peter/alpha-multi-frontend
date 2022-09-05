import { useState } from 'react';
import { currencyMask } from '../../mask/currencyMask';
import { AuctionChat } from '../AuctionChat';

interface ContentReference {
  content: string[];
  setContent: React.Dispatch<React.SetStateAction<string[]>>;
}

interface PropTypes {
  auctionID: string;
  websocket: WebSocket;
  reference: React.MutableRefObject<ContentReference>;
}

export const AuctionBid = (props: PropTypes) => {
  const [content, setContent] = useState<string[]>(['Você entrou na sala.']);
  const [bid, setBid] = useState<string>('');

  // eslint-disable-next-line no-param-reassign
  props.reference.current = { content, setContent };

  return (
    <>
      <AuctionChat content={content} />

      <div className="flex flex-col mt-5 bg-white w-[518px] h-[210px] rounded-3xl items-center ">
        <div className="flex flex-col bg-gray-200 w-[458px] h-[180px] mt-3 mb-5 rounded-xl">
          <div className="flex ">
            <div className="ml-6 m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300">
              <p className="text-center text-sm">R$25k</p>
            </div>
            <div className="m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300">
              <p className="text-center text-sm">R$26k</p>
            </div>
            <div className="m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300">
              <p className="text-center text-sm">R$30k</p>
            </div>
            <div className="m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300">
              <p className="text-center text-sm">R$35k</p>
            </div>
            <div className="m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300">
              <p className="text-center text-sm">R$40k</p>
            </div>
            <div className="flex justify-center items-center m-[6px] mt-3 w-[114px] h-7 rounded border-2 bg-[#14181B] hover:cursor-pointer text-center hover:bg-gray-800">
              <p className=" text-xs text-white">Lance Customizado</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-center items-center ml-6 mt-1 w-[288px] h-[50px] rounded-2xl border-2 border-[#BDBDBD]">
              <input
                type="text"
                value={bid}
                onChange={(e) => setBid(`R$ ${currencyMask(e.target.value)}`)}
                className="m-3 h-[40px] bg-gray-200 text-center text-xs text-gray-500 appearance-none border-none"
              />
            </div>
            <div
              onClick={() => {
                if (bid) {
                  props.websocket.send(
                    JSON.stringify({
                      auctionName: props.auctionID,
                      userName: 'Carlos',
                      message: bid,
                    }),
                  );
                }
              }}
              className="hover:cursor-pointer hover:bg-[#3752FE] bg-checkmark bg-no-repeat bg-center ml-3 m-1 w-[50px] h-[50px] rounded-2xl bg-[#3772FE]"
            ></div>
            <div className="hover:cursor-pointer hover:bg-gray-400 bg-x-grey bg-no-repeat bg-center  ml-2 m-1 w-[50px] h-[50px] rounded-2xl border-2 border-[#BDBDBD]"></div>
          </div>
          <div className="hover:cursor-pointer hover:bg-[#3E2F9A] flex justify-center items-center ml-6 mt-1 mb-2 w-[410px] h-[50px] rounded-2xl bg-[#3E3F7A]">
            <p className="text-center text-lg text-white">Dar Lance de R$25k</p>
          </div>
        </div>
      </div>
    </>
  );
};

export type { ContentReference };
