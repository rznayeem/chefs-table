import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';
import Table from './components/Table/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';

function App() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [cookingRecipes, setCookingRecipes] = useState([]);

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

  const handlePreparingBtn = cook => {
    setCookingRecipes([...cookingRecipes, cook]);
    const cookedRecipe = selectedRecipes.filter(
      filteredRecipe => filteredRecipe.id !== cook.id
    );
    setSelectedRecipes(cookedRecipe);
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
            Welcome to our treasure trove of culinary delights! Our recipes are
            carefully crafted with clear, step-by-step instructions and
            <br className="lg:flex hidden" /> handy tips to help even the most
            novice cooks achieve delicious results with confidence.
          </p>
          <div className="mt-12 lg:grid grid-cols-12 gap-10">
            <Recipes handleCookBtn={handleCookBtn}></Recipes>
            <Table
              handlePreparingBtn={handlePreparingBtn}
              selectedRecipes={selectedRecipes}
              cookingRecipes={cookingRecipes}
            ></Table>
          </div>
        </section>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
