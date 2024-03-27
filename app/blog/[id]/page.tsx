"use client";
// BlogDetails.tsx
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import db from "@/firebase/firebase";
import { useEffect, useState } from "react";

interface Blog {
  id: string;
  image: string;
  content: string;
  title: string;
}

interface Props {
  params: {
    id: string;
  };
}

const BlogDetails = ({ params: { id } }: Props) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogRef = doc(db, "blog", id);
        const docSnap = await getDoc(blogRef);
        if (docSnap.exists()) {
          const blogData = { id: docSnap.id, ...docSnap.data() } as Blog;
          setBlog(blogData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-5 lg:mx-20 my-28 flex justify-center items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div className="mx-5 lg:mx-20 my-28">Blog not found.</div>;
  }

  return (
    <div className="mx-5 lg:mx-20 my-28 flex justify-center items-center">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-100  flex justify-center items-center rounded-md">
         
            <Image
              src={blog.image}
              alt={blog.title}
              height={500}
              width={500}
              objectFit="cover"
              className="rounded-md"
            />
          
        </div>
        <div className="mt-6">
          <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
          <div className="text-gray-700">{blog.content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
