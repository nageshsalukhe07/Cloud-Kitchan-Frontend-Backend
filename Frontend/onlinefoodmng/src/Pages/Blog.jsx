import React from 'react';
import Header from '../Layout/Header';

export default function Blog() {
  return (
    <div>
      <Header />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="section-title">Blog</h3>
              <h2 className="main-title">
                Stay updated with the latest news from our cloud kitchen.
              </h2>
              <button className="btn-all-posts">All Blog Posts</button>
            </div>
          </div>
        </div>

        <div className="container blog-cards-container">
          <div className="row">
            {/* Blog Card 1 */}
            <div className="col-12 col-md-6">
              <article className="blog-card">

                <div className="card-body">
                  <h4 className="blog-category">Business</h4>
                  <h3 className="blog-title">Critical Steps for Buying a Business</h3>
                  <p className="blog-summary">
                    Learn the essential steps for purchasing a business and how to evaluate opportunities carefully.
                  </p>
                  <a href="#!" className="btn-read-more">Read More</a>
                </div>
                <div className="card-footer">
                  <span className="blog-date">7 Feb 2024</span>
                  <span className="blog-comments">83 Comments</span>
                </div>
              </article>
            </div>

            {/* Blog Card 2 */}
            <div className="col-12 col-md-6">
              <article className="blog-card">
                <div className="card-body">
                  <h4 className="blog-category">Living</h4>
                  <h3 className="blog-title">Earning 6 Figures in Your 20s</h3>
                  <p className="blog-summary">
                    Discover the journey of a young marketing coach who achieved six-figure earnings by 20 years old.
                  </p>
                  <a href="#!" className="btn-read-more">Read More</a>
                </div>
                <div className="card-footer">
                  <span className="blog-date">12 Aug 2024</span>
                  <span className="blog-comments">67 Comments</span>
                </div>
              </article>
            </div>

            {/* Blog Card 3 */}
            <div className="col-12 col-md-6">
              <article className="blog-card">
                <div className="card-body">
                  <h4 className="blog-category">Cloud Kitchen</h4>
                  <h3 className="blog-title">The Future of Cloud Kitchens in 2025</h3>
                  <p className="blog-summary">
                    Learn how cloud kitchens are reshaping the food industry and why this is the future of dining.
                  </p>
                  <a href="#!" className="btn-read-more">Read More</a>
                </div>
                <div className="card-footer">
                  <span className="blog-date">15 Jan 2025</span>
                  <span className="blog-comments">120 Comments</span>
                </div>
              </article>
            </div>

            {/* Blog Card 4 */}
            <div className="col-12 col-md-6">
              <article className="blog-card">
                <div className="card-body">
                  <h4 className="blog-category">Technology</h4>
                  <h3 className="blog-title">Tech Trends Shaping the Food Delivery Industry</h3>
                  <p className="blog-summary">
                    The food delivery sector is evolving rapidly with technology. Here’s what’s driving this change.
                  </p>
                  <a href="#!" className="btn-read-more">Read More</a>
                </div>
                <div className="card-footer">
                  <span className="blog-date">22 Jan 2025</span>
                  <span className="blog-comments">75 Comments</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
