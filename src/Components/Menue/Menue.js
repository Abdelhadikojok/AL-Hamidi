import { useEffect, useState, useCallback, useMemo } from "react";

import separator from "../../assets/separator.svg";
import shape5 from "../../assets/shape-5.png";
import shape6 from "../../assets/shape-6.png";
import Loader from "../Preloader/loader";

import menuData from '../../data.json';

function HomeMenue() {
  const [items, setItemsData] = useState([]);
  const [categories, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set initial categories and items from local data
    setCategoriesData(menuData);
    setItemsData(menuData[0]?.items || []);
    setLoading(false);
  }, []);

  const getItems = useCallback((categoryName) => {
    setLoading(true);
    // Filter by category name instead of ID
    const category = menuData.find(cat => cat.name === categoryName) || menuData[0];
    setItemsData(category.items);
    setLoading(false);
  }, []);

  const Categories = useMemo(
    () =>
      categories.map((elem) => (
        <button
          key={elem.name} // Use name as key since we don't have _id
          className="category-card"
          onClick={() => {
            getItems(elem.name);
          }}
        >
          <img
            src={require(`../../assets/images/items/${elem.categoreyImage}`)}
            alt={elem.name}
            width="30px"
          />
          <p className="category-name">{elem.name}</p>
        </button>
      )),
    [categories, getItems]
  );

  const Items = useMemo(
    () =>
      items.map((elem) => (
        <div className="item-card" key={elem.name}> {/* Use name as key since we don't have _id */}
          <div className="item-image">
            <img 
              src={elem.productImage ? require(`../../assets/images/items/${elem.productImage}`) : ''} 
              alt={elem.name} 
            />
            <div className="img-overlay"></div>
          </div>
          <div className="item-content">
            <div className="title-wrapper">
              <p className="name">{elem.name}</p>
              <p className="line-separator"></p>
              <p className="price">{elem.price}ل.ل</p>
            </div>
            <div className="discreption">
              {elem.type} , {elem.description}
            </div>
          </div>
        </div>
      )),
    [items]
  );

  const loader = (
    <div style={{ margin: "40px auto", width: "fit-content" }}>
      <Loader />
    </div>
  );

  return (
    <>
      <div className="home-menue" id="Menu">
        <div className="container">
          <div className="special-sections">
            <p>SPECIAL SELECTION</p>
            <img src={separator} alt="separator" />
          </div>
          <div className="section-name">
            <h2 className="headline-1 section-title text-center">
              Delicious Menu
            </h2>
          </div>
          <div className="categories-slider">{Categories}</div>
          {loading ? loader : <div className="menue-items">{Items}</div>}
          <img
            src={shape5}
            width="921"
            height="1036"
            loading="lazy"
            alt="shape"
            className="shape shape-2 move-anim"
          />
          <img
            src={shape6}
            width="921"
            height="1036"
            loading="lazy"
            alt="shape"
            className="shape shape-3 move-anim"
          />
        </div>
      </div>
    </>
  );
}

export default HomeMenue;
