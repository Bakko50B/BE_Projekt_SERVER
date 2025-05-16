# API för Projektet i Backendkursen
## med autentisering hämtat från Moment 4   
Det mesta är förändrat, men skalet var en bra start trots det.  
Koden har sitt urrsprung från kurslitteratur (video) och har delvis reviderats.  

## Installation  
Kör:   ``
**npm install**  
``
Starta sedan applikationen med:   
``
**npm run serve**  
``
## Routes  
Users     
* POST:     http://localhost:3000/users/register    -> Skapa en användare  
* POST:     http://localhost:3000/users/login 		-> Inlogg för användare  
* GET:      http://localhost:3000/users/protected   -> Skyddat område      

Dishes  
* GET:      http://localhost:3000/dishes            -> Se alla rätter
* POST:     http://localhost:3000/dishes            -> Skapa ny rätt
* PUT:      http://localhost:3000/dishes/:id        -> Uppdatera en rätt     
* DELETE    http://localhost:3000/dishes/:id        -> Tar bort en rätt  

Lunchmeny  
* GET:      http://localhost:3000/weekmenus         -> Hämta veckomeny för luncher
* POST:     http://localhost:3000/weekmenus         -> Skapa ny veckomeny
* PUT:      http://localhost:3000/weekmenus/:id     -> Uppdatera en veckomeny
* DELETE:   http://localhost:3000/weekmenus/:id     -> radera en veckomeny 

Om någon annan route än ovan anropas ges ett felmeddelande som svar.  

## Autentisering
Skyddade routes kräver autentisering med **Bearer Token**.  
För att få en token, logga in via:  
POST: http://localhost:3000/users/login

När du gör skyddade requests (POST, PUT, DELETE), skicka token i headers:
Authorization: Bearer <DIN_TOKEN>  
Exempelvis:   
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

## Av  
Torbjörn Lundberg, tolu2403@student.miun.se   

