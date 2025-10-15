import React, { useState, useEffect } from 'react';
import './App.css';

// Datos de productos con imágenes de shots de gelatina
const products = [
  {
    id: 1,
    name: "Dulce rosa ",
    priceSmall: 2000,
    priceLarge: 2500,
    category: "clasicos",
    color: "#6bebffff",
    flavor: "Sandia",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20241002/pngtree-watermelon-splashing-in-motion-fresh-action-with-splash-effect-image_16305463.jpg",
    rating: 4.5,
    reviews: 128,
    preparationTime: 15,
    isPopular: true,
    liquorPrice: 1500
  },
  {
    id: 2,
    name: "Lima Shock",
    priceSmall: 2000,
    priceLarge: 2500,
    category: "clasicos",
    color: "#32cd32",
    flavor: "Limón",
    image: "https://img.freepik.com/fotos-premium/fondo-verde-limon-artistico-salpicado-blanco_1255023-59242.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 4.3,
    reviews: 89,
    preparationTime: 12,
    isNew: true,
    liquorPrice: 1500
  },
  {
    id: 3,
    name: "Glow lulú",
    priceSmall: 2000,
    priceLarge: 2500,
    category: "clasicos",
    color: "#ffa500",
    flavor: "Lulo",
    image: "https://img.freepik.com/fotos-premium/fruto-lulo-o-naranjilla-blanco_680303-3781.jpg",
    rating: 4.7,
    reviews: 156,
    preparationTime: 10,
    liquorPrice: 1500
  },
  {
    id: 4,
    name: "Pink explosion",
    priceSmall: 2500,
    priceLarge: 3000,
    category: "premium",
    color: "#ffb347",
    flavor: "Frambuesa",
    image: "https://img.freepik.com/vector-premium/explosion-jugo-frambuesa-realista-bayas-splash-rojo-jugoso-diseno-paquete-producto-bebida-fresca-vector-flujo-remolino-rojo-decoracion-bebidas-saludables_208581-1778.jpg",
    rating: 4.8,
    reviews: 234,
    preparationTime: 20,
    isPopular: true,
    liquorPrice: 2000
  },
  {
    id: 5,
    name: "Sol Mix ",
    priceSmall: 2500,
    priceLarge: 3000,
    category: "premium",
    color: "#dda0dd",
    flavor: "Naranja ",
    image: "https://media.istockphoto.com/id/1210670820/es/foto/l%C3%ADquido-de-zumo-de-naranja-de-explosi%C3%B3n-con-fruta-de-naranja-sobre-fondo-blanco-renderizado-3d.jpg?s=612x612&w=0&k=20&c=RnN0wgo2WUlft03SLz2sBkBCrygn1oxqIPFPddtBRIk=",
    rating: 4.6,
    reviews: 167,
    preparationTime: 18,
    liquorPrice: 2000
  },
  {
    id: 6,
    name: "Purple Fire",
    priceSmall: 3000,
    priceLarge: 3500,
    category: "especiales",
    color: "#f5f5dc",
    flavor: "Mora",
    image: "https://png.pngtree.com/png-clipart/20250109/original/pngtree-a-vibrant-splash-of-blackberries-and-raspberries-creating-colorful-burst-in-png-image_19078827.png",
    rating: 4.9,
    reviews: 312,
    preparationTime: 25,
    isPopular: true,
    liquorPrice: 2500
  },
  {
    id: 7,
    name: "Mojito Shot",
    priceSmall: 3000,
    priceLarge: 3500,
    category: "especiales",
    color: "#98fb98",
    flavor: "Mojito",
    image: "https://images.unsplash.com/photo-1560963689-b5682b6440f8?w=300&h=200&fit=crop&auto=format",
    rating: 4.4,
    reviews: 98,
    preparationTime: 22,
    isNew: true,
    liquorPrice: 2500
  },
  {
    id: 8,
    name: "Piña Colada",
    priceSmall: 2700,
    priceLarge: 3200,
    category: "premium",
    color: "#fffacd",
    flavor: "Piña y Coco",
    image: "https://chedrauimx.vtexassets.com/arquivos/ids/55080296-800-auto?v=638942398257900000&width=800&height=auto&aspect=true",
    rating: 4.5,
    reviews: 189,
    preparationTime: 16,
    liquorPrice: 2000
  },
  {
    id: 9,
    name: "Blue Lagoon",
    priceSmall: 3500,
    priceLarge: 4000,
    category: "especiales",
    color: "#1e90ff",
    flavor: "Curaçao Azul",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop&auto=format",
    rating: 4.7,
    reviews: 278,
    preparationTime: 30,
    isPopular: true,
    liquorPrice: 2500
  },
  {
    id: 10,
    name: "Uva Morada",
    priceSmall: 2000,
    priceLarge: 2500,
    category: "clasicos",
    color: "#8b008b",
    flavor: "Uva",
    image: "https://st5.depositphotos.com/3162779/61961/i/450/depositphotos_619611566-stock-photo-black-grape-juice-glass-wooden.jpg",
    rating: 4.2,
    reviews: 67,
    preparationTime: 12,
    liquorPrice: 1500
  },
  {
    id: 11,
    name: "Sandía Refrescante",
    priceSmall: 2500,
    priceLarge: 3000,
    category: "premium",
    color: "#ff6347",
    flavor: "Sandía",
    image: "https://api.lalicorera.com/storage/productos/licores/84598842-gum-shots.webp",
    rating: 4.6,
    reviews: 145,
    preparationTime: 14,
    liquorPrice: 2000
  },
  {
    id: 12,
    name: "Sex on the Beach",
    priceSmall: 3700,
    priceLarge: 4200,
    category: "especiales",
    color: "#ff69b4",
    flavor: "Tropical Mix",
    image: "https://cdn.tipsybartender.com/tipsybartender/jpg/wp-content/uploads/2018/01/Creamy-Sex-on-the-Beach-Shots.jpg?aspect_ratio=1:1",
    rating: 4.8,
    reviews: 298,
    preparationTime: 28,
    isPopular: true,
    liquorPrice: 2500
  }
];

// Componente de estrellas
const StarRating = ({ rating, reviews }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="star filled">★</span>);
  }
  
  if (hasHalfStar) {
    stars.push(<span key="half" className="star half">★</span>);
  }
  
  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
  }
  
  return (
    <div className="rating-container">
      <div className="stars">{stars}</div>
      <span className="rating-text">{rating} ({reviews})</span>
    </div>
  );
};

// Componente de tarjeta de producto mejorado
const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('large');
  const [withLiquor, setWithLiquor] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const getCurrentPrice = () => {
    const basePrice = size === 'small' ? product.priceSmall : product.priceLarge;
    const liquorCost = withLiquor ? product.liquorPrice : 0;
    return basePrice + liquorCost;
  };

  const updateQuantity = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    const itemToAdd = {
      ...product,
      selectedSize: size,
      withLiquor: withLiquor,
      currentPrice: getCurrentPrice()
    };
    onAddToCart(itemToAdd, quantity);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/300x200/${product.color.slice(1)}/ffffff?text=${encodeURIComponent(product.name)}`;
          }}
        />
        
        {/* Badges */}
        <div className="badges-container">
          {product.isPopular && <span className="badge popular">🔥 Popular</span>}
          {product.isNew && <span className="badge new">✨ Nuevo</span>}
        </div>
        
        {/* Botón favorito */}
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        
        {/* Tiempo de preparación */}
        <div className="prep-time">
          ⏱️ {product.preparationTime} min
        </div>
      </div>

      <div className="product-content">
        <div className="product-header">
          <div className="product-name">{product.name}</div>
          <div className="product-category-small">
            {product.category === 'clasicos' && '🥃'}
            {product.category === 'premium' && '⭐'}
            {product.category === 'especiales' && '💎'}
          </div>
        </div>

        {/* Rating */}
        <StarRating rating={product.rating} reviews={product.reviews} />

        {/* Selector de tamaño */}
        <div className="size-selector">
          <button 
            className={`size-btn ${size === 'small' ? 'active' : ''}`}
            onClick={() => setSize('small')}
          >
            Pequeño - ${Number(product.priceSmall || 0).toLocaleString()}
          </button>
          <button 
            className={`size-btn ${size === 'large' ? 'active' : ''}`}
            onClick={() => setSize('large')}
          >
            Grande - ${Number(product.priceLarge || 0).toLocaleString()}
          </button>
        </div>

        {/* Opción de licor */}
        <div className="liquor-option">
          <label className="liquor-checkbox">
            <input 
              type="checkbox" 
              checked={withLiquor}
              onChange={(e) => setWithLiquor(e.target.checked)}
            />
            <span className="checkbox-label">
              🍸 Agregar licor (+${Number(product.liquorPrice || 0).toLocaleString()})
            </span>
          </label>
        </div>

        {/* Precios */}
        <div className="price-container">
          <div className="current-price">${Number(getCurrentPrice()).toLocaleString()}</div>
          <div className="price-detail">Precio unitario</div>
        </div>

        <div className="product-info">
          <div className="info-row">
            <span className="info-label">Sabor:</span>
            <span className="info-value">{product.flavor}</span>
          </div>
        </div>

        <div className="product-actions">
          <div className="quantity-selector">
            <button className="quantity-btn" onClick={() => updateQuantity(-1)}>-</button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-btn" onClick={() => updateQuantity(1)}>+</button>
          </div>
          
          <button 
            className={`add-to-cart ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? '¡Agregado! ✓' : '+ Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente del carrito mejorado
const Cart = ({ cart, onRemoveItem, onCheckout, deliveryInfo }) => {
  const subtotal = cart.reduce((sum, item) => sum + (Number(item.currentPrice || 0) * Number(item.quantity || 0)), 0);
  const total = subtotal;
  const itemCount = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const estimatedTime = cart.length > 0 ? Math.max(...cart.map(item => Number(item.preparationTime || 15))) + 10 : 15;

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-title">🛒 Tu Pedido</div>
        <div className="cart-count">{itemCount} items</div>
      </div>
      
      <div className="delivery-info">
        <div className="delivery-time">
          <span className="delivery-icon">⏱️</span>
          <span>Preparación: {estimatedTime}-{estimatedTime + 10} min</span>
        </div>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🍹</div>
            <div>Tu carrito está vacío</div>
            <div className="empty-subtitle">¡Agrega algunos shots deliciosos!</div>
          </div>
        ) : (
          cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-details">
                  {item.flavor} • {item.selectedSize === 'small' ? 'Pequeño' : 'Grande'}
                  {item.withLiquor && ' • Con licor 🍸'}
                </div>
                <div className="cart-item-price">
                  x{item.quantity} • ${Number(item.currentPrice || 0).toLocaleString()} c/u
                </div>
              </div>
              <div className="cart-item-actions">
                <div className="cart-item-total">
                  ${Number((item.currentPrice || 0) * (item.quantity || 0)).toLocaleString()}
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveItem(index)}
                  title="Eliminar"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
          
          <button className="checkout-btn" onClick={() => onCheckout(itemCount, total, estimatedTime)}>
            <span className="checkout-icon">💳</span>
            Pagar ${Number(total).toLocaleString()}
          </button>
        </div>
      )}
    </div>
  );
};

// Componente de búsqueda
const SearchBar = ({ onSearch, searchTerm }) => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar shots por sabor o nombre..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => onSearch('')}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

// Componente principal
function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deliveryInfo] = useState({
    address: "Sabana Norte ",
    zone: "Centro"
  });

  useEffect(() => {
    let filtered = products;
    
    // Filtrar por categoría
    if (activeFilter !== 'all') {
      filtered = filtered.filter(product => product.category === activeFilter);
    }
    
    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.flavor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [activeFilter, searchTerm]);

  useEffect(() => {
    // Animación de entrada para las tarjetas
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, [filteredProducts]);

  const filterProducts = (category) => {
    setActiveFilter(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      // Crear una clave única basada en id, tamaño y si tiene licor
      const itemKey = `${product.id}-${product.selectedSize}-${product.withLiquor}`;
      const existingItemIndex = prevCart.findIndex(
        item => `${item.id}-${item.selectedSize}-${item.withLiquor}` === itemKey
      );
      
      if (existingItemIndex !== -1) {
        // Si existe el mismo producto con las mismas opciones, aumentar cantidad
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si es un producto nuevo o con diferentes opciones, agregarlo
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const checkout = (itemCount, total, estimatedTime) => {
    alert(`🎉 ¡Pedido confirmado!\n\n📋 Resumen:\n• ${itemCount} shots\n• Total: $${total.toLocaleString()}\n• Tiempo estimado: ${estimatedTime}-${estimatedTime + 10} min\n\n⏱️ ¡Tu pedido está en preparación!\n📱 Recibirás actualizaciones por WhatsApp`);
    setCart([]);
  };

  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <div className="logo">🍹 Shotis</div>
          <div className="location-info">
            <span className="location-icon">📍</span>
            <span className="location-text">{deliveryInfo.address}</span>
          </div>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#about">Nosotros</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <h1>¡Bienvenidos a Shotis!</h1>
          <p>Los mejores shots de gelatina artesanales. Sabores únicos, colores vibrantes y diversión garantizada para tus fiestas.</p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">4.8 ⭐</div>
              <div className="stat-label">Rating promedio</div>
            </div>
            <div className="stat">
              <div className="stat-number">15-30 min</div>
              <div className="stat-label">Tiempo de preparación</div>
            </div>
            <div className="stat">
              <div className="stat-number">12+</div>
              <div className="stat-label">Sabores</div>
            </div>
          </div>
        </section>

        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />

        <section className="menu-section" id="menu">
          <h2 className="section-title">🍹 Nuestro Menú</h2>
          
          <div className="filters">
            {[
              { key: 'all', label: 'Todos', count: products.length },
              { key: 'clasicos', label: 'Clásicos', count: products.filter(p => p.category === 'clasicos').length },
              { key: 'premium', label: 'Premium', count: products.filter(p => p.category === 'premium').length },
              { key: 'especiales', label: 'Especiales', count: products.filter(p => p.category === 'especiales').length }
            ].map(filter => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => filterProducts(filter.key)}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>

          <div className="results-info">
            <span>Mostrando {filteredProducts.length} shots</span>
            {searchTerm && <span> para "{searchTerm}"</span>}
          </div>

          <div className="products-grid">
            {filteredProducts.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <div className="no-results-text">No encontramos shots con ese término</div>
                <div className="no-results-subtitle">Intenta con otro sabor o nombre</div>
              </div>
            ) : (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))
            )}
          </div>
        </section>
      </main>

      <Cart
        cart={cart}
        onRemoveItem={removeFromCart}
        onCheckout={checkout}
        deliveryInfo={deliveryInfo}
      />
    </div>
  );
}

export default App;
