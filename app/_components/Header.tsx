import Link from "next/link";

export default function Header({
  title,
  description,
  showSearchIcon = false,
}: {
  title: string;
  description: string;
  showSearchIcon?: boolean;
}) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col flex-1">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <h1 className="text-md font-light text-gray-500 pt-2">{description}</h1>
      </div>
      {showSearchIcon && <Link href="/search" className="relative p-2 shadow-sm rounded-full">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </Link>}
    </div>
  );
}
