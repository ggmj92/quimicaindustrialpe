import React, { useEffect, useState } from 'react';
import BannerData from '../services/bannerService.jsx';
import "../styles/BannerCarousel.css";

const BannerCarousel = () => {
    const { banners, loading, error } = BannerData();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [banners]);

    if (loading) {
        return <div>Loading banners...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (banners.length === 0) {
        return <div>No banners available.</div>;
    }

    return (
        <div className="banner-carousel">
            {banners.map((banner, index) => (
                <div
                    key={banner._id}
                    className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${banner.imageUrl})` }}
                >
                </div>
            ))}
        </div>
    );
};

export default BannerCarousel;
