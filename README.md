# API för Projektet i Backendkursen
## med autentisering hämtat från Moment 4   
Det mesta är förändrat, men skalet var en bra start trots det.  
Koden har sitt urrsprung från kurslitteratur (video) och har delvis reviderats.  

## Installation  
Kör:     
```
npm install  
```
Starta sedan applikationen med:   
```
npm run serve
```
## Routes  
Users     
* POST:     http://localhost:3000/users/register    -> Skapa en användare  
* POST:     http://localhost:3000/users/login 		-> Inlogg för användare  
* GET:      http://localhost:3000/users/protected   -> Skyddat område      

Dishes  
* GET:      http://localhost:3000/dishes            -> Se alla rätter
* GET:      http://localhost:3000/dishes/:id        -> Se en rätt               (skyddad, kräver autentisering)
* POST:     http://localhost:3000/dishes            -> Skapa ny rätt            (skyddad, kräver autentisering)
* PUT:      http://localhost:3000/dishes/:id        -> Uppdatera en rätt        (skyddad, kräver autentisering)  
* DELETE    http://localhost:3000/dishes/:id        -> Tar bort en rätt         (skyddad, kräver autentisering)

Lunchmeny  
* GET:      http://localhost:3000/weekmenus         -> Hämta alla veckomenyer   
* GET:      http://localhsot:3000/weekmenus/:id     -> Hämta en veckomeny       (skyddad, kräver autentisering)
* POST:     http://localhost:3000/weekmenus         -> Skapa ny veckomeny       (skyddad, kräver autentisering)
* PUT:      http://localhost:3000/weekmenus/:id     -> Uppdatera en veckomeny   (skyddad, kräver autentisering)
* DELETE:   http://localhost:3000/weekmenus/:id     -> radera en veckomeny      (skyddad, kräver autentisering)  

Bokningar  
* GET       http://localhost:3000/bookings          -> Hämta alla bokningar   
* POST      http://localhost:3000/bookings          -> Skapa ny bokning           
* DELETE    http://localhost:3000/bookings/:id      -> Radera en bokning        (skyddad, kräver autentisering)                 

Om någon annan route än ovan anropas ges ett felmeddelande som svar.  

## Extra
Uppgiften krävde två olika huvudändpointer  
En för autentisering och en för att hantera menyer (någon typ) på webbplatsen.  
  
Jag har valt att göra sammanlagt tre huvudrutter, utöver den som är ett grundkrav (att hantera användare).

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
Mattias Dahlgren, mattias.dahlgren@miun.se  



