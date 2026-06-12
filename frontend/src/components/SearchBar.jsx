import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="hidden md:flex items-center gap-2 w-[360px] h-10 bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg px-3">
      <Search size={16} className="text-[#6b7280]" />
      <input
        type="text"
        placeholder="Search campaigns, reports, tools..."
        className="bg-transparent outline-none text-sm w-full text-[#111827] placeholder:text-[#9ca3af]"
      />
    </div>
  );
}

export default SearchBar;