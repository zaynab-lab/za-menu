import Onoff from "@/components/Onoff";
import { styles } from "@/public/js/styles";

export default function Payment({
  total,
  user,
  onlyTarget,
  useExchange,
  setUseCredit,
  useCredit,
  business,
  selectedCurrency
}) {
  return (
    <>
      <div className="paySection">
        {/* <div className="payItem">
          <div>payment method</div>

          <select className="selectMethod">
            <option>cash</option>
            <option disabled>online</option>
          </select>
        </div> */}
        <div className="payItem">
          <div>use credit</div>
          <Onoff setOn={() => setUseCredit(!useCredit)} on={useCredit} />
        </div>
        <div className="payItem">
          <div>wallet credit</div>
          <div>
            {(useCredit
              ? Number((user?.credit - total).toFixed(2)) < 0
                ? "0"
                : Number((user?.credit - total).toFixed(2))
              : Number((user?.credit).toFixed(2))) +
              " " +
              "USD"}
          </div>
        </div>
        <div className="payItem">
          <div>should pay</div>
          <div>
            {useCredit
              ? Number((user?.credit - total).toFixed(2)) > 0
                ? "0"
                : Math.abs(Number((user?.credit - total).toFixed(2)))
              : selectedCurrency
              ? Number((total * business?.exRate).toFixed(2)) +
                " " +
                business?.currency
              : Number(total.toFixed(2)) + " " + business?.defaultCurrency}
          </div>
        </div>
      </div>
      <style jsx>{`
        .paySection {
          padding-top: 1.2rem;
        }
        .payItem {
          font-size: 1.2rem;
          padding: 0.4rem 0;
          ${styles.flexAligncenter};
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
        .selectMethod {
          background: white;
          font-size: 1.2rem;
          padding: 0rem 0.5rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </>
  );
}
