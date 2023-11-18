import { useState } from "react";
import "./App.css";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import items from "../src/Components/data";
// import hangi isimle importladığın (veri),  '../src/Components/data' Dosya adı

const allCategories = ["all ", ...new Set(items.map((item) => item.category))];
//! output: all adanatarsusmersin
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category == "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category); // adna === adana ise
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="holiday section">
        <div className="title">
          <h2>Cukurova Swimging Place</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
