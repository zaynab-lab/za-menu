import { styles } from "@/public/js/styles";
import { useState } from "react";

export default function Logo({ uploading, setFile }) {
  const [image, setImage] = useState();

  return (
    <>
      <label id="imglabel" htmlFor="imgInput">
        <div className="logo">
          {image ? (
            <img id="img" height="100%" width="100%" alt="" src={image} />
          ) : (
            "logo"
          )}
        </div>
      </label>
      {uploading && (
        <input
          type="file"
          id="imgInput"
          onChange={(e) => {
            var file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
              reader.readyState === 2 && setImage(reader.result);
            };
            if (file && file.size < 300000) {
              reader.readAsDataURL(file);
              var blob = file.slice(0, file.size);
              var newFile = new File([blob], "file");
              setImage(newFile);
              // setFile(file);
            } else if (file && file.size > 300000) {
              alert("more than 300kB is not allowed");
            } else {
              setImage();
              // setFile("");
            }
          }}
        />
      )}
      <style jsx>{`
        #imgInput {
          opacity: 0;
          position: absolute;
          z-index: -1;
          width: 5rem;
        }
        #imglabel,
        #img,
        .logo {
          width: 8rem;
          min-width: 8rem;
          height: 8rem;
          background: #eee;
          font-size: 3rem;
          border-radius: 2rem;
          color: ${styles.grey};
          ${styles.flexBothcenter}
          ${styles.boxshadow}
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
