import React from 'react';
import './App.css';

// Dummy Data
const categories = [
  'Development', 'Business', 'Finance & Accounting', 'IT & Software',
  'Office Productivity', 'Personal Development', 'Design', 'Marketing',
  'Lifestyle', 'Photography & Video', 'Health & Fitness', 'Music',
  'Teaching & Academics'
];

const featuredCourses = [
  {
    id: 1,
    title: 'The Complete 2024 Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviewCount: 389567,
    price: 'E£259.99',
    originalPrice: 'E£1899.99',
    image: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
    bestseller: true
  },
  {
    id: 2,
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviewCount: 298456,
    price: 'E£259.99',
    originalPrice: 'E£1899.99',
    image: 'https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg',
    bestseller: true
  },
  {
    id: 3,
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    instructor: 'Jonas Schmedtmann',
    rating: 4.7,
    reviewCount: 187234,
    price: 'E£259.99',
    originalPrice: 'E£1899.99',
    image: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
    bestseller: true
  },
  {
    id: 4,
    title: 'React - The Complete Guide 2024',
    instructor: 'Maximilian Schwarzmüller',
    rating: 4.6,
    reviewCount: 198765,
    price: 'E£259.99',
    originalPrice: 'E£1899.99',
    image: 'https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    bestseller: false
  }
];

const trustedCompanies = [
  { name: 'Nasdaq', logo: 'NASDAQ' },
  { name: 'Volkswagen', logo: 'VW' },
  { name: 'Box', logo: 'BOX' },
  { name: 'NetApp', logo: 'NetApp' },
  { name: 'Eventbrite', logo: 'eventbrite' }
];

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <div className="logo">Udemy</div>
            <div className="categories-dropdown">Categories</div>
          </div>
          
          <div className="search-bar">
            <input type="text" placeholder="Search for anything" />
            <button className="search-btn">🔍</button>
          </div>
          
          <div className="header-right">
            <a href="#" className="header-link">Udemy Business</a>
            <a href="#" className="header-link">Teach on Udemy</a>
            <button className="cart-btn">🛒</button>
            <button className="btn-secondary">Log in</button>
            <button className="btn-primary">Sign up</button>
            <button className="language-btn">🌐</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">New-learner offer</h1>
          <p className="hero-subtitle">Courses from E£259.99. Click button to see savings.</p>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="categories-banner">
        <div className="container">
          <h2>A broad selection of courses</h2>
          <p>Choose from over 220,000 online video courses with new additions published every month</p>
          <div className="categories-tabs">
            {categories.slice(0, 8).map((category, index) => (
              <button key={index} className={index === 0 ? 'tab active' : 'tab'}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section className="courses-section">
        <div className="container">
          <h2 className="section-title">Expand your career opportunities with Python</h2>
          <p className="section-subtitle">
            Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. 
            Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. 
            You'll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...
          </p>
          <button className="btn-outline">Explore Python</button>

          <div className="courses-grid">
            {featuredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course-info">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-instructor">{course.instructor}</p>
                  <div className="course-rating">
                    <span className="rating-number">{course.rating}</span>
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span className="review-count">({course.reviewCount.toLocaleString()})</span>
                  </div>
                  <div className="course-price">
                    <span className="current-price">{course.price}</span>
                    <span className="original-price">{course.originalPrice}</span>
                  </div>
                  {course.bestseller && <div className="bestseller-badge">Bestseller</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="trusted-companies">
        <div className="container">
          <h2>Trusted by over 16,000 companies and millions of learners around the world</h2>
          <div className="companies-logos">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="company-logo">
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;