interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
  isSelected: boolean;
}

const Card = ({ title, description, onClick, isSelected }: CardProps) => {
  const buttonClasses = `bg-slate rounded-lg shadow-md p-4 ${
    isSelected ? 'border-2 border-legored' : ''
  }`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={{ outline: 'none' }}
    >
      <h2 className="text-xl text-black font-semibold mb-2">{title}</h2>
      <p className="text-black">{description}</p>
    </button>
  );
};

export default Card;
