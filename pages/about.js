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
      <h1>About Me</h1>
      {/* IMG HERE */}

      <main>
        <img className="photo" src="./photo.jpg" />
        <div className="text-box">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront="0.5" flipSpeedFrontToBack="0.4">
            <div className="front">
              <p>
                Hello! My name is Daniel Hong and I am a full-stack developer. I
                am based in the Greater Phoenix area in Arizona. Open to
                full-time opportunities focusing on front-end development,
                React, and JavaScript. In the next five years, I hope to advance
                in my career as a competent, mid-level front-end engineer.{" "}
              </p>

              <button onClick={() => setFlip(!isFlipped)}>
                View Interests
              </button>
            </div>

            <div className="back">
              <h2>What defines me:</h2>
              <ul>
                  <li>family-oriented</li>
                  <li>web development</li>
                  <li>fitness</li>
                  <li>football & basketball</li>
                  {/* <Link href=""> */}
                    <li>dj hobbyist</li>
                  {/* </Link> */}
                  <li>lifelong learner</li>
              </ul>
              <button onClick={() => setFlip(!isFlipped)}>View Bio</button>
            </div>
          </ReactCardFlip>
        </div>
      </main>


        <nav>
            <Link href="/">
            <img className="logo" src="/home-solid.svg"  />
            </Link>
            <Link href="/about">
            <img className="logo" src="/user-regular.svg"  />
            </Link>
            <Link href="experience">
            <img className="logo" src="/briefcase-solid.svg" />
            </Link>
        </nav>

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
          display: flex;
          justify-content: space-around;
          width: 1100px;
          // border: 1px solid red;
        }

        .photo {
          width: 500px;
          height: 500px;
          -webkit-box-shadow: 10px 10px 28px -1px rgba(0, 0, 0, 0.14);
          -moz-box-shadow: 10px 10px 28px -1px rgba(0, 0, 0, 0.14);
          box-shadow: 10px 10px 28px -1px rgba(0, 0, 0, 0.14);
        }

        .text-box {
          width: 450px;
          // text-align: center;
          // border: 1px solid black;
          word-spacing: 1px;
          line-height: 40px;
        }

        .text-box button {
            border: 1px solid black;
            font-family: "Kosugi";
            font-size: 16px;
            transition: 0.2s ease;
        }

        .text-box button:hover{
            background-color: black;
            color: white;
        }

        /* nav */
        
        nav{
            display: flex;
            // border: 1px solid black;
            width: 175px;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 20px;
        }

        .logo{
            height: 35px;
            width: 35px;
            cursor: pointer;
            transition: 0.2s;
        }
  
        .logo:hover{
          transform: scale(1.2);
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

        .text-box p {
          font-size: 20px;
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
