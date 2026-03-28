const IMG_URL = "https://image.tmdb.org/t/p/w300";

export default function MovieCard({ movie }) {
  const { title, poster_path, vote_average, release_date } = movie;

  return (
    <div className="MoviePoster">
      <img
        src={poster_path ? IMG_URL + poster_path : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={title}
      />
      <div>
        <p><b>Title: {title}</b></p>
        <p>Release Date: {release_date}</p>
        <p>Rating: {vote_average}</p>
      </div>
    </div>
  );
}
