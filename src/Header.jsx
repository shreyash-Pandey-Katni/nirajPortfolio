import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

function Header() {
  const [transformX, setTransformX] = useState(0);
  const [transformY, setTransformY] = useState(0);

  // if root page is open then load Landing.css, if not then load Work.css
  useEffect(() => {
    if (window.location.pathname === "/landing") { // change this location in future to /
      const link = document.createElement("link");
      link.href = "/assets/styles/Landing.module.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    } else if (window.location.pathname === "/work"){
      const link = document.createElement("link");
      link.href = "/assets/styles/Work.module.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    else if(window.location.pathname === "/about"){
      const link = document.createElement("link");
      link.href = "/assets/styles/About.module.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    else {
      const link = document.createElement("link");
      link.href = "/assets/styles/Projects.module.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  // useEffect(() => {
  //   window.addEventListener("mousemove", (event) => {
  //     // Calculate transformX and transformY as the distance of mouse from the center of the screen and bring it down to the range of -10 to 10.

  //     setTransformX(
  //       -((event.clientX - window.innerWidth / 2) / window.innerWidth) * 20
  //     );
  //     setTransformY(
  //       -((event.clientY - window.innerHeight / 2) / window.innerHeight) * 20
  //     );
  //   });
  // }, []);

  return (
    <Stack direction="row">
      <div className="mainnav">
        <div class="logo-wrap">
          <a href="/">
            <span class="u-vhide">Back to the homepage</span>{" "}
            <span class="logo js-logo">
              <div class="logo__skirrid">
                <div
                  class="shade"
                  data-drift="-5 -10"
                  style={{
                    // transform: `translate(${transformX}px, ${transformY}px)`,
                  }}
                >
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256">
                    <polygon
                      class="filled-poly"
                      points="156.2,91.5 112.7,146.5 89,116.5 33.2,187 80.7,187 144.8,187 231.8,187"
                    ></polygon>
                  </svg>
                </div>
                <div class="logo">
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256">
                    <polygon
                      class="stroke-poly"
                      points="84,106.5 28.2,177 139.8,177 "
                    ></polygon>
                    <polygon
                      class="stroke-poly"
                      points="151.2,81.5 75.7,177 226.8,177 "
                    ></polygon>
                  </svg>
                </div>
              </div>
            </span>
          </a>
        </div>
        <div class="menu-link">
          <button
            class="menu-link__trigger js-menu-trigger"
            aria-expanded="false"
            aria-controls="main-menu"
          >
            <span class="menu-link__mask">
              <span
                class="menu-link__label menu-link__label--close js-menu-label-close"
                aria-hidden="true"
              >
                Close
              </span>{" "}
              <span
                class="menu-link__label menu-link__label--open js-menu-label-open"
                aria-hidden="false"
                // onClick={() => {
                //   document
                //     .getElementById("main-menu")
                //     .classList.toggle("is-open");
                // }}
              >
                Menu
              </span>
            </span>
          </button>
        </div>
        <a
          class="hire-me"
          href="mailto:nsriramula@hawk.iit.edu?subject=🤘 Hi Niraj, I'd like to hire you"
        >
          <div
            class="shade"
            data-drift="-5 -10"
            style={{
              // transform: `translate(${transformX}px, ${transformY - 5 * 2}px)`,
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <path
                class="filled-path"
                d="M30.78,9.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L42.37,50.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C10.42,45,6.24,38.52,6.24,31.2,6.24,19.53,17.26,9.87,30.78,9.87Z"
              ></path>
            </svg>
          </div>
          <div class="main">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <path
                class="stroke-path"
                d="M27.78,5.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L39.37,46.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C7.42,41,3.24,34.52,3.24,27.2,3.24,15.53,14.26,5.87,27.78,5.87Z"
              ></path>
            </svg>
          </div>
          Hire me
        </a>
      </div>
      <div class="main-menu js-menu" id="main-menu">
        <div class="main-menu__mask"></div>
        <div class="main-menu__flyout">
          <div class="main-menu__inr wrap">
            <ul class="social-links">
              <li class="social-links__item">
                <a
                  class="social-links__link social-links__link--ma"
                  href="https://front-end.social/@Robb"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Follow me on Mastodon
                </a>
              </li>
              <li class="social-links__item">
                <a
                  class="social-links__link social-links__link--in"
                  href="http://www.instagram.com/robb0wen"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Follow me on Instagram
                </a>
              </li>
              <li class="social-links__item">
                <a
                  class="social-links__link social-links__link--gh"
                  href="https://github.com/robb0wen"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit my GitHub
                </a>
              </li>
              <li class="social-links__item">
                <a
                  class="social-links__link social-links__link--rss"
                  href="/feed.xml"
                  rel="noopener noreferrer"
                  target="_blank"
                  data-rekishi-skip=""
                >
                  Subscribe to my RSS feed
                </a>
              </li>
              <li class="social-links__item">
                <a
                  class="social-links__link social-links__link--email"
                  href="mailto:hello@robbowen.digital"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Send me an Email
                </a>
              </li>
            </ul>
            <ul class="main-menu__links primary-links">
              <li class="primary-links__item">
                <a
                  aria-current="page"
                  class="primary-links__link t-primary"
                  href="/"
                  aria-describedby="desc_home"
                >
                  Home
                </a>{" "}
                <span id="desc_home" class="primary-links__summary">
                  Back to the home page.
                </span>
              </li>
              <li class="primary-links__item">
                <a
                  aria-current="page"
                  class="primary-links__link t-primary"
                  href="/work"
                  aria-describedby="desc_work"
                >
                  Work
                </a>{" "}
                <span id="desc_work" class="primary-links__summary">
                  My approach to development.
                </span>
              </li>
              <li class="primary-links__item">
                <a
                  class="primary-links__link t-primary"
                  href="/about"
                  aria-describedby="desc_about"
                >
                  About
                </a>{" "}
                <span id="desc_about" class="primary-links__summary">
                  A little about me and my background.
                </span>
              </li>
              <li class="primary-links__item">
                <a
                  class="primary-links__link t-primary"
                  href="/writing"
                  aria-describedby="desc_writing"
                >
                  Writing
                </a>{" "}
                <span id="desc_writing" class="primary-links__summary">
                  My latest writing on tech and language.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default Header;
