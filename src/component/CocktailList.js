import React, { useState, useEffect } from "react";

import axios from "axios";
import Cocktails from "./Cocktails";

const CocktailList = ({ searchn }) => {
  const [cocktail, setCocktail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUsersAxios();
  }, [searchn]);

  const getUsersAxios = async () => {
    try {
      setIsLoading(true);

      const result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchn}`
      );

      setCocktail(result.data.drinks);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div>
      <>
        <h1>Welcome</h1>

        {isLoading ? (
          <h3>Loading</h3>
        ) : isError ? (
          <h1>Error To fetching Data</h1>
        ) : cocktail == null ? (
          <h1>"no Cocktails matched your search"</h1>
        ) : (
          <div className="idDrink">
            {cocktail.map((el) => (
              <Cocktails cocktail={el} key={el.id} />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default CocktailList;
