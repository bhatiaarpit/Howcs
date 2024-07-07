import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 ">
      <div className="container mx-auto md:px-48">
        <div className="lg:flex">

          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-4">COMPANY NAME</h2>
            <p className="mb-4">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

      
          <div className="w-full pl-20 lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-4">PRODUCTS</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Angular</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">React</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Vue</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Laravel</a></li>
            </ul>
          </div>

          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-4">USEFUL LINKS</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Settings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help</a></li>
            </ul>
          </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">New York, NY 10012, US</p>
          <p className="text-gray-400">info@example.com</p>
          <p className="text-gray-400">+ 01 234 567 88</p>
          <p className="text-gray-400">+ 01 234 567 89</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
