import { useContext, useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import { Card } from '../../components/Card';
import { PulseCards } from '../../components/PulseCards';
import Navbar from '../../components/Navbar';
import { UserDataContext } from '../../providers/UserDataProvider';
import { getAllAuctions } from '../../apiCalls/auction/getAllAuctions';

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

export const DashBoard = () => {
  const userInfo = useContext(UserDataContext);

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modaTitle, setModalTitle] = useState('Adicionar projeto');
  const [search, setSearch] = useState<boolean>(false);
  const [arrayCardsFiltered, setArrayCardsFiltered] = useState<
    RespAuctionType[]
  >([]);
  // const [arrayActiveCards, setArrayActiveCards] = useState<RespAuctionType[]>(

  const cards = arrayCardsFiltered.map((card, index) => {
    // console.log(new Date() < new Date(card.close_at), card.name);
    if (new Date() < new Date(card.close_at)) {
      return <Card key={index} auction={card} />;
    }
    return null;
  });

  const arrayCards = async () => {
    const resp = await getAllAuctions();

    if (!resp.success) {
      setModalTitle(resp.message);
      setModal(true);
    }

    return resp.data as RespAuctionType[];
  };

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

  const activesFilterCards = () => {
    const teste = arrayCards();
    teste.then((array) => {
      if (array) {
        setArrayCardsFiltered(
          array.filter((card) => {
            if (new Date(card.open_at) <= new Date()) {
              return card;
            }
          }),
        );
      }
    });
  };

  const soonFilterCards = async () => {
    const teste = arrayCards();
    teste.then((array) => {
      if (array) {
        setArrayCardsFiltered(
          array.filter((card) => {
            if (new Date(card.open_at) >= new Date()) {
              return card;
            }
          }),
        );
      }
    });
  };

  const allFilterCards = () => {
    const teste = arrayCards();
    teste.then((array) => {
      if (array) {
        setArrayCardsFiltered(array);
      }
    });
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
  }, [search]);

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
        <Navbar selected="dashboard" />
        <div className="grid justify-between items-start w-5/6 h-screen">
          {loading ? (
            <>
              <PulseCards />
            </>
          ) : (
            <div className="flex flex-col w-screen justify-start h-screen align-middle items-center">
              <div className="flex flex-row justify-between items-center align-middle w-screen h-fit bg-[#16162D] p-2 mb-3 ">
                <div className="flex ml-10 justify-end items-end">
                  <div className="ml-5 mr-2 w-[30px] h-10 bg-no-repeat bg-auction bg-contain border-none" />
                  <p className="not-italic font-bold text-base leading-7 text-white mb-1">
                    Arremata.ai
                  </p>
                </div>
                <div className="flex flex-row bg-[#1F1F3567] align-middle h-fit sm:w-1/3 w-[260px] ml-1 rounded-lg bg-[#202043]">
                  <div className="w-12 h-12 bg-lupa-white bg-no-repeat bg-center " />
                  <input
                    id="search"
                    onChange={inputSearch}
                    placeholder="Buscar Projeto"
                    className="border-none bg-transparent text-white"
                  />
                </div>
                <div className="flex justify-center items-center align-middle">
                  <p className="text-white mr-2 hidden sm:inline ">
                    {userInfo.userLogged}
                  </p>
                  <div className="flex items-center justify-center bg-white w-10 h-10 rounded-full mr-10">
                    <h1 className="font-body font-bold text-desaturatedBlue text-xl">
                      {userInfo.userLogged[0].toUpperCase()}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="ml-16 flex flex-col bg-[#1F1F35] px-14 py-10 mb-7 rounded-3xl w-fit h-5/6 ">
                <div className=" flex w-1/4 justify-between  mb-3">
                  <div
                    className="m-2 cursor-pointer hover:bg-slate-700 flex justify-center items-center border-2 w-fit px-5 h-12 rounded-lg border-[#D890DE] text-white"
                    onClick={() => allFilterCards()}
                  >
                    Todos
                  </div>
                  <div
                    className="m-2 cursor-pointer hover:bg-slate-700 flex justify-center items-center border-2 w-fit px-5 h-12 rounded-lg border-[#D890DE] text-white"
                    onClick={() => activesFilterCards()}
                  >
                    Ativos
                  </div>
                  <div
                    className="m-2 cursor-pointer hover:bg-slate-700 flex justify-center items-center border-2 w-fit px-3 h-12 rounded-lg border-[#D890DE] text-white whitespace-nowrap"
                    onClick={() => soonFilterCards()}
                  >
                    Em Breve
                  </div>
                </div>
                <div className=" grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center w-[288px] sm:w-[480px] md:w-[680px] lg:w-[880px] xl:w-[1080px] 2xl:w-[1280px] overflow-auto  ">
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
