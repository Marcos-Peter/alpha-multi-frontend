import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Card } from '../../components/Card';
import { PulseCards } from '../../components/PulseCards';
import Navbar from '../../components/Navbar';

/**
 * Archive: src/pages/Dashboard/index.tsx
 *
 * Description: Dashboard Page
 *
 * Date: 2022/08/22
 *
 * Author: Athos Balmant
 */

const teste = () => {
  console.log('parte do Bruno');
};

export const DashBoard = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<boolean>(false);

  const arrayCards = [
    {
      title: 'OBT-Olimpíadas Brasileira de Transplante',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XBaSH1uvmTxm8hFkJCT_lXTh-ooqQiDdeQ&usqp=CAU',
      id: 'kAaRd1',
    },
    {
      title: 'BBB-Big Brother Brasil',
      image:
        'https://www.maisgoias.com.br/cdn-cgi/image/fit=contain,width=960,quality=90,format=auto/https://uploads.emaisgoias.com.br/2022/01/a8686dbf-anonimos-participantes-bbb-22-960x600.jpeg',
      id: 'kAaRd2',
    },
    {
      title: 'Galo',
      image:
        'https://img.freepik.com/vetores-premium/desenho-de-galo-adoravel_74769-26.jpg',
      id: 'kAaRd3',
    },
    {
      title: 'Gatinho',
      image:
        'https://img.freepik.com/vetores-gratis/gato-bonito-sentado-ilustracao-em-vetor-icone-dos-desenhos-animados-conceito-de-icone-de-natureza-animal-isolado-de-vetor-premium-estilo-de-desenho-animado-plano_138676-4148.jpg?w=2000',
      id: 'kAaRd4',
    },
    {
      title: 'Unicórnio',
      image:
        'https://static.vecteezy.com/ti/vetor-gratis/p3/2245453-cute-unicorn-vector-flower-pony-summer-cartoon-kawaii-animals-background-gr%C3%A1tis-vetor.jpg',
      id: 'kAaRd5',
    },
    {
      title: 'Hamister',
      image:
        'https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1623423068/project-covers/001/232/427/1232427-original.?1623423068',
      id: 'kAaRd6',
    },
    {
      title: 'Sushi',
      image:
        'https://cdn.dribbble.com/users/77598/screenshots/17291161/media/4ef4f4799dea12a0d52b824b016a2dda.png?compress=1&resize=400x300&vertical=top',
      id: 'kAaR7',
    },
    {
      title: 'Card 8',
      image:
        'https://cdn.dribbble.com/users/77598/screenshots/17291161/media/4ef4f4799dea12a0d52b824b016a2dda.png?compress=1&resize=400x300&vertical=top',
      id: 'kAaRd8',
    },
    {
      title: 'Card 9',
      image:
        'https://cdn.dribbble.com/users/77598/screenshots/17291161/media/4ef4f4799dea12a0d52b824b016a2dda.png?compress=1&resize=400x300&vertical=top',
      id: 'kAaRd9',
    },
    {
      title: 'Card 10',
      image:
        'https://cdn.dribbble.com/users/77598/screenshots/17291161/media/4ef4f4799dea12a0d52b824b016a2dda.png?compress=1&resize=400x300&vertical=top',
      id: 'kAaRd10',
    },
    {
      title: 'Card 11',
      image:
        'https://cdn.dribbble.com/users/77598/screenshots/17291161/media/4ef4f4799dea12a0d52b824b016a2dda.png?compress=1&resize=400x300&vertical=top',
      id: 'kAaRd11',
    },
  ];

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
    <>
      <div className="z-40">
        {modal && (
          <Modal
            title="Adicionar projeto"
            message=""
            setModal={setModal}
            handleConfirmModal={teste}
          />
        )}
      </div>
      <div className="flex flex-row w-full items-center h-full justify-between">
        <Navbar></Navbar>
        <div className="grid justify-center items-start w-5/6  h-screen  m-10 ml-36  p-7">
          {loading ? (
            <>
              <PulseCards />
            </>
          ) : (
            <>
              <div className="flex flex-row bg-[#1F1F3567] h-fit w-2/3 m-10 rounded-md">
                <div className="w-12 h-12 bg-icon-search bg-no-repeat bg-center" />
                <input
                  id="search"
                  onChange={inputSearch}
                  placeholder="Buscar Projeto"
                  className="border-none bg-transparent text-white"
                />
              </div>
              <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-rows-3 justify-start bg-[#1F1F35] p-10 mb-10 rounded-md min-w-2/3 min-h-5/6 overflow-auto">
                {cards}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

/*
usar caso suma as cores:
#52525B
#00B682
#ED8525

mudar o bg-[#D9D9D9] dá última div acima, salvar e depois ctrl-z e salvar de novo */
