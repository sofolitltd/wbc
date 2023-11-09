import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <section className="px-4 sm:px-6 md:px-24 mt-10 md:mt-16">
    {/* header */}
    <h1 className="bold-32">Blog</h1>
    <div className=" mt-1 h-0.5 w-[50px] bg-gray-50"></div>


    {/* blogs */}
    <div className=" grid  md:grid-cols-2 lg:grid-cols-3  mx-auto gap-x-6 my-12 md:my-14">
          {/* s1 */}
          <div className="">
            <div className=" w-full rounded-lg py-4 h-full">
              <Image
                className=" flex  bg-blue-400/50 rounded-lg items-center"
                src={"/img-1.png"}
                alt="logo"
                width={500}
                height={500}
              ></Image>
              <p className=" mt-3 font-bold text-lg text-slate-700">
                Why should you contact with counselor
              </p>
              <p className=" my-3 text-sm text-slate-500">
                A process through which clients work one-on-one with a trained
                mental health professionals.
              </p>
            </div>
          </div>

          {/* s2 */}
          <div className="">
            <div className=" w-full rounded-lg py-4 h-full">
              <Image
                className=" flex  bg-blue-400/50 rounded-lg items-center"
                src={"/img-1.png"}
                alt="logo"
                width={500}
                height={500}
              ></Image>
              <p className=" mt-3 font-bold text-lg text-slate-700">
                Why should you contact with counselor
              </p>
              <p className=" my-3 text-sm text-slate-500">
                A process through which clients work one-on-one with a trained
                mental health professionals.
              </p>
            </div>
          </div>

          {/* s1 */}
          <div className="">
            <div className=" w-full rounded-lg py-4 h-full">
              <Image
                className=" flex  bg-blue-400/50 rounded-lg items-center"
                src={"/img-1.png"}
                alt="logo"
                width={500}
                height={500}
              ></Image>
              <p className=" mt-3 font-bold text-lg text-slate-700">
                Why should you contact with counselor
              </p>
              <p className=" my-3 text-sm text-slate-500">
                A process through which clients work one-on-one with a trained
                mental health professionals.
              </p>
            </div>
          </div>
        </div>
  </section>
  )
}

export default Blog