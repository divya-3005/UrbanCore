import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: 1,
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=1" }],
    },
    {
      _id: 2,
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: 3,
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=3" }],
    },
    {
      _id: 4,
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=4" }],
    },
    {
      _id: 5,
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
  ];

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      // Use a 5px buffer to account for sub-pixel rounding
      const rightScroll =
        container.scrollWidth > leftScroll + container.clientWidth + 5;
      setCanScrollLeft(leftScroll > 5);
      setCanScrollRight(rightScroll);
    }
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      // Use clientWidth to scroll exactly one "page" of items at a time
      const scrollAmount =
        direction === "left" ? -container.clientWidth : container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      // Initial check
      updateScrollButtons();
    }
    return () => container?.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border transition ${
              canScrollLeft
                ? "bg-white text-black shadow-md"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")} // Added missing handler
            disabled={!canScrollRight}
            className={`p-2 rounded border transition ${
              canScrollRight
                ? "bg-white text-black shadow-md"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* The Scrollable Container */}
      <div className="container mx-auto overflow-hidden">
        <div
          ref={scrollRef} // MOVE REF HERE
          className="flex overflow-x-auto space-x-6 pb-10 scrollbar-hide snap-x snap-mandatory"
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] relative snap-start"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <img
                  src={product.images[0]?.url}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md text-white p-4">
                  <Link to={`/product/${product._id}`} className="block">
                    <h4 className="font-medium truncate">{product.name}</h4>
                    <p className="mt-1 font-semibold">${product.price}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
