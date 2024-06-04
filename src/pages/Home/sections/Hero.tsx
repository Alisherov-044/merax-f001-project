import { SearchInput } from "@/components";

export function HeroSection() {
  function onSearch(query: string) {
    console.log(query);
  }

  return (
    <section className="hidden lg:flex items-center justify-center w-full h-screen bg-[url('/background.webp')] bg-cover bg-center">
      <div className="flex flex-col items-center gap-y-10">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
          Groceries Delivered in 90 Minute
        </h1>
        <p className="text-sm xl:text-lg">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>
        <SearchInput
          placeholder="Search your products from here"
          onSubmit={onSearch}
        />
      </div>
    </section>
  );
}
