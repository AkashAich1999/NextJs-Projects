"use client"

import HeroSection from "@/components/HeroSection";
import { API_URL, IMAGE_PATH } from "@/constants";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (query = "") => {
    try {
      const response = await fetch(
        query 
          ? `${API_URL}/search/movie?query=${encodeURIComponent(query)}` 
          : `${API_URL}/discover/movie`, 
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
          },
        },
      );

      const data = await response.json();
      console.log("data :", data);

      setMovies(data.results || []);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies(searchTerm)
    }, 500);

    return () => {
      clearTimeout(timer)
    };
  }, [searchTerm]);

  return (
    <>
      {/* <h1>Movie Box</h1> */}
      <HeroSection
        movies={movies.slice(0, 5)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="flex flex-col m-10 mt-0">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-alabaster mb-3">
            { searchTerm ? `Results for ${searchTerm}` : "Popular Right Now" }
          </h2>
          <p className="text-lg text-santas-gray">
            Explore what everyone is watching
          </p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="group">
              <div className="relative overflow-hidden cursor-pointer group rounded-xl">
                <Image
                  className="group-hover:scale-110 duration-500 h-full w-full object-cover"
                  src={
                    // !movie.poster_path
                    movie.poster_path && movie.poster_path !== "null"
                      ? `${IMAGE_PATH}${movie.poster_path}`
                      : "/placeholder-img.svg"
                  }
                  width={250}
                  height={250}
                  alt={movie.title}
                />

                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 rounded-xl px-2.5 py-1 backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 text-saffron fill-saffron" />
                  <span className="text-sm font-semibold text-white">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>

                <div
                  className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 
                  to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                ></div>

                <div className="absolute bottom-0 left-0 right-0 px-4 opacity-0 group-hover:opacity-100">
                  <p className="line-clamp-5 text-sm text-white">
                    {movie.overview}
                  </p>
                </div>
              </div>

              <div className="mt-3 px-1">
                <h3 className="font-semibold transition-colors group-hover:text-red-500">
                  {movie.title}
                </h3>
                <p className="text-sm text-santas-gray">
                  {movie.release_date?.split("-")[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/*
    1. The Directives and Hooks :

    ● "use client": In Next.js, this tells the Framework that this Component uses Interactivity. 
      Because we are using useState and useEffect, this must be a Client Component.

    ● useState<IMovie[]>([]): This Creates a "Box" to hold our List of Movies.
      ● It starts as an Empty Array [].

      ● It uses the Interface IMovie (which we Defined in our .d.ts file!) to ensure the 
        Data is Shaped Correctly.

    ● useEffect: This is a "Side Effect" Hook.

      It tells the Browser: 
      "As soon as this Page Finishes Loading, Run the Code Inside here. (the Movie Fetch)"
*/

/*
    2. The Data Fetching (fetchMovies) :

    This is the Most Critical Part. It reaches out to the Internet to get our Content:

    ● API_URL: A constant (defined in our constants.ts) that holds the Base Address for the 
      Movie Database.

    ● Authorization: It uses a Bearer Token stored in our .env File to Prove to the API that 
      we are Allowed to Request Data.

    ● setMovies(data.results): Once the API Responds, this line saves that list into our 
      Movies State, which Triggers React to Re-Render the Page with the New Content.
*/

/*
    3. The Layout & Logic :

    ● <HeroSection />: We are importing and displaying the header component we worked on earlier.

    ● .map((movie) => ...): This is a loop. For every single movie in our movies Array, it 
      creates a new <div> on the screen.
*/

/*
    4. Styling (Tailwind) :

    ● grid grid-cols-5 gap-6: This Creates a Responsive Grid Layout. 
      It Divides the Screen into 5 Equal Columns with a 24px Gap Between Each Movie Poster.

    ● text-alabaster & text-santas-gray: These Apply our Custom Branding Colors to the headings.
*/

/*
    accept: "application/json"

    Servers can often Send Data in Different Formats, such as JSON, XML, or even Plain HTML. 
    By Adding this header, we are Explicitly telling the TMDB Server:
    
      "Hey, Please Send me the Movie Data back in JSON Format because that is the 
      Only Language my JavaScript Code knows How to Parse."
*/

/*
    <div className="grid grid-cols-5 gap-6">
      {
        movies.map((movie) => (
          <div key={movie.id} className="group">
            <div>
              <Image 
                className="group-hover:scale-110 duration-500"
                src={
                  movie.poster_path
                    ? `${IMAGE_PATH}${movie.poster_path}`
                    : "/placeholder-img.svg"
                }
                width={250}
                height={250}
                alt={movie.title} 
              />
            </div>  
          </div>  
        ))
      }
    </div>

    This Block of Code is the 'Rendering Logic' for our Movie Library. It takes the Array of Movies 
    We Fetched from the API and Transforms Each Data Object into a Visual "Card" on the Screen.

    1. The Grid Layout (grid grid-cols-5 gap-6) :

       This is the "Wrapper" or Container for All our Movie Cards.

       ● grid: Turns on CSS Grid Layout.

       ● grid-cols-5: Automatically carves the Space into 5 Equal Columns.

       ● gap-6: Adds a 24px Space Between the Cards so they don't touch.


    2. The Dynamic Mapping (movies.map) :

       Since we don't want to manually write code for every single movie, you use .map().

       ● It looks at our Movies Array (e.g., 20 Movies from TMDB).

       ● For Every individual Movie in that List, it Spits out the HTML inside the Parentheses.

       ● key={movie.id}: This is for React’s Internal Performance. 
         It gives Each Card a unique "Fingerprint" so React knows Exactly which One to Update 
         if the Data Changes.


    3. The Hover Effect (group and group-hover) :
       
       This is a clever Tailwind Trick for Animations:

       ● group: We put this on the Parent div. It says, "Keep an eye on this Container."

       ● group-hover:scale-110: This tells the Image to Grow by 10% whenever the User Hovers 
         anywhere inside the Parent "group."

       ● duration-500: Makes the Scaling happen Smoothly over 0.5 Seconds instead of snapping instantly.


    4. Smart Image Loading (Ternary Operator) :

       Inside the src, we have a "Safety Check":

       movie.poster_path ? `${IMAGE_PATH}${movie.poster_path}` : "/placeholder-img.svg"

       ● The Condition: Does this Movie actually have an Image Path from the API ?

       ● If Yes: Combine our Base IMAGE_PATH (the TMDB URL) with the Specific Movie's ID.

       ● If No: Use a local file called placeholder-img.svg. This prevents our app from 
         showing "Broken Image" Icons if a Movie is missing its Poster.
*/