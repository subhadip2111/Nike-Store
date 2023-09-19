//import { Hero } from "./components/index"
import FlexContent from "./components/FlexContent";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import Stories from "./components/Stories";
import { heroapi,popularsales,toprateslaes,highlight,sneaker,story } from "./data/data"





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
        <Sales endpoint={popularsales} ifExists={true} />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes}  ifExists={false} />

        <FlexContent endpoint={sneaker} ifExists />
        <Stories story={story}/>
      </main>
    </>
  );
}

export default App
