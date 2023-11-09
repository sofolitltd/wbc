import Image from "next/image";

const Blogs = () => {
  return (
    <section>
      <div className=" max-w mx-auto pt-12 sm:pt-20 md:pt-20">
        <h2 className=" text-center mt-2 text-3xl md:text-5xl  text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
          Popular News and Blogs
        </h2>
        <p className=" text-center mt-4 font-medium text-slate-600">
          Within the realm of trending news and blogs
        </p>

        {/* blogs */}
        <div className=" grid  md:grid-cols-2 lg:grid-cols-3  mx-auto gap-x-3 my-12 md:my-14">
          {/* s1 */}
          <div className="">
            <div className=" w-full rounded-lg p-4 h-full">
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
            <div className=" w-full rounded-lg p-4 h-full">
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
            <div className=" w-full rounded-lg p-4 h-full">
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
      </div>
    </section>
  );
};

export default Blogs;
