import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobSingleCard = ({single_bookMark}) => {
    const { id, image, title, company, location, min_salary, max_salary, jobType} = single_bookMark;
    return (
        <div>
             <div className="flex items-center justify-between border border-gray-500 rounded-lg my-8 ">
        <div className="basis-2/3 flex">
           <div className=' bg-gray-400 flex items-center justify-center'><img className='m-8' src={image} alt="google" /></div>
          <div className="px-6 ml-5">
              <p className="bt-1">{title}</p>
              <p className="gg">{company}</p>
              <div className="flex space-x-5">
                <button className="p-border">{jobType.full}</button>
                <button className="p-border">{jobType.half}</button>
              </div>
              <div className="gg py-3 mb-4">
                <span>
                  {location.city}, {location.country} Salary: {min_salary} to {max_salary}
                </span>
              </div>
            </div>
        </div>
        <div className="basis-1/3 flex items-center justify-end mr-8">
          <Link to={`/details/${id}`}>
            <button className="p-b">View Details</button>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default AppliedJobSingleCard;