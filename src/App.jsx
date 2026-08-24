import { useState, useEffect } from "react";

function App() {
  const logoSrc = `${import.meta.env.BASE_URL}logo_cropped.png`;

  const [status, setStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  function openTerms(e) {
    e.preventDefault();
    setShowTerms(true);
  }

  function closeTerms() {
    setShowTerms(false);
  }

  useEffect(() => {
    if (!showTerms) return;
    function onKey(e) {
      if (e.key === "Escape") setShowTerms(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showTerms]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("loading");

    const url = "https://formsubmit.co/ajax/cs@evomedicalsupplier.com";
    const formData = new FormData(form);

    try {
      const res = await fetch(url, { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormMessage("Message sent — thanks! We'll be in touch.");
        form.reset();
      } else {
        setStatus("error");
        setFormMessage(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setFormMessage("Submission failed. Please try again later.");
    }
  }

  return (
    <>


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
                    <a className="contact-info-val contact-link" href="mailto:Cs@evomedicalsupplier.com">
                      Cs@evomedicalsupplier.com
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
              {status === "success" ? (
                <div className="form-success">
                  <strong>{formMessage}</strong>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/cs@evomedicalsupplier.com"
                  method="POST"
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_subject" value="New contact request from Evolution Medical" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input id="company" name="company" type="text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>

                  <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'error' && (
                    <div className="form-error" style={{marginTop: '10px'}}>{formMessage}</div>
                  )}
                </form>
              )}
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
          <a href="#terms" onClick={openTerms}>
            Terms &amp; Conditions
          </a>
        </div>
        <div className="footer-copy">Copyright 2026 Evolution Medical Supplier, LLC. All rights reserved.</div>
      </footer>

      {showTerms && (
        <div
          className="modal-overlay"
          role="presentation"
          onClick={closeTerms}
        >
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={closeTerms}
            >
              &times;
            </button>
            <h2 id="terms-title" className="modal-title">
              Invoice Terms &amp; Conditions
            </h2>
            <div className="modal-body">
              <p>
                By purchasing goods or services from Evolution Medical Supplier, LLC
                (&ldquo;Evolution&rdquo;), the customer acknowledges and agrees to the
                following terms:
              </p>
              <ol>
                <li>
                  <strong>Governing Law; Venue and Jurisdiction.</strong> This invoice
                  and any transaction between the customer and Evolution shall be
                  governed by the laws of the State of New York, without regard to
                  conflict-of-law principles. Any dispute, claim, or legal proceeding
                  arising out of or relating to this invoice, the underlying
                  transaction, or the parties&rsquo; business relationship shall be
                  brought exclusively in a court of competent jurisdiction located in
                  New York County, New York, and the customer consents to such
                  jurisdiction and venue.
                </li>
                <li>
                  <strong>Past-Due Balances.</strong> Any invoice or unpaid balance
                  remaining outstanding for more than thirty (30) days shall accrue
                  interest at the maximum rate permitted by applicable law, calculated
                  from the date the payment became due until paid in full.
                </li>
                <li>
                  <strong>Collections.</strong> Any account referred to a collection
                  agency, attorney, or other third party for collection due to
                  nonpayment shall be subject to a collection fee equal to
                  twenty-five percent (25%) of the outstanding balance, to the extent
                  permitted by applicable law, in addition to any accrued interest
                  and other amounts lawfully recoverable.
                </li>
                <li>
                  <strong>No Assignment.</strong> No customer, purchaser, creditor, or
                  other party may assign, transfer, sell, pledge, factor, encumber, or
                  otherwise convey any right, title, interest, claim, or obligation
                  relating to this invoice or the underlying transaction without the
                  prior express written consent of Evolution Medical Supplier, LLC.
                  Any attempted assignment or transfer without such written consent
                  shall be void to the fullest extent permitted by law.
                </li>
                <li>
                  <strong>Final Sales; Returns.</strong> All sales are final. A
                  customer may submit a request for a return, exchange, credit, or
                  refund; however, all such requests are subject to review and
                  approval by Evolution Medical Supplier, LLC on a case-by-case
                  basis. Evolution reserves the right, in its sole discretion and
                  subject to applicable law, to approve or deny any such request and
                  to establish any conditions applicable to an approved return.
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default App;
