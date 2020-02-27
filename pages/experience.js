import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function About() {
  const [isFlipped, setFlip] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>Daniel Hong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Experience</h1>

      <main>
        <nav>
          <Link href="/">
            <img className="logo" src="/home-solid.svg" />
          </Link>
          <Link href="/about">
            <img className="logo" src="/user-regular.svg" />
          </Link>
          <Link href="experience">
            <img className="logo" src="/briefcase-solid.svg" />
          </Link>
        </nav>
        <a
          href="https://app.enhancv.com/share/98eabe91?utm_source=linkedin&utm_medium=growth&utm_campaign=job-share"
          target="_blank"
        >
          <img className="photo" src="./resume.png" />
        </a>

        <nav className="nav2">
          <a href="https://github.com/daniellimhong" target="_blank">
            <img className="logo github" src="/github-brands.svg" />
          </a>

          <a href="https://linkedin.com/in/daniellimhong" target="_blank">
            <img className="logo linkedin" src="/linkedin-in-brands.svg" />
          </a>

          <a href="https://twitter.com/daniellimhong" target="_blank">
            <img className="logo twitter" src="/twitter-brands.svg" />
          </a>

          <a href="mailto:daniellimhong@gmail.com" target="_blank">
            <img className="logo github" src="/envelope-solid.svg" />
          </a>
        </nav>
      </main>

      <footer>
        <div>
          <img src="/copyright-regular.svg" />
          <p>Daniel Hong</p>
        </div>
        <div>
          <p>Made with </p>
          <img src="/heart-solid.svg" />
          {/* <p> and dedicated to Tita Rebecca</p> */}
        </div>
        <div>
          <Link href="/">
            <p>View Source</p>
          </Link>
        </div>
      </footer>

      <style jsx>{`
        /* Web */

        /* Positioning */
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* Main Box */
        main {
          width: 75vw;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }

        /* nav */

        nav {
          display: flex;
          // border: 1px solid black;
          // width: 175px;
          height: 150px;
          flex-direction: column;
          justify-content: space-between;
          margin-top: 20px;
        }

        .nav2{
            height: 200px;
        }

        .logo {
          height: 35px;
          width: 35px;
          cursor: pointer;
          transition: 0.15s;
        }

        .logo:hover {
          transform: scale(1.2);
        }
        .github:hover {
          filter: invert(100%) sepia(0%) saturate(5974%) hue-rotate(259deg)
            brightness(112%) contrast(65%);
        }
        .linkedin:hover {
          filter: invert(51%) sepia(10%) saturate(3023%) hue-rotate(176deg)
            brightness(80%) contrast(78%);
        }
        .twitter:hover {
          filter: invert(48%) sepia(69%) saturate(1840%) hue-rotate(162deg)
            brightness(97%) contrast(105%);
        }

        .photo {
          width: 600px;
          height: 700px;
          transition: 0.3s ease;
          -webkit-box-shadow: 10px 10px 28px -1px rgba(0, 0, 0, 0.14);
          -moz-box-shadow: 10px 10px 28px -1px rgba(0, 0, 0, 0.14);
          box-shadow: 10px 10px 28px -1px rgba(0, 0, 0, 0.14);
        }

        .photo:hover {
          cursor: pointer;
        }

        /* Footer */

        footer {
          position: absolute;
          bottom: 0;
          margin: 0 auto;
          width: 100vw;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          color: #d3d3d3;
          font-size: 14px;
        }

        footer div {
          display: flex;
          align-items: center;
        }

        footer div img {
          height: 20px;
          width: 20px;
          margin: 0 5px 0 5px;
          filter: invert(100%) sepia(0%) saturate(5974%) hue-rotate(259deg)
            brightness(112%) contrast(65%);
        }

        /* Fonts */
        h1 {
          font-weight: 400;
          margin-bottom: 40px;
          font-size: 40px;
        }


        /* Mobile */
      `}</style>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Kosugi&display=swap");

        /* 400 & 700 FW only */

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Kosugi", Helvetica Neue, sans-serif;
          background-color: white;
        }

        h1 {
          letter-spacing: 3px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
export default About;
