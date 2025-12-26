import { SeeMore } from "../components/SeeMore";

export type Movie = {
  title: string;
  star: string;
  vote_average: number;
  poster_path: string;
};

const movieAPI = async () => {
  const responseTopRated = await fetch(
    "https://api.themoviedb.org/3//movie/top_rated?language=en-US&page=1",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzZjN2ZmY2Q2OGI2NmFhZmJiM2NkYTBjMjg5M2M0NCIsIm5iZiI6MTc2NjQ2MTMxNS4xMjUsInN1YiI6IjY5NGEwZjgzZjBmMGUxOWI3NzJmYzYyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._lMpx9W2VUT93iuHWsRtW2lm5M1jDD4tC3MMlU0CyWQ`,
      },
    }
  );

  const topRatedgMovies = await responseTopRated.json();

  const topRatedMovieResults = topRatedgMovies.results;

  return { topRatedMovieResults };
};

export const TopRated = async () => {
  const {
    topRatedMovieResults,
  }: {
    topRatedMovieResults: Movie[];
  } = await movieAPI();
  return (
    <div className="w-360 pl-20 pr-20 pt-13">
      <div className="flex justify-between pb-[36px]">
        <p className="font-bold text-2xl">Top Rated</p>
        <SeeMore />
      </div>
      <div className="flex flex-wrap justify-center gap-8 pb-[51px]">
        {topRatedMovieResults
          .map((info) => (
            <div className="bg-[#F4F4F5] rounded-lg " key={info.title}>
              <img
                src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
                alt=""
                className="h-85 w-[229.73px] rounded-lg "
              />
              <p className="flex items-center pt-2 pl-2 gap-[5.33px]">
                <img
                  src="star.png"
                  alt=""
                  className="h-4 w-4 flex justify-center items-center"
                />
                {info.vote_average.toFixed(1)}
                /10
              </p>
              <div className="w-[213.73px] h-[95px] pt-2 pl-2">
                <p className="w-57">{info.title}</p>
              </div>
            </div>
          ))
          .slice(0, 10)}
      </div>
    </div>
  );
};
