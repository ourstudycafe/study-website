import { Link, useParams } from "react-router-dom";

function StudyPage() {
  const { type, index } = useParams();

  const chapters = [
    {
      title: "Units, Dimensions and Vectors",
      notes: "Units, dimensions, dimensional analysis and vectors.",
      summary:
        "Learn how physical quantities are measured and represented using vectors.",
    },
    {
      title: "Motion in a Straight Line",
      notes: "Distance, displacement, speed, velocity and acceleration.",
      summary:
        "Understand one-dimensional motion and the equations used to describe it.",
    },
    {
      title: "Laws of Motion",
      notes: "Newton's laws, force, momentum and applications.",
      summary:
        "Understand how forces affect the motion of objects.",
    },

    // You can add the remaining chapters here later.
  ];

  const chapter = chapters[Number(index)];

  if (!chapter) {
    return (
      <div className="physics-container">
        <h1>Chapter not found</h1>

        <Link to="/physics">
          ← Back to Physics
        </Link>
      </div>
    );
  }

  let title = "";
  let content = "";

  if (type === "notes") {
    title = "📝 Short Notes";
    content = chapter.notes;
  }

  if (type === "summary") {
    title = "📖 Summary";
    content = chapter.summary;
  }

  return (
    <div className="physics-container">

      <button
        className="simple-back"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>

      <div className="chapter-detail">

        <span className="subject-label">
          CHAPTER {String(Number(index) + 1).padStart(2, "0")}
        </span>

        <h1>{chapter.title}</h1>

        <div className="study-page-card">

          <h2>{title}</h2>

          {type === "video" ? (
            <>
              <p>
                Watch the video explanation for:
              </p>

              <h3>
                {chapter.title}
              </h3>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="youtube-link"
              >
                📺 Watch on YouTube →
              </a>
            </>
          ) : (
            <p className="study-page-content">
              {content}
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default StudyPage;