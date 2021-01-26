var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   var ans = ["FlufferNutter","1985","NYC"];
   var ques = ["What was your first pet’s name?","What was the model year of your first car?","What city were you born in?"];
   function demo(ques,ans){
       for (i=0;i<securityQuestions.length;i++)
       {
           if (securityQuestions[i].question==ques[i] && securityQuestions[i].expectedAnswer==ans[i])
           {
               console.log("True");
               
           } else
           console.log("false");
       }
   }
   demo(ques,ans);