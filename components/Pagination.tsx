"use client"

import { Button } from "@/components/ui/button";

export default function Pagination() {
  return (
    <div className="flex flex-row mt-4 gap-4">
      <Button className="bg-transparent text-[#FFCB03] border-[#FFCB03] border-2 px-8 text-sm hover:bg-transparent">
        Prev Page
      </Button>
      <Button className="bg-[#FFCB03] text-blue-600 px-8 text-sm hover:bg-[#FFCB03]">
        Next Page
      </Button>
    </div>
  );
}
