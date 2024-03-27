"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import db from "@/firebase/firebase";

interface Blog {
  id: string;
  image: string;
  content: string;
  title: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchData = async () => {
    try {
      const blogsCollection = collection(db, "blog"); // Reference to your blogs collection
      const snapshot = await getDocs(blogsCollection);

      const blogList: Blog[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        image: doc.data().image,
        content: doc.data().content,
        title: doc.data().title,
      }));

      setBlogs(blogList);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false); // Set loading to false when data fetching is complete
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-24 mt-10 md:mt-16">
      <div>
        {/* header */}
        <h1 className="bold-32">Blog </h1>
        <div className=" mt-1 h-0.5 w-[100px] bg-gray-50"></div>
      </div>

        {/* body */}
      <div className="py-12">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 h-80 animate-pulse rounded-md shadow-md"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl">
            {blogs.map((blog) => (
              <Link
                href={{
                  pathname: `/blog/${blog.id}`,
                }}
                key={blog.id}
              >
                <div className="flex flex-col rounded-md shadow-md overflow-hidden cursor-pointer">
                  <div className="relative w-full h-60 md:h-48 lg:h-64">
                    {blog.image && (
                      <Image
                        src={blog.image}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between"></div>
                    <div className="title-section flex flex-col h-12 overflow-hidden mt-2">
                      <h1 className="text-lg text-black font-semibold overflow-hidden leading-6">
                        <span className="line-clamp-2">{blog.title}</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
