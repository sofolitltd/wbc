import Image from "next/image";

const Service = () => {
  return (
    <section>
      <div className=" max-w mx-auto pt-12 sm:pt-20 md:pt-20">
        <p className="mt-8 font-semibold text-indigo-500 dark:text-indigo-400">
          Services
        </p>

        <h2 className="mt-2 text-3xl md:text-5xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
          Service we provide
        </h2>


        {/* service */}
        <div className=" grid gap-y-6 md:grid-cols-2 lg:grid-cols-4  mx-auto gap-x-4 my-12 md:my-14">
          
          {/* s1 */}
          <div className="">
            <div className=" w-full bg-green-100/50 rounded-lg p-4 h-full">
              <p className=" font-bold text-lg text-slate-700">Individual</p>
              <p className=" my-3 text-sm text-slate-500">
                A process through which clients work one-on-one with a trained
                mental health professionals.
              </p>
              <div className=" my-4 h-0.5 bg-gray-500/25"></div>
              <div className=" flex justify-between items-center">
                <p className=" text-md font-medium text-slate-600">Explore More</p>
                <div className=" bg-black px-2 rounded-full h-6 w-6">
                  <p className=" text-md  text-white text-center"> {">"} </p>
                </div>
              </div>
            </div>
          </div>

    
          {/* s2 */}
          <div className="">
            <div className=" w-full bg-indigo-100/75 rounded-lg p-4 h-full">
              <p className=" font-bold text-lg text-slate-700">Couple</p>
              <p className=" my-3 text-sm text-slate-500">
              Couple therapy for married couples in khown as marital therapy.
                Individual sessions may be provided seperately.
              </p>
              <div className=" my-4 h-0.5 bg-gray-500/25"></div>
              <div className=" flex justify-between items-center">
                <p className=" text-md font-medium text-slate-600">Explore More</p>
                <div className=" bg-black px-2 rounded-full h-6 w-6">
                  <p className=" text-md  text-white text-center"> {">"} </p>
                </div>
              </div>
            </div>
          </div>

          {/* s3 */}
          <div className="">
            <div className=" w-full bg-orange-100/50 rounded-lg p-4 h-full">
              <p className=" font-bold text-lg text-slate-700">Teen</p>
              <p className=" my-3 text-sm text-slate-500">
              With counseling, teen participate intalk therapy in asafe environment with a mental health professional.
              </p>
              <div className=" my-4 h-0.5 bg-gray-500/25"></div>
              <div className=" flex justify-between items-center">
                <p className=" text-md font-medium text-slate-600">Explore More</p>
                <div className=" bg-black px-2 rounded-full h-6 w-6">
                  <p className=" text-md  text-white text-center"> {">"} </p>
                </div>
              </div>
            </div>
          </div>

          {/* s4 */}
          <div className="">
            <div className=" w-full bg-pink-100/50 rounded-lg p-4 h-full">
              <p className=" font-bold text-lg text-slate-700">Phychiatry</p>
              <p className=" my-3 text-sm text-slate-500">
              Evaluaton and medication managment are usually carried out by phychaiatrist or, in many states.
              </p>
              <div className=" my-4 h-0.5 bg-gray-500/25"></div>
              <div className=" flex justify-between items-center">
                <p className=" text-md font-medium text-slate-600">Explore More</p>
                <div className=" bg-black px-2 rounded-full h-6 w-6">
                  <p className=" text-md  text-white text-center"> {">"} </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;
