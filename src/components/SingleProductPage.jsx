import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../services/productService';
import ImageCarousel from './ImageCarousel';
import SearchBar from './SearchBar';
import { useWishlist } from '../contexts/WishlistContext';
import BannerCarousel from './BannerCarousel';
import '../styles/SingleProductPage.css';

const SingleProductPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { wishlist, addToWishlist } = useWishlist();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);

                // Find the current product by slug
                const currentProduct = productsData.find(p => p.slug === slug);
                if (!currentProduct) {
                    setError('Producto no encontrado');
                    return;
                }
                setProduct(currentProduct);
            } catch (err) {
                setError('Error al cargar los productos: ' + err.message);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, [slug]);

    const handleSearch = (searchTerm) => {
        const foundProduct = products.find(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (foundProduct) {
            navigate(`/productos/${foundProduct.slug}`);
        }
    };

    const navigateToProduct = (direction) => {
        const currentIndex = products.findIndex(p => p.slug === slug);
        if (currentIndex === -1) return;

        let newIndex;
        if (direction === 'prev') {
            newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
        } else {
            newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
        }
        navigate(`/productos/${products[newIndex].slug}`);
    };

    const handleAddToWishlist = () => {
        addToWishlist(product);
    };

    const handleCotizar = () => {
        // Add the current product to the wishlist if it's not already there
        if (!wishlist.some(item => item._id === product._id)) {
            addToWishlist(product);
        }
        // Navigate to the quote page
        navigate('/cotizar');
    };

    const renderProductInfo = (label, content) => {
        if (!content) return null;
        return (
            <div className="info-section">
                <h3>{label}</h3>
                <p>{content}</p>
            </div>
        );
    };

    if (loading) {
        return <div className="loading">Cargando...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!product) {
        return <div className="error">Producto no encontrado</div>;
    }

    // Collect images for the carousel: product image + presentation images
    const carouselImages = [
        product.image,
        ...(product.presentations || [])
            .map(p => p.image)
            .filter(Boolean)
    ];

    return (
        <div className="single-product-page">
            <div className="search-container">
                <SearchBar onSearch={handleSearch} />
                <div className="product-navigation">
                    <button
                        className="nav-button prev"
                        onClick={() => navigateToProduct('prev')}
                        aria-label="Producto anterior"
                    >
                        ←
                    </button>
                    <button
                        className="nav-button next"
                        onClick={() => navigateToProduct('next')}
                        aria-label="Siguiente producto"
                    >
                        →
                    </button>
                </div>
            </div>

            <div className="product-grid">
                <div>
                    <ImageCarousel images={carouselImages} />
                </div>

                <div className="product-basic-info">
                    <h2>{product.name}</h2>
                    {product.presentations && product.presentations.length > 0 && (
                        <div className="presentations">
                            <h3>Presentaciones Disponibles</h3>
                            <p>{product.presentations.map(p => `${p.name}`).join(", ")}</p>
                        </div>
                    )}
                    <div className="product-actions">
                        <button 
                            className="btn-primary"
                            onClick={handleAddToWishlist}
                        >
                            Añadir a Favoritos
                        </button>
                        <button 
                            className="btn-secondary"
                            onClick={handleCotizar}
                        >
                            Cotizar
                        </button>
                    </div>
                </div>

                <div className="product-details">
                    {product.description && renderProductInfo("Descripción", product.description)}
                    {product.use && renderProductInfo("Usos", product.use)}
                </div>
            </div>

            <div className="back-to-products">
                <button 
                    className="btn-secondary"
                    onClick={() => navigate('/productos')}
                >
                    Volver a todos los productos
                </button>
            </div>

            <BannerCarousel />
        </div>
    );
};

export default SingleProductPage; 