import Head from "next/head";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

function Home() {
  const [isFlipped, setFlip] = useState(false);
  

  return (
    <div className="container">
      <Head>
        <title>Daniel Hong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Daniel Hong</h1> */}

        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedBackToFront="0.4" flipSpeedFrontToBack="0.5">
          <div className="front" onClick={() => setFlip(!isFlipped)}>
            <img className="smiley" src="/tita-smiley.svg" />
          </div>
          <div className="back" onClick={() => setFlip(!isFlipped)}>
            <p>Dedicated to Tita Rebecca.</p>
            <p>Family first, always.</p>
          </div>
        </ReactCardFlip>


      <main className="main-box">
        <section>
          <div className="text-row-1">
            <p>My name is Daniel Hong.</p>
          </div>
          <div className="text-row-2">
            <p>Full-stack developer.</p>
          </div>
          <div className="text-row-3">
            <p>I make ideas come to life.</p>
          </div>
        </section>
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
          width: 100vw;
          height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* Logo */

        .smiley {
          height: 300px;
          width: 300px;
          cursor: pointer;
        }
        
        .back{
          height: 300px;
          width: 300px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
        }

        .logo {
          height: 35px;
          width: 35px;
          cursor: pointer;
          transition: 0.2s;
        }

        .logo:hover {
          transform: scale(1.2);
        }

        /* Main Box */
        .main-box {
          font-size: 30px;
          letter-spacing: 3px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 750px;
          height: 220px;
          // border: 1px solid black;
        }

        nav {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 70%;
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

export default Home;
