"use client";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "dompurify";
import moment from "moment";

type Props = {};

const MediumCards = ({ article }: any) => {
  const sanitizedDescription = DOMPurify.sanitize(article.description);
  const descriptionText = sanitizedDescription
    .replace(/<figcaption>.*<\/figcaption>/gi, "")
    .replace(/<[^>]+>/g, "");

  return (
    <div className="h-screen">
      <div className="rounded-lg border-2 border-[#F7AB0A]/50 mx-8 flex flex-col h-[450px] translation ease-in-out duration-500 transform hover:scale-110">
        <div>
          <Image
            className="rounded-lg"
            src={article.thumbnail}
            alt={article.title}
            width={500}
            height={300}
          />
        </div>
        <div className="p-4">
          <Link href={article.link} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-xl font-semibold md:text-3xl">
              {article.title}
            </h5>
          </Link>
          <p
            className="mb-3 font-normal dark:text-gray-400"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            dangerouslySetInnerHTML={{ __html: descriptionText }}
          />
          <p className="text-[#F7AB0A]/80">
            {moment(article.pubDate).format("MMMM Do YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediumCards;
