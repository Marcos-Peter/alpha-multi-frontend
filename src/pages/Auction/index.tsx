import { useRef, useState } from 'react';
import { AuctionBid, ContentReference } from '../../components/AuctionBid';
import Navbar from '../../components/Navbar';
import { PulseCards } from '../../components/PulseCards';

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
export const Auction = () => {
  const auctionID = window.location.pathname.split('/').pop() as string;
  const websocket = new WebSocket(
    `ws://localhost:8080/ws?auctionName=${auctionID}`,
  );
  const [loading, setLoading] = useState(false);

  const auctionBidRef = useRef({} as ContentReference);

  websocket.addEventListener('message', (event) => {
    auctionBidRef.current.setContent([
      ...auctionBidRef.current.content,
      event.data as string,
    ]);
  });

  return (
    <>
      <div className="flex flex-row w-full items-center h-full justify-between">
        <Navbar />
        <div className="grid justify-center items-start w-5/6  h-screen  m-10 ml-36  p-7">
          {loading ? (
            <>
              <PulseCards />
            </>
          ) : (
            <>
              <div className="flex flex-col items-center bg-[#1F1F35] p-10 mb-10 rounded-md min-w-2/3 min-h-5/6">
                <AuctionBid
                  reference={auctionBidRef}
                  auctionID={auctionID}
                  websocket={websocket}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
