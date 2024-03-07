import Image from "next/image";
import TickComponent from "./Components/TickComponent";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between ">
      {/* Quasi dedicated support Team  */}
      <section className="max-w-screen-2xl grid  md:grid-cols-2 lg:p-24 mb-10 lg:mb-0">
        <div className="h-auto w-auto order-2 lg:py-10 md:order-1">
          <h1 className="lg:text-6xl p-4  md:text-4xl text-2xl text-blue-800 font-secular text-center lg:text-left">Quasi Dedicated Support Team</h1>
          
          <p className="px-6 font-gray-700 font-light leading-7">
            Support Sages strives to provide best-in-industry server management services and Helpdesk Support for web hosting companies. We have several oﬀ-the-shelf plans as well as fully customizable options to ﬁt your needs.
          </p>

          <ul className="p-7 font-semibold lg:text-lg text-blue-800 font-sans">
            <li className="flex gap-1">
              <TickComponent/>
              <p>For Medium and Small hosting providers</p>  
            </li>
            <li  className="flex gap-1">
              <TickComponent/>
              <p>L1, L2 & L3 Level Support</p>  
            </li>
            <li  className="flex gap-1">
              <TickComponent/>
              <p>Certiﬁed & well trained engineers</p>  
            </li>
            <li  className="flex gap-1">
              <TickComponent/>
              <p>DevOps Support</p>  
            </li>
          </ul>
          <div className="flex items-center gap-4 justify-around lg:justify-stretch">
            <button className="bg-transparent border border-blue-800 text-blue-800 font-medium hover:bg-slate-800 hover:text-white rounded-lg px-4 py-3 md:px-16 md:py-3 md:text-xl">Our Plans</button>
            <button className="text-white bg-blue-700 hover:bg-slate-800 font-medium rounded-lg px-4 py-3 md:px-14 md:py-3 md:text-xl">Get a Quote</button>
          </div>
        </div>
        {/* background image 25-logo */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="w-72 h-72 md:h-96 md:w-96 lg:w-550 lg:h-550 bg-cover bg-center" style={{backgroundImage: "url('/25-bitmap-combined.svg')"}}>

          </div>
        </div>
      </section>
      
      {/* Why Should I Choose Quasi  */}
      <section className="max-w-screen-lg md:grid md:grid-cols-3 ">
        {/* background image business support */}
        <div className="flex justify-center items-center " >
          <div className="bg-cover bg-center w-36 h-28 md:w-72 md:h-56" style={{backgroundImage: "url('/supporting-business-person.svg')"}}>

          </div>
        </div>

        <div className="col-span-2  lg:pr-16 ">
          <h1 className="lg:text-4xl font-normal p-4 md:text-2xl text-xl text-blue-800 font-secular lg:pr-16">Why should I choose<span className="absolute bg-yellow-300 bg-opacity-30 -z-20 skew-y-6 h-6 w-16 md:h-7 md:w-20 lg:h-10 lg:w-28" ></span> Quasi over Semi-Dedicated Support?</h1>

          <p className="px-6 font-gray-700 font-light leading-7">Quasi oﬀers you a support team which is as reliable as a Semi-Dedicated team but will share the resources with more than 2 clients. We provide assistance for the following:-</p>
          <ul className="p-7  ">
            <li className="flex gap-1">
              <TickComponent/>
              <p>Migrations</p>  
            </li>
            <li  className="flex gap-1">
              <TickComponent/>
              <p>Server Management</p>  
            </li>
            <li  className="flex gap-1">
              <TickComponent/>
              <p>Team communication tools like Slack</p>  
            </li>
            <li  className="flex gap-1">
              <TickComponent/>
              <p>Monthly face to face meetings</p>  
            </li>
            <li className="flex gap-1">
              <TickComponent/>
              <p>Escalation tier (Dedicated Account Manager, Direct reach to the management & more)</p>  
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-screen-md grid md:grid-cols-2 lg:mx-60 lg:my-24 pb-10">
        <div className=" order-2 md:order-1">
          <h1 className="lg:text-4xl font-normal p-4 md:text-2xl text-xl text-blue-800 font-secular lg:-10">What if I have an emergency server issue?</h1>
          <p className="font-gray-700 font-light leading-7 px-6">If the team assigned to you fails to resolve your issue. You can always escalate to the Account Manager assigned to you. AMs are senior staﬀ who are technically versed in resolving Level 3 issues on priority.</p>
        </div>
        {/* background image old guy playing computer */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="bg-cover bg-center md:px-20 w-32 h-28 md:w-48 md:h-44 lg:w-72 lg:h-64 " style={{backgroundImage: "url('/senior-man-playing-a-computer.svg')"}}>

          </div>
        </div>
      </section>
      
      <section className="flex flex-row items-center justify-center mb-40">
        <div>
          <h1 className="lg:text-4xl text-center font-normal md:text-2xl text-2xl text-blue-800 font-secular ">Standard Plans</h1>
           <p className="font-gray-700 font-light leading-7 mx-10 lg:mx-60 md:px-56 text-center">If the team assigned to you fails to resolve your issue. You can always escalate to the Account Manager assigned to you.</p>
          
        </div>
      </section>
      
      <section>
        {/* plan list here  */}
      </section>


      <section className="max-w-screen-sm mb-20 text-blue-800 font-medium lg:mx-40">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-base md:text-2xl mx-8 md:mx-20">Looking for more? <br /> We got you covered; check out our dedicated or semi-dedicated support plans</h1>
        </div>

        <div className="flex items-center justify-evenly lg:justify-around md:gap-2 md:justify-center my-2">
            <button className="bg-transparent border text-sm p-2 border-blue-800 text-blue-800 font-medium hover:bg-slate-800 hover:text-white  rounded-lg py-3 md:px-6 md:py-3 md:text-xl md:w-64">Hire a Support Team</button>
            <button className="bg-transparent border text-sm p-2 border-blue-800 text-blue-800 font-medium hover:bg-slate-800 hover:text-white  rounded-lg py-3 md:px-6 md:py-3 md:text-xl md:w-64">Help me Choose</button>
        </div>
      </section>

   </main>
  );
}
