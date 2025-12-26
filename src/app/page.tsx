import { MovieCard } from "./components1/MovieCard";

export default function Home() {
  return (
    <div className="flex items-center flex-col pt-[52px]">
      <img className="w-full h-[600px]" src="scroll.png" alt="" />
      <MovieCard />
    </div>
  );
}
// export type Movie = {
//   title: string;
//   poster: string;
//   rating: number;
//   id: string;
//   backdrop_path: string;
//   poster_path: string;
// };
// export const fetchgfromPopularMovieDB = async(category:string);s
// const fetchfromPopularMovieDB = async () => {
//   const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}`,
//     },
//   });
// conts data =await response.json()
// return data.results;
// };
