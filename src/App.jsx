//import { Hero } from "./components/index"
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import { heroapi,popularsales,toprateslaes } from "./data/data"


const App = () => {
  const { title, subtitle, btntext, img, sociallinks, videos } = heroapi;
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero
          title={title}
          subtitle={subtitle}
          btntext={btntext}
          img={img}
          sociallinks={sociallinks}
          videos={videos}
        />
        <Sales endpoint={popularsales}  ifExist/>
        <Sales endpoint={ toprateslaes} />

      </main>
    </>
  );
}

export default App
