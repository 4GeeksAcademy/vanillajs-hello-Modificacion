window.onload = function() {
  
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    
    console.log(Math.floor(Math.random())*5);

    
    let Who = Math.floor(Math.random() * who.length);
   
    let Action = Math.floor(Math.random() * action.length);
    let What = Math.floor(Math.random() * what.length);
    let When = Math.floor(Math.random() * when.length);
    
    let excuse = who[Who] + " " + action[Action] + " " + what[What] + " " + when[When];


    
    document.querySelector("#Excuse").innerHTML = excuse;

    // document.getElementById('#Excuse').innerHTML = excuse;
  

 }
