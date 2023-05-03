//1. For the given JSON ITERATE OVER ALL FOR LOOP(FOR,FOR IN,FOR OF, FOR EACH)

var favoritemovies={
    "action":"edge of tommorrow",
    "adventure":["lord of the rings","mad max furry road","indiana jones"],
    "comedy":"home alone",
    "crime":["zodiac","seven","knives out"],
    "war":"Saving Private Ryan",
    "thriller":["usual suspects","get out","tumbbad"],
    "dc comics":["batman begins",
              "dark knight rised",
               "man of steel",
               "batman vs superman",
               "ZS'sjustic league"],
    "marvel":["iron man",
              "avengers",
            "captain america"],
    "horror":["the exorcist",
              "the conjuring",
              "dead silence",
              "amity vile horror",
              "american psycho"],
    "mystery":["predestination",
               "now you see me",
               "the da vinci code"],
    "fantasy":["avatar",
               "conan the barbarian ",
               "the shape of water",
               "vanhelsing"],
    "aliens":["pretator",
              "aliens",
              "prometheus"],
    "treasure hunt":["national treasure",
                     "tomb raider"],

} 
console.log("Using for loop :")
var a=Object.keys(favoritemovies);
for(var i=0;i<a.length;i++){
  
console.log("My favorite "+a[i]+" "+"movie is "+favoritemovies[a[i]]);
}

console.log("Using for in")
for(let i in favoritemovies ){
  console.log("My favorite "+i+" movie is "+ favoritemovies[i]);
}

console.log("Using for of")
for(let x of Object.keys(favoritemovies)){
  console.log("My favorite "+x+" movie is "+ favoritemovies[x]);
}
console.log("Using for each")
Object.keys(favoritemovies).forEach(key => console.log("My favorite "+key+" movie is "+ favoritemovies[key]))
 //OUTPUT: IMAGE FILES HAS BEEN ADDED. 


