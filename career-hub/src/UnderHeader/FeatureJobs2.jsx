import React from 'react';
import { Link } from 'react-router-dom';

const FeatureJobs2 = ({features}) => {
    const { id, image, title, company, location, salary, jobType} = features;
    return (
        <div>
             <div className="py-10 flex flex-col justify-evenly border border-gray-400 pl-10 rounded-md">
                        <div className='h-[40px] w-[140px]'><img className='min-h-full min-w-full' src={image} alt="google" /></div>
                        <div>
                            <p className='bt-1'>{title}</p>
                            <p className='gg'>{company}</p>
                            <div className='flex space-x-5'>
                            <button className='p-border'>{jobType.half}</button>
                            <button className='p-border'>{jobType.full}</button>
                            </div>
                            <div className='gg py-3'>
                                <span>logo {location.city}, {location.country} logo Salary : {salary.min}k - {salary.max}k</span>
                            </div>
                            <div><Link to ={id} ><button className='p-b'>View Details</button></Link></div>
                        </div>
                    </div>
        </div>
    );
};

export default FeatureJobs2;