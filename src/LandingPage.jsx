import { Divider, Stack } from "@mui/material";
import "./styles/Landing.module.css";
import { useEffect, useState } from "react";

function LandingPage() {
  const scrollLineLength = "50vh";
  const listOfOpenSourceProjects = [
    {
      name: "Robo Advisor",
      iconBg: (
        <svg
          width="265"
          height="170"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="none"
          stroke="var(--fill)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        >
          <rect height="7.5" width="12.5" y="5.75" x="1.75" />
          <path d="m10.75 8.75v1.5m-5.5-1.5v1.5m-.5-7.5 3.25 3 3.25-3" />
        </svg>
      ),
      iconFill: (
        <svg
          width="265"
          height="170"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="none"
          stroke="var(--line)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.4"
        >
          <rect height="7.5" width="12.5" y="5.75" x="1.75" />
          <path d="m10.75 8.75v1.5m-5.5-1.5v1.5m-.5-7.5 3.25 3 3.25-3" />
        </svg>
      ),
      description1:
        "Craft an unforgettable portfolio with our cutting-edge web application, tailored to your risk preferences using LSTM predictions and the Black Litterman Model.",
      description2:
        "Stand out with visually stunning portfolios, elegantly showcased through our responsive Angular and Flask-py interface.",
      link: "https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode",
    },
    {
      name: "SDI BIT",
      description1:
        "Empower your college journey with our comprehensive app, simplifying online classes and tests, boasting features like answer sheet scanning, PDF uploads, timetable viewing, and note fetching.",
      description2:
        "Built using Java and Dart, our cross-platform application ensures seamless accessibility and functionality for students on the go.",
      link: "https://tornis.robbowen.digital/",
      iconBg: (
        <svg
          width="265"
          height="170"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="none"
          stroke="var(--fill)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        >
          <rect height="7.5" width="12.5" y="5.75" x="1.75" />
          <path d="m10.75 8.75v1.5m-5.5-1.5v1.5m-.5-7.5 3.25 3 3.25-3" />
        </svg>
      ),
      iconFill: (
        <svg
          width="265"
          height="170"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="none"
          stroke="var(--line)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.4"
        >
          <rect height="7.5" width="12.5" y="5.75" x="1.75" />
          <path d="m10.75 8.75v1.5m-5.5-1.5v1.5m-.5-7.5 3.25 3 3.25-3" />
        </svg>
      ),
    }
  ];

  const [posX, setPosX] = useState(-1);
  const [posY, setPosY] = useState(-1);
  const [transformX, setTransformX] = useState(0);
  const [transformY, setTransformY] = useState(0);

  useEffect(() => {
    document.title = "Niraj Sriramula";
    window.addEventListener("mousemove", (event) => {
      setPosX(event.clientX);
      setPosY(event.clientY);

      // Calculate transformX and transformY as the distance of mouse from the center of the screen and bring it down to the range of -10 to 10.

      setTransformX(
        -((event.clientX - window.innerWidth / 2) / window.innerWidth) * 20
      );
      setTransformY(
        -((event.clientY - window.innerHeight / 2) / window.innerHeight) * 20
      );
    });
  }, []);

  return (
    <div className="section" style={{ textAlign: "left" }}>
      <header className="page-header">
        <div className="page-header__inr">
          <div
            className="page-header__content is-onscreen"
            data-prlx="0 0.25"
            style={{ position: "relative" }}
          >
            <div className="article-heading">
              <h1 className="article-heading__title t-heading t-medium:s t-bigger:m t-biggest:l">
                <span>
                  Hi, my name is <b>Niraj</b><span className="dot">.</span>
                </span>
              </h1>
            </div>
            <p className="page-header__lede t-primary lh-loose t-body:s t-sublede:m t-lede:l reveal-content">
              I'm an <b>independent creative developer</b> from
              <br />
              Hyderabad, India.
            </p>
            <span className="page-header__scroll" aria-hidden="true">
              <span>
                <span>S</span> <span>c</span> <span>r</span> <span>o</span>{" "}
                <span>l</span> <span>l</span>
              </span>
            </span>
          </div>
        </div>
      </header>

      <div className="approach panels__main" style={{ textAlign: "left" }}>
        <h2 class="article-heading__title t-heading t-medium:s t-big:m t-bigger:l">
          <span>
            Let's work <b>together</b>
            <span class="dot">.</span>
          </span>
        </h2>
          <p>
            From interaction design to scaleable design systems, single-page
            apps to something more experimental with WebGL. I help awesome
            people to build ambitious yet accessible web projects -{" "}
            <b>the wilder, the better</b>.
          </p>
          <a href="/work" class="btn">
            <span class="btn__label">About my approach</span>{" "}
            <span
              class="btn__fill stripes"
              data-drift="-10 -12"
              aria-hidden="true"
            >
              About my approach
            </span>
          </a>
      </div>

      <div className="open-source" style={{ textAlign: "left" }}>
        <div class="dot-header__content flow">
          <h2 class="t-heading t-lede:s t-medium:m t-medium:l">
            Open Source<span class="dot">.</span>
          </h2>
          <p>
            From time to time I like to release open source projects to help the
            wider web development community. Below are two of my most popular
            releases.
          </p>
        </div>
      </div>
      {listOfOpenSourceProjects.map((project, index) => {
        // console.log(`translate(${transformX}, ${transformY})`);
        return (
          <div class="project-promo__item project">
            <div class="project__header">
              <div class="illustration">
                <div
                  class="illustration__layer"
                  data-drift="0 0"
                  style={{
                    transform: `translate(${transformX}px, ${transformY}px)`,
                  }}
                >
                  {project.iconBg}
                </div>
                <div class="illustration__layer">{project.iconFill}</div>
              </div>
            </div>
            <div class="project__details">
              <div class="flow" style={{ textAlign: "left" }}>
                <h3 class="t-heading t-lede:s t-medium:m t-medium:l">
                  {project.name}
                  <span class="dot">.</span>
                </h3>
                <p>{project.description1}</p>
                <p>{project.description2}</p>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode"
                  target="_blank"
                  rel="noreferrer"
                  class="btn"
                >
                  <span class="btn__label">Get {project.name}</span>{" "}
                  <span
                    class="btn__fill stripes"
                    data-drift="-10 -12"
                    aria-hidden="true"
                  >
                    Get {project.name}
                  </span>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LandingPage;
