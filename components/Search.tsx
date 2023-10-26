"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchForm({ query }: { query: string | undefined }) {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(query);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
  }, []);

  const onSearch = () => {
    if (!text) {
      router.push(`/pokemon`);
    } else {
      router.push(`/pokemon?search=${text}`);
    }
  };

  return (
    <div className="w-full rounded-lg p-4 border-blue-500 border-2 flex flex-row justify-between items-center">
      <div className="flex flex-row items-center flex-1">
        <Search className="text-blue-500 hidden md:block" size={24} />
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Search here..."
          className="outline-none  md:ml-4 w-full flex-1 bg-transparent placeholder:text-sm placeholder:md:text-base"
        />
      </div>
      <Button
        className="bg-[#FFCB03] text-blue-600 px-8 text-[10px] md:text-sm hover:bg-[#FFCB03]"
        onClick={onSearch}
      >
        Search
      </Button>
    </div>
  );
}
