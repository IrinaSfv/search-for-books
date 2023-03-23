# Search for books
<div id="stackBadges">
   <img src="https://img.shields.io/badge/-HTML5-red?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5"/>
   <img src="https://img.shields.io/badge/-CSS3-blue?style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS3"/>
   <img src="https://img.shields.io/badge/-JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=white" alt="JavaScript"/>
   <img src="https://img.shields.io/badge/-GIT-orange?style=for-the-badge&logo=Git&logoColor=white" alt="GIT"/>
   <img src="https://img.shields.io/badge/-BEM-black?style=for-the-badge" alt="BEM"/>
   <img src="https://img.shields.io/badge/-NPM-red?style=for-the-badge&logo=NPM&logoColor=white" alt="NPM"/>
   <img src="https://img.shields.io/badge/-React-gray?style=for-the-badge&logo=React&logoColor=lightblue" alt="React"/>
    <img src="https://img.shields.io/badge/-Redux-5920B1.svg?style=for-the-badge&logo=Redux&logoColor=white" alt="Redux"/>
</div>

### Book search app with category and sorting selection.

## Functionality
* The book search is performed by pressing `Enter` or pressing the search button.
* Filtering by categories: _all_, _art_, _biography_, _computers_, _history_, _medical_, _poetry_.
* Sorting by _relevance_ and _newest_.
* Number of books found and the number of books that can be loaded is displayed above the block of cards and above the load button. 
* When loading books the load spinner appears and the text on the load button changes. 
* Pagination is realized by __load more__ principle when user clicks on the button under the loaded cards.

## Pages
* `Home page`: opens by default and this page is redirected to if the user entered a request other than from the home page.
* `Detail page`: when user clicks on a book card they goes to a detailed page of the book. 
* `Page not found`: if book page doesn't exist, user will be redirected to the 404 error page. 

## Tests
[Manual testing of the app was used.](https://docs.google.com/document/d/1Pc-qX6wSruicfRdPr4_ty3Y2hVdYhFeILENBwgtZcM4/edit?usp=sharing)

---

In this project, I've:
* made the page adaptive for different devices from mobile __320px__ to large screens __1920px__, 
* used the BEM methodology working with layout and the Nested file structure,
* organized the storage modularly with ReduxSlice, 
* put all Redux reducers in separate files, 
* followed the security rules and put the API key in the `.env` file. 

## Installation
* Run `GitBash` (or `Terminal` on MacOS);
* Select or create a new repository where you want to put the project;
* Run the command: `git clone https://github.com/IrinaSfv/search-for-books.git`;
* Run the command: `npm install`;
* Open the project with the command: `npm start`.

## Usage
You can view the current version of the page by following the link:
### [Search for books](https://irinasfv.github.io/search-for-books/)

## To-do
* Move the app completely to the `TypeScript`.
* Use `Docker` to run the app in a container.
* Fix the bugs on the client side identified during testing.