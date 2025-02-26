import React from 'react';
import Header from '../Layout/Header';
import cloudkitchen from '../Images/cloudkitchen.png'
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div>
      <Header />
      <br /><br />
      <section className="about-section">
        <div className="container">
          <div className="row">   
            {/* First Information Block */}
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="image-container">
                    <a >
                      {/* <img className="image" src="https://img.freepik.com/premium-vector/cloud-kitchen-simple-linear-logo-vector-icon-cloud-with-spoon-fork-combination-symbol_849689-561.jpg" alt="Cloud Kitchen" /> */}
                      <img src={cloudkitchen} alt="aboutlogo" className="Aboutlogo" />

                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <p className="info-text">Our Story</p>
                    <h2 className="heading">Welcome to Our Cloud Kitchen</h2>
                    <p className="description">
                      At our cloud kitchen, we bring the most delicious meals directly to your doorstep. With a wide variety of dishes like pastas, pizzas, and burgers, we ensure your cravings are always satisfied!
                    </p>
                    <Link className="btn" to="/home">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Information Block */}
            <div className="col-12">
              <div className="row align-items-center flex-row-reverse">
                <div className="col-md-6">
                  <div className="image-container">
                    <a href="#!">
                      <img className="image" src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-12/Untitled%20design%20%2853%29.jpg" alt="Chef Preparing Food" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <p className="info-text">Fresh Ingredients</p>
                    <h2 className="heading">High Quality, Fresh Ingredients</h2>
                    <p className="description">
                      We source only the freshest ingredients to create mouth-watering meals. From organic vegetables to premium meats, our food is made with the finest ingredients.
                    </p>
                    <Link className="btn" to="/menuitem">Explore Our Menu</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Information Block */}
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="image-container">
                    <a href="#!">
                      <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpltAL6Ds3FrEeRQuKFfAysK2OVmNrN3pK-Kzynd8UrXpKlN917MpAEpVaP2MnBETwXQ&usqp=CAU" alt="Meal Delivery" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <p className="info-text">Our Service</p>
                    <h2 className="heading">Delivered Right to Your Door</h2>
                    <p className="description">
                      With our fast and reliable delivery system, you can enjoy hot and fresh meals delivered directly to your door, wherever you are. Convenience is just a click away!
                    </p>
                    <Link className="btn" to="/register">Order Now</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Section */}
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div>
                    <p className="info-text">Customer Reviews</p>
                    <h2 className="heading">What Our Customers Say</h2>
                    <p className="description">
                      "The food was incredible! I loved the freshness and flavors. It's now my go-to place for all my cravings!" - Sarah M.
                    </p>
                    <p className="description">
                      "I’ve never had a better pizza delivered to my home. Fast, hot, and delicious! Highly recommend." - John T.
                    </p>
                    <Link className="btn" to="/blog">See More Reviews</Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image-container">
                    <a href="#!">
                      <img className="image" src="https://www.meticulosity.com/hs-fs/hubfs/Coforge%20Folders%20(Imported)/Imported_Blog_Media/customer-reviews-1.jpg?width=1200&height=685&name=customer-reviews-1.jpg" alt="Customer Review" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
