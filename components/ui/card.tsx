import { Album } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const Card = ({
  title,
  description,
  urlToImage,
  url,
  publishedAt,
  source,
}: any) => {
  return (
    <div
      className="max-w-sm rounded-2xl overflow-hidden shadow-lg mt-10"
      key={title}
    >
      <Image
        className="w-full"
        src={urlToImage}
        alt="Sunset in the mountains"
        width={400}
        height={100}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-sans">{title}</div>
        <p className="text-gray-700 text-base dark:text-gray-100 ">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={url}
          className="p-1 w-full dark:bg-gray-50 rounded-full m-2 dark:text-black text-center bg-transparent border-2 border-black dark:border-0   text-xl font-semibold hover:scale-95 transition-all flex items-center justify-around"
        >
          Read More <Album size={25} />
        </Link>
      </div>
    </div>
  );
};
