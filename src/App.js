import React, { useState, useEffect } from 'react';
import './App.css';

// Datos de productos con imágenes de shots de gelatina
const products = [
  {
    id: 1,
    name: "Fresa Clásica",
    price: 2500,
    originalPrice: 3000,
    category: "clasicos",
    color: "#6bebffff",
    flavor: "Fresa",
    alcohol: "5%",
    size: "30ml",
    image: "https://previews.123rf.com/images/finpoints/finpoints1905/finpoints190500014/122292869-sweet-red-strawberry-alcoholic-cocktails-with-ice-cubes-in-two-shot-glasses-closeup-details-in-soft.jpg", // Shot de gelatina roja
    rating: 4.5,
    reviews: 128,
    preparationTime: 15,
    isPopular: true,
    discount: 17
  },
  {
    id: 2,
    name: "Limón Verde",
    price: 2500,
    category: "clasicos",
    color: "#32cd32",
    flavor: "Limón",
    alcohol: "5%",
    size: "30ml",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop&auto=format", // Shot verde
    rating: 4.3,
    reviews: 89,
    preparationTime: 12,
    isNew: true
  },
  {
    id: 3,
    name: "Naranja Explosiva",
    price: 2500,
    originalPrice: 2800,
    category: "clasicos",
    color: "#ffa500",
    flavor: "Naranja",
    alcohol: "5%",
    size: "30ml",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShzWy3SHxIO5GQr-Rj4gVZhplboYvaHiyMQ&s", // Shot naranja
    rating: 4.7,
    reviews: 156,
    preparationTime: 10,
    discount: 11
  },
  {
    id: 4,
    name: "Mango Tropical",
    price: 3000,
    category: "premium",
    color: "#ffb347",
    flavor: "Mango",
    alcohol: "7%",
    size: "35ml",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnrz9mIKIRZrs-KCMg-tqBl8njfUU_8uLUgpGpebLLVIMqw6gjo6eMdcdy1Pt6krDdiE&usqp=CAU", // Shot amarillo/naranja
    rating: 4.8,
    reviews: 234,
    preparationTime: 20,
    isPopular: true
  },
  {
    id: 5,
    name: "Maracuyá Premium",
    price: 3000,
    category: "premium",
    color: "#dda0dd",
    flavor: "Maracuyá",
    alcohol: "7%",
    size: "35ml",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMfD8AIMzTgUYybluf76yNXhqCvMaGdlJvQ&s", // Shot morado
    rating: 4.6,
    reviews: 167,
    preparationTime: 18
  },
  {
    id: 6,
    name: "Coco Loco",
    price: 3500,
    originalPrice: 4000,
    category: "especiales",
    color: "#f5f5dc",
    flavor: "Coco y Ron",
    alcohol: "10%",
    size: "40ml",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&h=200&fit=crop&auto=format", // Shot blanco/crema
    rating: 4.9,
    reviews: 312,
    preparationTime: 25,
    isPopular: true,
    discount: 13
  },
  {
    id: 7,
    name: "Mojito Shot",
    price: 3500,
    category: "especiales",
    color: "#98fb98",
    flavor: "Mojito",
    alcohol: "8%",
    size: "35ml",
    image: "https://images.unsplash.com/photo-1560963689-b5682b6440f8?w=300&h=200&fit=crop&auto=format", // Shot verde claro
    rating: 4.4,
    reviews: 98,
    preparationTime: 22,
    isNew: true
  },
  {
    id: 8,
    name: "Piña Colada",
    price: 3200,
    category: "premium",
    color: "#fffacd",
    flavor: "Piña y Coco",
    alcohol: "6%",
    size: "35ml",
    image: "https://chedrauimx.vtexassets.com/arquivos/ids/55080296-800-auto?v=638942398257900000&width=800&height=auto&aspect=true", // Shot amarillo claro
    rating: 4.5,
    reviews: 189,
    preparationTime: 16
  },
  {
    id: 9,
    name: "Blue Lagoon",
    price: 4000,
    category: "especiales",
    color: "#1e90ff",
    flavor: "Curaçao Azul",
    alcohol: "12%",
    size: "40ml",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop&auto=format", // Shot azul
    rating: 4.7,
    reviews: 278,
    preparationTime: 30,
    isPopular: true
  },
  {
    id: 10,
    name: "Uva Morada",
    price: 2500,
    category: "clasicos",
    color: "#8b008b",
    flavor: "Uva",
    alcohol: "5%",
    size: "30ml",
    image: "https://st5.depositphotos.com/3162779/61961/i/450/depositphotos_619611566-stock-photo-black-grape-juice-glass-wooden.jpg", // Shot morado
    rating: 4.2,
    reviews: 67,
    preparationTime: 12
  },
  {
    id: 11,
    name: "Sandía Refrescante",
    price: 3000,
    originalPrice: 3400,
    category: "premium",
    color: "#ff6347",
    flavor: "Sandía",
    alcohol: "6%",
    size: "35ml",
    image: "https://api.lalicorera.com/storage/productos/licores/84598842-gum-shots.webp", // Shot rojo/rosado
    rating: 4.6,
    reviews: 145,
    preparationTime: 14,
    discount: 12
  },
  {
    id: 12,
    name: "Sex on the Beach",
    price: 4200,
    category: "especiales",
    color: "#ff69b4",
    flavor: "Tropical Mix",
    alcohol: "11%",
    size: "40ml",
    image: "https://cdn.tipsybartender.com/tipsybartender/jpg/wp-content/uploads/2018/01/Creamy-Sex-on-the-Beach-Shots.jpg?aspect_ratio=1:1", // Shot rosa/fucsia
    rating: 4.8,
    reviews: 298,
    preparationTime: 28,
    isPopular: true
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
  const [isAdding, setIsAdding] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const updateQuantity = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product, quantity);
    
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
          {product.discount && <span className="badge discount">-{product.discount}%</span>}
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

        {/* Precios */}
        <div className="price-container">
          <div className="current-price">${product.price.toLocaleString()}</div>
          {product.originalPrice && (
            <div className="original-price">${product.originalPrice.toLocaleString()}</div>
          )}
        </div>

        <div className="product-info">
          <div className="info-row">
            <span className="info-label">Sabor:</span>
            <span className="info-value">{product.flavor}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Alcohol:</span>
            <span className="info-value">{product.alcohol}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Tamaño:</span>
            <span className="info-value">{product.size}</span>
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
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 15000 ? 0 : 3000;
  const total = subtotal + deliveryFee;
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const estimatedTime = Math.max(...cart.map(item => item.preparationTime || 15)) + 10;

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-title">🛒 Tu Pedido</div>
        <div className="cart-count">{itemCount} items</div>
      </div>
      
      <div className="delivery-info">
        <div className="delivery-time">
          <span className="delivery-icon">🚚</span>
          <span>Entrega: {estimatedTime}-{estimatedTime + 10} min</span>
        </div>
        <div className="delivery-address">
          <span className="address-icon">📍</span>
          <span>{deliveryInfo.address}</span>
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
                  {item.flavor} • {item.size}
                </div>
                <div className="cart-item-price">
                  x{item.quantity} • ${item.price.toLocaleString()} c/u
                </div>
              </div>
              <div className="cart-item-actions">
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toLocaleString()}
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
          <div className="summary-row">
            <span>Domicilio {deliveryFee === 0 ? '(Gratis)' : ''}</span>
            <span>${deliveryFee.toLocaleString()}</span>
          </div>
          {deliveryFee === 0 && (
            <div className="free-delivery-msg">
              🎉 ¡Domicilio gratis por compras superiores a $15.000!
            </div>
          )}
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
          
          <button className="checkout-btn" onClick={() => onCheckout(itemCount, total, estimatedTime)}>
            <span className="checkout-icon">💳</span>
            Pagar ${total.toLocaleString()}
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
    address: "Tocancipá, Cundinamarca",
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
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const checkout = (itemCount, total, estimatedTime) => {
    alert(`🎉 ¡Pedido confirmado!\n\n📋 Resumen:\n• ${itemCount} shots\n• Total: $${total.toLocaleString()}\n• Tiempo estimado: ${estimatedTime}-${estimatedTime + 10} min\n• Dirección: ${deliveryInfo.address}\n\n🚚 ¡Tu pedido está en preparación!\n📱 Recibirás actualizaciones por WhatsApp`);
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
              <div className="stat-label">Tiempo de entrega</div>
            </div>
            <div className="stat">
              <div className="stat-number">$3.000</div>
              <div className="stat-label">Domicilio</div>
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