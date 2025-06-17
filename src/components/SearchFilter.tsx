type SearchFilterProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
};

export default function SearchFilter({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}: SearchFilterProps) {
  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border p-2 rounded flex-grow"
      />

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="all">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}