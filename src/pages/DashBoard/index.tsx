import { useContext, useState } from 'react';
import { Modal } from '../../components/Modal';
import { Card } from '../../components/Card';
import { PulseCards } from '../../components/PulseCards';
import Navbar from '../../components/Navbar';
import { UserDataContext } from '../../providers/UserDataProvider';

/**
 * Archive: src/pages/Dashboard/index.tsx
 *
 * Description: Dashboard Page
 *
 * Date: 2022/08/22
 *
 * Author: Athos Balmant
 */

const arrayCards = [
  {
    title: 'Fusca Azul Turquesa 1970, motor 1.6 mrx, 2 portas, usado',
    image:
      'https://www.seculo20antigos.com.br/wp-content/uploads/2019/12/4.jpg',
    id: 'kAaRd1',
  },
  {
    title: 'Playstation 5 com Blue-Ray e 1 joystick',
    image:
      'https://cdn.pocket-lint.com/r/s/970x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg',
    id: 'kAaRd2',
  },
  {
    title: 'Xbox Series X, usado, com 1 joystick',
    image:
      'https://s.yimg.com/os/creatr-uploaded-images/2020-11/00ab1e70-1f19-11eb-bbfb-6d1c65d2b15f',
    id: 'kAaRd3',
  },
  {
    title: 'Moto R1 2021, 0km, com 2 pneus novos',
    image:
      'https://http2.mlstatic.com/D_NQ_NP_860478-MLB49997434767_052022-W.jpg',
    id: 'kAaRd4',
  },
  {
    title: 'Casa mobiliada, 3 quartos, 2 banheiros, 1 sala, 1 cozinha',
    image:
      'https://imoveisbsb.com.br/wp-content/uploads/2020/06/01-21.jpg?v=1593083205',
    id: 'kAaRd5',
  },
  {
    title: 'Coleção de Carrinhos de várias marcas',
    image:
      'https://i.pinimg.com/originals/8e/f1/4a/8ef14a976c2f88f385d242e153cd874e.jpg',
    id: 'kAaRd6',
  },
  {
    title: 'Computador Gamer Completo, 1TB de HD, 16GB de RAM, 1TB de SSD',
    image:
      'https://a-static.mlcdn.com.br/1500x1500/pc-completo-gamer-com-monitor-lcd-4gb-wifi-30-jogos-imperiums/lojaoficialimperiums/20657/4f93ca7f9ebe7c52870b45ca56b334a1.jpg',
    id: 'kAaR7',
  },
  {
    title: 'Lote de vacinas contra a Covid-19 Janssen',
    image:
      'https://imagens.ebc.com.br/3fMwHQ9RR4muJJVteDoqp_OtH4A=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2021-03-05t165031z_967749065_mt1usatoday15675318_rtrmadp_3_a-shipment-of-the-johnson-and-johnson-janssen-covid-19.jpg?itok=EhNZpTWD',
    id: 'kAaRd8',
  },
  {
    title: 'Lote de Iphones apreendidos 12 Pro Max, 128GB',
    image:
      'https://macmagazine.com.br/wp-content/uploads/2021/05/25-lote-13-leilao-receita-federal.jpg',
    id: 'kAaRd9',
  },
  {
    title: 'Lote de chá de Erva Cidreira',
    image:
      'https://static.poder360.com.br/2021/11/folha-cannabis-maconha-26nov2021.jpg',
    id: 'kAaRd10',
  },
  {
    title: 'Lote de pneus novos apreendidos',
    image:
      'https://cdn.desapega.net/pictures/22/fa3fb7addbf00c6208bebfbcdb12a00754eb459f44cce015e074f767b1d075.jpg',
    id: 'kAaRd11',
  },
  {
    title: 'Lote de carros apreendidos',
    image:
      'https://www.seculo20antigos.com.br/wp-content/uploads/2019/12/4.jpg',
    id: 'kAaRd12',
  },
  {
    title: 'Lote de carros apreendidos',
    image:
      'https://www.seculo20antigos.com.br/wp-content/uploads/2019/12/4.jpg',
    id: 'kAaRd13',
  },
  {
    title: 'Lote de carros apreendidos',
    image:
      'https://www.seculo20antigos.com.br/wp-content/uploads/2019/12/4.jpg',
    id: 'kAaRd14',
  },
  {
    title: 'Lote de vacinas contra a Covid-19 Janssen',
    image:
      'https://imagens.ebc.com.br/3fMwHQ9RR4muJJVteDoqp_OtH4A=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2021-03-05t165031z_967749065_mt1usatoday15675318_rtrmadp_3_a-shipment-of-the-johnson-and-johnson-janssen-covid-19.jpg?itok=EhNZpTWD',
    id: 'kAaRd8',
  },
  {
    title: 'Lote de Iphones apreendidos 12 Pro Max, 128GB',
    image:
      'https://macmagazine.com.br/wp-content/uploads/2021/05/25-lote-13-leilao-receita-federal.jpg',
    id: 'kAaRd9',
  },
  {
    title: 'Lote de chá de Erva Cidreira',
    image:
      'https://static.poder360.com.br/2021/11/folha-cannabis-maconha-26nov2021.jpg',
    id: 'kAaRd10',
  },
  {
    title: 'Lote de pneus novos apreendidos',
    image:
      'https://cdn.desapega.net/pictures/22/fa3fb7addbf00c6208bebfbcdb12a00754eb459f44cce015e074f767b1d075.jpg',
    id: 'kAaRd11',
  },
  {
    title: 'Lote de carros apreendidos',
    image:
      'https://www.seculo20antigos.com.br/wp-content/uploads/2019/12/4.jpg',
    id: 'kAaRd12',
  },
  {
    title: 'Lote de carros apreendidos',
    image:
      'https://www.seculo20antigos.com.br/wp-content/uploads/2019/12/4.jpg',
    id: 'kAaRd13',
  },
  {
    title: 'Lote de carros apreendidos',
    image:
      'https://www.seculo20antigos.com.br/wp-content/uploads/2019/12/4.jpg',
    id: 'kAaRd14',
  },
];

export const DashBoard = () => {
  const userInfo = useContext(UserDataContext);

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<boolean>(false);

  const [arrayCardsFiltered, setArrayCardsFiltered] = useState(arrayCards);

  const cards = arrayCardsFiltered.map((card, index) => {
    return (
      <Card key={index} image={card.image} title={card.title} id={card.id} />
    );
  });

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
    setArrayCardsFiltered(
      arrayCards.filter((card) => {
        return card.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      }),
    );
  };

  return (
    <div>
      <div className="z-40">
        {modal && (
          <Modal
            title="Adicionar projeto"
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
                    Auction
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
                  <div className="bg-white w-10 h-10 rounded-full mr-10"></div>
                </div>
              </div>

              <div className="ml-16 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center bg-[#1F1F35] p-10 mb-7 rounded-3xl w-72 sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] min-h-5/6 overflow-auto">
                {cards}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
