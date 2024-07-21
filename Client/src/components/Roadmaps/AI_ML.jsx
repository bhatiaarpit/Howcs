import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AI_ML = () => {
  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <Navbar />
      <div className='container mx-auto px-4 py-8 mt-20 md:mt-30'>
        <header className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-green-400 mb-4'>Artificial Intelligence & Machine Learning</h1>
          <p className='text-lg md:text-xl text-gray-400'>
            Explore the world of AI and ML, understand their core concepts, and discover the skills required to excel in these fields.
          </p>
        </header>
        <section>
          <div className='space-y-12'>
            <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold text-white mb-4'>Introduction to AI & ML</h2>
              <p className='text-gray-300'>
                Artificial Intelligence (AI) and Machine Learning (ML) are transformative technologies shaping the future. AI involves creating systems that can perform tasks requiring human intelligence, while ML focuses on developing algorithms that enable computers to learn from and make decisions based on data.
              </p>
            </div>
            <div className='space-y-6'>
              <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold text-green-400 mb-4'>Core Areas of AI & ML</h2>
                <div className='space-y-6'>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-green-300 mb-2'>Machine Learning</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Supervised Learning: Training models on labeled data to make predictions.</li>
                      <li>Unsupervised Learning: Finding patterns in unlabeled data.</li>
                      <li>Reinforcement Learning: Training models through rewards and punishments.</li>
                    </ul>
                  </div>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-green-300 mb-2'>Artificial Intelligence</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Natural Language Processing (NLP): Enabling machines to understand and respond to human language.</li>
                      <li>Computer Vision: Allowing machines to interpret and understand visual information from the world.</li>
                      <li>Robotics: Designing and creating robots capable of performing tasks autonomously.</li>
                    </ul>
                  </div>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-green-300 mb-2'>Tools and Technologies</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Programming Languages: Python, R, and Julia.</li>
                      <li>Libraries and Frameworks: TensorFlow, PyTorch, Scikit-learn.</li>
                      <li>Data Processing: Tools like Pandas, NumPy, and data visualization libraries.</li>
                    </ul>
                  </div>
                  <div className='bg-gray-700 p-4 rounded-lg'>
                    <h3 className='text-xl font-semibold text-green-300 mb-2'>Additional Skills</h3>
                    <ul className='list-disc list-inside text-gray-300'>
                      <li>Data Preprocessing: Cleaning and preparing data for analysis.</li>
                      <li>Model Evaluation: Techniques to assess the performance of ML models.</li>
                      <li>Ethical AI: Understanding and addressing the ethical implications of AI technology.</li>
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

export default AI_ML;
