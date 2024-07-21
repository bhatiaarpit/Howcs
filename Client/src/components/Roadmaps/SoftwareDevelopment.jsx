import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useScrollToTop from '../../Hooks/useScrollToTop';

const SoftwareDevelopment = () => {
  useScrollToTop();

  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <Navbar />
      <div className='container mx-auto px-4 py-8 mt-20 md:mt-30'>
        <header className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-indigo-400 mb-4'>Software Development Roadmap</h1>
          <p className='text-lg md:text-xl text-gray-400'>
            A beginner-friendly guide to understanding the field of software development and its core areas.
          </p>
        </header>
        <section>
          <div className='space-y-12'>
            <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold text-white mb-4'>Introduction to Software Development</h2>
              <p className='text-gray-300'>
                Software development involves creating and maintaining applications and frameworks. It requires a variety of skills and knowledge across different domains.
              </p>
            </div>
            <div className='space-y-6'>
              <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold text-indigo-400 mb-4'>Core Fields</h2>
                <div className='space-y-6'>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-indigo-300 mb-2'>Web Development</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Frontend Development: Building the user interface with HTML, CSS, and JavaScript.</li>
                      <li>Backend Development: Server-side logic, databases, and APIs.</li>
                      <li>Full Stack Development: Combining both frontend and backend skills.</li>
                    </ul>
                  </div>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-indigo-300 mb-2'>App Development</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Mobile App Development: Creating apps for iOS and Android platforms.</li>
                      <li>Cross-Platform Development: Using frameworks to build apps for multiple platforms.</li>
                    </ul>
                  </div>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-indigo-300 mb-2'>Software Engineering</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Software Design Principles: Understanding design patterns and architecture.</li>
                      <li>Development Methodologies: Agile, Scrum, Waterfall, etc.</li>
                    </ul>
                  </div>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-indigo-300 mb-2'>Additional Skills</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Version Control: Using tools like Git to manage code changes.</li>
                      <li>Database Management: Understanding SQL and NoSQL databases.</li>
                      <li>Testing and Debugging: Ensuring the code works correctly and fixing issues.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default SoftwareDevelopment;
