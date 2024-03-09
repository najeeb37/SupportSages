import Image from "next/image";
import TickComponent from "./Components/TickComponent";
import HorizontalScrollSection from "./Components/HorizondalScroll";


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
            <button className="bg-transparent border border-blue-800 text-blue-800 font-medium hover:bg-slate-800 hover:text-white rounded-lg px-4 py-3 md:px-16 md:py-3 md:text-xl font-secular">Our Plans</button>
            <button className="text-white bg-blue-700 hover:bg-slate-800 font-medium rounded-lg px-4 py-3 md:px-14 md:py-3 md:text-xl font-secular">Get a Quote</button>
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

      <section className="max-w-screen-lg grid md:grid-cols-2 lg:my-24 pb-10">
        <div className=" order-2 md:order-1">
          <h1 className="lg:text-4xl font-normal p-4 md:text-2xl text-xl text-blue-800 font-secular">What if I have an <span className="absolute lg:block bg-red-300 bg-opacity-30 -z-20 -skew-y-3 mx-1 md:mx-2 lg:mx-3 h-6 w-40 md:h-7 md:w-48 lg:h-8 lg:w-72"></span>emergency server issue?</h1>
          <p className="font-gray-700 font-light leading-7 px-6">If the team assigned to you fails to resolve your issue. You can always escalate to the Account Manager assigned to you. AMs are senior staﬀ who are technically versed in resolving Level 3 issues on priority.</p>
        </div>
        {/* background image old guy playing computer */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="bg-cover bg-center md:px-20 w-32 h-28 md:w-48 md:h-44 lg:w-72 lg:h-64 " style={{backgroundImage: "url('/senior-man-playing-a-computer.svg')"}}>

          </div>
        </div>
      </section>
      
      <section className="max-w-screen-lg flex flex-row items-center justify-center mb-10 lg:mb-40">
        <div>
          <h1 className="lg:text-4xl text-center font-normal md:text-2xl text-2xl text-blue-800 font-secular ">Standard Plans</h1>
           <p className="font-gray-700 font-light leading-7 mx-10 md:px-56 text-center">If the team assigned to you fails to resolve your issue. You can always escalate to the Account Manager assigned to you.</p>
        </div>
      </section>
      


      
      <div className="mx-auto">
        <HorizontalScrollSection>
          <section className="mx-auto grid grid-cols-5 lg:mx-44 mb-10 lg:mb-20 text-xs lg:text-lg w-max lg:w-auto py-10">
            <div className="col-span-2 bg-blue-900 rounded-lg mt-24 md:mt-36 lg:mt-32 w-full md:w-auto">
              <ul className="text-white leading-7 lg:leading-9 p-2 lg:p-8 ">
                <li><a href="">Level of Support</a></li>
                <li><a href="">Live Chat Support (Technical - L1 & L2)</a></li>
                <li><a href="">Live Chat Support (Sales & Pre-Sales)</a></li>
                <li><a href="">Number of Helpdesk tickets</a></li>
                <li><a href="">Instant Messenger Suppor</a></li>
                <li><a href="">Number of Live Chats</a></li>
                <li><a href="">Number of Servers supported</a></li>
                <li><a href="">24/7 Service Monitoring</a></li>
                <li><a href="">24/7 Proactive Server Management</a></li>
                <li><a href="">Admin Hours</a></li>
                <li><a href="">Setup time (except weekends)</a></li>
                <li><a href="">Guaranteed response time</a></li>
                <li><a href="">Average response time</a></li>
                <li><a href="">Average resolution time</a></li>
                <li><a href="">Server Setup, Optimisation & Hardening (one time)</a></li>
                <li><a href="">Documentation</a></li>
                <li><a href="">Regular Weekly meetings with Management & Team</a></li>
                <li><a href="">Individual / Team chat with techs</a></li>
                <li><a href="">Technical Blogs</a></li>
                <li><a href="">Monthly pricing</a></li> 
              </ul>
            </div>


            <div className="col-span-1 text-center bg-slate-100 rounded-lg shadow-2xl text-blue-800 pt-5 md:pt-10 w-full md:w-auto">
              <h1 className="md:text-2xl font-bold">LEADER</h1>
              <p className="text-blue-400">$599/ Month</p>
              <button className="border border-blue-800 rounded-lg p-1 md:py-1 md:px-4 text-xs font-secular">Order Now</button>
              <ul className="leading-7 lg:leading-9 py-8">
                <li><a href="">L1, L2 & L3</a></li>
                <li><a href="">Yes</a></li>
                <li><a href="">No</a></li>
                <li><a href="">150</a></li>
                <li><a href="">Yes</a></li>
                <li><a href="">50</a></li>
                <li><a href="">Unlimited</a></li>
                <li><a href="">40</a></li>
                <li><a href="">10 Servers <span className="text-sm">($500 value)</span></a></li>
                <li><a href="">25</a></li>
                <li><a href="">24 Hr</a></li>
                <li><a href="">40 Min</a></li>
                <li><a href="">30 Min</a></li>
                <li><a href="">12 Hr</a></li>
                <li><a href="">2</a></li>
                <li><a href="">No</a></li>
                <li><a href="">Yes</a></li>
                <li><a href="">Yes</a></li>
                <li><a href="">No</a></li>
                <li><a href="">$349</a></li>
              </ul>
            </div>

            <div className="col-span-1 text-center bg-blue-400 -my-3  rounded-lg shadow-2xl text-white pt-5 md:pt-10 w-full md:w-auto">
              <h1 className="md:text-2xl font-bold">CHAMPION</h1>
                <p className="pb-3">$1299/ Month</p>
                <button className="border border-blue-800 rounded-lg p-1 md:py-1 md:px-4 text-xs font-secular ">Order Now</button>
                <ul className="leading-7 lg:leading-9 py-8">
                  <li><a href="">L1, L2 & L3</a></li>
                  <li><a href="">Yes</a></li>
                  <li><a href="">No</a></li>
                  <li><a href="">150</a></li>
                  <li><a href="">Yes</a></li>
                  <li><a href="">50</a></li>
                  <li><a href="">Unlimited</a></li>
                  <li><a href="">40</a></li>
                  <li><a href="">20 Servers <span className="text-sm">($1000 value)</span></a></li>
                  <li><a href="">25</a></li>
                  <li><a href="">24 Hr</a></li>
                  <li><a href="">40 Min</a></li>
                  <li><a href="">30 Min</a></li>
                  <li><a href="">12 Hr</a></li>
                  <li><a href="">2</a></li>
                  <li><a href="">No</a></li>
                  <li><a href="">Yes</a></li>
                  <li><a href="">Yes</a></li>
                  <li><a href="">No</a></li>
                  <li><a href="">$1499</a></li>
                </ul>
            </div>
          
            <div className="col-span-1 text-center bg-slate-100 rounded-lg shadow-2xl text-blue-800 pt-5 md:pt-10 w-full md:w-auto">
              <h1 className="md:text-2xl font-bold">COACH</h1>
              <p className="text-blue-400">$3999/ Month</p>
              <button className="border border-blue-800 rounded-lg p-1 md:py-1 md:px-4 text-xs font-secular">Order Now</button>
              <ul className="leading-7 lg:leading-9 py-8">
                <li><a href="#">L1, L2 & L3 + DevOps</a></li>
                <li><a href="#">Yes</a></li>
                <li><a href="#">No</a></li>
                <li><a href="#">150</a></li>
                <li><a href="#">Yes</a></li>
                <li><a href="#">50</a></li>
                <li><a href="#">Unlimited</a></li>
                <li><a href="#">40</a></li>
                <li><a href="#">40 Servers <span className="text-sm">($2000 value)</span></a></li>
                <li><a href="#">25</a></li>
                <li><a href="#">24 Hr</a></li>
                <li><a href="#">40 Min</a></li>
                <li><a href="#">30 Min</a></li>
                <li><a href="#">12 Hr</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">No</a></li>
                <li><a href="#">Yes</a></li>
                <li><a href="#">Yes</a></li>
                <li><a href="#">No</a></li>
                <li><a href="#">$2499</a></li>
              </ul>
            </div>
          </section>  
        </HorizontalScrollSection>
      </div>
      
    



      <section className="max-w-screen-sm mb-20 text-blue-800 font-medium lg:mx-40">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-base md:text-2xl mx-8 md:mx-20">Looking for more? <br /> We got you covered; check out our dedicated or semi-dedicated support plans</h1>
        </div>

        <div className="flex items-center justify-evenly lg:justify-around md:gap-2 md:justify-center my-2">
            <button className="bg-transparent border text-sm p-2 border-blue-800 text-blue-800 font-medium hover:bg-slate-800 hover:text-white  rounded-lg py-3 md:px-6 md:py-3 md:text-xl md:w-64 font-secular">Hire a Support Team</button>
            <button className="bg-transparent border text-sm p-2 border-blue-800 text-blue-800 font-medium hover:bg-slate-800 hover:text-white  rounded-lg py-3 md:px-6 md:py-3 md:text-xl md:w-64 font-secular">Help me Choose</button>
        </div>
      </section>

   </main>
  );
}
