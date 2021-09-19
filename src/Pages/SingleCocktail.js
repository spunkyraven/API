import React from "react";
import { useParams, Link } from "react-router-dom";
export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setloading] = React.useState(false);
  const [Cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setloading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strAlcoholic: info,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
          } = data.drinks[0];
          const ingredients = [strIngredient1, strIngredient2];
          const newCocktail = {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) return <h2 className="section-title">Loading...</h2>;
  if (!Cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      Cocktail;
    return (
      <section className="section cocktail-section">
        <Link className="btn btn-primary" to="/">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>Name : {name}</p>
            <p>Category : {category}</p>
            <p>Info : {info}</p>
            <p>Glass : {glass}</p>
            <p>Instructions : {instructions}</p>
            <p>
              Ingredients :{" "}
              {ingredients.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
