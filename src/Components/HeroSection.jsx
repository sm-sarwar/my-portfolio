import React from "react";
import myImage from '../assets/myImage.png'
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero bg-gray-900 text-white py-4 px-4 md:px-0 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">

        {/* left - Text */}
        <div className="text-center md:text-left md:ml-12">
            <h1 className="text-4xl font-extrabold italic">Hello , It's Me</h1>
          <h1 className="text-4xl font-bold my-4 font-montserrat">Saif Mohammad Sarwar</h1>
          <p className="text-xl font-medium mb-4 text-[#00EEFF]">Full-stack Web Developer</p>
          <p className="text-lg leading-relaxed mb-8">
            Passionate about building dynamic and responsive web applications that solve real-world problems. Always learning and experimenting with new technologies to create impactful user experiences.
          </p>
          <div className="flex items-center justify-center md:justify-normal gap-5  mb-5">
          <Link className="btn btn-circle border-cyan-300  border-4 bg-gray-900 hover:bg-black"><FaFacebook className="text-center text-3xl text-[#00EEFF]"></FaFacebook></Link>
          <Link className="btn btn-circle border-cyan-300  border-4 bg-gray-900 hover:bg-black"><FaGithub className="text-center text-3xl text-[#00EEFF]"></FaGithub></Link>
          <Link className="btn btn-circle border-cyan-300  border-4 bg-gray-900 hover:bg-black"><FaLinkedin className="text-center text-3xl text-[#00EEFF]"></FaLinkedin></Link>
          <Link className="btn btn-circle border-cyan-300  border-4 bg-gray-900 hover:bg-black"><FaTwitter className="text-center text-3xl text-[#00EEFF]"></FaTwitter></Link>
          </div> <br />
          <a
            href="#contact"  // Add the appropriate link for contact or any action
            className="bg-[#00EEFF] text-gray-900 px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-[#00ccff] "
          >
            Download Resume
          </a>
        </div>

        {/* Right - Image */}
        <div className="md:w-96">
          <img
            src={myImage}  // Replace with your image URL
            alt="Your Name"
            className="myImage rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
