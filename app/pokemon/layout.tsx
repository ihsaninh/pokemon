import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="container max-w-5xl mx-auto p-10">
      <Header />
      <main className="mt-12">{children}</main>
      <Toaster />
    </div>
  );
}
