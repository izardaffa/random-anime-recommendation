import Button from "./Button";

function Card({ anime, onClick }) {
  return (
    <div class="card bg-base-100 w-80 md:w-96 shadow-sm">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{anime.title ?? 'N/A'}</h2>
        <p>{anime.status ?? 'Status Airing'} - {anime.episodes ?? 'N/A'} Episode</p>
      </div>
      <figure>
        <img
          src={anime.images.webp.image_url ?? '/no-img.png'}
          alt={`${anime.title ?? 'N/A'} Poster`}
          class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <p className="max-h-36 overflow-y-auto">
          {anime.synopsis ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, corporis cum at aspernatur atque rerum tempora laboriosam harum earum quo, aut recusandae! Laborum ea architecto earum minus illum ducimus blanditiis.'}
        </p>
        <div className="join">
          <div class="badge badge-error me-2">{anime.type ?? 'N/A'}</div>
          <div class="badge badge-accent me-2 capitalize">{anime.season ?? 'N/A'}</div>
          <div class="badge badge-success">{anime.score ?? 'N/A'}</div>
        </div>
        <div class="card-actions pt-4">
          <Button onClick={onClick}>Try Again</Button>
          <a href={anime.url ?? '#'} target="_blank" className="btn btn-soft">See MAL</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
