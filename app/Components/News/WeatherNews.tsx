import { useGlobalContext } from "@/app/context/globalContext";
import { Card } from "@/components/ui/card";
import { AlbumIcon } from "lucide-react";
import Link from "next/link";
export default function WeatherNews() {
  const { articles } = useGlobalContext();

  return (
    <div>
      <div>
        <h1 className="text-4xl p-4">weather news </h1>
        <div
          className="grid grid-cols-3 gap-4  mt-5 max-lg:grid-cols-1
            max-sm:flex-col max-sm:gap-3 m-4 max-lg:m-1 shadow-xl"
        >
          {/* // skeleton loading statement */}

          {articles.map((item: any) => {
            return (
              <>
                <Card
                  key={item.url}
                  title={item.title}
                  description={item.description}
                  urlToImage={item.urlToImage}
                  url={item.url}
                  publishedAt={item.publishedAt}
                  source={item.source.name}
                />
              </>
            );
          })}
        </div>
        {/* read more this kind of news  */}
        <div className="flex items-center justify-center m-5 max-lg:m-0 max-lg:mt-5">
          <Link
            href={"https://fornews.vercel.app"}
            target="_blank"
            className="p-2  px-32 dark:bg-gray-200 rounded-full m-2 dark:text-black text-center bg-transparent border-2 border-black dark:border-0   text-xl font-semibold hover:scale-95 transition-all flex items-center justify-around max-lg:px-6 max-lg:w-full max-lg:p-2 max-lg:text-lg"
          >
            {!articles ? null : (
              <>
                <span className="gap-4 flex">
                  Read more this kind of news <AlbumIcon size={25} />
                </span>
              </>
            )}
          </Link>
        </div>
        {/* close */}
      </div>
    </div>
  );
}
