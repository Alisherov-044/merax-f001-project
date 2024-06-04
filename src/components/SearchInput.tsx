import { useRef } from "react";
import { Button, Icons } from "@/components";
import { SearchInputProps } from "@/types";

export function SearchInput({ placeholder, onSubmit }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function submitAndClear() {
    onSubmit(inputRef.current?.value ?? "");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="flex items-stretch shadow rounded-md">
      <input
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        className="w-[625px] py-3 px-6 border border-white border-r-0 rounded-md rounded-r-none focus:border-primary"
      />
      <Button
        onClick={submitAndClear}
        className="flex items-center gap-x-2 rounded-l-none h-auto px-8"
      >
        <Icons.search />
        <span>Search</span>
      </Button>
    </div>
  );
}
