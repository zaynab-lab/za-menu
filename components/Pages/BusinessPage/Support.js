import BackButton from "@/components/BackButton";
import { styles } from "@/public/js/styles";
import Link from "next/link";

export default function Support({ back }) {
  return (
    <>
      <BackButton back={back} />
      <div className="supportContainer">
        <div className="dear">dear customer</div>
        <div className="p">
          we are availble in any time on whatsapp, but if we are late in
          response please wait for us.
        </div>
        <Link href="https://wa.me/+96170097533">
          <div className="contact">contact us on Whatsapp</div>
        </Link>
      </div>

      <style jsx>{`
        .supportContainer {
          padding: 7rem 1rem;
          font-size: 1.1rem;
        }
        .p {
          text-indent: 1rem;
          text-align: justify;
          text-justify: inter-word;
        }
        .dear {
          color: ${styles.secondaryColor};
          font-size: 1.2rem;
        }
        .contact {
          color: ${styles.secondaryColor};
          width: 100vw;
          text-align: center;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
