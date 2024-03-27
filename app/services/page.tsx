import Image from "next/image";

const Services = () => {
  const calendarLink = "https://calendar.app.google/qx5AaV4LHTVXJPGh9";

  return (
    <section className="px-4 sm:px-6 md:px-24 mt-10 md:mt-16">
      {/* header */}
      <h1 className="bold-32">Services</h1>
      <div className="mt-1 h-0.5 w-[100px] bg-gray-50"></div>

      {/* row */}
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
        {/* r-1 */}
        <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="border shadow-md rounded-xl p-5 hover:shadow-xl block">
          <div className="flex gap-4">
            <Image
              src="/student.jpeg"
              alt="std"
              width={64}
              height={64}
              
              className=" items-center rounded-xl"
            />
            <div>
              <h3 className="bold-20 mt-1">Student Counseling</h3>
              <p className="text-gray-30">
                Focus on student lifestyles & problems
              </p>
            </div>
          </div>

          <p className=" mt-4 regular-16 text-gray-50">
            Navigating the challenges of student life can be demanding, and
            we are here to help. Our student counseling services provide a
            supportive and confidential environment for students to address a
            wide range of concerns in every day life events.
          </p>

          <div className="flex gap-5">
            <div className="mt-5 border px-3 py-2 rounded">
              <div className=" flex gap-4">
                <p className=" line-through">500 BDT </p>
                <p className=" font-bold">300 BDT </p>
              </div>
            </div>
            <div className="mt-5 border px-3 py-2 rounded">
              <div className=" flex gap-4">
                <p className="">Time </p>
                <p className=" font-bold">60 min</p>
              </div>
            </div>
          </div>
        </a>
        
        {/* r-2 */}
        <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="border shadow-md rounded-xl p-5 hover:shadow-xl block">
          <div className="flex gap-4">
            <Image
              src="/couple.jpeg"
              alt="std"
              width={64}
              height={64}
              className=" items-center rounded-xl"
            />
            <div>
              <h3 className="bold-20 mt-1">Couple Counseling</h3>
              <p className="text-gray-30">Focus on relationship strengths</p>
            </div>
          </div>

          <p className=" mt-4 regular-16 text-gray-50">
            Our couple counseling services provide a safe and nurturing space
            for you and your partner to navigate the complexities of your
            relationship. Learn effective ways to express your needs, concerns,
            and feelings, address and resolve conflicts constructively.
          </p>

          <div className="flex gap-5">
            <div className="mt-5 border px-3 py-2 rounded">
              <div className=" flex gap-4">
                <p className=" line-through">1000 BDT </p>
                <p className=" font-bold">800 BDT </p>
              </div>
            </div>
            <div className="mt-5 border px-3 py-2 rounded">
              <div className=" flex gap-4">
                <p className="">Time </p>
                <p className=" font-bold">60 min</p>
              </div>
            </div>
          </div>
        </a>
        
        {/* r-3 */}
        <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="border shadow-md rounded-xl p-5 hover:shadow-xl block">
          <div className="flex gap-4">
            <Image
              src="/family.jpeg"
              alt="std"
              width={64}
              height={64}
              className=" items-center rounded-xl"
            />
            <div>
              <h3 className="bold-20 mt-1">Family Counseling</h3>
              <p className="text-gray-30">Focus on family relationship</p>
            </div>
          </div>

          <p className=" mt-4 regular-16 text-gray-50">
            Our family counseling services are here to support you and your
            loved ones on your journey toward healing, understanding, and
            harmony. Learn effective ways to communicate, gain valuable insights
            and tools to navigate the challenges of family
          </p>

          <div className="flex gap-5">
            <div className="mt-5 border px-3 py-2 rounded">
              <div className=" flex gap-4">
                <p className=" line-through">1200 BDT </p>
                <p className=" font-bold">1000 BDT </p>
              </div>
            </div>
            <div className="mt-5 border px-3 py-2 rounded">
              <div className=" flex gap-4">
                <p className="">Time </p>
                <p className=" font-bold">60 min</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Services;
