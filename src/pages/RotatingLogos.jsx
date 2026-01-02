import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.webp";
import img2 from "../assets/tracks/img2.jpg"
import img3  from "../assets/tracks/img3.webp";
import img4 from "../assets/tracks/img4.png";
import img5 from "../assets/tracks/img5.webp";
import img6 from "../assets/tracks/img6.jpg"
import img7 from "../assets/tracks/img7.avif";
import img8 from "../assets/tracks/img8.png"
import img9 from "../assets/tracks/img9.webp";
import img10 from "../assets/tracks/img10.jpg"
import img11 from "../assets/tracks/img11.webp";
import img12 from "../assets/tracks/img12.webp"
import img13 from "../assets/tracks/img13.jpeg";
import img14 from "../assets/tracks/img14.jpg"
import img15 from "../assets/tracks/img15.png";
import img16 from "../assets/tracks/img16.jpg"
import img17 from "../assets/tracks/img17.jpg"
import img18 from "../assets/tracks/img18.png";
import img19 from "../assets/tracks/img19.webp"
import img20 from "../assets/tracks/img20.jpg"

export const tracks = [
  {
    image: img1,
    title: "AI in Emergencies",
    description: (
      <>
 {" "}
        <Link
          to= "/er-summit-orators" 
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
AI in emergencies
        </Link>  supports rapid decision-making through predictive analytics, triage automation, and real-time clinical insights. It enhances early detection, resource allocation, and response efficiency. Healthcare professionals use AI to improve accuracy, reduce delays, support critical decisions, and strengthen emergency preparedness and patient outcomes in high-pressure clinical environments worldwide.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Shock Treatment",
    description: (
      <>
{" "}
        <Link
          to= "/er-summit-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Shock treatment 
        </Link>{" "} focuses on rapid identification and management of circulatory failure to restore tissue perfusion. It includes fluid resuscitation, vasopressors, oxygen therapy, and continuous monitoring. Early intervention by trained clinicians prevents organ failure, stabilizes patients, and improves survival across traumatic, septic, cardiogenic, and hypovolemic shock conditions.
      </>
    ),
  },

  {
    image: img3,
    title: "Pediatric Emergencies",
    description: (
      <>
{" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Pediatric emergencies
        </Link>  require specialized assessment and age-appropriate interventions for infants and children. They include respiratory distress, trauma, seizures, poisoning, and infections. Healthcare teams prioritize rapid stabilization, family-centered communication, and child-specific protocols to ensure safe, effective, and compassionate emergency care for young patients in critical situations.
      </>
    ),
  },

  {
    image: img4,
    title: "Clinical Care",
    description: (
      <>
  {" "}
        <Link
          to= "/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        > Clinical care  </Link>{" "}  in emergency settings focuses on timely assessment, diagnosis, and treatment of acute conditions. It integrates evidence-based protocols, multidisciplinary collaboration, and patient-centered decision-making. Effective clinical care ensures safety, quality outcomes, and continuity while addressing diverse medical emergencies under time-sensitive and high-pressure healthcare environments.

      </>
    ),
  },
   {
    image:img5,
    title: "Toxicology",
    description: (
      <>
{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        Toxicology
</Link>{" "} in emergency medicine addresses poisoning, overdose, and exposure to harmful substances. It involves rapid risk assessment, antidote administration, decontamination, and supportive care. Clinicians rely on toxicological expertise to prevent complications, manage acute toxicity, and ensure patient safety across accidental, occupational, and intentional exposures.
       
      </>
    ),
  },

  {
    image: img6 ,
    title: "Critical Care",
    description: (
      <>
{" "}
        <Link
          to="/contact" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Critical care
        </Link>{" "}  focuses on managing life-threatening conditions requiring intensive monitoring and advanced support. It includes mechanical ventilation, hemodynamic stabilization, and organ support. Multidisciplinary teams deliver continuous, high-acuity care to stabilize patients, prevent deterioration, and improve survival in intensive and emergency care environments.
      </>
    ),
  },

  {
    image: img7,
    title: "Neurological Emergencies",
    description: (
      <>

        <Link
          to= "/contact" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Neurological emergencies
        </Link>{" "}   include stroke, seizures, head injury, and altered consciousness. Rapid assessment and intervention are critical to prevent permanent damage. Emergency teams prioritize early imaging, airway protection, and neurological monitoring, ensuring timely treatment that improves outcomes and preserves neurological function in acute, high-risk situations.
     
      </>
    ),
  },

  {
    image: img8,
    title: "Trauma Care",
    description: (
      <>
{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Trauma care
        </Link>{" "}    focuses on rapid evaluation and management of injuries caused by accidents or violence. It emphasizes airway control, bleeding management, imaging, and surgical intervention. Coordinated trauma teams deliver lifesaving care, reduce complications, and improve survival through structured protocols and timely, multidisciplinary emergency response systems.
      </>
    ),
  },

  {
    image:  img9,
    title: "Pulmonary Emergencies",
    description: (
      <>
  {" "}
        <Link
          to= "/about-er-summit"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Pulmonary emergencies
        </Link>{" "} include acute asthma, pulmonary embolism, pneumonia, and respiratory failure. Prompt diagnosis, oxygen therapy, ventilation support, and medication are essential. Emergency clinicians manage airway and breathing priorities to stabilize patients, prevent hypoxia, and ensure effective respiratory function during life-threatening pulmonary conditions.
      
      </>
    ),
  },

  {
    image: img10,
    title: "ENT Emergencies",
    description: (
      <>
{" "}
        <Link
          to="/er-summit-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
ENT emergencies
        </Link>{" "} involve acute conditions affecting the ear, nose, and throat, including airway obstruction, epistaxis, infections, and foreign bodies. Rapid assessment and intervention prevent airway compromise and complications. Emergency care ensures prompt stabilization, symptom relief, and referral for specialized treatment when required.

      </>
    ),
  },

  {
    image: img11,
    title: "Addiction Medicine",
    description: (
      <>
{" "}
        <Link
          to="/er-summit-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Addiction medicine
        </Link>{" "}  in emergencies addresses substance intoxication, withdrawal, and overdose. It integrates medical stabilization, harm reduction, and behavioral support. Emergency professionals manage acute complications, initiate treatment pathways, and connect patients to long-term care, supporting recovery and reducing repeat emergency presentations related to substance use disorders.
      </>
    ),
  },

  {
    image: img12,
    title: "Infectious Diseases",
    description: (
      <>
     {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Infectious Diseases
        </Link> in emergency care require rapid identification, isolation, and treatment. Conditions include sepsis, emerging infections, and communicable diseases. Early antimicrobial therapy, infection control measures, and surveillance reduce transmission, improve outcomes, and strengthen public health response during outbreaks and high-risk infectious emergencies..
      </>

    ),
  },

  {
    image: img13,
    title: "Cardiac Arrest",
    description: (
      <>
 {" "}
        <Link
          to="/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Cardiac arrest 
        </Link>{" "}  management focuses on immediate resuscitation using high-quality CPR, defibrillation, and advanced life support. Rapid response improves survival and neurological outcomes. Emergency teams coordinate airway management, medications, and post-resuscitation care to restore circulation and stabilize patients during critical cardiac emergencies.
      </>
    ),
  },

  {
    image: img14,
    title: "Emergency Radiology",
    description: (
      <>
{" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Emergency Radiology
        </Link> provides rapid imaging support for acute diagnosis and decision-making. It includes CT, X-ray, ultrasound, and MRI for trauma and critical conditions. Timely imaging enables accurate diagnosis, guides interventions, and improves outcomes by supporting fast, informed clinical decisions in emergency and critical care settings.

        
      </>
    ),
  },

  {
    image:img15,
    title: "Gastroenterology",
    description: (
      <>
 {" "}
        <Link
          to= "/about-er-summit"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Gastroenterology
        </Link>  emergencies include gastrointestinal bleeding, acute abdominal pain, obstruction, and liver failure. Prompt assessment, imaging, and intervention are vital. Emergency clinicians manage stabilization, bleeding control, and supportive care while coordinating specialist input to prevent complications and ensure effective treatment of acute gastrointestinal conditions.
        
      </>
    ),
  },

  {
    image: img16,
    title: "Pharmacology & Therapeutics",
    description: (
      <>
      {" "}
        <Link
          to= "/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Pharmacology and therapeutics
        </Link> in emergencies focus on safe, rapid medication use for acute conditions. It includes drug selection, dosing, interactions, and adverse effects. Clinicians rely on pharmacological knowledge to optimize treatment, reduce errors, and ensure effective, evidence-based therapy in time-critical emergency situations.
     
      </>
    ),
  },

  {
    image: img17,
    title: "Anaphylaxis",
    description: (
      <>
{" "}
        <Link
          to= "/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Anaphylaxis 
        </Link>  is a severe, life-threatening allergic reaction requiring immediate treatment. Rapid administration of epinephrine, airway support, and monitoring is essential. Emergency teams act quickly to prevent respiratory compromise and shock, ensuring prompt stabilization and patient education to reduce future allergic risk and recurrence.
</>
    ),
  },

  {
    image:img18,
    title: "Drug Safety",
    description: (
      <>
{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Drug safety
        </Link> in emergency care focuses on preventing medication errors, adverse reactions, and toxicities. It includes careful prescribing, monitoring, and reporting. Emergency professionals ensure safe drug administration under pressure, protecting patients while balancing rapid treatment needs and maintaining compliance with safety protocols and clinical standards.
  
      </>
    ),
  },
// Ethical

  {
    image: img19,
    title: "Psychiatric Emergencies",
    description: (
      <>
   {" "}
        <Link
          to= "/about-er-summit" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Psychiatric emergencies
        </Link>   nclude acute agitation, suicidal behavior, psychosis, and severe anxiety. Emergency care emphasizes safety, assessment, crisis intervention, and compassionate communication. Multidisciplinary teams stabilize patients, reduce risk, and coordinate mental health support, ensuring dignity, ethical care, and appropriate referral for ongoing psychiatric treatment.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img20,
    title: "Respiratory Emergencies",
    description: (
      <>
  {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Respiratory emergencies
        </Link>   involve acute airway and breathing compromise, including asthma, COPD exacerbations, and respiratory failure. Immediate assessment, oxygen therapy, and ventilation support are critical. Emergency teams prioritize airway management and rapid intervention to prevent hypoxia, stabilize patients, and restore effective respiratory function.
      </>
    ),
  },
 
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
