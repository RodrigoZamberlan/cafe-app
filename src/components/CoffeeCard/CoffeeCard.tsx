import type { ICoffeeCard } from "./CoffeeCardTypes";

const CoffeeCard: React.FC<ICoffeeCard> = ({
  title,
  description,
  price,
  inStock = true,
  imagePath,
}) => {
  return (
    <div className="wrapper-coffee">
      {imagePath && <img src={imagePath} title={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
      {inStock ? <button>Add +</button> : <p>Out of stock</p>}
    </div>
  );
};

export default CoffeeCard;
