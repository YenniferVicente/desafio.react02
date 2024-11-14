import React from 'react';

const CardPizza = ({ name, ingredients, price,img }) => {
  return (
    <div className="card card-pizza">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title mb-3">Pizza{name}</h5>
        <div className="text-center">
        <p className="mb-0">Ingredientes:</p>
        <p className="card-text mb-0">
          🍕 {ingredients.join(", ")}.
        </p>
      </div>
      <h4 className="text-center">
        Precio: ${price.toLocaleString()}
      </h4>
        <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-outline-dark btn-ver-mas">Ver más 👀</button>
        <button className="btn btn-dark btn-añadir">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
