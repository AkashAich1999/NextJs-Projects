### Project 1: MovieBox

<hr />

A sleek, high-performance ```movie discovery``` application built with ```Next.js 16```, ```Tailwind CSS```, and the ```TMDB API```.   
  
MovieBox allows users to ```explore``` ```trending films``` and ```search``` for their favorites with a seamless, responsive interface.  

<hr />

#### Tech Stack:  

● Framework: ```Next.js 16``` (App Router) 

● Styling: ```Tailwind CSS```  

● Icons: ```Lucide React```  

● API: ```The Movie Database``` (```TMDB```)  
  
<hr />


### Features:  
● Real-Time Search: ```Optimized``` ```Search Functionality``` with ```Debouncing (500ms)``` to ```Reduce``` ```API Overhead```.  

● Dynamic Hero Section: A cinematic ```Header``` featuring a ```Movie Grid``` ```Background``` and Integrated ```Search Bar```.  

● Interactive Movie Cards: ```Styled cards``` with ```hover effects```, including ```image scaling``` and an ```overview overlay```.  

● Responsive Grid: A fluid layout that adapts perfectly from mobile to ultra-wide screens.  

● Robust Error Handling: ```Custom logic``` to handle ```Missing API data``` (null poster paths) with ```high-quality``` ```placeholders```.  

● Modern UI/UX: Built with a ```"dark mode"``` ```aesthetic``` using ```custom colors``` like ```woodsmoke```, ```alabaster```, and ```saffron```.

<hr />

### 1.1. Home Screen :
![1_2](https://github.com/user-attachments/assets/6cc8bbda-8071-46bc-8f0c-60b542d5f324)


### 1.2. Search Specific Movie :  
![3_4](https://github.com/user-attachments/assets/c66a48a3-06f4-4d73-a869-3660ea4f1fea)  

<hr />  
  
#### Technical Highlights:

#### Debounced Search Logic:
To ensure a ```Smooth``` ```User Experience``` and stay within ```API Rate Limits```, I implemented a ```Custom``` ```Debouncing Hook``` within ```useEffect```. This ensures that the ```API``` is only called after the ```User``` has ```Stopped Typing``` for ```500ms```.

#### Image Fallback Strategy:
```API Data``` isn't always perfect. MovieBox uses a dual-layer fallback strategy:  
1. Logical Check: Validates ```poster_path``` presence and ```non-null``` values before requesting the image.
2. UI Resilience: Provides a ```local``` ```SVG Placeholder``` for a consistent ```Grid``` look even when data is missing.
