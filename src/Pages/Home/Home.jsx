import React from "react";
import Hero from "../../Components/Hero/Hero";
import Products from "../../Components/Products/Products";
import Offer from "../../Components/Offer/Offer";
import data_product from "../../assets/data";
import new_collections from "../../assets/new_collections";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

function Home() {
  return (
    <div>
      <Hero />
      <Products title="Popular in women" products_data={data_product} />
      <Offer />
      <Products title="New Collection" products_data={new_collections} />
      <NewsLetter />
    </div>
  );
}

export default Home;
