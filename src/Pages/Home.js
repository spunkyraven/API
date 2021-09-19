import React, { useState } from "react";
import CocktailList from "../component/CocktailList";
import Search from "../component/Search";

const Home = () => {
  const [searchn, setSearchn] = useState("");

  return (
    <div>
      <Search setSearchn={setSearchn} />
      <CocktailList searchn={searchn} />
    </div>
  );
};

export default Home;
