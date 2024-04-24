import React, { useState, useEffect } from "react";
import StylesHome from "./Home.module.css";
import BottomNav from "../../Components/BottomNav/BottomNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Silider from "../../Components/Silider/Silider";
import MidBar from "../../Components/MidBar/MidBar";
import CardDisplayGrocery from "../../Components/Cards/CardDisplayGrocery/CardDisplayGrocery";
import CardDisplaySellers from "../../Components/Cards/CardDisplaySellers/CardDisplaySellers";
import CardDisplayGroceryItems from "../../Components/Cards/CardDisplayGroceryItems/CardDisplayGroceryItems";
import groceriesProduct from "../../assets/data.json";
import category from "../../assets/categoriesdata.json";
import sellerData from "../../assets/sellerdata.json";
import LogoCircle from "../../Components/LogoCircle/LogoCircle";
import logo from "../../assets/putatoeLogo.png";
import loader from "../../assets/loader.svg";
import fruitsNveg from "../../assets/fruitsNveg.json";
import bakery from "../../assets/bakery.json";
import dairy from "../../assets/dairy.json";
import drinks from "../../assets/drinks.json";
import oil from "../../assets/oil.json";
import { HashLink } from "react-router-hash-link";
const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3000 milliseconds = 1 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#00838f",
          }}
        >
          <img src={logo} height={"auto"} width={"211px"} alt="logo" />
          <img src={loader} height={"auto"} width={"111px"} alt="loader" />
        </div>
      ) : (
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
              {category.map((item, index) => (
                <HashLink smooth to={`/#${index}`} key={index}>
                  <CardDisplayGrocery
                    border={item.border}
                    backgroundColor={item.backgroundColor}
                    name={item.name}
                    image={item.image}
                  />
                </HashLink>
              ))}
            </div>
            <div className={StylesHome.textShop}>
              <br />
              Best Sellers For Daily Needs
            </div>
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
              {sellerData.map((seller, index) => (
                <CardDisplaySellers
                  key={index}
                  border={seller.border}
                  backgroundColor={seller.backgroundColor}
                  sellerName={seller.sellerName}
                  image={seller.image}
                  address={seller.address}
                  description={seller.description}
                />
              ))}
            </div>
            <div
              className={StylesHome.textGrocery} id="0">
              Fresh Fruits & Vegetable
            </div>
            <div className={StylesHome.product}>
              {fruitsNveg.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
            <div className={StylesHome.textGrocery} id="1">Cooking Oil & Ghee</div>
            <div className={StylesHome.product}>
              {oil.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
            <div className={StylesHome.textGrocery} id="2">Bakery & Snacks</div>
            <div className={StylesHome.product}>
              {bakery.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
            <div className={StylesHome.textGrocery} id="3">Dairy & Eggs</div>
            <div className={StylesHome.product}>
              {dairy.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
            <div className={StylesHome.textGrocery} id="4">Beverages</div>
            <div className={StylesHome.product}>
              {drinks.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
            <div className={StylesHome.textGrocery} id="5">All Products</div>
            <div className={StylesHome.productAll}>
              {groceriesProduct.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
              {fruitsNveg.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
              {oil.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
              {bakery.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
              {dairy.map((product, index) => (
                <CardDisplayGroceryItems
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
              {drinks.map((product, index) => (
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
            <LogoCircle />
          </div>
          <div>
            <BottomNav />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
