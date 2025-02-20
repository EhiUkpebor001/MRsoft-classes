/*
    www.geeksforgeeks.org/react/
     
    React is a JavaScript library known for front end development, it is popular due to its component-based architecture, Single Page Applications (SPAs) and Virtual DOM for building web applications that are fast, efficient and scalable.

    VIRTUAL DOM:
        Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
        Hence, it only changes what needs to be changed.
        It also helps with speed.

    DIFFING ALGORITHM: 
        React compares the new Virtual DOM tree with the previous one using its efficient diffing algorithm to identify the minimal set of changes required. 

    
    www.geeksforgeeks.org/what-is-diffing-algorithm/ 
    www.geeksforgeeks.org/reactjs-virtual-dom/ 


    --  Differences between Virtual DOM and Real DOM

        Virtual DOM	                                                        Real DOM
    1.  It is a lightweight copy of the original DOM	            It is a tree representation of HTML elements
    2.  It is maintained by JavaScript libraries	                It is maintained by the browser after parsing HTML elements
    3.  After manipulation it only re-renders changed elements	    After manipulation, it re-render the entire DOM
    4.  Updates are lightweight	                                    Updates are heavyweight
    5.  Performance is fast and UX is optimised	                    Performance is slow and the UX quality is low
    6.  Highly efficient as it performs batch updates	            Less efficient due to re-rendering of DOM after each update


    RENDERING is only done once, but UPDATING STATE is recursive. 
*/

/*
    JSX (JavaScript XML)
        JSX allows you to write HTML-like syntax in JavaScript.
        This:
            const element = <h1>Hello, React!</h1>;
        Is equivalent to:
            const element = React.createElement("h1", null, "Hello, React!");

        JSX converts HTML tags into react elements.
        To use JSX we add the file extension (.jsx) to our filename, instead of (.js or .ts)

    
        RENDERING REACT

        -- ReactDOM is responsible for rendering React components into the actual DOM.
            It has methods like createRoot() and render().
        Example;
            const container = document.getElementById('root');
            const root = ReactDOM.createRoot(container);
            root.render(<p>Hello</p>);

        -- React is the core library used for building UI components and managing state
            It provides 'hooks' like useState, useEffect, etc. and it has alot of 'methods' like createElement(), etc.

        
        -- COMMENTS IN JSX
            This is done inside the curly braces {}

*/