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
- **homepage** - As a visitor I want to be able to access the homepage and get a basic idea of what the website is all about
- **side-page1 - Athletes** - As a visitor I want to see the top athletes and their information.
- **side-page2 - History** - As a visitor I want to be able to see the historical data in visual presentation.
<br>
## API Routes (Back-end):
| **Method** | **Route**| **Description**|
|---|---|---|                             
| `GET`      | `/`  | Main page route.  Renders home `index` view. 
| `GET`      | `/side-page1`  | Renders `side-page1` form view.              
| `GET`      | `/side-page2` | Renders `side-page2` form view.             
## Models
Athletes model
```javascript
{
  ID: {type: String, required: true} ,
  Name: {type: String, required: true} ,
  Sex: {type: String, required: true},
  Age: {type:String, required:true},
  Height: {type: Number, required:true},
  Weight: {type: Number, required:true},
  Team: {type: String, required: true},
  NOC: {type: String, required:true},
  Games: {type:String, required: true},
  Year: {type: Number, required: true},
  Season: {type: String, required:true},
  City: {type: String, required: true},
  Sport: {type: String, required: true},
  Event: {type: String, required: true},
  Medal: {type: String, required: true}
}
```
<br>
## Backlog
<br>
## Links
[See the Notion board.](https://www.notion.so/Brief-b1200945b321458d8a1b24fd3baba644)
### Git
The url to your repository and to your deployed project
[Repository Link](https://github.com/Fiend-Shadow/IH-olympics)
[Deploy Link](https://olympics-iron-hack.herokuapp.com/)
[Json Server Link](https://athletes-json.herokuapp.com/athletes)
<br>
### Slides
The url to your presentation slides
[Slides Link](https://docs.google.com/presentation/d/1ku8A8kzztqrPfKur33d2Mwgs0AMCRKcj-UqJ3_Lhre8/edit#slide=id.p)