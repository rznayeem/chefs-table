import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';

function App() {
  return (
    <>
      <header className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <div className="container mx-auto">
        <section className="text-center mt-24">
          <h1 className="text-[40px] font-semibold text-[#150B2B]">
            Our Recipes
          </h1>
          <p className="text-[#150B2B99]">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget
            <br className="lg:flex hidden" /> urna volutpat curabitur elementum
            mauris aenean neque.
          </p>
          <div>
            <Recipes></Recipes>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
