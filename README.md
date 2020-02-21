# Great Britain - Olympics


<br>


## Description

Your team has been hired by the Olympic Committee of your country to promote your national sports teams for the 2020 Olympics Games.  

Each team represents a country; countries are: USA, France, Germany, Great Britain, Italy and Canada. 

Since the Olympics are just around the corner, your country wants your team to highlight the best sport, players, etc... and to promote your national sports teams, showing how they have evolved over time in terms of participation, sports, gender, etc. supported by visual storytelling in a well-designed app.



<br>

## Visitor Stories

- **404** - As a visitor I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a visitor I want to see a nice error page when the super team screws it up so that I know that is not my fault.
- **homepage** - As a visitor I want to be able to access the homepage and input my post code to check out the meals events happening near me, I also want to log in and sign up.
- **side-page1** - As a visitor I want to see the list of the events, filter by near location and attend them.
- **side-page2** - As a visitor I want to be able to create a new event and add information for the event.


<br>



## API Routes (Back-end):



| **Method** | **Route**| **Description**|
|---|---|---|                             
| `GET`      | `/`  | Main page route.  Renders home `index` view. 

| `GET`      | `/side-page1`  | Renders `auth-views/login` form view.              
| `POST`     | `/????`  | Sends Login form data to the server. Redirects to the `show-all` view (url: /side-page1).        

| `GET`      | `/side-page2` | Renders `auth-views/signup` form view.             
| `POST`     | `/???` | Sends Sign Up info to the server and creates user in the DB. Redirects to the `??/??` view (url: /side-page2).





## Models

User model

```javascript
{
  name: {type: String, required: true} ,
  email: {type: String, required: true} ,
  password: {type: String, required: true},
  address: {
    street: {type: String, required: true},
    zipcode: {type: String, required: true},
    houseNumber: {type: String, required: true},
    city: {type: String, required: true} 
},
  description: {type: String, required: true},
  profileImg: {type: String, required: true},
  score: {type: Number},
  hostedEvents: [{  type: mongoose.Schema.Types.ObjectId, ref: "MealEvent"}],
  pendingEvents: [{  type: mongoose.Schema.Types.ObjectId, ref: "MealEvent"}],
  attendedEvents: [{  type: mongoose.Schema.Types.ObjectId, ref: "MealEvent"}], // attending events 
  reviews: {type: Array},
}
```

<br>



## Backlog
- Add reviews to the users



<br>



## Links

[See the Notion board.](https://www.notion.so/Brief-b1200945b321458d8a1b24fd3baba644)

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Fiend-Shadow/IH-olympics)

[Deploy Link](https://olympics-iron-hack.herokuapp.com/)
[Json Server Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1ku8A8kzztqrPfKur33d2Mwgs0AMCRKcj-UqJ3_Lhre8/edit#slide=id.p)