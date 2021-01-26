var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   console.log(cat);
   cat.height = 5;
   cat.weight = 7;
   cat.name = 'Fluffyy';
   
   for(i=0;i<2;i++)
   {
      console.log("Activities of cats friends are:",cat.catFriends[i].activities); 
      console.log("Cat friends names are:",cat.catFriends[i].name);
   }
   var totalweight = cat.catFriends[0].weight + cat.catFriends[1].weight;
   
   cat.catFriends[0].activities[2] = 'lazy';
   cat.catFriends[1].activities[2] = 'foodie';
   cat.catFriends[0].furcolor = 'black';

   console.log("Totalweight of cat friends are:",totalweight);
   console.log("Total activities of cats are:",cat.activities,cat.catFriends[0].activities,cat.catFriends[1].activities);

