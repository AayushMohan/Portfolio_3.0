import Image from "next/image";
import Link from "next/link";
import DOMPurify from "dompurify";
import moment from "moment";
import { CardBody, CardContainer, CardItem } from "./ui/3d-cards";

type Props = {};

const MediumCards = ({ article }: any) => {
  const sanitizedDescription = DOMPurify.sanitize(article.description);
  const descriptionText = sanitizedDescription
    .replace(/<figcaption>.*<\/figcaption>/gi, "")
    .replace(/<[^>]+>/g, "");

  // Extract image URL from the description using regex
  const match = sanitizedDescription.match(/src="(.*?)"/);
  const imageUrl = match ? match[1] : "";

  return (
    <CardContainer>
      <div className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[26rem] h-auto md:h-[31rem] rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full mt-4">
            {imageUrl ? (
              <Image
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                src={imageUrl}
                alt={article.title}
                width={500}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="h-60 w-full rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center text-neutral-300">
                No preview image
              </div>
            )}
          </CardItem>
          <div className="p-4">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <Link
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="mb-2 text-xl font-semibold md:text-2xl">
                  {article.title}
                </h5>
              </Link>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
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
            </CardItem>
          </div>
        </CardBody>
      </div>
    </CardContainer>
  );
};

export default MediumCards;
