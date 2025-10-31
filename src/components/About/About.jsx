import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[10vw] lg:px-[14vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 max-w-6xl mx-auto">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Vagisha Gupta
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a 2025 B.Tech graduate in Electronics and Communication Engineering (ECE) from Jaypee Institute of Information Technology (JIIT), Noida.
            I am an enthusiastic and diligent individual, driven by a strong desire to expand my knowledge and skills.
            I thrive on taking fresh challenges and eagerly embrace opportunities to explore emerging technologies.
            Throughout my college experience, I have developed a profound interest in web development, programming and problem solving.
          </p>

          <a
            href="https://drive.google.com/file/d/1wn8UDBMiOO-EtenlDFNeNd-M70AoXFeW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Tilt
            className="w-64 h-64 sm:w-72 sm:h-72 lg:w-[26rem] lg:h-[26rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Vagisha Gupta"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
