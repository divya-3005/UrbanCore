import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents.jsx";

const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <>
      {/* 1. Overlay / Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* 2. Drawer Panel */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-[30rem] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header: Close Button */}
        <div className="flex justify-end p-4 border-b border-gray-100">
          <button 
            onClick={toggleDrawer} 
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Content Area: Scrollable */}
        <div className="flex-grow p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
          <CartContents />
        </div>

        {/* Footer: Sticky Checkout */}
        <div className="p-6 bg-white border-t border-gray-100 sticky bottom-0">
          <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-900 active:scale-[0.98] transition-all shadow-lg mb-3">
            Checkout
          </button>
          <p className="text-xs tracking-tight text-gray-400 text-center px-4 leading-relaxed">
            Shipping, taxes, and discount codes are calculated at the final step of checkout.
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;