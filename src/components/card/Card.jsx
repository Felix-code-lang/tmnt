import "./card.scss";

const Card = ({title, img, desc}) => {
  return (
    <div className="catalog-item">
      <h3>{title}</h3>
      <img src={img} alt="Ninja Turtle" />
      <p>{desc}</p>
    </div>
  );
};

export default Card;
