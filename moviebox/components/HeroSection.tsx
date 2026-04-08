import { Popcorn, Search } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <header className="relative h-[70vh]">

      <div className="w-5/12 absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        
        <div className="flex items-center justify-center flex-col mb-4 gap-4">

          <div className="flex items-center justify-center bg-red-500 w-14 h-14 rounded-xl shadown-lg mb-4">
            <Popcorn className="h-7 w-7" />
          </div>

          <h1 className="text-7xl font-black tracking-tight">MovieBox</h1>

          <p className="text-2xl tracking-tight font-light text-santas-gray mb-4">
            Discover the most popular movies trending right now.
          </p>

        </div>  

        <div className="relative h-12">
          <Search className="absolute text-santas-gray h-4 w-4 left-3 top-1/2 -translate-y-1/2" />
          <input 
            className="bg-dark-black mb-10 w-full h-full pl-10 pr-10 rounded-xl outline-none border-none" 
            placeholder="Search movies..." />
        </div>

      </div>

      <div className="grid grid-cols-5 gap-1 opacity-60 absolute inset-0">
        {
            Array(5)
              .fill(5)
              .map((_, index) => (
                <div key={index}>
                    <Image 
                      src={`/movie-img/movie-${index + 1}.webp`} 
                      className="w-full h-full object-cover"
                      width={250}
                      height={250}
                      alt="Movies"
                    />
                </div>
              ))
        }
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-woodsmoke via-woodsmoke/80 to-transparent"></div>    

      <div className="absolute inset-0 bg-linear-to-t from-woodsmoke/90 via-transparent to-woodsmoke/90"></div>

    </header>
  );
};

export default HeroSection;

/*
    <div className="grid grid-cols-5 gap-1 opacity-60 absolute inset-0">
      {
        Array(5)
          .fill(5)
          .map((_, index) => (
            <div key={index}>
                <Image 
                  src={`/movie-img/movie-${index + 1}.webp`} 
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                  alt="Movies"
                />
            </div>
          ))
      }
    </div>

    1. The Positioning: absolute inset-0
       
       These 2 Tailwind Classes are the most important for the layout:

       ● absolute: This Removes the Grid from the normal Document Flow and lets it "float" on Top of (or Behind) 
         other Elements.

       ● inset-0: This is a shortcut for top: 0; right: 0; bottom: 0; left: 0;. 
         It forces the Grid to Stretch and Perfectly Cover the Entire Area of its Closest Relative Parent.
         
    2. The Grid Structure: grid grid-cols-5
    
       ● grid-cols-5: It Splits the available Width into 5 Equal Columns.

       ● gap-1: Adds a very tiny (4px) Space Between the Images, Creating a clean "tiled" look.

       ● opacity-60: Fades the Images to 60% Visibility. This ensures that any text we place on top 
         of this grid remains Readable. 

    3. The "Pseudo-Array" Loop
       
       Since we don't have a List of Movie Data yet, we are Creating a "dummy" Array to Loop through:

         Array(5).fill(5).map((_, index) => ( ... ))

       ● Array(5): Creates 5 Empty Slots.
         [empty, empty, empty, empty, empty]   

         Important:
         ● These are Not Real Values.
         ● We Cannot Map Properly yet.

       ● .fill(5): Puts a Value in them so the .map() Function can actually see them.
         Fills all positions with 5.
         [5, 5, 5, 5, 5]

       ● index: This provides the numbers 0, 1, 2, 3, 4 automatically. 
         Loops over Each Element.
         
         Parameters:
         ● _ → value (We don’t care about it)
         ● index → position (0, 1, 2, 3, 4)

    4. Dynamic Image Paths:
       
       src={`/movie-img/movie-${index + 1}.webp`}

       This is a Template Literal. Instead of typing out 5 Different Image Tags, this Logic handles it 
       for us:

       1. Loop 1 (index 0) → movie-1.webp
       2. Loop 2 (index 1) → movie-2.webp
       3. ...and so on.

    5. Styling the Images:
       ● w-full h-full: Forces the Image to Expand to the Full Size of its Specific Grid Cell.

       ● object-cover: Prevents the Movie Posters from looking Stretched or Squashed 
         if the Grid Cells Change Size on Different Screens.   

       The Problem  'object-cover'  solves is  'Image Distortion'  and  'Aspect Ratio Mismatch'.
       
       Without it, When we force an Image to Fit into a Specific Width and Height (like our 250x250 Grid Cells), 
       the Browser will "Squish" or "Stretch" the Image to make it Fit those Exact Dimensions.

       1. The "Squished" Image Problem :
          Most Movie Posters or Landscape Shots are Not Perfect Squares.

          If we have a Vertical Poster but tell the Browser to make it a Square w-full h-full, 
          the Browser will Flatten the Image.

          Characters will look Wider or Shorter than they Actually are. 
          This looks Unprofessional and "Broken."

       2. How object-cover Fixes It :
          object-cover tells the Browser:

          "Keep the Image's Original Proportions. Resize it Until it is Large enough to Cover the Entire Box. 
          If Parts of the Image don't Fit, just Crop Them Off the Edges."

          It works exactly like   background-size: cover   in Traditional CSS.   
*/

/*
    <header className="relative h-[70vh]">

    This Line of Code Defines the Outer Container for our Page's Top Section (the Hero or Header). 

    1. header: This is a Semantic HTML5 tag.

       ● Purpose: It tells Search Engines (like Google) and Screen Readers that this Section contains 
         the Introductory Content or Navigation for the Page.

       ● SEO Benefit: Using <header> instead of a generic <div> helps our website rank better and is 
         more accessible to Users with disabilities.

    2. relative:
       This is a Positioning Class.

       The "Anchor": By Setting the header to relative, it becomes the "Anchor" for Any Children 
       inside it that use absolute.

       Connection to our Grid: Remember that Grid we discussed with absolute inset-0 ? 
       Because this Parent is relative, the Grid will stay inside this header. 
       Without it, the Grid would fly off and cover the entire website.

    3. h-[70vh]:
       This is a Dynamic Height class using Tailwind's "Arbitrary Value" syntax.

       ● h-: Sets the Height.

       ● vh (Viewport Height): This is a Unit based on the User's Screen Size. 
         100vh is the Full Height of the Screen.

       ● 70vh: This tells the header to always take up exactly 70% of the Visible Screen Height, 
         regardless of Whether the User is on a giant monitor or a small iPhone.
*/

/*
    This Code Creates a Floating, Centered Branding Element that Sits on Top of our Background Images. 
    
    It uses a very Common and Robust CSS Pattern for "Dead Centering" an Element.
*/

/*
    1. The Centering Container (Outer div) :

       This is the "Magic Formula" for Centering an absolute Element Perfectly :

       ● absolute: Takes the Element out of the Normal Document Flow so it can Overlap the 
         Background Grid we Built earlier.

       ● z-10: Ensures this Content sits on Top of the Background (which usually has a Lower z-index 
         or Lower opacity).

       ● w-5/12: Sets the width to roughly 41.6% of the Parent Container.

       ● top-1/2 left-1/2: Moves the Top-Left Corner of this Box to the Exact Center of the Parent.

       ● -translate-y-1/2 -translate-x-1/2: Since top-1/2 moves the Corner to the Center, these "translate"
          classes Pull the Box Back by Half of its Own Width and Height. This ensures the Center of the Box 
          is at the Center of the Screen. 


    2. The Vertical Layout :

       ● flex flex-col: Uses Flexbox to Stack its Children (the Icon, and likely Text we'll add later) 
         in a Vertical Column.

       ● items-center justify-center: Centers everything inside this Column both Horizontally and Vertically.

       ● gap-4: Adds a Consistent 16px Space Between Items in the Stack.


    3. The Icon Box (The Red Square) :
       
       ● w-14 h-14: Creates a fixed square size (56px by 56px).
       

    4. The Icon Component :

       <Popcorn className="h-7 w-7" />

       ● Popcorn: An SVG Icon (likely from the lucide-react Library).

       ● h-7 w-7: Resizes the Icon to 28px. Because the Red Box is 56px, this Icon takes up Exactly 
         Half the Space, Leaving a nice Even Padding of 14px on All Sides.
*/

/*
    <h1 className="text-7xl font-black tracking-tight">
      MovieBox
    </h1>

    1. text-7xl (Font Size) :

       ● CSS Equivalent: font-size: 4.5rem;

       ● Pixel Equivalent: 72px (Assuming the Base font is 16px).

       ● Purpose: It ensures the title is the Most Prominent Visual Element in our Hero Section.


    2. font-black (Font Weight) :

       This sets the "Thickness" or Weight of the Letters.

       ● CSS Equivalent: font-weight: 900;

       ● Scale: It is even Thicker than font-bold (700).

       ● Purpose: It gives the "MovieBox" name a Heavy, Cinematic, and Authoritative feel.


    3. tracking-tight (Letter Spacing) :

       "Tracking" is the Professional Typography Term for the Space Between Characters.

       ● CSS Equivalent: letter-spacing: -0.025em;

       ● Effect: It pulls the letters slightly closer together.

       ● Purpose: When text is very large and bold (like 7xl black), the natural gaps between letters can look Too Wide. 
         Tightening the Space makes the Word look more Cohesive and Modern, often used in Premium Branding.
*/

/*
    This Code Creates a Search Bar with an Internal Icon. 
    
    It uses a very Common UI Pattern where an Icon is "absolutely" Positioned inside a 
    "relative" Container to make it look like it's Sitting inside the input Field.

      <div className="relative h-12">
        <Search className="absolute text-santas-gray h-4 w-4 left-3 top-1/2 -translate-y-1/2" />
        <input 
          className="bg-dark-black mb-10 w-full h-full pl-10 pr-10 rounded-xl outline-none border-none" 
          placeholder="Search movies..."
        />
      </div>
*/
/*
    left-3 top-1/2 -translate-y-1/2

    These 3 Classes are the Standard Tailwind CSS "recipe" for Perfectly Centering an Element Vertically 
    inside its Parent.

    1. left-3 (Horizontal Offset) :
       ● Action: Pushes the Element 12px (3 * 4px) Away from the Left Edge of the Container.
       ● Purpose: This Provides "Breathing Room" so our Icon doesn't touch the very Edge of the Box.

    2. top-1/2 (Initial Vertical Move) :
       ● Action: Moves the Top Edge of the Element to Exactly 50% of the Parent's Height.
       ● Problem: If we Stop here, the Icon will look Too Low because its Top is at the Center, 
         Rather than its Middle. 

    3. -translate-y-1/2 (The Correction) :
       ● Action: Shifts the Element Upwards by Exactly 50% of its Own Height.
       ● Purpose: This Corrects the "Top-Heavy" look from the Previous Step. 
         By Pulling it Back Up by Half its Own Size, the Visual Center of the Icon now Aligns Perfectly 
         with the Actual Center of the Parent.
*/

/*
    <div className="absolute inset-0 bg-linear-to-t from-woodsmoke via-woodsmoke/80 to-transparent"></div>

    <div className="absolute inset-0 bg-linear-to-t from-woodsmoke/90 via-transparent to-woodsmoke/90"></div>
 
    These 2 Lines of Code Create Overlay Gradients.
    
    They are used to Darken or "Fade" our Background Images so that the White Text and Icons on Top remain Easy to Read.

    Without these, our White Text would likely Get "lost" against Bright Parts of the Movie Posters.
*/
/*
      Layer 1: The Bottom-to-Top Fade
      
      <div className="absolute inset-0 bg-linear-to-t from-woodsmoke via-woodsmoke/80 to-transparent"></div>

      ● absolute inset-0: Stretches this "Blank" div to Cover the Entire Background Area Perfectly.

      ● bg-linear-to-t: Creates a Linear Gradient that Flows to the Top (Starting from the Bottom).

      ● from-woodsmoke: The Bottom is Solid "Woodsmoke" (likely a very Dark Gray/Black).
    
      ● via-woodsmoke/80: In the Middle, it becomes 80% Opaque.
    
      ● to-transparent: By the time it reaches the Top, the Color Disappears Completely.
    
      Result: This makes the Bottom of our Screen Darker.  


      Layer 2: The "Vignette" or Double-Fade
      
      <div className="absolute inset-0 bg-linear-to-t from-woodsmoke/90 via-transparent to-woodsmoke/90"></div>

      ● from-woodsmoke/90: Starts Very Dark (90% Opacity) at the Bottom.

      ● via-transparent: Becomes Completely Clear in the Dead Center of the Screen.

      ● to-woodsmoke/90: Becomes Very Dark again at the Top.

      Result: This Creates a "Sandwich" Effect. It Darkens Both the Top and the Bottom of the Image 
      while Leaving the Middle Clear. This Focuses the User's Eye on the Center of the Screen where 
      our Popcorn Icon and "MovieBox" Title are Located.
*/