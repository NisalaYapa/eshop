import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://cdn.mos.cms.futurecdn.net/c4oFFiYeWTjAjoCffwcetR.jpg"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            {/* First row with different products */}
            <Product 
              title="Bag"
              price="25"
              rating="4"
              image="https://cdn.khadims.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/catalog/khadims/product/30701155000/30701155000_1.jpg"
            />
            <Product 
              title="Shoes"
              price="50"
              rating="5"
              image="https://cdn.khadims.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/catalog/khadims/product/51972351926/51972351922_1.JPG"
            />
          </div>
          <div className="home__row">
            {/* Second row with different products */}
            <Product 
              title="Laptop"
              price="999"
              rating="2"
              image="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08484166.png"
            />
            <Product 
              title="Phone"
              price="699"
              rating="5"
              image="https://images-cdn.ubuy.co.id/64c2bac02bf2da09f0538339-apple-iphone-x-64gb-unlocked-gsm-phone.jpg"
            />
            <Product 
              title="Headphones"
              price="100"
              rating="4"
              image="https://ronin.pk/cdn/shop/files/R-1500HeadphoneBlue1_d67f054b-b52d-42a3-9a50-9feb52dca9b3.png?v=1738165928"
            />
          </div>
          <div className="home__row">
            {/* Third row with a single product */}
            <Product 
              title="Smartwatch"
              price="150"
              rating="2"
              image="https://i0.wp.com/appleme.lk/wp-content/uploads/2024/06/Modio-MK06-Kids-Smart-Watch-by-appleme.lk-in-srilanka-01.png?fit=666%2C666&ssl=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
