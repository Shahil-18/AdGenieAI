import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="hidden md:flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-2xl w-[360px]">
      <Search size={18} className="text-slate-500" />
      <input
        type="text"
        placeholder="Search campaigns, tools, profile..."
        className="bg-transparent outline-none w-full text-sm"
      />
    </div>
  );
}

export default SearchBar;