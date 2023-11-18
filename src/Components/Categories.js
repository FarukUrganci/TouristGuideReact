import React from "react";

export default function Categories({
  categories,
  filterItems,
  activeCategory
}) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          // Her bir category için button açtık
          <button
            type="button" 
            className={activeCategory === category ? "filter-btn active" : "filter-btn"}
            key={index}
            onClick={() => filterItems(category)} // Tıkladığınıda "setMenuItems(newItems)" sebebiyle "<Menu items={menuItems} />" kısmına etki edecek
          >
            {category} 
            
          </button>
        );
      })}
    </div>
  );
}
