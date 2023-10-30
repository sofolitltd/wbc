import Image from "next/image";
const Contact = () => {
  return (
    <section className="p-10 xl:px-20">
      {/* header */}
      <h1 className="bold-32">Contact Us </h1>
      <div className=" mt-1 mb-10 h-0.5 w-[100px] bg-gray-50"></div>

      {/* body */}

      <div className=" w-full gap-16 justify-between flex-none xl:flex">
        {/* left */}
        <div className="flex w-full">
          <div className="pb-10">
            {/* loc */}
            <div className="flex gap-4">
              <div className=" w-15 bg-green-600 p-2 rounded-full inline">
                <Image src="/location.svg" alt="std" width={24} height={24} />
              </div>

              <div>
                <h3 className="bold-20  mb-1">Location</h3>
                <p className="text-gray-30 pb-1">
                  Chittagong University, Chittagong.
                </p>
                <p className="text-gray-30">Dhaka University, Chittagong.</p>
              </div>
            </div>

            {/* mail */}
            <div className="mt-10 flex gap-4">
              <div className=" w-15 bg-red-600 p-2 rounded-full">
                <Image src="/tech.svg" alt="std" width={24} height={24} />
              </div>

              <div>
                <h3 className="bold-20  mb-1">Mail Address</h3>
                <a href="mailto:wellbeingclinicbd@gmail.com">
                  <p className="text-gray-30 pb-1">
                    wellbeingclinicbd@gmail.com
                  </p>
                </a>
                <a href="mailto:info@sofolit.com">
                  <p className="text-gray-30">info@sofolit.com</p>
                </a>
              </div>
            </div>

            {/* mobile */}
            <div className="mt-10 flex gap-4">
              <div className=" w-15 bg-blue-600 p-2 rounded-full">
                <Image src="/tech.svg" alt="std" width={24} height={24} />
              </div>

              <div>
                <h3 className="bold-20  mb-1">Mobile No.</h3>
                <a href="tel:+8801704340860">
                  <p className="text-gray-30 pb-1">+88 01704 340 860</p>
                </a>
                <a href="tel:+8801521529606">
                  <p className="text-gray-30">+88 01521 529 606</p>
                </a>
              </div>
            </div>

            <h3 className=" mt-12 bold-20  mb-1">Social Media</h3>

            {/* socila media */}
            <div className="mt-2 flex gap-4">
              {/* facebook */}
              <div className="p-2 hover:rounded-full hover:bg-slate-100">
                <a
                  target="_blank"
                  href={"https://facebook.com/wellbeingclinicbd"}
                >
                  <Image
                    src="/facebook.svg"
                    alt=""
                    height={24}
                    width={24}
                  ></Image>
                </a>
              </div>

              {/* instagram */}
              <div className="p-2 hover:rounded-full hover:bg-slate-100">
                <a
                  target="_blank"
                  href={"https://instagram.com/wellbeingclinicbd"}
                >
                  <Image
                    src="/instagram.svg"
                    alt=""
                    height={24}
                    width={24}
                  ></Image>
                </a>
              </div>

              {/* youtube.svg */}
              <div className=" p-2 hover:rounded-full hover:bg-slate-100">
                <a
                  target="_blank"
                  href={"https://youtube.com/@wellbeingclinicbd"}
                >
                  <Image
                    src="/youtube.svg"
                    alt=""
                    height={24}
                    width={24}
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex w-full bg-slate-100 justify-center">
          <Image src="/boat.png" alt="contact" height={500} width={500}></Image>
        </div>
      </div>
    </section>
  );
};

export default Contact;
