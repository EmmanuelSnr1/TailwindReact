import Hero from "../components/Sections/Hero";
import Feature from "../components/Sections/Feature";
import Cta from "../components/Sections/CTA";
import Newsletter from "../components/Sections/Newsletter";
import Blog from "../components/Sections/Blog";

export default function Homepage() {
  return (
    <div>
      <Hero></Hero>
      <Feature></Feature>
      <Cta></Cta>
      <Newsletter></Newsletter>
    </div>
  );
}
