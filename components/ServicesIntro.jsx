import style from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";

const Services = ({ services }) => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 id="services" className={style.title}>What We Can Do?</h1>
        <h1 className={style.subtitle}>Services we can help you with</h1>
      </div>
    </div>
  );
};

export default Services;
