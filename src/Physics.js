import physicsQuestions, {
  shuffleQuestions,
  shuffleOptions,
} from "./data/PhysicsQuestion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Physics() {
  const navigate = useNavigate();

  const chapters = [
    {
      title: "Units, Dimensions and Vectors",
      notes: "Units, dimensions, dimensional analysis and vectors.",
      summary:
        "Learn how physical quantities are measured and represented using vectors.",
      video: "https://www.youtube.com/watch?v=example1",
    },
    {
      title: "Motion in a Straight Line",
      notes: "Distance, displacement, speed, velocity and acceleration.",
      summary:
        "Understand one-dimensional motion and the equations used to describe it.",
      video: "https://www.youtube.com/watch?v=example2",
    },
    {
      title: "Laws of Motion",
      notes: "Newton's laws, force, momentum and applications.",
      summary:
        "Understand how forces affect the motion of objects.",
      video: "https://www.youtube.com/watch?v=example3",
    },
    {
      title: "Motion in a Plane",
      notes: "Two-dimensional motion, vectors and projectile motion.",
      summary:
        "Learn how objects move in two dimensions.",
      video: "https://www.youtube.com/watch?v=example4",
    },
    {
      title: "Gravitation",
      notes: "Universal law of gravitation, gravity and satellites.",
      summary:
        "Understand gravitational force and motion under gravity.",
      video: "https://www.youtube.com/watch?v=example5",
    },
    {
      title: "Work, Energy and Power",
      notes: "Work, kinetic energy, potential energy and power.",
      summary:
        "Learn how energy changes and how work is related to motion.",
      video: "https://www.youtube.com/watch?v=example6",
    },
    {
      title: "Motion of a Rigid Body",
      notes:
        "Rotational motion, torque, angular momentum and moment of inertia.",
      summary:
        "Understand the motion of objects rotating about an axis.",
      video: "https://www.youtube.com/watch?v=example7",
    },
    {
      title: "Elastic Properties of Solids",
      notes: "Elasticity, stress, strain and Hooke's law.",
      summary:
        "Learn how solids deform when forces are applied to them.",
      video: "https://www.youtube.com/watch?v=example8",
    },
    {
      title: "Properties of Fluids",
      notes: "Pressure, buoyancy, viscosity and fluid flow.",
      summary:
        "Understand how liquids and gases behave under different conditions.",
      video: "https://www.youtube.com/watch?v=example9",
    },
    {
      title: "Kinetic Theory of Gases",
      notes: "Molecular motion, pressure and temperature of gases.",
      summary:
        "Understand gases by studying the motion of their molecules.",
      video: "https://www.youtube.com/watch?v=example10",
    },
    {
      title: "Thermodynamics",
      notes:
        "Heat, temperature, laws of thermodynamics and thermal processes.",
      summary:
        "Learn how heat and energy are transferred and transformed.",
      video: "https://www.youtube.com/watch?v=example11",
    },
    {
      title: "Heat Transfer and Solar Energy",
      notes:
        "Conduction, convection, radiation and solar energy.",
      summary:
        "Understand different methods of heat transfer and the use of solar energy.",
      video: "https://www.youtube.com/watch?v=example12",
    },
    {
      title: "Simple Harmonic Motion",
      notes:
        "Oscillations, amplitude, time period and frequency.",
      summary:
        "Learn how objects perform periodic oscillatory motion.",
      video: "https://www.youtube.com/watch?v=example13",
    },
    {
      title: "Wave Phenomena",
      notes:
        "Wave motion, wavelength, frequency and wave properties.",
      summary:
        "Understand how waves travel and transfer energy.",
      video: "https://www.youtube.com/watch?v=example14",
    },
    {
      title: "Electric Charge and Electric Field",
      notes:
        "Electric charge, Coulomb's law, electric field and electric dipoles.",
      summary:
        "Understand electric charge and how charges produce electric fields.",
      video: "https://www.youtube.com/watch?v=example15",
    },
    {
      title: "Electric Potential and Capacitors",
      notes:
        "Electric potential, potential difference and capacitance.",
      summary:
        "Learn how electric potential works and how capacitors store energy.",
      video: "https://www.youtube.com/watch?v=example16",
    },
    {
      title: "Electric Current",
      notes:
        "Current, resistance, resistivity, Ohm's law and electrical circuits.",
      summary:
        "Understand the movement of electric charge through circuits.",
      video: "https://www.youtube.com/watch?v=example17",
    },
    {
      title: "Magnetism and Magnetic Effect of Electric Current",
      notes:
        "Magnetic fields, magnetic force and current-carrying conductors.",
      summary:
        "Learn how magnets and electric currents interact.",
      video: "https://www.youtube.com/watch?v=example18",
    },
    {
      title: "Electromagnetic Induction and Alternating Current",
      notes:
        "Electromagnetic induction, Faraday's law and AC circuits.",
      summary:
        "Understand how changing magnetic fields produce electricity.",
      video: "https://www.youtube.com/watch?v=example19",
    },
    {
      title: "Reflection and Refraction of Light",
      notes:
        "Reflection, refraction, mirrors, lenses and optical laws.",
      summary:
        "Learn how light behaves when it meets different surfaces and materials.",
      video: "https://www.youtube.com/watch?v=example20",
    },
    {
      title: "Dispersion and Scattering of Light",
      notes:
        "Dispersion, spectrum and scattering of light.",
      summary:
        "Understand how white light separates into colours and how light scatters.",
      video: "https://www.youtube.com/watch?v=example21",
    },
    {
      title: "Wave Phenomena and Light",
      notes:
        "Wave nature of light and related wave phenomena.",
      summary:
        "Explore the wave behaviour of light.",
      video: "https://www.youtube.com/watch?v=example22",
    },
    {
      title: "Optical Instruments",
      notes:
        "Microscopes, telescopes and other optical instruments.",
      summary:
        "Understand how lenses and mirrors are used in optical instruments.",
      video: "https://www.youtube.com/watch?v=example23",
    },
    {
      title: "Structure of Atom",
      notes:
        "Atomic models, electrons, energy levels and atomic structure.",
      summary:
        "Learn how scientists developed our modern understanding of the atom.",
      video: "https://www.youtube.com/watch?v=example24",
    },
    {
      title: "Dual Nature of Radiation and Matter",
      notes:
        "Photoelectric effect, photons and wave-particle duality.",
      summary:
        "Understand why radiation and matter can show both wave and particle behaviour.",
      video: "https://www.youtube.com/watch?v=example25",
    },
    {
      title: "Nuclei and Radioactivity",
      notes:
        "Atomic nuclei, radioactive decay and nuclear properties.",
      summary:
        "Learn about nuclear structure and radioactive processes.",
      video: "https://www.youtube.com/watch?v=example26",
    },
    {
      title: "Nuclear Fission and Fusion",
      notes:
        "Nuclear reactions, fission, fusion and nuclear energy.",
      summary:
        "Understand how energy is released from nuclear reactions.",
      video: "https://www.youtube.com/watch?v=example27",
    },
    {
      title: "Semiconductors and Semiconducting Devices",
      notes:
        "Semiconductors, diodes and transistor basics.",
      summary:
        "Learn the basic properties and behaviour of semiconductor devices.",
      video: "https://www.youtube.com/watch?v=example28",
    },
    {
      title: "Applications of Semiconductor Devices",
      notes:
        "Rectifiers, Zener diodes, amplifiers, switches and oscillators.",
      summary:
        "Understand how semiconductor devices are used in practical circuits.",
      video: "https://www.youtube.com/watch?v=example29",
    },
    {
      title: "Communication Systems",
      notes:
        "Communication systems, signals, transmission, modulation and bandwidth.",
      summary:
        "Learn how information is transmitted over long distances.",
      video: "https://www.youtube.com/watch?v=example30",
    },
  ];

  const [view, setView] = useState("menu");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [status, setStatus] = useState(() => {
  const savedStatus = localStorage.getItem("physicsProgress");

  if (savedStatus) {
    return JSON.parse(savedStatus);
  }

  return Array(chapters.length).fill("none");
});

const [quizQuestions, setQuizQuestions] = useState([]);
const [quizIndex, setQuizIndex] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState(null);
const [quizScore, setQuizScore] = useState(0);
const [quizFinished, setQuizFinished] = useState(false);

const saveStatus = (newStatus) => {
  setStatus(newStatus);
  localStorage.setItem("physicsProgress", JSON.stringify(newStatus));
};

  const openChapter = (index) => {
    setSelectedIndex(index);
    setView("chapterDetail");
  };

  const startQuiz = () => {
  const questions = physicsQuestions[selectedIndex] || [];

  const shuffledQuestions = shuffleQuestions(questions).map((question) => ({
    ...question,
    options: shuffleOptions(question.options),
  }));

  setQuizQuestions(shuffledQuestions);
  setQuizIndex(0);
  setSelectedAnswer(null);
  setQuizScore(0);
  setQuizFinished(false);
  setView("quiz");
};

const selectAnswer = (option) => {
  if (selectedAnswer !== null) return;

  setSelectedAnswer(option);

  if (option === quizQuestions[quizIndex].answer) {
    setQuizScore((prev) => prev + 1);
  }
};

const nextQuestion = () => {
  if (quizIndex < quizQuestions.length - 1) {
    setQuizIndex((prev) => prev + 1);
    setSelectedAnswer(null);
  } else {
    setQuizFinished(true);
  }
};

  const markDone = () => {
  const newStatus = [...status];
  newStatus[selectedIndex] = "done";

  saveStatus(newStatus);
  setView("menu");
};

  const markUncertain = () => {
  const newStatus = [...status];
  newStatus[selectedIndex] = "uncertain";

  saveStatus(newStatus);
  setView("menu");
};

  const completed = status.filter((s) => s === "done").length;
  const uncertain = status.filter((s) => s === "uncertain").length;

  const progress =
    chapters.length === 0
      ? 0
      : Math.round((completed / chapters.length) * 100);

  return (
    <div className="physics-page">

      {/* ================= MENU ================= */}

      {view === "menu" && (
        <div className="physics-container">

          <div className="physics-header">

            <div>
              <span className="subject-label">
                YOUR STUDY SPACE
              </span>

              <h1>Physics 💡</h1>

              <p>
                Take it one chapter at a time. You've got this. 💙
              </p>
            </div>

            <Link to="/" className="physics-back">
              ← Home
            </Link>

          </div>


          {/* PROGRESS */}

          <div className="physics-progress-card">

            <div className="progress-top">

              <div>

                <span className="progress-label">
                  Your progress
                </span>

                <h2>{progress}%</h2>

              </div>

              <div className="progress-stats">

                <span>
                  ✅ {completed} completed
                </span>

                <span>
                  🤔 {uncertain} unsure
                </span>

              </div>

            </div>

            <progress
              value={completed}
              max={chapters.length}
            />

            <p>
              Keep going — every chapter you finish is one step closer. ✨
            </p>

          </div>


          {/* ACTION BUTTONS */}

          <div className="physics-actions">

            <button
              className="physics-action-card"
              onClick={() => setView("chapters")}
            >
              <span className="action-icon">📚</span>

              <div>
                <h3>Chapters</h3>
                <p>Browse all your Physics chapters</p>
              </div>

              <span className="action-arrow">→</span>
            </button>


            <button
              className="physics-action-card"
              onClick={() => setView("practice")}
            >
              <span className="action-icon">📝</span>

              <div>
                <h3>Practice</h3>
                <p>Test yourself with questions</p>
              </div>

              <span className="action-arrow">→</span>
            </button>


            <button
              className="physics-action-card"
              onClick={() => setView("overall")}
            >
              <span className="action-icon">🎯</span>

              <div>
                <h3>Overall Practice</h3>
                <p>Review everything you've studied</p>
              </div>

              <span className="action-arrow">→</span>
            </button>


            <button
              className="physics-action-card"
              onClick={() => setView("time")}
            >
              <span className="action-icon">⏱️</span>

              <div>
                <h3>Study Timer</h3>
                <p>Focus for a study session</p>
              </div>

              <span className="action-arrow">→</span>
            </button>

          </div>


          {/* START HERE */}

          <div className="continue-card">

            <div>

              <span className="continue-label">
                START HERE
              </span>

              <h3>Ready to study?</h3>

              <p>
                Pick a chapter and start learning.
              </p>

            </div>

            <button
              onClick={() => openChapter(0)}
              className="continue-button"
            >
              Start Chapter →
            </button>

          </div>

        </div>
      )}


      {/* ================= CHAPTER LIST ================= */}

      {view === "chapters" && (
        <div className="physics-container">

          <div className="page-top">

            <button
              className="simple-back"
              onClick={() => setView("menu")}
            >
              ← Physics
            </button>

            <h1>Physics Chapters 📚</h1>

            <p>
              Choose a chapter to start studying.
            </p>

          </div>


          <div className="chapter-list">

            {chapters.map((chapter, index) => (

              <button
                className="chapter-card"
                key={index}
                onClick={() => openChapter(index)}
              >

                <div className="chapter-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="chapter-info">

                  <h3>
                    {chapter.title}
                  </h3>

                  <p>
                    {chapter.notes}
                  </p>

                  <span>
                    Open chapter →
                  </span>

                </div>

                <div className="chapter-status">

                  {status[index] === "done" && "✅"}

                  {status[index] === "uncertain" && "🤔"}

                  {status[index] === "none" && "○"}

                </div>

              </button>

            ))}

          </div>

        </div>
      )}


      {/* ================= CHAPTER DETAIL ================= */}

      {view === "chapterDetail" && selectedIndex !== null && (

        <div className="physics-container">

          <button
            className="simple-back"
            onClick={() => setView("chapters")}
          >
            ← Back to chapters
          </button>


          <div className="chapter-detail">

            <span className="subject-label">
              CHAPTER{" "}
              {String(selectedIndex + 1).padStart(2, "0")}
            </span>


            <h1>
              {chapters[selectedIndex].title}
            </h1>


            {/* ================= STUDY CARDS ================= */}

            <div className="chapter-study-cards">


              {/* SHORT NOTES */}

              <Link
                to={`/physics/notes/${selectedIndex}`}
                className="study-card"
              >

                <div className="study-card-icon notes-icon">
                  📝
                </div>

                <div className="study-card-content">

                  <h3>
                    Short Notes
                  </h3>

                  <p>
                    Quick notes and important concepts
                  </p>

                </div>

                <span className="study-card-arrow">
                  →
                </span>

              </Link>


              {/* SUMMARY */}

              <Link
                to={`/physics/summary/${selectedIndex}`}
                className="study-card"
              >

                <div className="study-card-icon summary-icon">
                  📖
                </div>

                <div className="study-card-content">

                  <h3>
                    Summary
                  </h3>

                  <p>
                    Simple explanation of the chapter
                  </p>

                </div>

                <span className="study-card-arrow">
                  →
                </span>

              </Link>


              {/* VIDEO */}

              <Link
                to={`/physics/video/${selectedIndex}`}
                className="study-card"
              >

                <div className="study-card-icon video-icon">
                  📺
                </div>

                <div className="study-card-content">

                  <h3>
                    Video Explanation
                  </h3>

                  <p>
                    Watch a video explanation of this chapter
                  </p>

                </div>

                <span className="study-card-arrow">
                  →
                </span>

              </Link>

            </div>

            <button
  className="study-card"
  onClick={startQuiz}
>
  <div className="study-card-icon">
    📝
  </div>

  <div className="study-card-content">
    <h3>
      Practice Questions
    </h3>

    <p>
      Test yourself with chapter questions
    </p>
  </div>

  <span className="study-card-arrow">
    →
  </span>
</button>


            {/* ================= STATUS BUTTONS ================= */}

            <div className="chapter-actions">

              <button
                className="done-button"
                onClick={markDone}
              >
                ✅ I understand this
              </button>


              <button
                className="uncertain-button"
                onClick={markUncertain}
              >
                🤔 I need to revise this
              </button>

            </div>


            {status[selectedIndex] === "done" && (

              <div className="status-message success">
                Nice! Chapter completed. 🎉
              </div>

            )}


            {status[selectedIndex] === "uncertain" && (

              <div className="status-message uncertain">
                That's okay. Mark it for revision and come back later. 💙
              </div>

            )}


            {/* NEXT CHAPTER */}

            {selectedIndex < chapters.length - 1 && (

              <div className="next-chapter-container">

                <button
                  className="next-chapter-button"
                  onClick={() =>
                    openChapter(selectedIndex + 1)
                  }
                >
                  Next Chapter →
                </button>

              </div>

            )}

          </div>

        </div>
      )}

{/* ================= QUIZ ================= */}

{view === "quiz" && selectedIndex !== null && (

  <div className="physics-container">

    {!quizFinished ? (

      <>
        <button
          className="simple-back"
          onClick={() => setView("chapterDetail")}
        >
          ← Save & Exit
        </button>

        <div className="chapter-detail">

          <span className="subject-label">
            CHAPTER{" "}
            {String(selectedIndex + 1).padStart(2, "0")}
          </span>

          <h1>
            {chapters[selectedIndex].title}
          </h1>

          {quizQuestions.length > 0 && (

            <>
              <p className="quiz-progress">
                Question {quizIndex + 1} of {quizQuestions.length}
              </p>

              <div className="quiz-question">

                <h2>
                  {quizQuestions[quizIndex].question}
                </h2>

                <div className="quiz-options">

                  {quizQuestions[quizIndex].options.map(
                    (option, index) => {

                      const isSelected =
                        selectedAnswer === option;

                      const isCorrect =
                        option === quizQuestions[quizIndex].answer;

                      let optionClass = "quiz-option";

                      if (selectedAnswer !== null) {

                        if (isCorrect) {
                          optionClass += " correct";
                        } else if (isSelected) {
                          optionClass += " wrong";
                        }

                      }

                      return (
                        <button
                          key={index}
                          className={optionClass}
                          onClick={() => selectAnswer(option)}
                        >

                          <span className="quiz-option-letter">
                            {String.fromCharCode(65 + index)}
                          </span>

                          <span>
                            {option}
                          </span>

                        </button>
                      );
                    }
                  )}

                </div>


                {selectedAnswer !== null && (

                  <div className="quiz-feedback">

                    {selectedAnswer ===
                    quizQuestions[quizIndex].answer ? (

                      <p>
                        Correct! 🎉
                      </p>

                    ) : (

                      <p>
                        Not quite. The correct answer is:{" "}
                        <strong>
                          {quizQuestions[quizIndex].answer}
                        </strong>
                      </p>

                    )}

                  </div>

                )}


                {selectedAnswer !== null && (

                  <div className="next-chapter-container">

                    <button
                      className="next-chapter-button"
                      onClick={nextQuestion}
                    >
                      {quizIndex === quizQuestions.length - 1
                        ? "Finish Quiz"
                        : "Next Question →"}
                    </button>

                  </div>

                )}

              </div>

            </>
          )}

          {quizQuestions.length === 0 && (

            <div className="coming-soon">

              <span>📝</span>

              <h1>No Questions Yet</h1>

              <p>
                Questions for this chapter haven't been added yet.
              </p>

            </div>

          )}

        </div>

      </>

    ) : (

      <div className="chapter-detail">

        <span className="subject-label">
          QUIZ COMPLETE
        </span>

        <h1>
          Well done! 🎉
        </h1>

        <div className="coming-soon">

          <span>🏆</span>

          <h1>
            {quizScore} / {quizQuestions.length}
          </h1>

          <p>
            You completed the quiz for{" "}
            {chapters[selectedIndex].title}.
          </p>

          <button
            className="continue-button"
            onClick={() => setView("chapterDetail")}
          >
            Back to Chapter
          </button>

        </div>

      </div>

    )}

  </div>

)} 
      {/* ================= PRACTICE ================= */}

{view === "practice" && (

  <div className="physics-container">

    <button
      className="simple-back"
      onClick={() => setView("menu")}
    >
      ← Physics
    </button>

    <div className="page-top">

      <h1>Physics Practice 📝</h1>

      <p>
        Choose a chapter to start practicing.
      </p>

    </div>

    <div className="chapter-list">

      {chapters.map((chapter, index) => (

        <button
          className="chapter-card"
          key={index}
          onClick={() => {
  setSelectedIndex(index);
  setView("quiz");
}}
        >

          <div className="chapter-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="chapter-info">

            <h3>
              {chapter.title}
            </h3>

            <p>
              Practice 30 questions from this chapter.
            </p>

            <span>
              Start practice →
            </span>

          </div>

          <div className="chapter-status">
            📝
          </div>

        </button>

      ))}

    </div>

  </div>

)}



      {/* ================= OVERALL ================= */}

      {view === "overall" && (

        <div className="physics-container">

          <button
            className="simple-back"
            onClick={() => setView("menu")}
          >
            ← Physics
          </button>

          <div className="coming-soon">

            <span>🎯</span>

            <h1>Overall Practice</h1>

            <p>
              A mixed Physics quiz will appear here.
            </p>

            <p className="small-text">
              This will eventually combine questions from all completed chapters.
            </p>

          </div>

        </div>

      )}


      {/* ================= TIMER ================= */}

      {view === "time" && (

        <div className="physics-container">

          <button
            className="simple-back"
            onClick={() => setView("menu")}
          >
            ← Physics
          </button>

          <div className="coming-soon">

            <span>⏱️</span>

            <h1>Study Timer</h1>

            <p>
              Your study timer will live here.
            </p>

            <p className="small-text">
              We'll add a proper focus timer later.
            </p>

          </div>

        </div>

      )}

    </div>
  );
}

export default Physics;