import { styles } from "@/public/js/styles";
import Image from "next/image";

export default function LogoLoader() {
  return (
    <>
      <div className="container">
        <div className="menu">
          <div className="imgContainer">
            <Image
              height="500"
              width="500"
              src="/img/ZaLogo.svg"
              alt="za menu"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          position: absolute;
          top: 0;
          background: white;
          animation: fadeOut ease 3s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          z-index: 120;
        }

        .menu {
          width: 20rem;
          padding: 0.6rem;
          max-height: 80vh;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-radius: 2.6rem;
          background: ${styles.lineargradeint};
          -webkit-box-shadow: 0px 10px 14.1px 0.9px rgba(0, 0, 0, 0.24),
            0px 4px 19.6px 0.4px rgba(0, 0, 0, 0.16);
          box-shadow: 0px 10px 14.1px 0.9px rgba(0, 0, 0, 0.24),
            0px 4px 19.6px 0.4px rgba(0, 0, 0, 0.16);
          animation: fadeInAnimation ease 3s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          z-index: 119;
        }
        .imgContainer {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 2.4rem;
        }

        .image {
          width: 100%;
          padding: 5rem 0;
        }

        @keyframes fadeInAnimation {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          99% {
            z-index: 119;
          }
          100% {
            z-index: -1;
            opacity: 0;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          99% {
            opacity: 1;
            z-index: 120;
          }
          100% {
            z-index: -1;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
