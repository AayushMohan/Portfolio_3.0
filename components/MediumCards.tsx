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
      <div className="w-96 rounded-lg shadow border-2 border-[#F7AB0A]/50 mx-10 flex flex-col h-[500px]">
        <div>
          <Image
            className="rounded-lg"
            src={article.thumbnail}
            alt={article.title}
            width={500}
            height={300}
          />
        </div>
        <div className="p-3">
          <Link href={article.link}>
            <h5 className="mb-2 text-xl font-semibold md:text-2xl">
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
