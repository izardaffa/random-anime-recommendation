import Button from "./Button";

function Card({ anime, onClick }) {
  return (
    <div className="card bg-base-100 w-80 md:w-96 shadow-sm">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{anime.title ?? "N/A"}</h2>
        <p>
          {anime.status ?? "Status Airing"} - {anime.episodes ?? "N/A"} Episode
        </p>

        <figure>
          <img
            src={anime.images.webp.image_url ?? "/no-img.png"}
            alt={`${anime.title ?? "N/A"} Poster`}
            className="rounded-xl py-1"
          />
        </figure>

        <p className="max-h-36 overflow-y-auto">{anime.synopsis ?? "N/A"}</p>
        <div className="join">
          <div className="badge badge-error me-2">{anime.type ?? "N/A"}</div>
          <div className="badge badge-accent me-2">
            {anime.season ? (
              <span className="capitalize">{`${anime.season ?? "N/A"} ${
                anime.year ?? "N/A"
              }`}</span>
            ) : (
              "N/A"
            )}
          </div>
          <div className="badge badge-success">{anime.score ?? "N/A"}</div>
        </div>
        <div className="card-actions pt-4">
          <Button onClick={onClick}>Try Again</Button>
          <a href={anime.url ?? "#"} target="_blank" className="btn btn-soft">
            See MAL
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
