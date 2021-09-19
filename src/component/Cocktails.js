import React from "react";
import "./Cocktail.css";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import { Link } from "react-router-dom";
const Cocktails = ({ cocktail }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <span className="card-number card-circle subtle">
              {cocktail.idDrink}
            </span>
            <span className="card-author subtle">{cocktail.strCategory}</span>
            <h2 className="card-title">{cocktail.strDrink}</h2>
            <span className="card-description subtle">
              {cocktail.strInstructions}
            </span>

            <Link
              className="btn btn-primary btn-details"
              to={`/Home/Try/${cocktail.idDrink}`}
            >
              Details
            </Link>
            <span className="card-tag card-circle subtle">
              <LocalBarIcon />
            </span>
          </div>
          <img
            src={cocktail.strDrinkThumb}
            alt="cocktail"
            className="card-media"
            style={{ width: "50%" }}
          />
        </div>
        <div className="card-shadow"></div>
      </div>
    </div>
  );
};

export default Cocktails;
