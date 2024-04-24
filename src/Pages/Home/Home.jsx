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

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // 1000 milliseconds = 1 seconds

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
          <img src={logo} height={"auto"} width={"211px"} />
          <img src={loader} height={"auto"} width={"111px"} />
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
                <CardDisplayGrocery
                  key={index}
                  border={item.border}
                  backgroundColor={item.backgroundColor}
                  name={item.name}
                  image={item.image}
                />
              ))}
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
            <div className={StylesHome.product}>
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
