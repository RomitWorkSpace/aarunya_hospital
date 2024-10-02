import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from 'imgPath/aarunya-logo.png'


const Footer = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "200px"
  };

  const center = {
    lat: 40.7128,
    lng: -74.0060
  };

  const services = [
    ["Emergency Care", "Surgery", "Radiology", "Laboratory"],
    ["Cardiology", "Neurology", "Pediatrics", "Oncology"],
    ["Orthopedics", "Gynecology", "Urology", "Dermatology"],
    ["Mental Health", "Nutrition", "Physical Therapy", "Ophthalmology"]
  ];

  return (
    <footer className=" text-black">
      <div className="container bg-light-gray mx-auto pt-12 lg:pt-24 px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="mb-8 lg:col-span-2">
              
              <img src={ Logo } alt="Aarunya Logo" width="100" />
              <div className="mt-5 text-justify text-gray-800">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since the</p>
              </div>
              <div className="flex space-x-4 mt-5">
              <a href="#" className="text-2xl hover:text-gray-300 transition duration-300" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300 transition duration-300" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300 transition duration-300" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300 transition duration-300" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 clr-purple">Useful Links</h3>
              <ul className="footer-list text-gray-800">
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    Departments
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    Dermatology
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    Consultants
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    Contact Us
                    </a>
                  </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 clr-purple">Our Services</h3>
              <ul className="footer-list text-gray-800">
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    Orthopedics
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    Gynecology
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    Dermatology
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    Urology
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-300 transition duration-300">
                    Dermatology
                    </a>
                  </li>
              </ul>
            </div>
        </div>

        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-300 transition duration-300" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300 transition duration-300" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300 transition duration-300" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-gray-300 transition duration-300" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div> */}

      </div>
        <div className="py-8 text-center bg-purple text-white">
          <p>&copy; {new Date().getFullYear()} Aarunya Clinic. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;