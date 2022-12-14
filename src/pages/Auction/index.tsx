import { useContext, useEffect, useRef, useState } from 'react';
import { getAuctionData } from '../../apiCalls/auction/getAuctionData';
import { auctionById } from '../../apiCalls/auctionById';
import { AuctionBid, ContentReference } from '../../components/AuctionBid';
import Navbar from '../../components/Navbar';
import { PulseCards } from '../../components/PulseCards';
import { UserDataContext } from '../../providers/UserDataProvider';

/**
 * Archive: src/pages/Auction/index.tsx
 *
 * Description: Auction Page
 *
 * Data: 2022/08/19
 *
 * Author: Bruno Barbosa
 */

// Pegar Id na url: <h1>{`Auction:${window.location.pathname}`}</h1>

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

interface AuctionDataLog {
  success: boolean;
  code: number;
  data: {
    chatLog: string[];
    numberOfClientsConnected: number;
  };
}

export const Auction = () => {
  const userInfo = useContext(UserDataContext);

  const auctionID = window.location.pathname.split('/').pop() as string;
  const websocket = new WebSocket(
    `wss://144.202.15.60/wss?auctionID=${auctionID}&userName=${userInfo.userLogged}`,
  );
  const [auctionData, setAuctionData] = useState<RespAuctionType>();

  const [loading, setLoading] = useState(false);

  const auctionBidRef = useRef({} as ContentReference);

  websocket.addEventListener('message', (event) => {
    console.log(event.data);
    // const a: string[] = auctionBidRef.current;
    // const novaArr = a.filter((este, i) => arr.indexOf(este) === i);
    const teste = [...auctionBidRef.current.content, event.data as string];
    // auctionBidRef.current.setContent([...new Set(teste)]);
    auctionBidRef.current.setContent([...teste]);
  });

  useEffect(() => {
    const result = auctionById(auctionID);
    result.then((response) => {
      if (response.success) {
        setAuctionData(response.data);
        const teste2 = getAuctionData(response.data.name);
        teste2.then((data) => {
          if (data.success) {
            console.log(data.data.chatLog);
            auctionBidRef.current.setContent([
              ...data.data.chatLog,
              ...auctionBidRef.current.content,
            ]);
          }
        });
      }
    });
  }, []);

  return (
    <>
      <div className="flex flex-row w-full items-center h-full justify-between">
        <Navbar selected="auction" />
        <div className="grid justify-between ml-5 items-start w-5/6  h-screen">
          {loading ? (
            <>
              <PulseCards />
            </>
          ) : (
            <div className="flex flex-col w-screen justify-start h-screen align-middle items-center">
              <div className="flex flex-row justify-between items-center align-middle w-screen h-fit bg-[#16162D] p-2 mb-3 ">
                <div className="flex ml-10 justify-end items-end">
                  <div className=" mr-2 w-[30px] h-10 bg-no-repeat bg-auction bg-contain border-none" />
                  <p className="not-italic font-bold text-base leading-7 text-white mb-1">
                    Arremata.ai
                  </p>
                </div>
                <div className="flex justify-center items-center align-middle">
                  <p className="text-white mr-2 hidden sm:inline ">
                    {userInfo.userLogged}
                  </p>
                  <div className="bg-white w-10 h-10 rounded-full mr-10"></div>
                </div>
              </div>
              <div className="flex flex-col items-center bg-[#1F1F35] p-10 mb-10 rounded-md min-w-2/3 min-h-5/6">
                {auctionData && (
                  <AuctionBid
                    reference={auctionBidRef}
                    auctionID={auctionID}
                    websocket={websocket}
                    auctionData={auctionData}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
