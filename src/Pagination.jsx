export default function Pagination({ currentPage, onPrev, onNext }) {
  return (
    <div id="pagination">
      <button onClick={onPrev} disabled={currentPage === 1}>Prev</button>
      <span id="page-number">Page {currentPage}</span>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
