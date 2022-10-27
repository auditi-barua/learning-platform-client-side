import React from 'react';
import Header from '../Componenets/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='d-flex  ms-5 mt-5' >
                <section>
                    <h2 className='fs-5 fw-2 text-center text-warning'>Online Learning Platform</h2>
                    <h4 className='text-warning'>Improve your skill</h4>
                    <p className='text-secondary' >Build skills with courses,certificates and degrees online from world-class universities and companies.</p>
                    <button className='btn btn-primary'>Sign Up</button>
                </section>
            
                <img className='w-50' src='images/cover.jpg' alt=''/>
                
            </div>
         
        </div>
    );
};

export default Home;