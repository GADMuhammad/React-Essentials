import "./CoreConcept.css";

const CoreConcept = ({ img, title, description }) => {
  return (
    <li>
      <img src={img}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
