import React from "react";
import { Link } from "react-router-dom";
import { BannerImage } from "../assets";

const LandingPage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      //   style={{ backgroundImage: "url(https://source.unsplash.com/random)" }} //For Random Images   
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="flex items-center h-full justify-center">
        <div className="text-center text-white flex flex-col items-center max-w-lg">
          <h1 className="text-5xl font-bold">Welcome to DALL-E 2.0!</h1>
          <p className="text-lg text-center">
            DALL·E 2.0 is an advanced generative model from OpenAI that creates
            high-quality images from textual descriptions. It is a
            transformer-based AI that has been trained on diverse images and can
            generate a wide range of images.
          </p>
          <div className="mt-5">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-5">
              <Link to="/create-post">Get started</Link>
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              target="_blank"
            >
              <Link to="https://openai.com/dall-e-2/">Learn more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
