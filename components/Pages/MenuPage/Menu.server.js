import Image from "next/image";
import TopBar from "@/components/TopBar";
import { useEffect, useRef, useState } from "react";
import Line from "@/components/Line";
import { styles } from "@/public/js/styles";
import TextLoader from "@/components/Loaders/TextLoader";
import axios from "axios";
import dynamic from "next/dynamic";
import Alert from "@/components/Alert";
import AddOne from "./AddOne";

const Cart = dynamic(() => import("./Cart"));

export default function Menu({ businessCode }) {
  const [currentCat, setCurrentCat] = useState("");
  const [currency, setCurrency] = useState("");
  const [exRate, setExRate] = useState(1);
  const sectionsRefs = useRef({});
  const [categories, setCategories] = useState([0, 0, 0]);
  const [products, setProducts] = useState([0, 0]);
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState("");
  const [addOne, setAddOne] = useState("");

  const firebaseLink =
    "https://firebasestorage.googleapis.com/v0/b/za-menu-images.appspot.com/o/";

  useEffect(() => {
    businessCode &&
      axios
        .get(`/api/categories?businessCode=${businessCode}`)
        .then((res) => Array.isArray(res.data) && setCategories(res.data));

    businessCode &&
      axios
        .get(`/api/products?businessCode=${businessCode}`)
        .then((res) => Array.isArray(res.data) && setProducts(res.data));

    businessCode &&
      axios
        .get(`/api/business/currency?businessCode=${businessCode}`)
        .then((res) => {
          res?.data?.currency && setCurrency(res.data.currency);
          res?.data?.exRate && setExRate(res.data.exRate);
        });
  }, [businessCode]);

  useEffect(() => {
    const sections = document.querySelectorAll(".title");
    categories &&
      categories.map(
        (category, i) =>
          (sectionsRefs.current = {
            ...sectionsRefs.current,
            [category.name]: sections[i]
          })
      );

    categories && setCurrentCat(categories?.[0]?.name);
  }, [categories]);

  return (
    <>
      <Line />
      <TopBar
        sectionsRefs={sectionsRefs}
        categories={categories}
        currentCat={currentCat}
        setCurrentCat={setCurrentCat}
      />
      <div>
        {categories?.map((category, i) => (
          <div key={i}>
            <div
              id={category.name}
              className="title"
              style={{
                background: category?.colors?.tbg || "white",
                color: category?.colors?.t || styles.secondaryColor
              }}
            >
              {category.name || <TextLoader />}
            </div>
            <div
              style={{
                background: category?.colors?.bbg || "white",
                textAlign: "center"
              }}
            >
              {category.image && (
                <Image
                  height="300"
                  width="300"
                  src={`/img/products/${category.image}.png`}
                  alt={category.name}
                />
              )}
            </div>
            <ProductList
              category={category}
              products={products}
              exRate={exRate}
              currency={currency}
              firebaseLink={firebaseLink}
              businessCode={businessCode}
              setCart={setCart}
              setAlert={setAlert}
              setAddOne={setAddOne}
            />
          </div>
        ))}
      </div>
      <Alert setAlert={setAlert} alert={alert} />
      <AddOne addOne={addOne} setAddOne={setAddOne} />
      <div className="cartContainer">
        <Cart cart={cart} exRate={exRate} currency={currency} />
      </div>

      {/* <div href="https://www.za-apps.com">
        <div className="watermark">Made with ❤ by za-apps.com</div>
      </div> */}

      <style jsx>{`
        .cartContainer {
          ${styles.flexJustifycenter}
        }
        .title {
          color: black;
          font-size: 2.6rem;
          padding: 0.2rem 0.8rem;
          scroll-margin-top: 3rem;
        }

        .watermark {
          font-size: 0.8em;
          text-align: center;
          padding: 0.5rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
export function ProductList({
  category,
  products,
  exRate,
  currency,
  firebaseLink,
  businessCode,
  setCart,
  setAlert,
  setAddOne
}) {
  return (
    <>
      <div
        className="productList"
        style={{
          background: category?.colors?.bbg || "white"
        }}
      >
        {products
          ?.filter((product) => product.categoryID === category._id)
          .map((product, j) => (
            <div
              key={j}
              className="product"
              onClick={() => {
                product.exist
                  ? setCart((cart) => [...cart, product])
                  : setAlert("the product is out of stock");
                product.exist && setAddOne("+1");
              }}
            >
              <div className="productPart">
                <div className="productName">{product.name}</div>
                <div className="description">{product.description}</div>
                {product.hasImg &&
                  product.price &&
                  (product.exist ? (
                    <div className="price">
                      {currency === "$"
                        ? product.price
                        : product.price * exRate}
                      {currency}
                    </div>
                  ) : (
                    <div className="out">out of stock</div>
                  ))}
              </div>

              {product.hasImg ? (
                <div className="productPartImg">
                  <Image
                    height="120"
                    width="120"
                    loader={({ src, width }) =>
                      `${
                        firebaseLink +
                        src +
                        `%2F${
                          product?._id + product?.imgLink
                        }.png?alt=media&tr=w-${width}`
                      }`
                    }
                    src={businessCode}
                    alt={product.name}
                  />
                </div>
              ) : (
                product.price &&
                (product.exist ? (
                  <div className="price">
                    {currency === "$" ? product.price : product.price * exRate}
                    {currency}
                  </div>
                ) : (
                  <div className="out">out of stock</div>
                ))
              )}
            </div>
          ))}
      </div>
      <style jsx>{`
        .productList {
          width: 100vw;
          ${styles.flexBothcenter}
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-flex-wrap;
          flex-wrap: wrap;
          gap:1rem;
          }
          
        .description {
          color: grey;
          font-size: 0.9rem;
          width: 100%;
          line-height: 0.9rem;
        }

        .productName {
          font-size: 1.4rem;
          padding: 0.3rem 0;
        }

        .price {
          padding: 0.2rem 0;
          font-size: 1rem;
        }

        .product {
          padding: 0.8rem;
          ${styles.flexAligncenter}
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          width: 18rem;
          -webkit-box-flex: 1;
          -ms-flex: 1 0 18rem;
          flex: 1 0 18rem;
          padding: 0 1rem;
          gap: 1rem;
          cursor:pointer;
        }

        .productPart {
          flex: 1 1 65%;
        }

        .out {
          color: ${styles.secondaryColor};
        }
      `}</style>
    </>
  );
}