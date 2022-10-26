import SectionDestacados from "../components/Destacados/SectionDestacados";
import Layout from "../components/Layout/Layout";
import SectionLicores from "../components/Licores/SectionLicores";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SectionLicores />
      <SectionDestacados/>
    </Layout>
  );
}
