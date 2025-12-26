// import { fetchfromPopularMovieDB } from "@/app/page";

export default async function Page({
  params,
}: {
  params: Promise<{ movieCategory: string }>;
}) {
  const { movieCategory } = await params;

  console.log(movieCategory);

  // const movies: Movie[] = await fetchfromPopularMovieDB(movieCategory);
  return <div> Category Page{movieCategory}</div>;
}
