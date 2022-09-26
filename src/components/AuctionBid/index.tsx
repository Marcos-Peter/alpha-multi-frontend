import { useContext, useEffect, useState } from 'react';
import { isAuctionClosed } from '../../apiCalls/auction/isAuctionClosed';
import { inputMask } from '../../masks/inputMask';
import { UserDataContext } from '../../providers/UserDataProvider';
import { AuctionChat } from '../AuctionChat';
import { ModalMessage } from '../ModalMessage';

interface ContentReference {
  content: string[];
  setContent: React.Dispatch<React.SetStateAction<string[]>>;
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

interface PropTypes {
  auctionID: string;
  websocket: WebSocket;
  reference: React.MutableRefObject<ContentReference>;
  auctionData: RespAuctionType;
}
interface LastBidType {
  name: string;
  bid: string;
}
export const AuctionBid = (props: PropTypes) => {
  const [content, setContent] = useState<string[]>(['Você entrou na sala.']);
  const [bid, setBid] = useState<string>('');
  const [actualBid, setActualBid] = useState<number>(
    Number(props.auctionData.initial_price),
  );
  const userInfo = useContext(UserDataContext);
  const [lastBid, setLastBid] = useState<LastBidType>({ name: '', bid: '' });

  const [finish, setFinish] = useState<boolean>(false);
  const [modalMessageEnd, setModalMessageEnd] = useState<boolean>(false);
  const [modalWrongValue, setWrongValue] = useState<boolean>(false);

  useEffect(() => {
    if (finish) {
      const verifyState = isAuctionClosed(props.auctionData.name);
      verifyState.then((resp) => {
        if (resp.data) {
          setModalMessageEnd(true);
        }
      });
    }
  }, [finish]);

  // eslint-disable-next-line no-param-reassign
  props.reference.current = { content, setContent };

  function bidByPercentage(percentage: string) {
    const decimal = Number(percentage.split('%')[0]);

    if (decimal >= 10) {
      const result = actualBid * Number(`0.${decimal}`) + actualBid;
      setBid(`R$ ${inputMask(parseFloat(result.toString()).toFixed(2))}`);
    } else {
      const result = actualBid * Number(`0.0${decimal}`) + actualBid;
      setBid(`R$ ${inputMask(parseFloat(result.toString()).toFixed(2))}`);
    }
  }
  function getNameAndLastBid(position: number) {
    const name = content[content.length - position].split('d')[0].trim();
    const lastbid = content[content.length - position].split('R$ ')[1];
    setActualBid(Number(lastbid));
    setLastBid({ name, bid: lastbid });
  }
  useEffect(() => {
    if (content.length > 1) {
      const lastbid = content[content.length - 1].split('R$ ')[1];
      if (lastbid === undefined) {
        getNameAndLastBid(2);
      } else {
        getNameAndLastBid(1);
      }
    }
  }, [content]);
  return (
    <>
      {modalMessageEnd && (
        <ModalMessage
          title="Fim do Leilão"
          message={`Ganhador: ${lastBid.name} Valor: ${lastBid.bid}`}
          endpoint="/dashboard"
          setModal={setModalMessageEnd}
        />
      )}
      {modalWrongValue && (
        <ModalMessage
          title="Valor Inválido!"
          message={`Parece que você tentou dar um lance menor do que o valor atual, tente novamente! Dica: use nosso botões de porcentagem para facilitar seu novo lance`}
          setModal={setWrongValue}
        />
      )}
      <AuctionChat
        content={content}
        actualBid={actualBid}
        auctionData={props.auctionData}
        setFinish={setFinish}
      />

      <div className="flex flex-col mt-5 bg-white w-[518px] h-[210px] rounded-3xl items-center ">
        {lastBid.name === userInfo.userLogged ? (
          <div className="flex flex-col justify-center bg-gray-200 w-[458px] h-[180px] mt-3 mb-5 rounded-xl items-center">
            <p>Aguarde o próximo lance.</p>
          </div>
        ) : (
          <div className="flex flex-col bg-gray-200 w-[458px] h-[180px] mt-3 mb-5 rounded-xl">
            <div className="flex ">
              <div
                onClick={() => bidByPercentage(`10%`)}
                className="ml-6 m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300"
              >
                <p className="text-center text-sm">10%</p>
              </div>
              <div
                onClick={() => bidByPercentage(`15%`)}
                className="m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300"
              >
                <p className="text-center text-sm">15%</p>
              </div>
              <div
                onClick={() => bidByPercentage(`20%`)}
                className="m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300"
              >
                <p className="text-center text-sm">20%</p>
              </div>
              <div
                onClick={() => bidByPercentage(`25%`)}
                className="m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300"
              >
                <p className="text-center text-sm">25%</p>
              </div>
              <div
                onClick={() => bidByPercentage(`30%`)}
                className="m-[6px] mt-3 w-12 h-6 rounded border-2 border-[#BDBDBD] hover:cursor-pointer text-center hover:bg-gray-300"
              >
                <p className="text-center text-sm">30%</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center items-center ml-6 mt-1 w-[288px] h-[50px] rounded-2xl border-2 border-[#BDBDBD]">
                <input
                  type="text"
                  value={bid}
                  onChange={(e) => setBid(`R$ ${inputMask(e.target.value)}`)}
                  className="m-3 h-[40px] bg-gray-200 text-center text-xs text-gray-500 appearance-none border-none"
                />
              </div>
              <div
                onClick={() => {
                  if (bid) {
                    if (lastBid.name !== userInfo.userLogged) {
                      if (Number(bid.split('R$ ')[1]) > actualBid) {
                        props.websocket.send(
                          JSON.stringify({
                            auctionID: props.auctionID,
                            username: userInfo.userLogged,
                            message: bid,
                          }),
                        );
                      } else {
                        setWrongValue(true);
                      }
                    } else {
                      alert('aguarde a sua vez');
                    }

                    setBid('');
                  }
                }}
                placeholder="Digite um valor"
                className="hover:cursor-pointer hover:bg-[#3752FE] bg-checkmark bg-no-repeat bg-center ml-3 m-1 w-[50px] h-[50px] rounded-2xl bg-[#3772FE]"
              ></div>
              <div
                onClick={() => setBid('')}
                className="hover:cursor-pointer hover:bg-gray-400 bg-x-grey bg-no-repeat bg-center  ml-2 m-1 w-[50px] h-[50px] rounded-2xl border-2 border-[#BDBDBD]"
              ></div>
            </div>
            <div
              onClick={() => bidByPercentage(`5%`)}
              className="hover:cursor-pointer hover:bg-[#3E2F9A] flex justify-center items-center ml-6 mt-1 mb-2 w-[410px] h-[50px] rounded-2xl bg-[#3E3F7A]"
            >
              <p className="text-center text-lg text-white">Dar Lance de 5%</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export type { ContentReference };
