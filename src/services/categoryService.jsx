import React, { useEffect, useState } from "react";
import "../styles/CategoryCard.css";

const CategoryData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/categorias");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <div>Cargando categorías...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="category-container">
      {categories.map((category) => (
        <div
          key={category._id}
          className="category-card"
          style={{
            backgroundImage: `url(${category.images?.site1})`,
          }}
        >
          <div className="category-title">{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryData;
