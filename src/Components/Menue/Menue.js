import { useEffect, useState, useCallback, useMemo } from "react";

import separator from "../../assets/separator.svg";
import shape5 from "../../assets/shape-5.png";
import shape6 from "../../assets/shape-6.png";
import Loader from "../Preloader/loader";

function HomeMenue() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [items, setItemsData] = useState([]);
  const [categories, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItems = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const Itemsresponse = await fetch(
          `${apiUrl}/itemsCategory?categoryId=${id}`
        );

        if (!Itemsresponse.ok) {
          throw new Error("Network Itemsresponse was not ok");
        }

        const Itemsresult = await Itemsresponse.json();
        setItemsData(Itemsresult);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
    [apiUrl]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [Categoriesresponse, Itemsresponse] = await Promise.all([
          fetch(`${apiUrl}/categories`),
          fetch(`${apiUrl}/itemsCategory?categoryId=65569d8cf4a8d4687d535d8d`),
        ]);

        if (!Categoriesresponse.ok || !Itemsresponse.ok) {
          throw new Error("Network response was not ok");
        }

        const [CategoriesResult, Itemsresult] = await Promise.all([
          Categoriesresponse.json(),
          Itemsresponse.json(),
        ]);

        setCategoriesData(CategoriesResult);
        setItemsData(Itemsresult);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, getItems]);

  const Categories = useMemo(
    () =>
      categories.map((elem) => (
        <button
          key={elem._id}
          className="category-card"
          onClick={() => {
            getItems(elem._id);
          }}
        >
          <img
            src={`${apiUrl}/api/${elem.categoreyImage}`}
            alt={elem.name}
            width="30px"
          />
          <p className="category-name">{elem.name}</p>
        </button>
      )),
    [categories, apiUrl, getItems]
  );

  const Items = useMemo(
    () =>
      items.map((elem) => (
        <div className="item-card" key={elem._id}>
          <div className="item-image">
            <img src={`${apiUrl}/api/${elem.productImage}`} alt={elem.name} />
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
    [items, apiUrl]
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
