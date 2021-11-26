import { styles } from "@/public/js/styles";

import dynamic from "next/dynamic";

import Button from "@/components/Button";
import axios from "axios";
import { useState } from "react";
const Address = dynamic(() => import("./Address"));
const Payment = dynamic(() => import("./Payment"));

export default function OrderProceed({
  user,
  total,
  orderType,
  businessCode,
  table,
  cartItems,
  action
}) {
  const [address, setAddress] = useState();
  const [useCredit, setUseCredit] = useState(false);

  return (
    <>
      <div className="invoiceAddon">
        <div className="invoiceAddonRow">
          <div>total: </div>
          <div>{Number(total.toFixed(2)) + " $"}</div>
        </div>
        {orderType === "delivery" && (
          <div className="invoiceAddonRow">
            <div>delivery fees: </div>
            <div>{1 + " $"}</div>
          </div>
        )}
      </div>
      {orderType === "delivery" && <Address />}
      <Payment
        user={user}
        total={total}
        setUseCredit={setUseCredit}
        useCredit={useCredit}
      />

      <div className="orderbtn">
        <Button
          content="order"
          color={styles.secondaryColor}
          onclick={() =>
            axios
              .post(
                "/api/order",
                {
                  businessCode,
                  cartItems,
                  address,
                  orderType,
                  useCredit,
                  table
                },
                { "content-type": "application/json" }
              )
              .then((res) => {
                res.data === "done" && action("", false, true);
              })
          }
        />
      </div>
      <style jsx>{`
        .invoiceAddon {
          border-bottom: 1px solid ${styles.secondaryColor};

          font-size: 1.2rem;
        }
        .invoiceAddonRow {
          ${styles.flexAligncenter}
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
        .orderbtn {
          padding-top: 1.2rem;
          text-align: center;
        }
      `}</style>
    </>
  );
}