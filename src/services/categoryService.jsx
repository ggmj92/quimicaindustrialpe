import React, { useEffect, useState } from "react";

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
    <>
      <div>
        <h1>Categorías</h1>
        <ul>
          {categories.map((category) => (
            <li key={category._id}>
              {category.name}
              {category.images && category.images.site1 && (
                <img src={category.images.site1} alt={category.name} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryData;