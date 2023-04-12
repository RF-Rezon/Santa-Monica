import React from "react";
import AppliedJobSingleCard from "../Applied Job Single Card/AppliedJobSingleCard";


  const Applied_jobs = () => {

  //   const [bookmark, setBookmark] = useState([]);

  //  let eU = JSON.parse(window.localStorage.getItem("fetchedData"));
   
  //   const exitId = bookmark.find(e=> e.id == eU.id);

  //   if(!exitId){

  //     let newBookMark = [...bookmark, eU];
  //     setBookmark(newBookMark);
  //   }


  const jobApplications = [];
  const keys = Object.keys(localStorage);

  for(let i = 0; i < keys.length; i++){
    const key = keys[i];
    const jobApplication = JSON.parse(localStorage.getItem(key))
    jobApplications.push(jobApplication);
  }

  return (
    <div>
     
      <div className="mb-20">
        <p className="bt">Applied Jobs</p>
      </div>
     <div className="mx-10 md:mx-0">
       {/* {bookmark &&
       (bookmark.map(single_bookMark => <AppliedJobSingleCard key={single_bookMark.id} single_bookMark={single_bookMark}/> ))
       } */}
       {
       (jobApplications.map(single_bookMark => <AppliedJobSingleCard key={single_bookMark.id} single_bookMark={single_bookMark}/> ))
       }
     </div>
    </div>
  );
};

export default Applied_jobs;

