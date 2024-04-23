import React from "react";
import StylesHome from "./Home.module.css";
import BottomNav from "../../Components/BottomNav/BottomNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Silider from "../../Components/Silider/Silider";
import MidBar from "../../Components/MidBar/MidBar";
import CardDisplayGrocery from "../../Components/Cards/CardDisplayGrocery/CardDisplayGrocery";
import CardDisplaySellers from "../../Components/Cards/CardDisplaySellers/CardDisplaySellers";
import CardDisplayGroceryItems from "../../Components/Cards/CardDisplayGroceryItems/CardDisplayGroceryItems";
import groceriesProduct from "../../assets/data.json";

const Home = () => {
  return (
    <>
      <div className={StylesHome.container}>
        <div className={StylesHome.SearchBar}>
          <SearchBar />
        </div>
        <div className={StylesHome.top}></div>
        <div>
          <Silider />
        </div>
        <div>
          <MidBar />
        </div>
        <div className={StylesHome.shop}>
          <div className={StylesHome.textShop}>
            <br />
            SHOP BY CATEGORY
          </div>
          <div className={StylesHome.textGrocery}>Grocery</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "nowrap",
              gap: "11px",
              width: "100vw",
              overflowX: "scroll",
            }}
          >
            <CardDisplayGrocery
              border={"1px solid rgba(83, 177, 117, 0.7)"}
              backgroundColor={"rgba(83, 177, 117, 0.1)"}
              name={"Frash Fruits & Vegetable"}
              image={
                "https://www.transparentpng.com/thumb/vegetables/all-fruits-and-vegetables-in-basket-background-transparent-veD4qx.png"
              }
            />
            <CardDisplayGrocery
              border={"1px solid rgba(248, 164, 76, 0.7)"}
              backgroundColor={"rgba(248, 164, 76, 0.1)"}
              name={"Cooking Oil & Ghee"}
              image={
                "https://purepng.com/public/uploads/large/purepng.com-sunflower-oilsunflower-oilcooking-oilfrying-oilnon-volatile-oil-1411529832890igm2q.png"
              }
            />
            <CardDisplayGrocery
              border={"1px solid #d3b0e0"}
              backgroundColor={"rgba(211, 176, 224, 0.25)"}
              name={"Bakery & Snacks"}
              image={
                "https://png.pngtree.com/png-vector/20231213/ourmid/pngtree-gourmet-delicious-bakery-food-snacks-satiating-croissant-png-image_11322979.png"
              }
            />
            <CardDisplayGrocery
              border={"1px solid #fde598"}
              backgroundColor={"rgba(253, 229, 152, 0.25)"}
              name={"Dairy & Eggs"}
              image={
                "https://png.pngtree.com/png-clipart/20230504/original/pngtree-3d-food-bread-milk-eggs-three-dimensional-effect-png-image_9136670.png"
              }
            />
            <CardDisplayGrocery
              border={"1px solid rgba(83, 177, 117, 0.7)"}
              backgroundColor={"rgba(83, 177, 117, 0.1)"}
              name={"Beverages"}
              image={
                "https://www.freepnglogos.com/uploads/drinks-png/drinks-transparent-mojito-cocktail-png-clipart-best-web-clipart-6.png"
              }
            />
          </div>
          <div className={StylesHome.textShop}>
            <br />
            Best Sellers For Daily Needs
          </div>
          <div className={StylesHome.textGrocery}>Beverages</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "nowrap",
              gap: "11px",
              width: "100vw",
              overflowX: "scroll",
            }}
          >
            <CardDisplaySellers
              border={"1px solid rgba(83, 177, 117, 0.7)"}
              backgroundColor={"rgba(83, 177, 117, 0.1)"}
              sellerName={"Aruna Super Store"}
              image={
                "https://thumbs.dreamstime.com/b/vector-cartoon-illustration-supermarket-grocery-cart-healthy-organic-food-isolated-white-background-caring-199693380.jpg"
              }
              address={"Chandigarh, India"}
              description={"Fresh and Healthy"}
            />
            <CardDisplaySellers
              border={"1px solid rgba(83, 177, 117, 0.7)"}
              backgroundColor={"rgba(83, 177, 117, 0.1)"}
              sellerName={"Varuna Super Store"}
              image={
                "https://thumbs.dreamstime.com/b/vector-cartoon-illustration-supermarket-grocery-cart-healthy-organic-food-isolated-white-background-caring-199693380.jpg"
              }
              address={"delhi, India"}
              description={"food and Health"}
            />
            <CardDisplaySellers
              border={"1px solid rgba(83, 177, 117, 0.7)"}
              backgroundColor={"rgba(83, 177, 117, 0.1)"}
              sellerName={"General Super Store"}
              image={
                "https://thumbs.dreamstime.com/b/vector-cartoon-illustration-supermarket-grocery-cart-healthy-organic-food-isolated-white-background-caring-199693380.jpg"
              }
              address={"Harayana, India"}
              description={"Fresh and Healthy"}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "11px",
              width: "70vw",
            }}
          >
            {groceriesProduct.map((product, index) => (
              <CardDisplayGroceryItems
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
        <div className={StylesHome.bottom}></div>
        <div>
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default Home;
