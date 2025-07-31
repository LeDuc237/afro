import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Shield, Truck, CreditCard } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images for the slideshow
  const backgroundImages = [
    "/IMG-20250629-WA0197.jpg",
    "/IMG-20250629-WA0183.jpg",
    "/IMG-20250629-WA0200.jpg",
    "/IMG-20250629-WA0189.jpg",
    "/IMG-20250629-WA0185.jpg",
    "/IMG-20250629-WA0193.jpg",
    "/IMG-20250629-WA0180.jpg",
    "/IMG-20250629-WA0168.jpg",
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleShopNow = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate("/collection/afro-kinky-bulk");
    }, 100);
  };

  const handleCategoryClick = (categoryId: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate("/collection/afro-kinky-bulk");
    }, 100);
  };

  const categories = [
    {
      id: "hair-extensions",
      name: "Afro Kinky Bulk",
      description: "Premium quality hair extensions for length and volume",
      image: "/IMG-20250629-WA0189.jpg",
      productCount: 25,
      popular: true,
    },
    {
      id: "afro-kinky-bulk",
      name: "Afro Kinky Bulk",
      description: "Natural textured bulk hair for braiding and styling",
      image: "/IMG-20250629-WA0197.jpg",
      productCount: 18,
      popular: true,
    },
    {
      id: "v-part-wig",
      name: "Afro Kinky Bulk",
      description: "Easy-to-wear V part wigs for instant transformation",
      image: "/IMG-20250629-WA0185.jpg",
      productCount: 12,
    },
    {
      id: "spring-twist",
      name: "Afro Kinky Bulk",
      description: "Bouncy spring twist hair for protective styling",
      image: "/IMG-20250629-WA0200.jpg",
      productCount: 15,
      popular: true,
    },
    {
      id: "clip-ins",
      name: "Afro Kinky Bulk",
      description: "Temporary clip-in extensions for instant length",
      image: "/IMG-20250629-WA0193.jpg",
      productCount: 20,
    },
    {
      id: "bulk-braiding-hair",
      name: "Afro Kinky Bulk",
      description: "High-quality bulk hair perfect for braiding",
      image: "/IMG-20250629-WA0180.jpg",
      productCount: 22,
    },
    {
      id: "crochet-hair",
      name: "Afro Kinky Bulk",
      description: "Pre-styled crochet hair for quick installation",
      image: "/WhatsApp Image 2025-06-29 at 14.09.11_581cec0e.jpg",
      productCount: 16,
    },
    {
      id: "lace-wigs",
      name: "Afro Kinky Bulk",
      description: "Natural-looking lace front and full lace wigs",
      image: "/IMG-20250629-WA0168.jpg",
      productCount: 14,
    },
  ];

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Sliding Background Images */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-50" : "opacity-0"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Premium Afro Kinky Bulk Hair ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="text-yellow-400" size={16} />
              <span className="ml-1 text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
              <Shield className="text-green-400" size={16} />
              <span className="ml-1 text-sm font-medium">100% Human Hair</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
              <Truck className="text-blue-400" size={16} />
              <span className="ml-1 text-sm font-medium">Free Shipping</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Premium Afro Kinky
            <span className="block text-yellow-300 mt-1 md:mt-2">Bulk Hair</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            100% Human Hair • Perfect for Braiding & Dreadlocks • Multiple Colors & Lengths Available
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 w-full max-w-md mx-auto">
            <button
              onClick={handleShopNow}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-12 py-3 sm:py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Shop Collection - Save 30%
              <ArrowRight size={20} />
            </button>
            <button
              onClick={handleShopNow}
              className="border-2 border-white text-white px-20 py-3 sm:py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              View Afro Kinky Collection
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Payment Options */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 max-w-xs mx-auto">
            <p className="text-white font-medium mb-2">Secure Payment Options:</p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-1">
                <CreditCard size={18} className="text-white" />
                <span className="text-white text-sm">Credit Cards</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z" />
                </svg>
                <span className="text-white text-sm">PayPal</span>
              </div>
            </div>
          </div>

          {/* Customer Proof */}
          <div className="text-white/90">
            <p className="text-lg sm:text-xl mb-3 font-medium">Trusted by 15,000+ customers worldwide</p>
            <div className="flex justify-center items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-sm sm:text-base font-medium">
                Based on 3,247 verified reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our complete range of premium hair products
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {category.popular && (
                    <div className="absolute top-3 left-3 bg-rose-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-white/90 text-xs mb-2">{category.description}</p>
                    <span className="text-white/80 text-xs">
                      {category.productCount} products
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;