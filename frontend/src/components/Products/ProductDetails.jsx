import React from "react";

const selectedProduct = {
  name: "UrbanCore Hoodie",
  price: 75,
  originalPrice: 100,
  description:
    "Experience ultimate comfort and style with the UrbanCore Hoodie, crafted from premium materials for a perfect fit.",
  brand: "UrbanCore",
  material: "Leather and Cotton Blend",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "Gray", "Navy"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=10",
      altText: "UrbanCore Hoodie Front View",
    },
    {
      url: "https://picsum.photos/500/500?random=11",
      altText: "UrbanCore Hoodie Front View",
    },
  ],
};

const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            {/* Mobile Thumbnail */}
            <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4 ">
              {selectedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.altText || `Thumbnail ${index}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
              ))}
            </div>
          </div>
          {/* Right Section: Product Details */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            {/* Pricing Section */}
            <div className="mb-4">
              {selectedProduct.originalPrice && (
                <p className="text-lg text-gray-600 mb-1 line-through">
                  ${selectedProduct.originalPrice}
                </p>
              )}
              <p className="text-xl text-gray-500 mb-2">
                ${selectedProduct.price}
              </p>
            </div>

            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            {/* Color Selection */}
            <div className="mb-4">
              <p className="text-gray-700">Color</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.9)", // Adjusted from 0.5 to keep colors visible
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <p className="text-gray-700">Size</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                  -
                </button>
                <span className="text-lg">1</span>
                <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white py-3 px-6 rounded mb-4 hover:bg-gray-800 transition uppercase font-medium">
              Add to Cart
            </button>

            {/* Product Characteristics Table */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-2 font-semibold">Brand</td>
                    <td className="py-2">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Material</td>
                    <td className="py-2">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
