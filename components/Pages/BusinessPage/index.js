import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Line from "@/components/Line";
import MenuBar from "./MenuBar";
import Orders from "./Orders";
import axios from "axios";

const Add = dynamic(() => import("./Add"));
const More = dynamic(() => import("./More"));
const BusinessInfo = dynamic(() => import("./BusinessInfo"));
const Qr = dynamic(() => import("./Qr"));
const Time = dynamic(() => import("./Time"));
const History = dynamic(() => import("./History"));
const Support = dynamic(() => import("./Support"));

export default function BusinessPage({ setAuth }) {
  const [selected, setSelected] = useState("Orders");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [business, setBusiness] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    selected === "Orders" || selected === "Add" || selected === "More"
      ? setToggleMenu(true)
      : setToggleMenu(false);
  }, [selected]);
  useEffect(
    () =>
      axios.get("/api/business").then((res) => {
        res?.data?.businessCode && setBusiness(res.data);
      }),
    [refresh]
  );

  return (
    <>
      <Line />
      {selected === "Orders" && <Orders />}
      {selected === "Add" && <Add businessCode={business?.businessCode} />}
      {selected === "More" && <More setSelected={setSelected} />}
      {toggleMenu && <MenuBar selected={selected} setSelected={setSelected} />}
      {selected === "BusinessInfo" && (
        <BusinessInfo
          setAuth={setAuth}
          setSelected={setSelected}
          business={business}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      )}
      {selected === "Qr" && (
        <Qr setSelected={setSelected} business={business} />
      )}
      {selected === "Time" && <Time setSelected={setSelected} />}
      {selected === "History" && <History setSelected={setSelected} />}
      {selected === "Support" && <Support setSelected={setSelected} />}
    </>
  );
}
