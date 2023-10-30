import Image from "next/image";

const Camp = () => {
  return (
    <section className=" py-8">
      <div className="flex flex-col gap-4 xl:flex-row">
        <Image
          src="/img-1.png"
          alt="img"
          height={1000}
          width={1000}
          className=" rounded-r-5xl"
        ></Image>

        <Image
          src="/img-2.png"
          alt="img"
          height={1000}
          width={1000}
          className=" rounded-r-5xl"
        ></Image>
      </div>
    </section>
  );
};

export default Camp;
