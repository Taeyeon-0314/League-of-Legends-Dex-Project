import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mt-[200px]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h3 className="text-2xl mt-4 text-gray-700">페이지를 찾을 수 없습니다. (｡ᵕ̣̣̣̣̣̣ ꘍ ᵕ̣̣̣̣̣̣｡)</h3>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300"
        >
          홈으로 이동
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
