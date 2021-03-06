import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { styles } from "../../../public/js/styles";
import Button from "../../Button";
import Input from "../../Input";
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

export default function Scan({
  camera,
  setCamera,
  setUserTable,
  userTable,
  setHasTable
}) {
  const [accessDenied, setAccessDenied] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    navigator.permissions
      .query({ name: "camera" })
      .then((permissionObj) => {
        permissionObj.state === "denied"
          ? setAccessDenied(true)
          : setAccessDenied(false);
      })
      .catch((error) => {
        console.log("Got error :", error);
      });
  }, []);

  return (
    <>
      {camera && !accessDenied ? (
        <>
          <div>scan the qr code to get the table</div>
          <QrReader
            delay={300}
            onError={(err) => console.log(err)}
            onScan={(data) => {
              data && setUrl(data);
              data === url && setCamera(false);
              data === url &&
                !isNaN(Number(url.slice(-1))) &&
                setUserTable(Number(url.slice(-1)));
            }}
            style={{ width: "100%" }}
          />
          {userTable && <div>are you on table {userTable} ?</div>}
        </>
      ) : (
        <>
          <div className="insert">
            {" "}
            <div>your table number is</div>
            <Input
              placeholder="insert table number"
              type="Number"
              font="1rem"
              onchange={(e) => setUserTable(e.target.value)}
              value={userTable}
            />
            <div> ?</div>
          </div>
          <Button content="confirm" onclick={() => setHasTable(true)} />
        </>
      )}
      <style jsx>{`
        .insert {
          ${styles.flexAligncenter}
          gap:1rem;
          padding: 2rem;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}
