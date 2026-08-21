import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-overlay">

        <div className="welcome-section">
          <img src="/photo.jpg" alt="Her" />

          <p className="little-greeting">Your little study corner 💙</p>

          <h2>Hello, welcome my lady</h2>

          <p className="welcome-text">
            Let's make studying a little easier today.
          </p>
        </div>

        <div className="subjects-section">
          <div className="section-heading">
            <h3>What do you want to study?</h3>
            <p>Choose a subject and let's get started ✨</p>
          </div>

          <div className="home-buttons">

            <Link to="/physics" className="subject-card physics-card">
              <div className="subject-icon">⚛️</div>
              <div className="subject-info">
                <h4>Physics</h4>
                <p>Explore chapters →</p>
              </div>
            </Link>

            <Link to="/chemistry" className="subject-card chemistry-card">
              <div className="subject-icon">🧪</div>
              <div className="subject-info">
                <h4>Chemistry</h4>
                <p>Explore chapters →</p>
              </div>
            </Link>

            <Link to="/biology" className="subject-card biology-card">
              <div className="subject-icon">🧬</div>
              <div className="subject-info">
                <h4>Biology</h4>
                <p>Explore chapters →</p>
              </div>
            </Link>

          </div>
        </div>

        <div className="home-footer">
          <span>Made specially for you</span>
          <span>💙</span>
        </div>

      </div>
    </div>
  );
}

export default Home;