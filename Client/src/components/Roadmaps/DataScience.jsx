import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DataScience = () => {
  return (
    <div className='bg-gray-900 min-h-screen text-white'>
    <Navbar />
    <div className='container mx-auto px-4 py-8 mt-20 md:mt-30'>
      <header className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-green-400 mb-4'>Data Science & Big Data</h1>
        <p className='text-lg md:text-xl text-gray-400'>
          Explore the expansive fields of Data Science and Big Data. Learn the core skills and technologies to analyze and leverage large data sets effectively.
        </p>
      </header>
      <section>
        <div className='space-y-12'>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
            <h2 className='text-3xl font-semibold text-white mb-4'>Introduction to Data Science & Big Data</h2>
            <p className='text-gray-300'>
              Data Science focuses on extracting actionable insights from data using various analytical methods and algorithms. Big Data, on the other hand, deals with managing and analyzing large volumes of data that traditional data processing tools cannot handle.
            </p>
          </div>
          <div className='space-y-6'>
            <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold text-green-400 mb-4'>Core Areas of Data Science</h2>
              <div className='space-y-6'>
                <div className='bg-gray-700 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold text-green-300 mb-2'>Data Exploration & Cleaning</h3>
                  <ul className='list-disc list-inside text-gray-300'>
                    <li>Understanding Data: Types, sources, and formats.</li>
                    <li>Data Cleaning: Handling missing values, outliers, and inconsistencies.</li>
                    <li>Exploratory Data Analysis (EDA): Visualizing data to identify patterns.</li>
                  </ul>
                </div>
                <div className='bg-gray-700 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold text-green-300 mb-2'>Statistical Analysis & Modeling</h3>
                  <ul className='list-disc list-inside text-gray-300'>
                    <li>Descriptive Statistics: Measures of central tendency and dispersion.</li>
                    <li>Inferential Statistics: Hypothesis testing, confidence intervals.</li>
                    <li>Predictive Modeling: Building and evaluating regression and classification models.</li>
                  </ul>
                </div>
                <div className='bg-gray-700 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold text-green-300 mb-2'>Machine Learning</h3>
                  <ul className='list-disc list-inside text-gray-300'>
                    <li>Supervised Learning: Algorithms like linear regression, decision trees.</li>
                    <li>Unsupervised Learning: Clustering, dimensionality reduction techniques.</li>
                    <li>Model Evaluation: Metrics such as accuracy, precision, recall, F1 score.</li>
                  </ul>
                </div>
                <div className='bg-gray-700 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold text-green-300 mb-2'>Data Visualization</h3>
                  <ul className='list-disc list-inside text-gray-300'>
                    <li>Visualization Tools: Using libraries like Matplotlib, Seaborn, and Plotly.</li>
                    <li>Interactive Dashboards: Building dashboards with tools like Tableau or Power BI.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold text-green-400 mb-4'>Core Areas of Big Data</h2>
              <div className='space-y-6'>
                <div className='bg-gray-700 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold text-green-300 mb-2'>Big Data Technologies</h3>
                  <ul className='list-disc list-inside text-gray-300'>
                    <li>Hadoop: Understanding the Hadoop ecosystem including HDFS and MapReduce.</li>
                    <li>Spark: Real-time data processing with Apache Spark.</li>
                    <li>Kafka: Data streaming with Apache Kafka.</li>
                  </ul>
                </div>
                <div className='bg-gray-700 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold text-green-300 mb-2'>Data Storage & Management</h3>
                  <ul className='list-disc list-inside text-gray-300'>
                    <li>Distributed Databases: NoSQL databases like MongoDB, Cassandra.</li>
                    <li>Data Warehousing: Solutions like Amazon Redshift, Google BigQuery.</li>
                  </ul>
                </div>
                <div className='bg-gray-700 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold text-green-300 mb-2'>Data Processing & ETL</h3>
                  <ul className='list-disc list-inside text-gray-300'>
                    <li>ETL Processes: Extract, Transform, Load processes for data integration.</li>
                    <li>Data Pipelines: Building and managing pipelines for large-scale data processing.</li>
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

export default DataScience;
