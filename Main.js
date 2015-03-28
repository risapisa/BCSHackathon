// Voting app for restaurants for a group of friends based on price range, location,
// and type of restaurant.

//Users are logged in based on username/ID, and vote in real time on the three parameters
//listed above. Then the Yelp API is queried based on their votes and one restaurant
//is presented.

//First page is setting up login/password for user

/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
function pasuser(form) {
if (form.id.value=="JavaScript") { 
if (form.pass.value=="Kit") {              
location="login.html" 
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
