import { FaTrashAlt } from "react-icons/fa";
import { styles } from "@/public/js/styles";
import { useEffect, useState } from "react";
import {
  ProductDescriptionLoader,
  ProductNameLoader,
  ProductPriceLoader
} from "@/components/Loaders/TextLoader";
import ProductModal from "@/components/ProductModal";
import axios from "axios";
import Color from "./Color";
import Alert from "@/components/Alert";
import Image from "next/image";

export default function Category({
  category,
  businessCode,
  currentCat,
  setCurrentCat,
  setRefreshCat
}) {
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([0]);
  const [refreshProducts, setRefreshProducts] = useState(false);
  const categoryID = category._id;
  const [alert, setAlert] = useState("");
  const [currentProduct, setCurrentProduct] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [colors, setColors] = useState(category?.colors);
  const firebaseLink =
    "https://firebasestorage.googleapis.com/v0/b/za-menu-images.appspot.com/o/";

  useEffect(() => {
    categoryID &&
      axios
        .get(`/api/products/getBycategory?categoryID=${categoryID}`)
        .then((res) => {
          Array.isArray(res.data) && setProducts(res.data);
        });
  }, [categoryID, businessCode, refreshProducts]);

  useEffect(() => {
    setProducts([0]);
    categoryID &&
      axios
        .get(`/api/categories/colors?categoryID=${categoryID}`)
        .then((res) => {
          res?.data && setColors(res?.data);
        });
  }, [categoryID]);

  return (
    <>
      {!!currentCat && (
        <>
          <div className="categoryList">
            <div className="products">
              {products?.map((product, i) => (
                <div
                  key={i}
                  className="product"
                  onClick={() => {
                    !!product && setCurrentProduct(product);
                    !!product && setOpenModal(true);
                  }}
                >
                  <div>
                    <div className="namePrice">
                      <div className="name">
                        {product.name || <ProductNameLoader />}
                      </div>
                      {product.hasImg && typeof product.price === "number" && (
                        <div className="price">
                          $
                          {typeof product.price === "number" ? (
                            product.price
                          ) : (
                            <ProductPriceLoader />
                          )}
                        </div>
                      )}
                    </div>

                    {product.description && (
                      <div className="description">
                        {product.description || <ProductDescriptionLoader />}
                      </div>
                    )}
                  </div>
                  {product?.hasImg ? (
                    <div className="productPartImg">
                      <Image
                        height="70"
                        width="70"
                        loader={({ src, width }) =>
                          `${
                            firebaseLink +
                            businessCode +
                            `%2F${
                              src + product?.imgLink
                            }.png?alt=media&tr=w-${width}`
                          }`
                        }
                        src={product?._id}
                        alt={product.name}
                      />
                    </div>
                  ) : (
                    typeof product.price === "number" && (
                      <div className="price">${product.price}</div>
                    )
                  )}
                </div>
              ))}

              <div className="addNewItem">
                <input
                  value={productName}
                  className="addproduct-input"
                  placeholder="new product"
                  onChange={(e) =>
                    e.target.value !== " " && setProductName(e.target.value)
                  }
                />
                <div
                  className="addproduct"
                  onClick={() => {
                    !!productName && setProducts([...products, 0]);
                    !!productName
                      ? axios
                          .post(
                            "/api/products",
                            { productName, categoryID, businessCode },
                            { "content-type": "application/json" }
                          )
                          .then((res) => {
                            res.data === "done" && setProductName("");
                            res.data === "done" &&
                              setRefreshProducts((refresh) => !refresh);
                            res.data === "done" &&
                              setAlert("product has been added");
                            res.data !== "done" &&
                              setAlert("something went wrong");
                          })
                      : setAlert("add product name");
                  }}
                >
                  add
                </div>
              </div>
            </div>
          </div>

          <Color
            categoryID={categoryID}
            colors={colors}
            setColors={setColors}
            businessCode={businessCode}
          />
          <ProductModal
            setRefreshProducts={setRefreshProducts}
            currentProduct={currentProduct}
            openModal={openModal}
            setOpenModal={setOpenModal}
            businessCode={businessCode}
            setAlert={setAlert}
          />
          <Alert alert={alert} setAlert={setAlert} />
          <div
            className="remove"
            onClick={() =>
              axios
                .put(
                  "/api/categories/remove",
                  { categoryID, businessCode },
                  { "content-type": "application/json" }
                )
                .then((res) => {
                  res.data === "done" && setAlert("you'r all done");
                  res.data === "done" && setRefreshCat((refresh) => !refresh);
                  res.data === "done" && setCurrentCat("");
                })
            }
          >
            <div className="trash">
              <FaTrashAlt />
            </div>
            <div>remove category</div>
          </div>
        </>
      )}

      <style jsx>{`
        .categoryList {
          border-bottom: 1px solid ${styles.secondaryColor};
          overflow-x: hidden;
        }
        .products {
          padding-top: 0;
        }

        .addNewItem {
          ${styles.flexAligncenter}
        }

        .addproduct-input {
          border: none;
          padding: 0.5rem;
          font-size: 1.1rem;
        }

        .addproduct {
          font-size: 1rem;
          transform: translateX(-2rem);
          cursor: pointer;
          color: ${styles.secondaryColor};
          background: white;
        }

        .product {
          ${styles.flexAligncenter}
          -webkit-box-pack:justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          border-bottom: 1px solid lightgrey;
          padding: 0.2rem 1rem;
          cursor: pointer;
        }

        .name {
          color: ${styles.secondaryColor};
        }

        .namePrice {
          ${styles.flexAligncenter}
          gap:.4rem;
          font-size: 1.2rem;
        }

        .productImg {
          width: 3rem;
          height: 3rem;
          ${styles.flexBothcenter}
        }

        .remove {
          color: ${styles.secondaryColor};
          padding-bottom: 5rem;
          cursor: pointer;
          ${styles.flexBothcenter}
          gap:.6rem
        }

        .trash {
          padding-top: 0.3rem;
        }

        .description {
          color: grey;
        }
        .productPartImg {
          width: 6rem;
          height: 6rem;
          ${styles.flexBothcenter}
          z-index:-1;
        }
      `}</style>
    </>
  );
}