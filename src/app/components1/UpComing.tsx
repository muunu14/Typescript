import { SeeMore } from "../components/SeeMore";

export type Movie = {
  title: string;
  star: string;
  vote_average: number;
  poster_path: string;
};

const movieAPI = async () => {
  const responseUpComing = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODQ4ZWU4NWM3ZDVjZmE2YjM3MGE4MGYwMzg0MDQzZCIsIm5iZiI6MTc2NjU2Mjk3Ny4wMzYsInN1YiI6IjY5NGI5Y2ExNGU3NjAwMjk5MTJmY2Q3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uvcVNIIelySHaD7cJG92rOHFcubgUVuARN0PfpTNj0g`,
      },
    }
  );

  const upComingMovies = await responseUpComing.json();

  const upComingMovieResults = upComingMovies.results;

  return { upComingMovieResults };
};

export const UpComing = async () => {
  const {
    upComingMovieResults,
  }: {
    upComingMovieResults: Movie[];
  } = await movieAPI();
  return (
    <div className="w-360 pl-20 pr-20 pt-13">
      <div className="flex justify-between pb-[36px]">
        <p className="font-bold text-2xl">Upcoming</p>
        <SeeMore />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {upComingMovieResults
          .map((info) => (
            <div className="bg-[#F4F4F5] rounded-lg " key={info.title}>
              <img
                src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
                alt=""
                className="h-85 w-[229.73px] rounded-lg"
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
                <p>{info.title}</p>
              </div>
            </div>
          ))
          .slice(0, 10)}
      </div>
    </div>
  );
};
