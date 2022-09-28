import { useContext, useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import { Card } from '../../components/Card';
import { PulseCards } from '../../components/PulseCards';
import Navbar from '../../components/Navbar';
import { UserDataContext } from '../../providers/UserDataProvider';
import { getAllAuctions } from '../../apiCalls/auction/getAllAuctions';
import { ProfileCard } from '../../components/ProfileCard';
import { TermsCard } from '../../components/TermsCard';
import { getAuctionsUserWon } from '../../apiCalls/auction/getAuctionsUserWon';
import { UserWonAuctions } from '../../components/UserWonAuctions';

/**
 * Archive: src/pages/Dashboard/index.tsx
 *
 * Description: Dashboard Page
 *
 * Date: 2022/08/22
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

export const Profile = () => {
  const userInfo = useContext(UserDataContext);

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modaTitle, setModalTitle] = useState('Adicionar projeto');
  const [search, setSearch] = useState<boolean>(false);
  const [arrayCardsFiltered, setArrayCardsFiltered] = useState<
    RespAuctionType[]
  >([]);

  const cards = arrayCardsFiltered.map((card, index) => {
    // console.log(new Date() < new Date(card.close_at), card.name);
    return <UserWonAuctions key={index} auction={card} />;
  });

  const arrayCards = async () => {
    const resp = await getAuctionsUserWon();

    if (!resp.success) {
      console.log(resp.message)
      setModalTitle(resp.message);
      setModal(true);
    }
    console.log(resp)
    return resp.data as RespAuctionType[];
  };

  /* const arrayTwoCards: JSX.Element[][] = [];
  const corte = 3;

  for (let i = 0; i < cards.length; i += corte) {
    arrayTwoCards.push(cards.slice(i, i + corte));
  }

  const twoCards = arrayTwoCards.map((twoCard, index) => {
    return (
      <div key={index} className="grid md:flex relative">
        {twoCard}
      </div>
    );
  }); */

  const inputSearch = (event: any) => {
    if (event.target.value) {
      setSearch(true);
    } else {
      setSearch(false);
    }
    setArrayCardsFiltered(
      arrayCardsFiltered.filter((card) => {
        return card.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      }),
    );
  };

  useEffect(() => {
    if (!search) {
      const teste = arrayCards();
      teste.then((array) => {
        if (array) {
          setArrayCardsFiltered(array);
        } else {
          setArrayCardsFiltered([]);
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="z-40">
        {modal && (
          <Modal
            title={modaTitle}
            message=""
            setModal={setModal}
            handleConfirmModal={() => console.log('teste')}
          />
        )}
      </div>
      <div className="flex flex-row w-full items-center h-full justify-between">
        <Navbar selected="profile" />
        <div className="grid justify-between items-start w-5/6 h-screen">
          {loading ? (
            <>
              <PulseCards />
            </>
          ) : (
            <div className="flex flex-col w-screen h-screen items-start">
              <div className="flex flex-row justify-between items-center align-middle w-screen h-fit bg-[#16162D] p-2 mb-3 ">
                <div className="flex ml-10 justify-end items-end">
                  <div className="ml-5 mr-2 w-[30px] h-10 bg-no-repeat bg-auction bg-contain border-none" />
                  <p className="not-italic font-bold text-base leading-7 text-white mb-1">
                    Auction
                  </p>
                </div>
                <div className="flex justify-center items-center align-middle">
                  <p className="text-white mr-2 hidden sm:inline ">
                    {userInfo.userLogged}
                  </p>
                  <div className="flex items-center justify-center bg-white w-10 h-10 rounded-full mr-10">
                    <h1 className='font-body font-bold text-desaturatedBlue text-xl'>{userInfo.userLogged[0].toUpperCase()}</h1>
                  </div>
                </div>
              </div>
              <ProfileCard />
              <div className="ml-20 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center bg-[#1F1F35] p-10 mb-7 rounded-3xl w-72 sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] min-h-5/6">
                <h1 className="absolute font-body font-bold text-desaturatedBlue text-lg text-white">Meus Arremates</h1>
                <div className="ml-20 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center p-10 mb-7 rounded-3xl w-72 sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] min-h-5/6 overflow-auto">
                  {cards}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

