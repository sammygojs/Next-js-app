import style from "../styles/Services.module.css";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.services}>

            <div id="education" className={style.out_service1}>
              <div className={style.service}>
                {/* <div className={style.catInfo}></div> */}
                <span className={style.cat}>Education</span>
                <div className={style.media}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/study2.png`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                </div>
              </div>
              <div className={style.card2}>
                  <h1 className={style.card_title}>Education</h1>
                  <span>Hello world</span>
              </div>
              </div>

              <div id="career_guidance" className={style.out_service2}>
              <div className={style.card2}>
                  <h1 className={style.card_title}>Career Guidance</h1>
              </div>
              <div className={style.service}>
                {/* <div className={style.catInfo}></div> */}
                <span className={style.cat}>Career guidance</span>
                <div className={style.media}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/career.png`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                </div>
              </div>
              
            </div>
            <div id="advisory" className={style.out_service1}>
              <div className={style.service}>
                {/* <div className={style.catInfo}></div> */}
                <span className={style.cat}>Advisory</span>
                <div className={style.media}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/advisory.png`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                </div>
              </div>
              <div className={style.card2}>
                  <h1 className={style.card_title}>Advisory</h1>
              </div>
              </div>
              
              <div id="language_training" className={style.out_service2}>
              <div className={style.card2}>
                  <h1 className={style.card_title}>Language Training</h1>
              </div>
              <div className={style.service}>
                {/* <div className={style.catInfo}></div> */}
                <span className={style.cat}>Language Training</span>
                <div className={style.media}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/language.png`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;





