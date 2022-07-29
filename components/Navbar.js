import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.logo} >
      <Link href="/"><span>Aartery</span></Link>
      <Image 
          src={process.env.NEXT_PUBLIC_URL + "/img/aartery.png"}
          width="28px"
          height="28px"
          alt=""
        />
        
      </div>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="#education">Education</Link>
        </li>
        <li className={style.listItem}>
          <Link href="#career_guidance">Career guidance</Link>
        </li>
        <li className={style.listItem}>
          <Link href="#advisory">Advisory</Link>
        </li>
        <li className={style.listItem}>
          <Link href="#language_training">Language training</Link>
        </li>
        <li className={style.listItem}>
          <Link href="mailto:demo@demo.com">
          <span>
          abc@aartery.com
          </span>
          </Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="#education">Education</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="#career_guidance">Career guidance</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="#advisory">Advisory</Link>
        </li>
        <li className={style.menuItem}>
        <Link href="#language_training">Language training</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="mailto:demo@demo.com">
          <span>
          abc@aartery.com
          </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
