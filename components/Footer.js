import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}><span>Aartery<sup>TM</sup></span></h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/aartery.png"}
                width="40px"
                height="40px"
                alt=""
              />
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          Mumbai, India
        </div>
        <div className={style.cardItem}>
          sumitakoliya@gmail.com
          <br/>+8169243270
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          <span className={style.subtitle}>FOLLOW US:</span>
          <div className={style.icons}>
          <br />
          <div className={style.icon}>
          <Link href="https://instagram.com">
          <a target="_blank">
          <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/ig.png"}
          width="20"
          height="20"
          />
          </a>
          </Link>
          </div>
          <div className={style.icon}>
          <Link target="blank" href="https://facebook.com">
          <a target="_blank">
          <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/fb.png"}
          width="20"
          height="20"
          />
          </a>
          </Link>
          </div>
          </div>
        </div>
        <div className={style.cardItem}>
          Aartery TM
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
