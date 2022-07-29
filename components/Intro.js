import style from "../styles/Intro.module.css";
import Image from "next/image";
import Link from "next/dist/client/link";

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>AARTERY</span> 
          Advice from the best for the best.
        </h1>
        <p className={style.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <Link href="#services">
          <a className={style.button}>
          DISCOVER
          </a>
        </Link>
        
      </div>
      <div className={style.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/study.png"}
          height="600px"
          width="600px"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
