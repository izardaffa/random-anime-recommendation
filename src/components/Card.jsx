import Button from "./Button";

function Card() {
  return (
    <div class="card bg-base-100 w-80 md:w-96 shadow-sm">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Spider-Man: No Way Home</h2>
        <p>Status Airing - Total Eps</p>
      </div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
          class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="join">
          <div class="badge bg-red-600 text-red-200 border-none me-2">Type</div>
          <div class="badge bg-yellow-300 text-yellow-800 border-none me-2">Season</div>
          <div class="badge badge-success">Score</div>
        </div>
        <div class="card-actions pt-4">
          <Button>Try Again</Button>
          <a href="#" target="_blank" className="btn btn-soft">See MAL</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
