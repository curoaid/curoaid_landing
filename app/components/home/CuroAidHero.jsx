
'use client';
import { useState, useRef, useCallback } from 'react';
import BookingModal from '../ui/BookingModel';

// const SERVICES = [
//   {
//     key: 'doctor',
//     title: 'Doctor',
//     titleLine2: 'at Home',
//     name: 'Doctor at Home',
//     image:
//       'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=85',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4.8 2.4A2.4 2.4 0 0 0 2.4 4.8v4.8a7.2 7.2 0 0 0 14.4 0V4.8a2.4 2.4 0 0 0-2.4-2.4" />
//         <path d="M9.6 16.8v2.4a2.4 2.4 0 0 0 2.4 2.4h2.4a2.4 2.4 0 0 0 2.4-2.4v-1.2" />
//         <circle cx="16.8" cy="18" r="2.4" />
//       </svg>
//     ),
//   },
//   {
//     key: 'elder',
//     title: 'Elder Care',
//     titleLine2: 'at Home',
//     name: 'Elder Care at Home',
//     image:
//       'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=400&q=85',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//         <circle cx="12" cy="7" r="4" />
//       </svg>
//     ),
//   },
//   {
//     key: 'physio',
//     title: 'Physiotherapy',
//     titleLine2: 'at Home',
//     name: 'Physiotherapy at Home',
//     image:
//       'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=85',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="4" r="2.2" />
//         <path d="M7 10l5-3 5 3" />
//         <path d="M5 21l4-7 3 2 3-2 4 7" />
//         <path d="M12 7v5" />
//       </svg>
//     ),
//   },
//   {
//     key: 'vet',
//     title: 'Veterinary',
//     titleLine2: 'Care at Home',
//     name: 'Veterinary Care at Home',
//     image:
//       'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=85',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="#ffffff">
//         <circle cx="7" cy="8.5" r="2" />
//         <circle cx="10.5" cy="5" r="2" />
//         <circle cx="14.5" cy="5" r="2" />
//         <circle cx="18" cy="8.5" r="2" />
//         <path d="M12 10.5c-3 0-5.5 2-5.5 4.8 0 1.8 1.2 3.2 2.6 3.2 1 0 1.8-.5 2.9-1.4 1.1.9 1.9 1.4 2.9 1.4 1.4 0 2.6-1.4 2.6-3.2 0-2.8-2.5-4.8-5.5-4.8z" />
//       </svg>
//     ),
//   },
// ];
const SERVICES = [
  {
    key: 'doctor',
    title: 'Doctor',
    titleLine2: 'at Home',
    name: 'Doctor at Home',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.4A2.4 2.4 0 0 0 2.4 4.8v4.8a7.2 7.2 0 0 0 14.4 0V4.8a2.4 2.4 0 0 0-2.4-2.4" />
        <path d="M9.6 16.8v2.4a2.4 2.4 0 0 0 2.4 2.4h2.4a2.4 2.4 0 0 0 2.4-2.4v-1.2" />
        <circle cx="16.8" cy="18" r="2.4" />
      </svg>
    ),
  },

  {
    key: 'nursing',
    title: 'Home Nursing',
    titleLine2: 'Services',
    name: 'Home Nursing Services',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        <path d="M12 4v6" />
        <path d="M9 7h6" />
      </svg>
    ),
  },

  {
    key: 'physio',
    title: 'Physiotherapy',
    titleLine2: 'at Home',
    name: 'Physiotherapy at Home',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2.2" />
        <path d="M7 10l5-3 5 3" />
        <path d="M5 21l4-7 3 2 3-2 4 7" />
        <path d="M12 7v5" />
      </svg>
    ),
  },

  {
    key: 'wound-care',
    title: 'Wound Care',
    titleLine2: 'at Home',
    name: 'Wound Care at Home',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M8 7v10" />
        <path d="M16 7v10" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    ),
  },

  {
    key: 'elder',
    title: 'Elder Care',
    titleLine2: 'at Home',
    name: 'Elder Care at Home',
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M8 19h8" />
      </svg>
    ),
  },

  {
    key: 'vet',
    title: 'Veterinary',
    titleLine2: 'Care at Home',
    name: 'Veterinary Care at Home',
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="#ffffff">
        <circle cx="7" cy="8.5" r="2" />
        <circle cx="10.5" cy="5" r="2" />
        <circle cx="14.5" cy="5" r="2" />
        <circle cx="18" cy="8.5" r="2" />
        <path d="M12 10.5c-3 0-5.5 2-5.5 4.8 0 1.8 1.2 3.2 2.6 3.2 1 0 1.8-.5 2.9-1.4 1.1.9 1.9 1.4 2.9 1.4 1.4 0 2.6-1.4 2.6-3.2 0-2.8-2.5-4.8-5.5-4.8z" />
      </svg>
    ),
  },

  {
    key: 'yoga',
    title: 'Yoga',
    titleLine2: 'at Home',
    name: 'Yoga at Home',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2" />
        <path d="M12 7v5" />
        <path d="M8 10l4 2 4-2" />
        <path d="M5 21l7-9 7 9" />
        <path d="M8 21h8" />
      </svg>
    ),
  },

  {
    key: 'nri',
    title: 'NRI Elder',
    titleLine2: 'Care',
    name: 'NRI Elder Care',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
        <path d="M18 4l2 2-2 2" />
        <path d="M20 6h-5" />
      </svg>
    ),
  },

  {
    key: 'equipment',
    title: 'Medical Equipment',
    titleLine2: 'Rental & Sale',
    name: 'Medical Equipment Rental & Sale',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3v4h6V3" />
        <path d="M9 13h6" />
        <path d="M12 10v6" />
        <path d="M9 13h6" />
      </svg>
    ),
  },

  {
    key: 'blood-test',
    title: 'Blood Test',
    titleLine2: 'at Home',
    name: 'Blood Test at Home',
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=85',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3S6 10 6 14a6 6 0 0 0 12 0c0-4-6-11-6-11z" />
        <path d="M9 15c.5 1.5 1.5 2 3 2" />
      </svg>
    ),
  },
];
function ServiceCard({ service, onSelect }) {
  return (
    <button type="button" className="service-card" onClick={() => onSelect(service.name)}>
      <div className="service-left">
        <div className="service-icon-ring">
          <div className="service-icon-circle">{service.icon}</div>
        </div>
        <span className="service-title">
          {service.title}
          <br />
          {service.titleLine2}
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="service-thumb" src={service.image} alt={service.name} loading="lazy" />
    </button>
  );
}

export default function CuroAidHero({
  videoSrcMp4 = '/videos/CuroAid_Left_Space.webm',
  videoSrcWebm = '',
  posterSrc = '/images/hero-poster.jpg',
}) {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [toast, setToast] = useState({ show: false, message: '' });
  const toastTimeoutRef = useRef(null);

  const showToast = useCallback((message) => {
    setToast({ show: true, message });
    clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToast((t) => ({ ...t, show: false }));
    }, 3500);
  }, []);

  const openBookingModal = useCallback(() => setBookingOpen(true), []);
  const closeBookingModal = useCallback(() => setBookingOpen(false), []);

  const openBookingService = useCallback((serviceName) => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  }, []);

  const openVideoModal = useCallback(() => setVideoOpen(true), []);
  const closeVideoModal = useCallback(() => setVideoOpen(false), []);

  const handleBookingSubmit = useCallback(
    (e) => {
      e.preventDefault();
      closeBookingModal();
      showToast('Booking request received! Our medical coordinator will call you within 15 minutes.');
    },
    [closeBookingModal, showToast]
  );

  const loopedServices = [...SERVICES, ...SERVICES]; // seamless marquee loop

  return (
    <main className="banner-wrapper">
      {/* Full-viewport background video (replaces the old static banner image) */}
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        aria-hidden="true"
      >
        {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
        <source src={videoSrcMp4} type="video/mp4" />
      </video>
      <div className="hero-bg-scrim" aria-hidden="true" />

      <div className="banner-inner">
        <section className="hero-left-col">
          <div className="hero-main-content">
            <div className="pill-badge cursor-pointer transition-all duration-200 hover:scale-[1.02]" onClick={() => openBookingService('Doctor at Home')}>
              <span className="pill-dot" />
              Better care starts at home
            </div>
            <h1 className="hero-title">
              Trusted Home
              <span className="highlight-gradient">Healthcare Services</span>
            </h1>
            <p className="hero-description">
              Professional healthcare, personalized support, and compassionate care delivered to your doorstep.
            </p>

            <div className="hero-cta-group">
              <button type="button" className="btn-primary" onClick={openBookingModal}>
                <span>Book Free Consultation</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <button type="button" className="btn-story" onClick={openVideoModal}>
                <div className="btn-story-play-icon">
                  <svg viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            <div className="app-store-row">
              <div className="store-badge" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.androidVathalaUser", "_blank", "noopener,noreferrer")}>
                <div className="store-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#4285F4" d="M3.6 1.4L13.8 12 3.6 22.6c-.3-.3-.6-.8-.6-1.5V2.9c0-.7.3-1.2.6-1.5z" />
                    <path fill="#FBBC04" d="M17.2 8.6L13.8 12l3.4 3.4 3.9-2.2c1.1-.6 1.1-1.7 0-2.4l-3.9-2.2z" />
                    <path fill="#EA4335" d="M3.6 22.6l10.2-10.6 3.4 3.4L5.5 23.3c-.6.3-1.4.1-1.9-.7z" />
                    <path fill="#34A853" d="M17.2 8.6L13.8 12 3.6 1.4C4.1.6 4.9.4 5.5.7l11.7 7.9z" />
                  </svg>
                </div>
                <div className="store-text">
                  <span className="store-text-sub">Get it on</span>
                  <span className="store-text-title">Google Play</span>
                </div>
              </div>

              <div className="store-badge" onClick={() => window.open("https://apps.apple.com/us/app/curoaid/id6474188887", "_blank", "noopener,noreferrer")}>
                <div className="store-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#000000">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.66-.81 1.11-1.94.99-3.07-.96.04-2.13.65-2.82 1.45-.61.71-1.14 1.86-1 2.97 1.07.08 2.17-.55 2.83-1.35z" />
                  </svg>
                </div>
                <div className="store-text">
                  <span className="store-text-sub">Download on the</span>
                  <span className="store-text-title">App Store</span>
                </div>
              </div>
            </div>
          </div>

          <div className="metrics-row">
            <div className="metric-item">
              <div className="metric-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="metric-details">
                <span className="metric-value">10,000+</span>
                <span className="metric-label">Happy Families</span>
              </div>
            </div>

            <div className="metric-item">
              <div className="metric-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
                  <polyline points="9 12 11 14 15 10" strokeWidth="2" />
                </svg>
              </div>
              <div className="metric-details">
                <span className="metric-value">Trusted</span>
                <span className="metric-label">Professionals</span>
              </div>
            </div>

            <div className="metric-item">
              <div className="metric-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                  <circle cx="9" cy="7" r="4" strokeWidth="2" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                </svg>
              </div>
              <div className="metric-details">
                <span className="metric-value">Care Across</span>
                <span className="metric-label">Chennai &amp; Beyond</span>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-right-col">
          <div className="marquee-col">
            <div className="marquee-track track-up">
              <div className="marquee-group">
                {SERVICES.map((s) => (
                  <ServiceCard key={s.key} service={s} onSelect={openBookingService} />
                ))}
              </div>
              <div className="marquee-group" aria-hidden="true">
                {SERVICES.map((s) => (
                  <ServiceCard key={`dup-${s.key}`} service={s} onSelect={openBookingService} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* 
      {isBookingOpen && (
        <div
          className="modal-backdrop active"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeBookingModal();
          }}
        >
          <div className="modal-card">
            <button type="button" className="modal-close-btn" onClick={closeBookingModal} aria-label="Close">
              &times;
            </button>
            <h2 className="modal-title">Book a Visit</h2>
            <p className="modal-sub">Tell us what you need — we'll take it from here.</p>

            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="serviceSelect">
                  Service
                </label>
                <select
                  id="serviceSelect"
                  className="form-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.key} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Full name
                </label>
                <input id="fullName" className="form-input" type="text" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone number
                </label>
                <input id="phone" className="form-input" type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="location">
                  Location
                </label>
                <input id="location" className="form-input" type="text" placeholder="Your location" required />
              </div>

              <button type="submit" className="btn-submit-booking">
                Request Booking
              </button>
            </form>
          </div>
        </div>
      )} */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBookingModal} defaultService={selectedService} />

      {isVideoOpen && (
        <div
          className="modal-backdrop active"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeVideoModal();
          }}
        >
          <div className="video-modal-card">
            <button
              type="button"
              className="modal-close-btn"
              style={{ zIndex: 10, background: 'rgba(255,255,255,0.8)' }}
              onClick={closeVideoModal}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="video-container">
              <iframe
                title="Our Story"
                src="https://www.youtube-nocookie.com/embed/_vT2EidDgqs?autoplay=1&mute=0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <div className={`toast-msg${toast.show ? ' show' : ''}`}>{toast.message}</div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .banner-wrapper {
          position: relative;
          width: 100%;
          /* 100dvh keeps this a true full-viewport view on mobile too,
             where 100vh is taller than the visible area behind browser chrome. */
          height: 100vh;
          height: 100dvh;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background-color: #0b1a30;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #0b1a30;
        }

        .hero-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 115%;
          object-fit: fill;
          object-position: center center;
          z-index: 0;
        }

        // .hero-bg-scrim {
        //   position: absolute;
        //   inset: 0;
        //   z-index: 1;
        //   background: linear-gradient(
        //     120deg,
        //     rgba(241, 248, 249, 0.86) 0%,
        //     rgba(241, 248, 249, 0.72) 45%,
        //     rgba(241, 248, 249, 0.5) 100%
        //   );
        // }

        .banner-inner {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px 60px;
          max-width: 1750px;
          margin: 0 auto;
        }

        .hero-left-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 10px 20px 10px 0;
        }

        .hero-main-content {
          margin: auto 0;
        }
        .pill-badge {
         display: inline-flex;
         align-items: center;
         gap: 8px;
         padding: 6px 14px;
         border-radius: 50px;
         background: rgba(2, 132, 199, 0.08);
         border: 1px solid rgba(2, 132, 199, 0.25);
         color: #0284c7;
         font-size: 14px;
         font-weight: 700;
         letter-spacing: 0.5px;
         margin-bottom: 18px;

         cursor: pointer;
         transition:
           color 0.2s ease,
           background 0.2s ease,
           border-color 0.2s ease;
        }

        .pill-badge:hover {
         color: #74c067;
         background: rgba(116, 192, 103, 0.08);
         border-color: rgba(116, 192, 103, 0.3);
        }

        .pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #0284c7;
          box-shadow: 0 0 8px #0284c7;
          animation: pulseDot 2s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.75);
          }
        }

        .hero-title {
          font-size: clamp(34px, 3.4vw, 52px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.8px;
          margin-bottom: 16px;
        }

        .highlight-gradient {
          display: block;
          background: linear-gradient(135deg, #00b4d8 0%, #00c08b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: clamp(14px, 1.05vw, 16px);
          line-height: 1.6;
          color: #475569;
          max-width: 440px;
          margin-bottom: 26px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 30px;
          border-radius: 50px;
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          box-shadow: 0 10px 25px -4px rgba(6, 182, 212, 0.45);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 14px 30px -4px rgba(6, 182, 212, 0.6);
        }

        .btn-primary svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover svg {
          transform: translateX(3px);
        }

        .btn-story {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          color: #0b1a30;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 50px;
          transition: color 0.25s ease;
        }

        .btn-story:hover {
          color: #0284c7;
        }

        .btn-story-play-icon {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .btn-story:hover .btn-story-play-icon {
          transform: scale(1.08);
        }

        .btn-story-play-icon svg {
          width: 14px;
          height: 14px;
          fill: #ffffff;
          margin-left: 2px;
        }

        .btn-story-play-icon::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 1.5px solid #0284c7;
          opacity: 0.6;
          animation: playPulse 2s infinite ease-out;
        }

        @keyframes playPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .app-store-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }

        .store-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 50px;
          box-shadow: 0 4px 15px -2px rgba(11, 26, 48, 0.05);
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .store-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -3px rgba(11, 26, 48, 0.08);
          border-color: rgba(2, 132, 199, 0.4);
        }

        .store-icon {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .store-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .store-text-sub {
          font-size: 8.5px;
          font-weight: 600;
          color: #475569;
          letter-spacing: 0.5px;
          line-height: 1;
        }

        .store-text-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #0b1a30;
          line-height: 1.2;
        }

        .metrics-row {
          display: flex;
          align-items: center;
          gap: 28px;
          padding-top: 14px;
       
          margin-top: auto;
          flex-wrap: wrap;
        }

        .metric-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .metric-icon {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
        }

        .metric-icon svg {
          width: 100%;
          height: 100%;
          stroke: currentColor;
        }

        .metric-details {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-size: 14.5px;
          font-weight: 750;
          color: #0b1a30;
          // line-height: 1.1;
        }

        .metric-label {
          font-size: 12.5px;
          font-weight: 550;
          color: #0b1a30;
        }

        .hero-right-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          width: 350px;
          max-width: 360px;
          height: 86vh;
          max-height: 720px;
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
          padding: 10px 0;
        }
          .marquee-col {
           overflow-y: auto;
           overflow-x: hidden;
           scrollbar-width: none;
           -ms-overflow-style: none;
          }

          .marquee-col::-webkit-scrollbar {
           display: none;
          }

          .marquee-col:hover .marquee-track {
           animation-play-state: paused;
          }
        // .marquee-col {
        //   display: flex;
        //   flex-direction: column;
        //   width: 100%;
        //   height: 100%;
        //   flex-shrink: 0;
        //   overflow: hidden;
        // }

        // .marquee-track {
        //   display: flex;
        //   flex-direction: column;
        //   will-change: transform;
        //   animation: marqueeScrollUp 15s linear infinite;
        // }

        .marquee-col:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-bottom: 16px;
        }

        @keyframes marqueeScrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .service-card {
          position: relative;
          display: flex;
          align-items: center;
          height: 98px;
          width: 100%;
          background: linear-gradient(
            135deg,
            rgba(215, 252, 248, 0.68) 0%,
            rgba(200, 242, 250, 0.5) 50%,
            rgba(225, 248, 255, 0.58) 100%
          );
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          border: 1.5px solid rgba(220, 255, 255, 0.95);
          border-radius: 50px;
          padding-left: 22px;
          box-shadow: 0 12px 35px -5px rgba(11, 26, 48, 0.08), 0 0 28px rgba(0, 220, 180, 0.32),
            inset 0 1px 2px rgba(255, 255, 255, 0.98), inset 0 0 16px rgba(180, 245, 240, 0.4);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          flex-shrink: 0;
          text-align: left;
        }

        .service-card:hover {
          transform: translateY(-3px) scale(1.02);
          background: linear-gradient(135deg, rgba(225, 255, 250, 0.8) 0%, rgba(210, 248, 255, 0.6) 100%);
          border-color: #ffffff;
          box-shadow: 0 16px 38px -4px rgba(0, 180, 216, 0.38), 0 0 35px rgba(0, 230, 190, 0.45),
            inset 0 1px 2px rgba(255, 255, 255, 1);
        }

        .service-left {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          padding-right: 125px;
        }

        .service-icon-ring {
          position: relative;
          z-index: 3;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          border: 1.5px solid rgba(255, 255, 255, 0.98);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(0, 200, 150, 0.35), inset 0 0 8px rgba(255, 255, 255, 0.9);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon-ring {
          transform: scale(1.05);
        }

        .service-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00c08b 0%, #00b4d8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 192, 139, 0.45);
          flex-shrink: 0;
        }

        .service-icon-circle svg {
          width: 22px;
          height: 22px;
        }

        .service-title {
          font-size: 16px;
          font-weight: 700;
          color: #112d42;
          line-height: 1.25;
          letter-spacing: -0.2px;
          white-space: nowrap;
        }

        .service-thumb {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 155px;
          object-fit: cover;
          object-position: center right;
          border-radius: 0 50px 50px 0;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.4) 18%,
            rgba(0, 0, 0, 0.95) 45%,
            #000000 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.4) 18%,
            rgba(0, 0, 0, 0.95) 45%,
            #000000 100%
          );
          pointer-events: none;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-thumb {
          transform: scale(1.05);
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(11, 26, 48, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 34px;
          max-width: 460px;
          width: 100%;
          box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.25);
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #475569;
          transition: background 0.2s;
          font-size: 18px;
          line-height: 1;
        }

        .modal-close-btn:hover {
          background: #e2e8f0;
          color: #0b1a30;
        }

        .modal-title {
          font-size: 22px;
          font-weight: 800;
          color: #0b1a30;
          margin-bottom: 6px;
        }

        .modal-sub {
          font-size: 13.5px;
          color: #475569;
          margin-bottom: 22px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #0b1a30;
          margin-bottom: 6px;
          letter-spacing: 0.3px;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          font-family: inherit;
          font-size: 14.5px;
          color: #0b1a30;
          background-color: #f8fafc;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: #00b4d8;
          box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.15);
          background-color: #ffffff;
        }

        .btn-submit-booking {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(6, 182, 212, 0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          margin-top: 10px;
        }

        .btn-submit-booking:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(6, 182, 212, 0.45);
        }

        .video-modal-card {
          background: #000000;
          border-radius: 20px;
          max-width: 720px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
        }

        .video-container iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .toast-msg {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%) translateY(100px);
          background: #0b1a30;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          z-index: 2000;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          max-width: calc(100vw - 40px);
          text-align: center;
        }

        .toast-msg.show {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }

        @media (max-width: 1366px) {
          .banner-inner {
            padding: 24px 36px;
          }
          .hero-right-col {
            width: 330px;
            max-width: 330px;
          }
          .service-card {
            height: 92px;
          }
          .service-thumb {
            width: 140px;
          }
        }

        @media (max-width: 1024px) {
          .banner-wrapper {
            height: auto;
            min-height: 100vh;
            min-height: 100dvh;
            overflow-y: auto;
          }
          .hero-bg-video {
            position: absolute;
            object-fit: contain;
            background-color: #0b1a30;
          }
          .hero-bg-scrim {
            position: absolute;
          }
          .banner-inner {
            flex-direction: column;
            gap: 40px;
            padding: 40px 30px;
          }
          .hero-left-col {
            height: auto;
            max-width: 620px;
          }
          .hero-right-col {
            display: none;
          }
        }

       /* ================================
   MOBILE VIEW ONLY
   ================================ */

@media (max-width: 768px) {
  .banner-wrapper {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100dvh;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    /* WHITE MOBILE BACKGROUND */
    background: #ffffff;
  }

  /* --------------------------------
     MOBILE VIDEO
     Original video - no cropping
     -------------------------------- */
  .hero-bg-video {
    position: relative;
    inset: auto;

    width: 100%;
    height: auto;

    display: block;
    flex-shrink: 0;

    /* Show complete original video */
    object-fit: contain;
    object-position: center center;

    z-index: 0;

    /* White around video if aspect ratio differs */
    background: #ffffff;
  }

  /* --------------------------------
     REMOVE MOBILE VIDEO OVERLAY
     -------------------------------- */
  .hero-bg-scrim {
    display: none;
  }

  /* --------------------------------
     CONTENT BELOW VIDEO
     -------------------------------- */
  .banner-inner {
    position: relative;
    z-index: 10;

    width: 100%;
    height: auto;
    min-height: auto;

    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: stretch;

    gap: 30px;

    padding: 28px 18px 32px;
    margin: 0;

    background: #ffffff;
  }

  .hero-left-col {
    width: 100%;
    height: auto;
    max-width: none;

    padding: 0;

    display: flex;
    flex-direction: column;

    justify-content: flex-start;
  }

  .hero-main-content {
    width: 100%;
    margin: 0;
  }

  .pill-badge {
    margin-bottom: 14px;
    font-size: 10px;
    padding: 6px 12px;
  }

  .hero-title {
    font-size: 32px;
    line-height: 1.12;
    letter-spacing: -0.5px;
    margin-bottom: 14px;
  }

  .hero-description {
    width: 100%;
    max-width: 100%;

    font-size: 14.5px;
    line-height: 1.55;

    margin-bottom: 22px;
  }

  .hero-cta-group {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: stretch;

    gap: 14px;

    margin-bottom: 22px;
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
  }

  .btn-story {
    width: fit-content;
  }

  .app-store-row {
    width: 100%;

    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 8px;

    margin-bottom: 22px;
  }

  .store-badge {
    flex: 1;
    justify-content: center;

    padding: 8px 10px;
    min-width: 0;
  }

  .store-text-title {
    font-size: 12px;
  }

  .store-text-sub {
    font-size: 8px;
  }

  .metrics-row {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 14px;

    margin-top: 18px;
    padding-top: 14px;
  }

  .hero-right-col {
    display: none;
  }
}


/* =================================
   SMALL MOBILE
   ================================= */

@media (max-width: 420px) {
  .hero-bg-video {
    width: 100%;
    height: auto;

    object-fit: contain;
    object-position: center center;

    background: #ffffff;
  }

  .hero-title {
    font-size: 28px;
  }

  .service-title {
    font-size: 14px;
    white-space: normal;
  }

  .service-thumb {
    width: 110px;
  }

  .banner-inner {
    padding: 24px 16px 30px;
    gap: 24px;
  }
}

        @media (prefers-reduced-motion: reduce) {
          .marquee-track,
          .pill-dot,
          .btn-story-play-icon::before {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}