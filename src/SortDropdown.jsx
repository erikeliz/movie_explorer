export default function SortDropdown({ onSort }) {
  return (
    <select id="sort" onChange={(e) => onSort(e.target.value)}>
      <option value="popularity.desc">Popularity (Desc)</option>
      <option value="release_date.desc">Release Date (Desc)</option>
      <option value="release_date.asc">Release Date (Asc)</option>
      <option value="vote_average.desc">Rating (Desc)</option>
      <option value="vote_average.asc">Rating (Asc)</option>
    </select>
  );
}
