import { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let currentProgress = 0;

    const interval = window.setInterval(() => {
      const increment =
        currentProgress < 60
          ? Math.floor(Math.random() * 7) + 5
          : currentProgress < 90
            ? Math.floor(Math.random() * 4) + 3
            : 2;

      currentProgress = Math.min(
        currentProgress + increment,
        100
      );

      setProgress(currentProgress);

      if (currentProgress === 100) {
        window.clearInterval(interval);

        window.setTimeout(() => {
          setLeaving(true);

          window.setTimeout(() => {
            onComplete();
          }, 400);
        }, 200);
      }
    }, 65);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`loader ${
        leaving ? "loader--leaving" : ""
      }`}
      role="status"
      aria-live="polite"
      aria-label={`Loading Brew and Bloom. ${progress}%`}
    >
      <div className="loader__glow" />

      <div className="loader__content">
        <div className="loader__identity">
          <span className="loader__eyebrow">
            Welcome to
          </span>

          <h1>Brew & Bloom</h1>

          <p>Café & Bakery</p>
        </div>

        <div className="loader__cup-scene">
          <div className="loader__steam-container">
            <span className="loader__steam loader__steam--1" />
            <span className="loader__steam loader__steam--2" />
            <span className="loader__steam loader__steam--3" />
          </div>

          <div className="loader__cup-handle" />

          <div className="loader__cup">
            <div className="loader__coffee">
              <div className="loader__coffee-surface" />
            </div>

            <div className="loader__cup-shine" />
          </div>

          <div className="loader__saucer">
            <span />
          </div>

          <div className="loader__shadow" />
        </div>

        <div className="loader__status">
          <div className="loader__status-row">
            <span>Brewing your experience</span>

            <strong>
              {String(progress).padStart(2, "0")}%
            </strong>
          </div>

          <div className="loader__progress-track">
            <div
              className="loader__progress-fill"
              style={{
                width: `${progress}%`,
              }}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;