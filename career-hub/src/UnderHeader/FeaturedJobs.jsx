import React, { useEffect, useState } from 'react';
import FeatureJobs2 from './FeatureJobs2';

const FeaturedJobs = () => {
    const [count, setCount] = useState([]);
    const [initial, setInitial] = useState(); 

     
    useEffect( ()=>{
         fetch("salary.json")
         .then(data => data.json())
         .then(final=> setCount(final.featured_jobs))
    },[])
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <p className='bt'>Featured Jobs</p>
                <p className='gg text-center mb-20'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
                   {count.map(features=> <FeatureJobs2 features={features} key={features.id}/>)}
                </div>
                <div className='flex items-center justify-center my-20'><button className='p-b'>See All Jobs</button></div>
            </div>
        </div>
    );
};

export default FeaturedJobs;