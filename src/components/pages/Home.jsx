import React from "react";

const Home = () => {
  return (
    <div>
      <div className="max-w-screen-xl md:mx-auto pt-36 pb-8 ml-4 mr-4 opacity-0 animate-fade-in-down" style={{ animationDelay: `0.1s` }}>
        <h1 className="text-5xl font-extrabold text-white ">Hello! Welcome To My Portfolio!</h1>
        <h1 className="text-5xl font-extrabold text-white">
          I'm <strong className="text-purple-400"> Zahid Safi</strong>
        </h1>
        <p className="my-4 text-2xl text-purple-400">a Software Engineer and avid enthusiast of technology</p>
      </div>
      <div className="max-w-screen-xl md:mx-auto pt-36 pr-0 pb-8 ml-4 mr-4 opacity-0 animate-fade-in-down" style={{ animationDelay: `0.3s` }}>
        <div>
        <h1 className="text-5xl font-extrabold text-white">
        ALLOW ME TO <strong className="text-purple-400"> INTRODUCE</strong> MYSELF
        </h1>
        <p className="pt-14 text-xl text-left text-white">
          I am a recent graduate from the University of Utah and a dedicated
          Software Developer with over 2 years of experience in Backend
          Software Development. My enthusiasm for technology led me to earn a
          degree in Computer Engineering, with a primary focus on Software
          Development. I excel at providing companies with innovative solutions
          to complex challenges and am committed to enhancing code quality.
          <br></br>
          <br></br>
          Presently, I am honing my skills in various programming languages and
          tools acquired throughout my academic journey by developing projects
          that showcase my abilities. 
          <br></br>
          <br></br>
          I am proficient in <strong className="text-purple-400">C#, Python,
          Java, JavaScript, PHP, MySQL </strong>
          <br></br>
          <br></br>
          I am excited to find opportunities that
          can help me grow as a professional and allow me to learn from
          experienced engineers, as I believe there is always something new to
          learn
        </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
