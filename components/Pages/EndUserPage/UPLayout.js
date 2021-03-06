import { styles } from "@/public/js/styles";

export default function UPLayout({ children }) {
  return (
    <>
      <div className="pageContainer">{children}</div>
      <style jsx>{`
        .pageContainer {
          padding: 1rem;
          ${styles.flexAligncenter}
          -webkit-box-orient:vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          max-width: 100vw;
          position: relative;
          padding-bottom: 2rem;
          padding: 3.5rem 0;
        }
      `}</style>
    </>
  );
}
