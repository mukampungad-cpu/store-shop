
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  ArrowRight,
  Star,
} from "lucide-react";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <p className="welcome">WELCOME TO STORE SHOP</p>

          <h1>
            Discover Your
            <br />
            Favorite Products
          </h1>

          <p className="hero-description">
            Find amazing products at affordable prices.
            Shop your favorite items all in one place.
          </p>

          <Link to="/shop" className="shop-button">
            <ShoppingBag size={20} />
            Shop Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="featured">
        <h2>Our Featured Products</h2>
        <p>Discover our favorite products.</p>

        <div className="product-grid">

          <div className="product-card">
            <img src="/images/watch.png" alt="Smart Watch" />
            <h3>Smart Watch</h3>
            <p>$25</p>
            <button>Shop Now</button>
          </div>

          <div className="product-card">
            <img src="/images/bag.png" alt="Pink Hand Bag" />
            <h3>Pink Hand Bag</h3>
            <p>$30</p>
            <button>Shop Now</button>
          </div>

        </div>
      </section>

      <section className="featured">
        <h2>Why Shop With Us?</h2>

        <div className="featured-grid">
          <div className="featured-card">
            <Star size={30} />
            <h3>Quality Products</h3>
            <p>Discover products made with quality in mind.</p>
          </div>

          <div className="featured-card">
            <ShoppingBag size={30} />
            <h3>Great Shopping</h3>
            <p>Enjoy a simple and convenient shopping experience.</p>
          </div>

          <div className="featured-card">
            <ArrowRight size={30} />
            <h3>Easy Shopping</h3>
            <p>Find your favorite items with ease.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;


