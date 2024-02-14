import { useEffect } from "react";
import "./styles/About.module.css"

function About() {

  useEffect (() => {
    // set title
    document.title = "Who I am - Niraj Sriramula";
  }, [])

  const hobbies = [
    {
        description1:
        <p> I'm a tech enthusiast from <strong>Bengaluru</strong>, India's Silicon Valley. I earned my Bachelor's in <strong>Computer Science and Engineering</strong> from <strong>Bangalore Institute of Technology</strong>, where I honed my skills in <strong>Python, C++, Golang, JavaScript, SQL, Docker, and Kubernetes</strong> through various projects such as <strong>ROBO ADVISOR</strong> and <strong>SDI BIT</strong>.</p>,
        description2:
        <p>Post-graduation, I embarked on my professional journey with <strong>Samsung</strong> and later <strong>HashedIn by Deloitte</strong>, applying my skills to contribute to numerous projects. Seeking further education, I moved to the U.S. to pursue a <strong>Master's in Information Technology Management</strong> at the <strong>Illinois Institute of Technology</strong>, and participated in <strong>ACM at Illinois Tech: Programming Data Structure and Algorithms</strong>.</p>,
        illustration: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              class="svg-bg"
              d="M6.71,411.74c1.14-.35,6-2.56,24.06-16.12V352H30.3l-.9-4.92a51.23,51.23,0,0,1,59.29-59.71A73.09,73.09,0,0,1,224.47,287a51.18,51.18,0,0,1,52.14,28.55,35.23,35.23,0,0,1,39,18.42h26.25v62.26H256.45L9.13,423.44Z"
            ></path>
            <path
              class="svg-bg"
              d="M476.33,436.22c-.44,0-.89,0-1.33,0a37.32,37.32,0,0,0-52.47-15.17V401.62h-3.69V387.43h4v-21h-4V348.9h3.82v-21H419V286h1.92v-7.42h8.17V260.22h.13V233.06l-13.67-38.4a7.42,7.42,0,0,0-14,0l-2.84,8-27.83-88.24a10,10,0,0,0-19,0L324.11,202.6l-2.83-7.94a7.42,7.42,0,0,0-14,0l-13.67,38.4v45.51h8.16V286h2.74v41.94h-4v21h3.83v17.57h-3.83v21h3.83v14.19h-4v18.5a47.64,47.64,0,0,0-29,25.66c-1.12-.11-2.24-.16-3.36-.16a34.48,34.48,0,0,0-16.72,4.31,26.21,26.21,0,0,0-24.43-10.48,36.86,36.86,0,0,0-32-18.7q-1,0-2,.06a51.23,51.23,0,0,0-93.3.15A36.83,36.83,0,0,0,59.4,464.25L69,462.48v36.27H499V474.36h3.26l1.06-5.79a27.83,27.83,0,0,0,.46-5A27.43,27.43,0,0,0,476.33,436.22Zm-57.49-13.63h1.37c-.46.33-.92.67-1.37,1Z"
            ></path>
          </svg>
        ),
        illustrationLayers: [
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <rect
              class="svg-fill"
              x="313.95"
              y="340.07"
              width="107.99"
              height="6.85"
            ></rect>
            <rect
              class="svg-fill"
              x="313.82"
              y="413.76"
              width="107.99"
              height="6.85"
            ></rect>
            <path
              class="svg-fill"
              d="M372.64,352.94a16.72,16.72,0,0,0-11.46,0L336.32,362v17.74H312.78v6.85h23.54v22.25H397.5V386.63H421v-6.85H397.5V362Zm17.29,26.84h-.08v6.85h.08v16.45h-46V367.15l17.3-6.31a16.72,16.72,0,0,1,11.42,0l17.31,6.31Z"
            ></path>
            <path
              class="svg-fill"
              d="M413.09,202.85a.36.36,0,0,0-.69,0l-9.89,27.79L368.36,122.33a2.9,2.9,0,0,0-5.53,0L328.72,230.62l3.38,9.48-13.27-37.25a.36.36,0,0,0-.68,0L304.89,240.1h0V259H426.35V240.1Z"
            ></path>
            <rect
              class="svg-fill"
              x="340.25"
              y="292.54"
              width="53.44"
              height="7.51"
            ></rect>
            <path
              class="svg-fill"
              d="M98.9,426.25a37.24,37.24,0,0,1,4,.21,51.24,51.24,0,0,1,93.3-.16c.67,0,1.34-.05,2-.05A36.87,36.87,0,0,1,230.22,445a26.19,26.19,0,0,1,24.42,10.48,34.45,34.45,0,0,1,16.73-4.32c1.12,0,2.24.06,3.35.17a47.7,47.7,0,0,1,29-25.67V407.12h4V393l-.07,0h-3.76v-6.16c-19.86-14-78.4-55.86-99.63-76.56-25.74-25.09-40.42,13.32-63.1,12.56,0,0-106.38,95.66-128,101.43,0,0,16.5,17.06,51.72,24.9A36.87,36.87,0,0,1,98.9,426.25Z"
            ></path>
          </svg>,
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              class="svg-stroke-thin"
              d="M35.3,346a45.22,45.22,0,0,1,57.27-51.56,67.08,67.08,0,0,1,128-.73,45.19,45.19,0,0,1,52.65,29.14,29.19,29.19,0,0,1,36.76,13.16"
            ></path>
            <path
              class="svg-stroke-thin"
              d="M307.1,386.69s-79.49-57.27-105.23-82.36-40.42,13.31-63.1,12.56c0,0-114.29,96.77-130.3,101.69"
            ></path>
            <path
              class="svg-stroke-thin"
              d="M66.34,461.8a29.74,29.74,0,0,1,37.71-33.94,44.17,44.17,0,0,1,84.25-.49,30.2,30.2,0,0,1,6.57-.74A29.77,29.77,0,0,1,223,446.56a19.24,19.24,0,0,1,26.35,15.24"
            ></path>
            <path
              class="svg-stroke-thin"
              d="M496.86,468.85a20.32,20.32,0,0,0-25.76-23.19,30.17,30.17,0,0,0-57.55-.33,20.3,20.3,0,0,0-23.69,13.11,13.15,13.15,0,0,0-12.51,1.39"
            ></path>
            <path
              class="svg-stroke-thin"
              d="M241.46,486.85a27.62,27.62,0,0,1,35-31.49,41,41,0,0,1,78.16-.45,27.63,27.63,0,0,1,32.16,17.8,17.84,17.84,0,0,1,24.44,14.14"
            ></path>
            <circle
              class="svg-stroke-thin"
              cx="362.14"
              cy="377.38"
              r="17.95"
            ></circle>
            <path
              class="svg-stroke-thin"
              d="M331.69,375.08V357.33l24.87-9.1a16.69,16.69,0,0,1,11.45,0l24.86,9.1v17.75h19.44V343.39H312v31.69Z"
            ></path>
            <path
              class="svg-stroke-thin"
              d="M385.3,375.08V362.45L368,356.14a16.61,16.61,0,0,0-11.42,0l-17.3,6.31v35.93h46V381.92h-.08v-6.84Z"
            ></path>
            <polygon
              class="svg-stroke-thin"
              points="392.87 381.92 392.87 404.17 331.69 404.17 331.69 381.92 311.98 381.92 311.98 410.03 412.31 410.03 412.31 381.92 392.87 381.92"
            ></polygon>
            <rect
              class="svg-stroke-thin"
              x="308.15"
              y="336.54"
              width="107.99"
              height="6.85"
            ></rect>
            <rect
              class="svg-stroke-thin"
              x="308.01"
              y="410.23"
              width="107.99"
              height="6.85"
            ></rect>
            <path
              class="svg-stroke-thin"
              d="M416.34,375.08H392.87V357.33L368,348.23a16.69,16.69,0,0,0-11.45,0l-24.87,9.1v17.75H308.15v6.84h23.54v22.25h61.18V381.92h23.47Zm-31,23.3h-46V362.45l17.3-6.31a16.61,16.61,0,0,1,11.42,0l17.31,6.31v12.63h-.08v6.84h.08Z"
            ></path>
            <polygon
              class="svg-stroke-thin"
              points="414.38 261.78 412.79 261.78 406.71 261.78 406.22 261.78 404.62 261.78 398.55 261.78 396.95 261.78 396.46 261.78 390.88 261.78 390.63 261.78 390.38 261.78 388.79 261.78 382.72 261.78 382.72 261.78 382.47 261.78 381.12 261.78 380.87 261.78 380.63 261.78 375.05 261.78 374.8 261.78 374.55 261.78 374.31 261.78 372.96 261.78 372.96 261.78 372.71 261.78 366.88 261.78 366.64 261.78 365.29 261.78 365.04 261.78 364.79 261.78 364.55 261.78 359.21 261.78 358.97 261.78 358.72 261.78 358.47 261.78 357.12 261.78 356.88 261.78 351.05 261.78 350.8 261.78 350.8 261.78 349.45 261.78 349.21 261.78 348.96 261.78 348.71 261.78 343.13 261.78 342.89 261.78 342.64 261.78 341.29 261.78 341.04 261.78 341.04 261.78 334.97 261.78 333.37 261.78 333.13 261.78 332.88 261.78 327.3 261.78 326.81 261.78 325.21 261.78 319.14 261.78 317.54 261.78 317.05 261.78 310.97 261.78 309.38 261.78 301.21 261.78 301.21 273.06 309.38 273.06 309.38 280.48 319.14 280.48 319.14 273.06 325.21 273.06 325.21 280.48 334.97 280.48 334.97 273.06 341.04 273.06 341.04 280.48 341.04 280.48 341.29 280.48 350.8 280.48 350.8 280.48 351.05 280.48 351.05 273.06 356.88 273.06 356.88 280.48 357.12 280.48 366.64 280.48 366.88 280.48 366.88 273.06 372.71 273.06 372.71 280.48 372.96 280.48 372.96 280.48 382.47 280.48 382.72 280.48 382.72 280.48 382.72 273.06 388.79 273.06 388.79 280.48 398.55 280.48 398.55 273.06 404.62 273.06 404.62 280.48 414.38 280.48 414.38 273.06 422.55 273.06 422.55 261.78 414.38 261.78"
            ></polygon>
            <rect
              class="svg-stroke-thin"
              x="301.21"
              y="254.71"
              width="121.33"
              height="7.07"
            ></rect>
            <rect
              class="svg-stroke-thin"
              x="301.21"
              y="235.83"
              width="27.21"
              height="18.88"
            ></rect>
            <line
              class="svg-stroke-thin"
              x1="309.5"
              y1="240.65"
              x2="309.5"
              y2="249.93"
            ></line>
            <line
              class="svg-stroke-thin"
              x1="319.89"
              y1="240.65"
              x2="319.89"
              y2="249.93"
            ></line>
            <path
              class="svg-stroke-thin"
              d="M314.48,198.57l-13.27,37.26h27.22l-13.27-37.26A.36.36,0,0,0,314.48,198.57Z"
            ></path>
            <rect
              class="svg-stroke-thin"
              x="395.47"
              y="235.83"
              width="27.21"
              height="18.88"
            ></rect>
            <line
              class="svg-stroke-thin"
              x1="403.76"
              y1="240.65"
              x2="403.76"
              y2="249.93"
            ></line>
            <line
              class="svg-stroke-thin"
              x1="414.15"
              y1="240.65"
              x2="414.15"
              y2="249.93"
            ></line>
            <path
              class="svg-stroke-thin"
              d="M408.73,198.57l-13.26,37.26h27.21l-13.26-37.26A.37.37,0,0,0,408.73,198.57Z"
            ></path>
            <path
              class="svg-stroke-thin"
              d="M398.84,226.36l-34.15-108.3a2.9,2.9,0,0,0-5.53,0L325.05,226.35l3.38,9.48v18.88h67V235.83Z"
            ></path>
            <line
              class="svg-stroke-thin"
              x1="361.88"
              y1="115.97"
              x2="361.88"
              y2="86.78"
            ></line>
            <rect
              class="svg-stroke-thin"
              x="328.43"
              y="235.83"
              width="67.04"
              height="18.88"
            ></rect>
            <line
              class="svg-stroke-thin"
              x1="337.76"
              y1="240.65"
              x2="346.86"
              y2="249.75"
            ></line>
            <line
              class="svg-stroke-thin"
              x1="346.86"
              y1="240.65"
              x2="337.76"
              y2="249.75"
            ></line>
            <line
              class="svg-stroke-thin"
              x1="357.56"
              y1="240.65"
              x2="366.65"
              y2="249.75"
            ></line>
            <line
              class="svg-stroke-thin"
              x1="366.65"
              y1="240.65"
              x2="357.56"
              y2="249.75"
            ></line>
            <line
              class="svg-stroke-thin"
              x1="377.35"
              y1="240.65"
              x2="386.44"
              y2="249.75"
            ></line>
            <line
              class="svg-stroke-thin"
              x1="386.44"
              y1="240.65"
              x2="377.35"
              y2="249.75"
            ></line>
            <polygon
              class="svg-stroke-thin"
              points="404.62 280.48 404.62 273.06 398.55 273.06 398.55 280.48 388.79 280.48 388.79 273.06 382.72 273.06 382.72 280.48 382.72 280.48 382.47 280.48 372.96 280.48 372.96 280.48 372.71 280.48 372.71 273.06 366.88 273.06 366.88 280.48 366.64 280.48 357.12 280.48 356.88 280.48 356.88 273.06 351.05 273.06 351.05 280.48 350.8 280.48 350.8 280.48 341.29 280.48 341.04 280.48 341.04 280.48 341.04 273.06 334.97 273.06 334.97 280.48 325.21 280.48 325.21 273.06 319.14 273.06 319.14 280.48 312.12 280.48 312.12 336.39 412.45 336.39 412.45 280.48 404.62 280.48"
            ></polygon>
            <rect
              class="svg-stroke-thin"
              x="335.63"
              y="289.01"
              width="53.44"
              height="7.51"
            ></rect>
            <rect
              class="svg-stroke-thin"
              x="335.63"
              y="296.52"
              width="53.44"
              height="31.09"
            ></rect>
            <path
              class="svg-stroke-thin"
              d="M379.19,301.38h1.93a3.08,3.08,0,0,1,3.08,3.08v17.28a0,0,0,0,1,0,0h-8.09a0,0,0,0,1,0,0V304.45a3.08,3.08,0,0,1,3.08-3.08Z"
            ></path>
            <path
              class="svg-stroke-thin"
              d="M367.6,301.38h1.93a3.08,3.08,0,0,1,3.08,3.08v17.28a0,0,0,0,1,0,0h-8.09a0,0,0,0,1,0,0V304.45a3.08,3.08,0,0,1,3.08-3.08Z"
            ></path>
            <path
              class="svg-stroke-thin"
              d="M355.92,301.38h1.93a3.08,3.08,0,0,1,3.08,3.08v17.28a0,0,0,0,1,0,0h-8.09a0,0,0,0,1,0,0V304.45A3.08,3.08,0,0,1,355.92,301.38Z"
            ></path>
            <path
              class="svg-stroke-thin"
              d="M344,301.38H346a3.08,3.08,0,0,1,3.08,3.08v17.28a0,0,0,0,1,0,0H341a0,0,0,0,1,0,0V304.45A3.08,3.08,0,0,1,344,301.38Z"
            ></path>
            <line
              class="svg-stroke-thin"
              x1="323.02"
              y1="299.89"
              x2="323.02"
              y2="320.83"
            ></line>
            <line
              class="svg-stroke-thin"
              x1="400.77"
              y1="299.89"
              x2="400.77"
              y2="320.83"
            ></line>
            <path
              class="svg-stroke-thin"
              d="M315.59,426.47a41,41,0,0,1,39,28.44,27.81,27.81,0,0,1,6.1-.68,27.49,27.49,0,0,1,16.66,5.61,13.1,13.1,0,0,1,12.5-1.4,20.35,20.35,0,0,1,19.19-13.62,20.58,20.58,0,0,1,3.26.27V416.93H312.12v9.69C313.26,426.52,314.42,426.47,315.59,426.47Z"
            ></path>
          </svg>,
        ],
      },
      {
        title: "Serial language-botherer",
        description1: <p> I'm a relentless pursuer of knowledge in the realm of programming languages and technologies. My resume is a testament to my constant zeal to learn and adapt. I've consistently expanded my skill set, mastering languages from <strong>Python</strong> to <strong>Golang</strong>, from <strong>C++</strong> to <strong>JavaScript</strong>.</p>,
        description2: <p>Keeping pace with the ever-evolving tech landscape, I've demonstrated proficiency in <strong>Docker</strong> and <strong>Kubernetes</strong>, staying at the forefront of industry trends. Whether it's mastering a new language or diving into a complex project, my enthusiasm for learning remains undiminished, making me a true 'Serial Language-botherer'.</p>,
        illustration: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="svg-bg" d="M263.14,201.69c-14.3-17.93-21.83-38.81-21.83-60.64,0-57.86,53.36-104.94,118.94-104.94s118.94,47,118.94,104.74c0,34.66-19.26,67-51.52,86.55A128.69,128.69,0,0,1,360.25,246a131,131,0,0,1-52.85-10.93l-60.75,22.19Z"></path><path class="svg-bg" d="M166.27,337.83a108.82,108.82,0,0,1-43.33,8.84,106.9,106.9,0,0,1-56-15.46C40.1,315,24.06,288,24.06,259.1c0-48.11,44.36-87.25,98.88-87.25s98.87,39.22,98.87,87.41c0,18-6.11,35.17-17.73,50l14.12,47.55Z"></path><path class="svg-bg" d="M315.06,408.36c-11.63-14.83-17.76-32.05-17.76-50.06,0-48.27,44.43-87.54,99-87.54s99,39.2,99,87.38c0,28.94-16.06,55.95-43,72.24a107.07,107.07,0,0,1-56.07,15.47A109,109,0,0,1,352.92,437l-52,19Z"></path></svg>,
        illustrationLayers: [
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="svg-fill" d="M364.25,51.11c-61.25,0-110.94,43.4-110.94,96.94,0,22.11,8.52,42.39,22.71,58.82h0l-13.18,44.42,48.88-17.85h0A123.92,123.92,0,0,0,364.25,245a121.19,121.19,0,0,0,63.28-17.44c28.8-17.44,47.66-46.65,47.66-79.71C475.19,94.51,425.5,51.11,364.25,51.11Z"></path><path class="svg-fill" d="M125.94,185.85c50.17,0,90.87,35.56,90.87,79.41,0,18.11-7,34.73-18.61,48.18L209,349.82l-40-14.61a101.56,101.56,0,0,1-43,9.46A99.29,99.29,0,0,1,74.1,330.39c-23.59-14.29-39-38.21-39-65.29C35.06,221.41,75.77,185.85,125.94,185.85Z"></path><path class="svg-fill" d="M400.33,285.76c-50.26,0-91,35.61-91,79.54,0,18.14,7,34.78,18.64,48.26h0L317.12,450l40.11-14.65h0a101.52,101.52,0,0,0,43.1,9.49,99.39,99.39,0,0,0,51.92-14.31c23.63-14.31,39.11-38.28,39.11-65.4C491.36,321.37,450.59,285.76,400.33,285.76Z"></path></svg>,
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="svg-stroke-thin" d="M360.25,44.11c-61.25,0-110.94,43.4-110.94,96.94,0,22.11,8.52,42.39,22.71,58.82h0l-13.18,44.42,48.88-17.85h0A123.92,123.92,0,0,0,360.25,238a121.19,121.19,0,0,0,63.28-17.44c28.8-17.44,47.66-46.65,47.66-79.71C471.19,87.51,421.5,44.11,360.25,44.11Z"></path><path class="svg-stroke-thin" d="M121.94,178.85c50.17,0,90.87,35.56,90.87,79.41,0,18.11-7,34.73-18.61,48.18L205,342.82l-40-14.61a101.56,101.56,0,0,1-43,9.46A99.29,99.29,0,0,1,70.1,323.39c-23.59-14.29-39-38.21-39-65.29C31.06,214.41,71.77,178.85,121.94,178.85Z"></path><path class="svg-stroke-thin" d="M396.33,278.76c-50.26,0-91,35.61-91,79.54,0,18.14,7,34.78,18.64,48.26h0L313.12,443l40.11-14.65h0a101.52,101.52,0,0,0,43.1,9.49,99.39,99.39,0,0,0,51.92-14.31c23.63-14.31,39.11-38.28,39.11-65.4C487.36,314.37,446.59,278.76,396.33,278.76Z"></path></svg>
        ]
      }
  ];
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
                  About me<span className="dot">.</span>
                </span>
              </h1>
            </div>
            <p className="page-header__lede t-primary lh-loose t-body:s t-sublede:m t-lede:l reveal-content">
            I'm a <strong>tech enthusiast</strong> and <strong>speed cubing</strong> aficionado from <strong>Bengaluru's tech hub</strong>. As I navigate from local industry to <strong>global academia</strong>, my passion for <strong>innovation</strong>, <strong>performance</strong>, and <strong>problem-solving</strong> guides me. I'm not just crafting a career in technology, I'm building a <strong>legacy</strong>.
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
      {hobbies.map((hobby, index) => {
        return (
          <div
            class={`panels panels--centred ${
              index % 2 == 0 ? "" : "panels-reveresed"
            }`}
            style={
              index % 2 == 0
                ? { flexDirection: "row" }
                : { flexDirection: "row-reverse" }
            }
          >
            <div class="panels__main">
              <div class="flow">
                {
                    // Check if title key exist in hobby then render it
                    hobby.title &&
                  <h2 class="t-heading t-lede:s t-medium:m t-medium:l">
                    {hobby.title}
                    <span class="dot">.</span>
                  </h2>
                }
                {hobby.description1}
                {hobby.description2}
              </div>
            </div>
            <div class="panels__side">
              <div class="circle">
                <div class="circle__inr is-active">
                  <div
                    class="circle__bg stripes"
                    data-drift="-10 -14"
                    //   style="transform: translate(3.17308px, -2.02047px);"
                  ></div>
                  <div class="illustration illustration--aber">
                    {hobby.illustration}
                    {hobby.illustrationLayers.map((layer, layerIndex) => {
                      return (
                        <div
                          class="illustration__layer"
                          data-drift={layerIndex % 2 == 0 ? "-5 -8" : ""}
                        >
                          {layer}
                          {
                            layerIndex == 0 && index==1 && <div class="text text--a"><div data-prlx="-0.3 0" class="text__inr" style={{position: "relative"}}></div></div>
                          }
                          {
                            layerIndex == 0 && index==1 && <div class="text text--b"><div data-prlx="0.25 0" class="text__inr" style={{position: "relative"}}></div></div>
                          }
                          {
                            layerIndex == 0 && index==1 && <div class="text text--c"><div data-prlx="-0.15 0" class="text__inr" style={{position: "relative"}}></div></div>
                          }
                        </div>
                      );
                    //   {
                    //     index == 1 && 
                    //   }
                    })}
                    {index == 0 ? (
                      <div class="clock js-clock">
                        <div class="clock-pivot">
                          <div class="clock-pivot__hand clock-pivot__hand--hour"></div>
                        </div>
                        <div class="clock-pivot">
                          <div class="clock-pivot__hand clock-pivot__hand--minute"></div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default About;
