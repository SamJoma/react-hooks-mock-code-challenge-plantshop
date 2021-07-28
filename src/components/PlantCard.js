import React,{useState} from "react";

function PlantCard({plant}) {
const [inStock, setinStaock] = useState(true)


  const{image,price,name}=plant

  function handleToggleClick(){
    setinStaock(instock=> !inStock)
  }
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
