import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import VedicHeritage from './components/VedicHeritage';
import CharchaWall from './components/CharchaWall';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CustomizerModal from './components/CustomizerModal';
import ChaiMoodQuiz from './components/ChaiMoodQuiz';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import { PRODUCTS } from './data/menuData';
import { Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizerProduct, setCustomizerProduct] = useState(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // Quick Add Product (standard configuration)
  const handleQuickAdd = (product) => {
    const defaultItem = {
      ...product,
      cartItemId: `${product.id}-default`,
      quantity: 1,
      unitPrice: product.price,
      customizations: {
        sweetness: 'Raw Desi Gur',
        milk: 'Pure Farm Buffalo Milk',
        cup: 'Kiln-Fired Mitti Kulhad',
        addons: []
      }
    };

    setCartItems((prev) => {
      const existing = prev.find(item => item.cartItemId === defaultItem.cartItemId);
      if (existing) {
        return prev.map(item => 
          item.cartItemId === defaultItem.cartItemId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, defaultItem];
    });

    showToast(`✨ Added 1x ${product.name} to basket!`);
  };

  // Add customized item from CustomizerModal
  const handleAddCustomized = (customizedItem) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.cartItemId === customizedItem.cartItemId);
      if (existing) {
        return prev.map(item =>
          item.cartItemId === customizedItem.cartItemId
            ? { ...item, quantity: item.quantity + customizedItem.quantity }
            : item
        );
      }
      return [...prev, customizedItem];
    });

    showToast(`✨ Added customized ${customizedItem.name} to basket!`);
  };

  // Update quantity in cart
  const handleUpdateQuantity = (item, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(item);
      return;
    }
    setCartItems(prev =>
      prev.map(i => i.cartItemId === item.cartItemId ? { ...i, quantity: newQty } : i)
    );
  };

  // Remove item from cart
  const handleRemoveItem = (item) => {
    setCartItems(prev => prev.filter(i => i.cartItemId !== item.cartItemId));
  };

  // Place Order Checkout
  const handleCheckout = (orderDetails) => {
    setIsCartOpen(false);
    setOrderConfirmation(orderDetails);
    setCartItems([]); // Reset cart after order
  };

  const handleOpenLocations = () => {
    const el = document.getElementById('locations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#120B07] text-[#FDF8F3] relative selection:bg-terracotta selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F120B] border border-terracotta/60 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-bottom-5 duration-300">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-saffron underline hover:text-white"
          >
            View Basket
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLocations={handleOpenLocations}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenLocations={handleOpenLocations}
          onQuickOrderFeatured={() => handleQuickAdd(PRODUCTS[0])}
        />

        {/* Menu & Product Showcase */}
        <MenuSection
          onQuickAdd={handleQuickAdd}
          onCustomize={(product) => setCustomizerProduct(product)}
        />

        {/* Vedic Roots & 11 Herbs Alchemy */}
        <VedicHeritage />

        {/* Cafe Locations & Adda Finder */}
        <LocationSection />

        {/* Community Reviews & Chai Charcha */}
        <CharchaWall />
      </main>

      {/* Footer */}
      <Footer onOpenLocations={handleOpenLocations} />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <CustomizerModal
        product={customizerProduct}
        isOpen={!!customizerProduct}
        onClose={() => setCustomizerProduct(null)}
        onAddToCart={handleAddCustomized}
      />

      <ChaiMoodQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectProduct={(product) => {
          setCustomizerProduct(product);
        }}
      />

      <OrderConfirmationModal
        isOpen={!!orderConfirmation}
        orderData={orderConfirmation}
        onClose={() => setOrderConfirmation(null)}
      />

    </div>
  );
}
