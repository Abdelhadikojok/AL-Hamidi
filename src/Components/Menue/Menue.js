import { useEffect, useState } from "react";

import separator from "../../assets/separator.svg";
import shape5 from "../../assets/shape-5.png";
import shape6 from "../../assets/shape-6.png";
import Loader from "../Preloader/loader";

function HomeMenue() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [items, setItemsData] = useState([]);
  const [categories, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Categoriesresponse = await fetch(`${apiUrl}/categories`);

        if (!Categoriesresponse.ok) {
          throw new Error("Network Categoriesresponse was not ok");
        }

        const CategoriesResult = await Categoriesresponse.json();
        setCategoriesData(CategoriesResult);
        console.log(categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("bla samir a5ad e5ti");
    getItems("65569d8cf4a8d4687d535d8d");
  }, []);

  async function getItems(id) {
    try {
      const Itemsresponse = await fetch(
        `${apiUrl}/itemsCategory?categoryId=${id}`
      );

      if (!Itemsresponse.ok) {
        throw new Error("Network Itemsresponse was not ok");
      }

      const Itemsresult = await Itemsresponse.json();
      setItemsData(Itemsresult);

      console.log(items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  const Categories = categories.map((elem) => (
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
  ));

  const Items = items.map((elem) => (
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
  ));

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
