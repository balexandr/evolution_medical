import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const watermarkItems = Array.from({ length: 30 });
  const logoSrc = `${import.meta.env.BASE_URL}logo_cropped.png`;

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <div className="site-watermark" aria-hidden="true">
        {watermarkItems.map((_, index) => (
          <span key={index}>bryanalexander.co</span>
        ))}
      </div>

      <nav>
        <a href="#home" className="nav-logo">
          <img src={logoSrc} alt="Evolution Medical Supplier" className="nav-logo-image" />
        </a>
        <div id="main-navigation" className="nav-links">
          <a href="#about">
            About
          </a>
          <a href="#contact">
            Contact
          </a>
          <a
            href="https://evolution.shop.workd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            aria-label="Open shop portal in a new tab"
          >
            Shop Now
          </a>
        </div>
      </nav>

      <section id="home">
        <div className="hero-bg">
          <div className="hero-bg-circle c1"></div>
          <div className="hero-bg-circle c2"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-dot"></div>
              GPO-Backed Contract Pricing
            </div>
            <h1 className="hero-title">
              Brand name supplies at <em>true contract</em> pricing.
            </h1>
            <p className="hero-subtitle">
              We match your exact ordering history across all vendors and deliver at
              GPO pricing - no inflated overhead, no backorders, no delays.
            </p>
            <div className="hero-actions">
              <a
                href="https://evolution.shop.workd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Access your portal in a new tab"
              >
                Access Your Portal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">
                Get In Touch
              </a>
            </div>
            <div className="hero-stat-row">
              <div>
                <div className="hero-stat-val">
                  5<span>-</span>15<span>%</span>
                </div>
                <div className="hero-stat-label">Annual Savings</div>
              </div>
              <div>
                <div className="hero-stat-val">
                  <span>&lt;</span>24<span>h</span>
                </div>
                <div className="hero-stat-label">Next-Day Delivery</div>
              </div>
              <div>
                <div className="hero-stat-val">0</div>
                <div className="hero-stat-label">Split Shipments</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M5 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="hero-card-title">Order Summary</div>
                  <div className="hero-card-sub">Next-day delivery confirmed</div>
                </div>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-row-label">Pricing Model</span>
                <span className="hero-card-row-badge">GPO Contract</span>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-row-label">vs. National Distributor</span>
                <span className="hero-card-row-val hero-green">-12% savings</span>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-row-label">Inventory Status</span>
                <span className="hero-card-row-val hero-green">Reserved Confirmed</span>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-row-label">Delivery</span>
                <span className="hero-card-row-val">Next Day Complete</span>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-row-label">Pedigree Documents</span>
                <span className="hero-card-row-val">Available</span>
              </div>
            </div>
            <div className="hero-floating">
              Order by 4PM EST
              <div className="hero-floating-small">Guaranteed next-day delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="section-inner">
          <div className="section-eyebrow">Who We Are</div>
          <h2 className="section-title">Saving private practices up to 15% annually</h2>
          <p className="section-sub">
            Brand match for exact medical products and Rx items at discounts of
            5-15% on annual supplies spend, compared to national distributor pricing.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="feature-title">Customized Product List</div>
              <div className="feature-desc">
                We build your product list based on your actual ordering history - even
                if it is scattered across multiple vendors.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="feature-title">Better Pricing, No Inflated Overhead Costs</div>
              <div className="feature-desc">
                Thanks to our GPO partnerships, you get the same low contract pricing
                access as the national distributors - without paying for their massive
                overhead.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <div className="feature-title">Transparent Online Portal</div>
              <div className="feature-desc">
                Log in, search or reorder from your curated list, download invoices,
                order history, and access Rx pedigree documents - anytime.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm-9 5a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <div className="feature-title">Your Own Reserved Inventory</div>
              <div className="feature-desc">
                We stock your approved items so you always have what you need. No
                backorders. No delays. Ever.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="feature-title">Next-Day Delivery</div>
              <div className="feature-desc">
                Order by 4PM EST and get next-day delivery. Always complete - never
                split shipments.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div className="feature-title">In-Person Support</div>
              <div className="feature-desc">
                Our reps work by referral - not cold calls. They take the time to
                understand your team, provide personalized support, and manage
                everything from onboarding to logistics.
              </div>
            </div>
          </div>

          <div className="savings-callout">
            <div className="savings-callout-text">
              <h3>
                Breaking the cycle of <em>the medical supply chain</em>
              </h3>
              <p>
                National distributors charge for their overhead. We do not. Same GPO
                pricing access, no markups, no middlemen taking a cut. Just transparent
                contract pricing for your practice.
              </p>
            </div>
            <div>
              <div className="savings-pct">15%</div>
              <div className="savings-pct-label">Avg. annual savings</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="section-inner">
          <div className="section-eyebrow">Get In Touch</div>
          <h2 className="section-title">Contact Us</h2>

          <div className="contact-grid">
            <div>
              <p className="section-sub">
                Our team works by referral and takes the time to understand your
                practice. Reach out and we will build your custom product list.
              </p>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a className="contact-info-val contact-link" href="mailto:info@evomedicalsupplier.com">
                      info@evomedicalsupplier.com
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Company</div>
                    <div className="contact-info-val">Evolution Medical Supplier, LLC</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Referral Policy</div>
                    <div className="contact-info-val">We work by referral - not cold calls</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <form onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" placeholder="Jane" autoComplete="given-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" placeholder="Smith" autoComplete="family-name" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="jane@yourpractice.com" autoComplete="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="practice">Practice / Organization</label>
                  <input type="text" id="practice" placeholder="Smith Family Medicine" autoComplete="organization" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us about your supply needs..." required></textarea>
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                </button>
                <p className="form-assistive">
                  Want to use the existing intake portal instead? <a href="https://form.jotform.com/252274568736367?canva-app=1&_height=691" target="_blank" rel="noopener noreferrer">Open secure form</a>
                </p>
                <p className={`form-status ${isSubmitted ? "is-visible" : ""}`} role="status" aria-live="polite">
                  Thank you. Your message has been received and our team will follow up soon.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="shop">
        <div className="section-inner">
          <div className="section-eyebrow section-eyebrow-light">Your Portal</div>
          <h2 className="section-title">Access Your Products</h2>
          <p className="shop-desc">
            Log in to your curated portal to reorder, download invoices, and access Rx
            pedigree documents - all in one place.
          </p>

          <div className="shop-portal">
            <div className="shop-portal-text">
              <h3>Your order history, centralized.</h3>
              <p>
                Search or reorder from your curated list. Download invoices, track
                orders, and access pedigree documents anytime from your secure portal.
              </p>
            </div>
            <a
              href="https://evolution.shop.workd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shop-button"
              aria-label="Open shop portal in a new tab"
            >
              Go to Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>

          <div className="shop-features">
            <div className="shop-feature">
              <div className="shop-feature-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
              </div>
              <div className="shop-feature-title">Curated Product List</div>
              <div className="shop-feature-desc">
                Your approved items, organized and ready to reorder in seconds.
              </div>
            </div>
            <div className="shop-feature">
              <div className="shop-feature-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  <path d="M14 3v6h6" />
                </svg>
              </div>
              <div className="shop-feature-title">Invoice Downloads</div>
              <div className="shop-feature-desc">
                Access full order history and invoices whenever you need them.
              </div>
            </div>
            <div className="shop-feature">
              <div className="shop-feature-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2l8 4v6c0 5-3.8 9.7-8 10-4.2-.3-8-5-8-10V6l8-4z" />
                  <path d="M9.5 12.5l2 2 3-3" />
                </svg>
              </div>
              <div className="shop-feature-title">Rx Pedigree Docs</div>
              <div className="shop-feature-desc">
                Secure access to pedigree documentation for all Rx items.
              </div>
            </div>
            <div className="shop-feature">
              <div className="shop-feature-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3 8h13v9H3z" />
                  <path d="M16 11h3l2 2v4h-5" />
                  <circle cx="7.5" cy="18" r="1.5" />
                  <circle cx="18.5" cy="18" r="1.5" />
                </svg>
              </div>
              <div className="shop-feature-title">Track Deliveries</div>
              <div className="shop-feature-desc">
                Monitor every shipment in real time through your portal.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          Evolution <span>Medical Supplier</span>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://evolution.shop.workd.com" target="_blank" rel="noopener noreferrer">
            Shop
          </a>
        </div>
        <div className="footer-copy">Copyright 2026 Evolution Medical Supplier, LLC. All rights reserved.</div>
      </footer>

    </>
  );
}

export default App;
