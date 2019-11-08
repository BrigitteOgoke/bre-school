//var officeItems = ["stapler", "monitor", "computer",
//"desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

// console.log(officeItems[0])
//console.log(officeItems[1])
//console.log(officeItems[2])
//console.log(officeItems[3])
//console.log(officeItems[4])
//console.log(officeItems[5])
//console.log(officeItems[6])


//for(var i = 0; i < officeItems.length; i++){
    //console.log(officeItems)
//}

var peopleWhoWantToSeeMadMaxFuryRoad =[
    {
        name:"Mike",
        age: 12,
        gender: "male"
    },
    {
        name:"Madeline",
        age: 80,
        gender: "female" 
    },
    {
        name:"Cheryl",
        age: 22,
        gender: "female" 
    },
    {
        name:"Sam",
        age: 30,
        gender: "male" 
    },
    {
        name:"Suzy",
        age: 4,
        gender: "female" 
    }
]
// remember to add a space between '' in order to create a blank space between console log result items

//for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
   
 // if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
 //       console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' ' + "Is Old Enough");
 //   } else {console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' ' + "Is not Enough");}
//} 

//personalized by male/female

//function getPeopleGender( male, female){
  //  if ( [i] === male){
   //     console.log ("m");
   // }
   // else if ( [i] === female){
    //    console.log ("f");
   // }
   // else {
    //    console.log("gender unkown"); }
   // }
   
   for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
   
 if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
       console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name
         + 
        ' ' 
        + 
        "Is Old Enough to see Mad Max Furry Road" +
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender 
         +
         "gender is male" );
   } else {console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name 
    + 
    ' '
     + 
     "Is not Enough see Mad Max Furry Road" 
     +
     peopleWhoWantToSeeMadMaxFuryRoad[i].gender
     +
     "gender is female");}
} 
