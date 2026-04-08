interface IMovie {
    title: string;
    poster_path: string;
    id: number;
    vote_average: number;
    overview: string;
    release_date: string;
}

/*
    movie.d.ts is formally called a 'TypeScript Declaration File'.

    In the TypeScript world, the .d stands for Declaration.

    These Files are used Strictly for Defining the "Shapes" of Data, 
    Not for Writing Actual Executable Logic.
*/

/*
    In standard .ts or .tsx files, We Write Code that does things (like Fetching Data or 
    Rendering a Hero section). 
    
    In a .d.ts file, We only Declare What Things are.
*/