import Head from "next/head";
import Intro from "../components/Intro";
import Services from "../components/ServicesIntro";
import Testimonials from "../components/Services";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Aartery</title>
        <meta
          name="description"
          content="Aartery"
        />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}
