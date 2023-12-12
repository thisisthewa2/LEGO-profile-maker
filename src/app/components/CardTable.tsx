import { useEffect, useState } from 'react';
import Card from './Card';

interface CardTableProps {
  cards: { title: string; description: string }[];
}

const CardTable = ({ cards }: CardTableProps) => {
  const [cardsPerRow, setCardsPerRow] = useState<number>(3);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 640) {
        setCardsPerRow(1);
      } else if (viewportWidth < 768) {
        setCardsPerRow(2);
      } else {
        setCardsPerRow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (index: number) => {
    if (selectedCardIndex === index) {
      // 이미 선택된 카드를 다시 클릭하면 선택 해제
      setSelectedCardIndex(null);
    } else {
      // 새로운 카드를 클릭하면 선택 상태 변경
      setSelectedCardIndex(index);
    }
  };

  const renderRows = () => {
    if (!cards || !cards.length) {
      return null;
    }

    const rows = [];
    for (let i = 0; i < cards.length; i += cardsPerRow) {
      const rowCards = cards.slice(i, i + cardsPerRow);

      const row = (
        <div key={`row-${i}`} className="flex justify-center space-x-4 mb-4">
          {rowCards.map((card, index) => (
            <Card
              key={`card-${i + index}`}
              title={card.title}
              description={card.description}
              onClick={() => handleCardClick(i + index)}
              isSelected={selectedCardIndex === i + index}
            />
          ))}
        </div>
      );

      rows.push(row);
    }
    return rows;
  };

  return <div className="container mx-auto mt-8">{renderRows()}</div>;
};

export default CardTable;
