import Image from "next/image";
import Link from "next/link";

type CardItemProps = {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
  linkUrl?: string; // 링크가 없는 경우를 고려해 optional로 설정
  extraInfo?: string;
  width?: number;
  height?: number;
};

type CardProps = {
  items: CardItemProps[];
};

const Card = ({ items }: CardProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.length > 0 ? (
        items.map((item) => (
          <div className="border border-solid border-teal-800 rounded p-4 hover:shadow-lg" key={item.id}>
            {item.linkUrl ? (
              <Link href={item.linkUrl}>
                <div className="flex justify-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={item.width ? item.width : 100}
                    height={item.height ? item.height : 100}
                  />
                </div>
                <p className="mt-2 font-semibold text-teal-800">{item.name}</p>
                {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                {item.extraInfo && <p className="mt-2 text-sm text-teal-800">{item.extraInfo}</p>}
              </Link>
            ) : (
              <>
                <div className="flex justify-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={item.width ? item.width : 100}
                    height={item.height ? item.height : 100}
                  />
                </div>
                <p className="mt-2 font-semibold text-teal-800">{item.name}</p>
                {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                {item.extraInfo && <p className="mt-2 text-sm text-teal-800">{item.extraInfo}</p>}
              </>
            )}
          </div>
        ))
      ) : (
        <p>데이터를 가져올 수 없습니다.</p>
      )}
    </div>
  );
};

export default Card;
