import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const xp = useLoaderData();

  const [body, setBody] = useState([]);

  const { email, phone, min_salary, max_salary, title, company } = body;

  useEffect(() => {
    const matchData = xp.filter((singleData) => singleData.id == id);
    setBody(matchData[0]);
  }, []);

  const hander = () => {
    window.localStorage.setItem("fetchedData", JSON.stringify(body));
  };

  return (
    <div className="mb-20">
      <div className="mb-20">
        <p className="bt">Job Details</p>
      </div>
      <div className="flex mt-10">
        <div className="basis-2/3 space-y-2 mr-5">
          <p className="bt-1">Job Description:</p>{" "}
          <p className="gg">
            A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and
            effective interfaces for software and web applications. This includes designing the layout, visual design,
            and interactivity of the user interface.
          </p>
          <p className="bt-1">Job Responsibility:</p>{" "}
          <p className="gg">
            Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including
            product management, engineering, and marketing, to ensure that the user interface is aligned with business
            and technical requirements. You will need to be able to effectively communicate your design ideas and gather
            feedback from other team members.
          </p>
          <p className="bt-1">Educational Requirements:</p>
          <p className="gg">Bachelor degree to complete any reputational university.</p>
          <p className="bt-1">Experiences:</p>
          <p className="gg">2-3 Years in this field.</p>
        </div>
        <div className="basis-1/3 p-bg ml-4">
          <div className="space-y-2 p-5">
            <h2 className="bt-1 font-extrabold">Job Details</h2>
            <hr />
            <div className="flex items-center justify-start">
              <img src="../../assets/Icons/business 1.png" alt="" />
              <p className="bt-1 mx-3">Company: </p>
              <p className="gg">{company}</p>
            </div>
            <div className="flex items-center justify-start">
              <img src="../../assets/Icons/Frame.png" alt="" />
              <p className="bt-1 mx-3">Salary: </p>
              <p className="gg">
                {min_salary} to {max_salary} (Per Month)
              </p>
            </div>
            <div className="flex items-center justify-start">
              <img src="../../assets/Icons/Frame-1.png" alt="" />
              <p className="bt-1 mx-3">Job Title: </p>
              <p className="gg">{title}</p>
            </div>
            <h2 className="bt-1 font-extrabold">Contact Information</h2>
            <hr />
            <div className="flex items-center justify-start">
              <img src="../../assets/Icons/Frame-2.png" alt="" />
              <p className="bt-1 mx-3">Phone: </p>
              <p className="gg">{phone}</p>
            </div>
            <div className="flex items-center justify-start">
              <img src="../../assets/Icons/Frame-3.png" alt="" />
              <p className="bt-1 mx-3">Email: </p>
              <p className="gg">{email}</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={hander}
              className="px-16 py-2 text-base font-semibold text-purple-100 rounded bg-gradient-to-r from-purple-600 to-purple-400"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
