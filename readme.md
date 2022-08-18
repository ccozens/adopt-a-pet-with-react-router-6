# Adopt-a-pet with react router 6

This is the final project from [codeacademy's React Router course](https://www.codecademy.com/learn/learn-react-router]. The course is written for React Router v5, and includes a few warnings that it won't work if you install React Router 6. Having refactored the previous tutorial into React Router 6, I carried out this project with React Router 6.

I've listed out the main differences between what I did and the actual tutorial. Please:

* flag any mistakes/anything unclear.  
* let me know if you'd like to see, or would like to help me, flesh this out into a full tutorial.
* note the tests won't work as I've not touched them. Intend to update I've done the testing module.

# Main differences

## Step 1
Run `npm install react-router-dom`.  

This installs the most recent version of React Router, whereas the provided command 
`npm install --save react-router-dom@5.2.0` installs specifically v5.2.0. Note the `--save` flag was deprecated in npm v5 (current version at time of writing is v8.18), and isn't necessary.

## Step 4
Import `Route` and `Routes` from `react-router-dom`.

## Step 5
Updated Route syntax:  `<Route path=":type/*" element={<HomePage />} />`  

* `:type`sets ‘type’ as a param so it can be grabbed by useParams.  
* `*` enables rendering of child links

## Step 6
**to look into**  
This may have been simplified by React Router 6's relative link syntax. Converseley, I found I had to add the home link twice (once with `'/'` only, and once as step 5, as trailing `?` to make parameter optional not available in React Router 6.  
At this point, *App.js* looks like this:

	import HomePage from './pages/home';
	import SearchPage from './pages/search';
	import PetDetailsPage from './pages/detail';
	import PetDetailsNotFound from './pages/petDetailsNotFound';
	import Navigation from './components/navigation';
	import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
	
	function App() {
	  return (
	    <Router>
	      <div>
	          <Navigation />
	        <Routes>
	            <Route path="/" element={<HomePage />} />
	            <Route path=":type/*" element={<HomePage />} />
	        </Routes>
	      </div>
	    </Router>
	  );
	}
	
	export default App;

## Step 9
Note to self: [from the docs](https://reactrouter.com/docs/en/v6/components/nav-link). A ``<NavLink>`` is a special kind of ``<Link>`` that knows whether or not it is "active".

## Step 10
I replaced the style class with ternary operator from the example [in the docs](https://reactrouter.com/docs/en/v6/components/nav-link).

## Step 14
I ignored this step as didn't have the problem it mentioned.

## Step 16
`useHistory()` is deprecated - [docs on switching to `useNavigate()`](https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory).  

	import React, { useRef } from 'react';
	// import useNavigate here.
	import { useNavigate } from 'react-router-dom';
	
	const Search = () => {
	
	  // get the navigate object here
	  const navigate = useNavigate();
	  const searchInputRef = useRef();
	
	  const onSearchHandler = (e) => {
	    e.preventDefault();
	
	    const searchQuery = new URLSearchParams({
	      name: searchInputRef.current.value
	    }).toString();
	
	    // imperatively redirect with navigate
	    navigate(`/search?${searchQuery}`);
	
	  };
	
	  return (
	    <form onSubmit={onSearchHandler} className="search-form">
	      <input type="text" className="search" ref={searchInputRef} />
	      <button type="submit" className="search-button">
	        🔎
	      </button>
	    </form>
	  );
	};
	
	export default Search;
	
## Step 26
Again, `useHistory()` deprecated, so import and use `useNavigate()` as [per the docs](https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory).



