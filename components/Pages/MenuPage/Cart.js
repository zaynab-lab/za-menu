import { useEffect, useState } from "react";
import { styles } from "@/public/js/styles";
import Addremove from "./Addremove";
import Proceed from "./Proceed";
import Button from "@/components/Button";

export default function Cart({
  business,
  cartItems,
  products,
  defaultCurrency,
  useExchange,
  onlyTarget,
  currency,
  exRate,
  action,
  selectedCurrency
}) {
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [proceed, setProceed] = useState(false);

  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      const tot = products
        ?.filter((product) => cartItems[product._id] !== undefined)
        ?.map((product) => cartItems[product._id] * product?.price)
        .reduce((a, b) => a + b);
      setTotal(tot);
    }
  }, [products, cartItems]);

  return (
    <>
      {Object.keys(cartItems).length > 0 && (
        <div className="cartContainer">
          <div className="cartTitle" onClick={() => setOpen(!open)}>
            <div>Total</div>
            <div>
              {!useExchange
                ? Number(total.toFixed(2)) + " " + defaultCurrency
                : onlyTarget
                ? Number((total * exRate).toFixed(2)) + " " + currency
                : selectedCurrency
                ? Number((total * exRate).toFixed(2)) + " " + currency
                : Number(total.toFixed(2)) + " " + defaultCurrency}
            </div>
          </div>

          <div className={`closeBox ${open && "openBox"}`}>
            <div className="cartBox">
              {proceed ? (
                <Proceed
                  setProceed={setProceed}
                  business={business}
                  products={products}
                  useExchange={useExchange}
                  onlyTarget={onlyTarget}
                  cartItems={cartItems}
                  total={total}
                  action={action}
                  selectedCurrency={selectedCurrency}
                />
              ) : (
                <>
                  <div className="productList">
                    {products
                      ?.filter(
                        (product) => cartItems[product._id] !== undefined
                      )
                      .map((product, index) => (
                        <div key={index} className="productRow">
                          <div className="name">{product?.name}</div>
                          <div className="control">
                            <Addremove
                              id={product?._id}
                              count={cartItems[product._id]}
                              action={action}
                            />
                          </div>
                          <div className="price">
                            {!useExchange
                              ? Number(
                                  (
                                    product?.price * cartItems[product._id]
                                  ).toFixed(2)
                                ) +
                                " " +
                                defaultCurrency
                              : onlyTarget
                              ? Number(
                                  (
                                    product?.price *
                                    cartItems[product._id] *
                                    exRate
                                  ).toFixed(2)
                                ) +
                                " " +
                                currency
                              : selectedCurrency
                              ? Number(
                                  (
                                    product?.price *
                                    cartItems[product._id] *
                                    exRate
                                  ).toFixed(2)
                                ) +
                                " " +
                                currency
                              : Number(
                                  (
                                    product?.price * cartItems[product._id]
                                  ).toFixed(2)
                                ) +
                                " " +
                                defaultCurrency}
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="proceedbtn">
                    <Button
                      content="proceed"
                      onclick={() => setProceed(true)}
                      color={styles.secondaryColor}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .cartContainer {
          width: 100%;
          max-width: 30rem;
          font-size: 1.2rem;
          position: fixed;
          bottom: 0;
          ${styles.flexColumn}
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          ${styles.boxshadow}
          border-radius: 1rem 1rem 0 0;
          z-index: 100;
        }

        .cartTitle {
          width: 100%;
          font-size: 1.2rem;
          padding: 0.5rem 2rem;
          background: ${styles.lineargradeint};
          border-bottom: 1px solid ${styles.secondaryColor};
          color: white;
          ${styles.flexAligncenter};
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          border-radius: 1rem 1rem 0 0;
          cursor: pointer;
          height: 8vh;
        }
        .closeBox {
          height: 0px;
          overflow-y:auto;
          transition: all 0.5s ease-out;
        }
        .openBox {
          height: 91vh;
          transition: all 0.5s ease-out;
        }

        .cartBox {
          min-height: 91vh;
          width: 100%;
          max-width: 30rem;
          font-size: 1rem;
          padding: 0.2rem 2rem;
          background: white;
          overflow:hidden
          overflow-y: scroll;
          ${styles.flexColumn}
        }
        .productList{
          border-bottom:1px solid gray;
          padding:1rem 0;
        }
        
        .proceedbtn{
          padding-top:1rem;
          text-align:center;
        }
    
        .productRow {
          font-size: 1.2rem;
          width: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          padding: 0.3rem 0;
        }

        .name {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 100%;
          flex: 1 1 100%;
          white-space:nowrap;
        }

        .control {
          text-align: right;
          -webkit-box-flex: 1;
          -ms-flex: 1 1 100%;
          flex: 1 1 100%;
        }

        .price {
          text-align: right;
          padding: 0 0.2rem;
          -webkit-box-flex: 1;
          -ms-flex: 1 1 100%;
          flex: 1 1 100%;
        }

        .details {
          font-size: 0.9rem;
          color: ${styles.secondaryColor};
        }
        .btns{
          ${styles.flexBothcenter}
          gap:1rem;
        }
    
      `}</style>
    </>
  );
}
