import React from "react";
import about_img from "../assets/about_img.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:h-[80vh] bg-pimary items-center justify-center p-4 md:px-12 md:py-4">

      {/* Image Section */}
      {/* <div className="flex justify-center">
        <img
          src={about_img}
          alt="Dental Conference 2026"
          loading="lazy"
          className="h-[50%] md:max-h-[50%] w-auto md:w-[80vh] md:mx-16 rounded-2xl object-cover"
        />
      </div> */}
    <div className="flex justify-center">
        <img
          src={about_img}
          alt="AIDRUG"
className="h-[40vh] md:min-h-[50vh] max-h-[420px] w-auto md:max-w-[420px] mx-auto md:mx-16 rounded-xl object-contain"
loading="lazy"
        />
      </div>



      {/* Text Content */}
      <div className="flex flex-col w-full md:w-2/3">
        <h1 className="text-xl md:text-3xl font-bold my-2">
          <span className="text-one">Advancing Global Leadership  </span>{" "}
 in Critical & Emergency Care
        </h1>
        <p className="text-base my-2">
       Welcome to the premier global platform for the <Link to="https://helixconferences.com/buy-a-ticket"  className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"> Critical & Emergency Care Summit.   </Link>  Our international summits convene frontline clinicians, emergency responders, critical care specialists, and healthcare leaders shaping the future of acute and lifesaving care.
The Critical & Emergency Care Summit brings together pioneers in emergency medicine, trauma care, intensive care, disaster preparedness, rapid response systems, and critical nursing practices. This global forum addresses the urgent challenges and transformative innovations redefining emergency and critical care delivery worldwide. <Link
            // className="text-accent font-bold"
            className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
            target="_blank"
            to="https://helixconferences.com/blog.php"
          >
          
            
            </Link>{" "} 
        </p>
<p>“Saving Lives Through Excellence, Innovation, and Rapid Response in Critical Care”</p>
        <Link to="/about-er-summit"  >
          <button className="flex bg-one text-white px-6 md:px-8 py-2 my-4 rounded-full text-sm md:text-base">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
