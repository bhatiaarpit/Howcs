import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useScrollToTop from '../../Hooks/useScrollToTop';

const CyberSecurity = () => {
  useScrollToTop();

  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <Navbar />
      <div className='container mx-auto px-4 py-8 mt-20 md:mt-30'>
        <header className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-red-400 mb-4'>Cybersecurity</h1>
          <p className='text-lg md:text-xl text-gray-400'>
            Understand the fundamentals of Cybersecurity, its importance, and the skills necessary to protect digital assets and information.
          </p>
        </header>
        <section>
          <div className='space-y-12'>
            <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold text-white mb-4'>Introduction to Cybersecurity</h2>
              <p className='text-gray-300'>
                Cybersecurity involves protecting systems, networks, and data from digital attacks. It includes various practices and technologies to safeguard information and maintain the integrity, confidentiality, and availability of data.
              </p>
            </div>
            <div className='space-y-6'>
              <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold text-red-400 mb-4'>Core Areas of Cybersecurity</h2>
                <div className='space-y-6'>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-red-300 mb-2'>Network Security</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Firewalls: Filtering incoming and outgoing network traffic.</li>
                      <li>Intrusion Detection Systems (IDS): Monitoring network traffic for suspicious activity.</li>
                    </ul>
                  </div>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-red-300 mb-2'>Application Security</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Secure Coding Practices: Writing code that is resistant to attacks.</li>
                      <li>Vulnerability Assessment: Identifying and addressing security weaknesses.</li>
                    </ul>
                  </div>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-red-300 mb-2'>Information Security</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Encryption: Protecting data through cryptographic techniques.</li>
                      <li>Access Control: Ensuring only authorized users can access sensitive information.</li>
                    </ul>
                  </div>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-red-300 mb-2'>Incident Response</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Incident Handling: Responding to and managing security breaches.</li>
                      <li>Forensics: Analyzing and investigating cyber incidents.</li>
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

export default CyberSecurity;
