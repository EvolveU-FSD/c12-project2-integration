# Project 2 Integration
Today we will be working with the superhero registry application. Tony has assured everyone that he has it working on his local machine, but he went on vacation and forgot to check most of it in. Seeing as the demo is next week, it is now your job to redo his work and get something working.

Remember that you will need two terminal windows (and a browser) to run this project.

## Terminal 1 - the server

```
cd server
npm install
npm start
```

## Terminal 2 - the client

```
cd client
npm install
npm run dev
```

And point your browser at localhost:5173 to get started.

# Getting started

 You are finished the setup if the following things happen:

 1. When you run `node server/superheroes/listSuperheroes.js` you get Superman

1. With the server running, when you run `curl http://localhost:3000/api/superheroes` you get Superman

2. With the client development environment running, when you open "http://localhost:5173" you get a stylish blue screen that lists Spiderman.

3. When you click on the "Create New" button, you get a log message in your browser console "Go to creation screen here"

## Your todo list

The rest of this document introduces exercises to do with this repository.  

### 1. MongoDB (using compass)
In your local server, create a database called c12Integration, put one collection in it called superheroes.  Create several documents with the following fields:

 - name: contains the name of your superhero 
 - costume: some details about their costume
 - superPower: a comma separated list of superpowers
### 2. Mongoose
The file`server/superheroes/superheroes.js` is used to read (and eventually write) our superhero database.  Your job is to add the mongoose model for the superheroes collection and fill out the implementation of `getAllHeroes` to use the model to retrieve your the superheroes from the mongo collection.

Conveniently, the program `listSuperheroes.js` will call `getAllHeroes` and print the result, so you know you are done this task when you can run `listSuperheroes` and you see the contents of your collection.

### 3. Express Endpoints
The file 	`superheroesController.js` already is hooked up to use our `superheroes.js` data access functions.  Once you are complete step 2, you should notice that `curl http://localhost:3000/api/superheroes` is now returning data from your collection.  You are ready to choose your next move - do you want to:
1. stay with the server and practice hooking up endpoints to data?  If so head to section 4.
1. move to the front end? if so head to section 

### 4. The Server Stack 
Fill out the implementation of `getHeroById`.  There is no program to test getHeroById, but you can already use curl to test it.

### 4.2 Add a superhero (command line script)
Create the function in `superheroes.js` that actually adds a superhero into the collection with the fields name, costume, and superPower.  To test it write a program called `createSuperhero` that works similarly to `listSuperheroes`, except you will hard-code the field values.

(Advanced note - if you are up for it,  feel free to use command line parameters to get the values for name, costume and superPower)

### 4.3 Add a superhero (endpoint)
This can wait until you implement front end for  it, however if you want to keep going building and testing server components - 
 
Create an endpoint in the `superheroController.js` that  accepts a "post" with a body that has the same fields that are expected in the schema for a superhero.  Call the function from 4.2 to actually insert the superhero.  Test the endpoint using postman, or for the adventurous, using `curl.`
 
 ### 5. Client
The app goes straight to the `AllSuperHeroesPage` component.  The component already calls into `api.js` to "fetch" superheroes, but the call is hooked to sample data and not the actual API.  Your first job in the client is to hook up the API to call `/api/superheroes`.

You know you are done when the heroes from your collection appear in the front end.  You are now working FULL STACK!

### 5.1 Client - Superhero detail
When the user selects a superhero from the list, we want to go to a superhero detail page.  Here are some steps that will get you there.

First we need to allow the user to select a hero:
1. create some state called "selectedHero" in `App.jsx`
2. In `App.jsx`, add a div after the AllSuperheroesPage that shows the current value of the "selectedHero" 
3. pass "setSelectedHero" down to `AllSuperheroesPage`
4. pass "setSelectedHero" down into `HeroRow`as a prop
5. use "setSelectedHero" in an "onClick" handler to set the selected hero when the main div in the `HeroRow` is clicked. 
6. Test that your hero is changing when you click on it by watching the values change on the the main screen.

Then we need a page to show the user:
1. create a `SuperheroDetailPage.jsx` file that only returns an .h1 tag.
1. add this component to `App.jsx` so you see it
1. pass the "selectedHero" as a prop to `SuperheroDetailPage`
1. add divs for the name, costume, superPower
1. verify the values are visible and changing when you select a hero from the list 
1. only show the `SuperheroDetailPage` when there is a selectedHero
1. finally hide the `AllSuperheroesPage` when there is a selectedHero
1. style the page, stick with the blue and white theme.
 
 ### 5.2 Client - Superhero detail with the router
Now try to use react router to manage which page is visible instead of using the "selectedHero" state.  You want to create two routes:
- `/list` that shows the `AllSuperheroesPage`
- `/detail/:id that shows the SuperheroDetailPage`

A few tips:

Installing the router will be easier if you start with the /list endpoint.  

Remember to switch the onClick handler to call the router. Once that is done then you can remove the "selectedHero" state and undo the drilling of the "setSelectedHero".

You will need to install a "useEffect" on the `SuperheroDetailPage` to fetch the hero's detail using the route parameter id .  Note the api method already exists but is not hooked up to the express endpoint.  The endpoint itself will return superman unless you did the introduction to section 4 - so you probably want to go back and try that now.

### 6 Full stack - delete a superhero
On the `SuperheroDetailPage` add a delete button (with a confirm).  When it is confirmed, delete the user and return to the list page.  

This is a full stack exercise that will require to you create functions in all layers of the application:
- `SuperheroDetailPage.jsx` needs an onClick handler to call into API then change the route to the list page.
- `api.js` needs a function to call express (using the delete verb)
- `superheroesController.js` needs an endpoint that will call into...
- `superheroes.js` which needs a function that uses mongoose to delete the document. 
- 
Tips:
Working back-to-front can help a lot.  Start with superheros.js (and create a program `deleteSuperhero` if you want to test it first).  Then the endpoint (test with `curl`) then the api call hooked up in the front end.

If you want to work front-to-back then use "console.log" messages at each layer to test that the calls are making it down before implementing that layer.

### 7 Full stack - add a superhero
When the "Create New" button on `AllSuperheroesPage`  is clicked - go ahead and create a new superhero!

This is a full stack exercise that will require to you create functions in all layers of the application:
- `AllSuperheroesPage.jsx` needs an onClick handler that changes the route to the create page
- a new page `CreateSuperheroPage` needs to exist
- this new page needs to have a route to get to it.
- the new page needs inputs for the three fields, and a save button that calls into api when it is clicked.
- `api.js` needs a function to call express (using the post verb)
- `superheroesController.js` needs an endpoint that will call into...
- `superheroes.js` which needs a function that uses mongoose to create the document. 
- 
Tips:
Exercise 4.3 is the back end for this task.  Do that first and you can focus on the front end.
