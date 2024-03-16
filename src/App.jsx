import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';
import Table from './components/Table/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleCookBtn = recipe => {
    const isExist = selectedRecipes.find(
      newRecipe => newRecipe.id == recipe.id
    );
    if (!isExist) {
      setSelectedRecipes([...selectedRecipes, recipe]);
    } else {
      toast('You already selected this recipe..');
    }
  };
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
          <div className="mt-12 lg:grid grid-cols-12 gap-10">
            <Recipes handleCookBtn={handleCookBtn}></Recipes>
            <Table selectedRecipes={selectedRecipes}></Table>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
