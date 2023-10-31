import Image from "next/image";

const Camp = () => {
  return (
    <section className="">
      <div className=" max-w mx-auto pt-12 sm:pt-20 md:pt-20">
        <h2 className="mt-8 font-semibold text-indigo-500 dark:text-indigo-400">
          Photo Gallery
        </h2>

        <p className="mt-4  sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
          Cutting-edge is our comfort&nbsp;zone.
        </p>

        <div className="mt-4 max-w-3xl">
          <p>
            Tailwind is unapologetically modern, and takes advantage of all the
            latest and greatest CSS features to make the developer experience as
            enjoyable as possible.
          </p>
        </div>

        {/*  */}
        <div className="mt-6 w-full flex gap-4 overflow-x-auto">
         
            <Image
              src="/img-1.png"
              alt=""
              height={300}
              width={300}
              className="w-full  flex rounded-xl"
            ></Image>
          
            <Image
              src="/img-1.png"
              alt=""
              height={300}
              width={300}
              className="w-full  flex rounded-xl"

            ></Image>
         
          
            <Image
              src="/img-1.png"
              alt=""
              height={300}
              width={300}
              className="w-full  flex rounded-xl"

            ></Image>
          
        </div>
      </div>
    </section>
  );
};

export default Camp;
