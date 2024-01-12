import SubmitResume from "./components/emailResume";
import IndustrySelect from "./components/IndustrySelect";
import "./page.css";
import "./shared.css";
// import { jobListings } from './components/SharedOptions.js';
import { featuredJobListings } from "./components/JobListings.js";
import { jobListings } from "./components/JobListings.js";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/Card";
import CardTitle from "react-bootstrap/Card";
import CardText from "react-bootstrap/Card";
import CardFooter from "react-bootstrap/Card";
import "./headerImage.jpg";
import EncodeEmail from "./components/dataProtectEncoder";
import DecodeEmail from "./components/dataProtectDecoder";
// import ContactEmail from './components/EmailDataProtect';
// import DataProtect from 'data-protect'

// const arrayExamples = [{
//   thing01: 'Dad', thing02: 'known as father',
//   id: '54'
// },
// {
//   thing01: 'Mom', thing02: 'known as mother',
//   id: '34'
// },
// ];

const encodedEmail = () => {
  const email = "joe@eglinjobs.com";
  const b = Buffer.from(email).toString("base64");
  let res = [];
  for (let i = 0; i < b.length; i++) {
    res[i] = b.charCodeAt(i).toString();
  }
  return res.join("-");
};

const decodedEmail = () => {
  const email =
  "97-109-57-108-81-71-86-110-98-71-108-117-97-109-57-105-99-121-53-106-98-50-48-61";
    const ascii = email.split('-')
    const ascii2 = JSON.parse("[" + ascii + "]")
  let res = String.fromCharCode(...ascii2)
  return atob(res)
};

export default function Home() {
  return (
    <div className="lg:pl-80 lg:pr-80 relative overflow-hidden rounded-lg bg-cover bg-white p-2 bg-no-repeat text-center">
      <div>
        <div className="float-left text-1xl text-black pt-1 font-light">
          {/* <button><DecodeEmail /></button> */}
          ELGIN JOBS
        </div>
        <div className="float-right text-black pt-1 font-light">
          Available Jobs: {featuredJobListings.length + jobListings.length}
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-400 border-1 dark:bg-gray-700" />
      <div className="bg-[url('./headerImage.jpg')] bg-cover bg-center">
        <h1 className="pt-20 pb-2.5 text-4xl text-center text-white">
          EGLIN JOBS
        </h1>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="mx-auto p-1 h-px w-48 border-0.5" />
        </div>
        <h2 className="pb-7 text-2xl text-center text-white font-thin">
          Find Jobs on Eglin AFB
        </h2>
        <div className="lg:pb-20 lg:pt-20 pb-7">
          {/* <button className="p-2 bg-orange-700 text-white rounded-md"> */}
            <SubmitResume />
          {/* </button> */}
          <div className="text-white font-thin"></div>
        </div>
      </div>
      <div className="text-black">
        <h1 className="pt-5 pb-2 text-black text-2xl font-light italic">
          Featured Jobs:
        </h1>
        <div className="flex flex-wrap gap-1 justify-center">
          {featuredJobListings.map((job) => (
            <div
              className="w-screen lg:w-1/2 p-6 border border-red-200 border-1 bg-amber-50 rounded-lg shadow text-black"
              key={job["web-scraper-order"]}
            >
              <Card className="">
                <CardHeader className="text-sm font-bold">
                  {job.jobCategory}
                </CardHeader>
                <CardBody>
                  <CardTitle className="text-xl">{job.jobTitle}</CardTitle>
                  <hr className="mx-auto w-48 h-px my-2 bg-gray-300 border-0" />
                  <CardText>
                    <div className="text-sm font-normal">
                      Keywords:
                      <br />
                    </div>
                    {job.experienceRequired}
                  </CardText>
                </CardBody>
                <CardFooter className="font-thin pt-1">
                  Job # {job["web-scraper-order"]}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <hr className="mx-auto w-3/4 h-px my-4 bg-gray-500 border-0 h-1" />
      <div className="flex flex-wrap justify-center">
        {jobListings.map((job) => (
          <div
            className="sm:flex-none flex-wrap w-screen lg:w-1/3 lg:max-w-sm p-6 border border-gray-200 rounded-lg shadow odd:bg-white even:bg-slate-50 text-black"
            key={job["web-scraper-order"]}
          >
            <Card className="">
              <CardHeader className="text-sm font-bold">
                {job.jobCategory}
              </CardHeader>
              <CardBody>
                <CardTitle className="text-xl">{job.jobTitle}</CardTitle>
                <hr className="mx-auto w-48 h-px my-2 bg-gray-300 border-0" />
                <CardText>
                  <div className="text-sm font-normal">
                    Keywords:
                    <br />
                  </div>
                  {job.experienceRequired}
                </CardText>
              </CardBody>
              {/* <hr className='mx-auto w-48 h-px my-2 bg-gray-300 border-0' /> */}
              <CardFooter className="font-thin pt-1">
                Job # {job["web-scraper-order"]}
              </CardFooter>
            </Card>
          </div>
        ))}
        {/* <ul>
      {arrayExamples.map((singularName) => (
        <p key={singularName.id}>
          Hello, {singularName.thing01} you are also {singularName.thing02}!
        </p>
      ))}
    </ul>
    <ul>
      {MinimumSalary.map((salary) => (
        <p key={salary.label}>
          Hello! Your salary is {salary.value}. Your label is {salary.label}.
        </p>
      ))}
    </ul> */}
      </div>
      <hr className="mx-auto h-px my-4 bg-gray-100 border-1 h-1" />
      <footer className="font-thin">
        <p className="float-left text-black">
          &copy; {new Date().getFullYear()} Defense Listings, LLC | Policies and
          Terms
        </p>
      </footer>
    </div>
  );
}

{
  /* <div>
   <ul role="list" class="p-6 divide-y divide-slate-200">
  {#each Location as Locations}
    {/* <!-- Remove top/bottom padding when first/last child --> */
}
{
  /* <li class="flex py-4 first:pt-0 last:pb-0"> */
}
{
  /* <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" /> */
}
{
  /* <div class="ml-3 overflow-hidden"> */
}
{
  /* <p class="text-sm font-medium text-slate-900">{Locations.value}</p> */
}
{
  /* <p class="text-sm text-slate-500 truncate">{Locations.label}</p> */
}
{
  /* </div> */
}
{
  /* </li> */
}
{
  /* {/each} */
}
{
  /* </ul> */
}
{
  /* </div> */
}

{
  /* // return (

    
  //  <main>
  //   <div classname="lander">
  //     <div classname="top-lander">
  //       <p className="headline"><head>EGLIN JOBS</head></p>
  //         <p id="slogan">FIND EMPLOYMENT ON EGLIN AIR FORCE BASE</p>
  //         <div id="flex-container">
  //           <div className="flex-item">
  //             <IndustrySelect />
  //           </div>
  //         </div>
  //         </div>
  //     <p id="resultsDisplay">Can't seem to find the right job? No problem.
  //     Send us your resume and we'll keep an eye out for something that fits you.
  //     <strong>Featured Jobs</strong> above.</p>
  //  <div classname="button">
  //   <SubmitResume />
  //  </div>
  //  </div>
  //  </main>
   
  // ) */
}
