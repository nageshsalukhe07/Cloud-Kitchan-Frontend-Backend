import React from 'react';
import Header from '../Layout/Header';
import { Link, Outlet } from 'react-router-dom';
import '../Bootstrap/home1.css';
import '../Bootstrap/home2.css';


export default function Home() {
  return (
    <div>
      <Header />
      <br />

      <div id="myCarousel" className="carousel slide mt-3" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>CLOUD KITCHEN🍕</h1>
                <p> Highlight the ease of getting food delivered straight to your door.</p>
                <Link className="btn btn-lg btn-primary" to="/register">Sign up today</Link>
              </div>
            </div>
            {/* Image added below the paragraph */}
            <img src="https://speedkitchen.in/wp-content/uploads/2021/02/useourkitchenfin-pro.jpg" className="d-block w-100" alt="Image 1" />
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption">
                <h1>Spaces built for delivery</h1>
                <p>Filling homes with kitchen joy.</p>
                <Link className="btn btn-lg btn-primary" to="/about">Learn more</Link>
              </div>
            </div>
            {/* Image added below the paragraph */}
            <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_80,w_1200/v1/crm/vancouverbc/DSC_1002_FDD7F6C8-9293-4230-B20852A8A295B3A9_a68b2596-870b-4eba-9bebb285d3470333.jpg" className="d-block w-100" alt="Image 2" />
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Keep it concise</h1>
                <p>Cooking creativity at its finest!.</p>
                <Link className="btn btn-lg btn-primary" to="/menuitem">Browse Menu</Link>
              </div>
            </div>
            {/* Image added below the paragraph */}
            <img src="https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg?crop=0.9057777777777778xw:1xh;center,top&resize=1200:*" className="d-block w-100" alt="Image 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <h1>Delivering Delicious</h1>
            {/* Image added under the paragraph */}
            <img src="https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x1066_crop_center-center_82_line/Dessert-Quotes-and-Captions.jpg" className="bd-placeholder-img rounded-circle" alt="Placeholder 1" />
            <p>As the proud owner of Cloud Kitchen, we are excited to where we bring one of our finest sweet treats 
               a mouth-watering dessert made with the finest ingredients. Which is very Delicious Every bite is carefully
                crafted to provide a unique and unforgettable
                experience. Whether you have a sweet tooth or just want to indulge, our dessert
                 is the perfect choice for any occasion.</p>
            <Link className="btn btn-secondary" to="/menuitem">View details &raquo;</Link><p></p>
                 {/* <Link className="btn btn-lg btn-primary" to="/menuitem">Browse Menu</Link> */}
            
            
          </div>
        
          <div className="col-lg-4">
            <h1>Fresh & Fast</h1>
            <img src="https://www.southernliving.com/thmb/mYBS0UeSAIqxsIqJx8vEAGYA888=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Individual-Peach-Pies_TK517C_16x9-324_preview_scale_100_ppi_150_quality_100-29fdaa1d1840462ea56e68ca2ebeaef1.jpg" className="bd-placeholder-img rounded-circle" alt="Placeholder 2" />
            <p>Welcome to Cloud Kitchen, where we bring the finest bakery treats straight to your door.
               Our team of expert bakers crafts each item with the utmost care, using only the freshest ingredients to ensure every bite is a burst of flavor.
                Whether you're craving a warm, flaky croissant in the morning, a rich, buttery Danish pastry, or a soft, decadent cake for any occasion, we have it all.</p>
            <Link className="btn btn-secondary" to="/menuitem">View details &raquo;</Link><p></p>
            {/* Image added under the paragraph */}
          </div>
          <div className="col-lg-4">
            <h1>Cooked with Care</h1>
            <img src="https://media.newyorker.com/photos/5fd7d36271a70fcfbe7c79ec/master/w_2560%2Cc_limit/buford-tartare.jpg" className="bd-placeholder-img rounded-circle" alt="Placeholder 3" />
            <p>Welcome to Cloud Kitchen, where we serve the juiciest, most flavorful burgers and crispy French fries. Our expert chefs craft each burger with premium meat, fresh veggies, and a perfect blend of seasonings crispy fries for the ultimate comfort food experience.
              Whether you're in the mood for a classic cheeseburger or a specialty creation, every bite is packed with deliciousness.</p>
          <Link className="btn btn-secondary" to="/menuitem">View details &raquo;</Link><p></p>
            {/* Image added under the paragraph */}
          </div>
        </div>
      </div>

      <hr className="featurette-divider" />

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">Savor the Flavor: Burgers & Fries Delivered to Your Door <span className="text-muted">Bite into Happiness🫠</span></h2>
    <p className="lead">"Our signature burgers are crafted with the finest ingredients, paired with golden, crispy fries. Perfect for any time of day!" 
      <p>"Indulge in the ultimate comfort food – hot burgers and crispy fries, expertly prepared and delivered right to your home!"</p>
      <p>"Your favorite burger and fries combo, now easier to enjoy than ever! We deliver quality and taste right to your door!"</p></p>
    

  </div>
  <div className="col-md-5">
    {/* Image added under the paragraph */}
    <div className="image-container">
      <img className="featurette-image" src="https://images.pexels.com/photos/19247568/pexels-photo-19247568.jpeg?cs=srgb&dl=pexels-jonathanborba-19247568.jpg&fm=jpg" alt="Feature1" />
    </div>
  </div>
</div>

<hr className="featurette-divider" />

<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading">"Savor the Authentic Aroma of Perfectly Spiced Biryani & Pulao"<span className="text-muted">See for yourself😋</span></h2>
    <p className="lead">"Our Biryani is a perfect blend of aromatic rice, succulent meat (or vegetables), and an array of spices, all slow-cooked to perfection. Whether you're craving a classic Hyderabadi Biryani or a rich Lucknowi version, our selection offers an authentic experience that transports you straight to the heart of India."<p>
       <p>"Indulge in the magic of Biryani, where each grain of rice is infused with spices and herbs. Our special recipes include the flavorful Chicken Biryani, the aromatic Mutton Biryani, and even a vegetarian option that's equally satisfying."</p></p></p>
   
  </div>
  <div className="col-md-5 order-md-1">
    <div className="image-container">
      {/* Image added under the paragraph */}
      <img className="featurette-image" src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=" alt="Feature2" />
    </div>
  </div>
</div>

<hr className="featurette-divider" />

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">"And Finally, Savor the Taste of Perfect Pasta!" <span className="text-muted">Checkmate!🤠</span></h2>
    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
  </div>
  <div className="col-md-5">
    <div className="image-container">
      {/* Image added under the paragraph */}
      <img className="featurette-image" src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?cs=srgb&dl=pexels-enginakyurt-1438672.jpg&fm=jpg" alt="Feature3" />
    </div>
  </div>
</div>
</div>
  );
}
