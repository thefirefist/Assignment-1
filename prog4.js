var min=1;
var x = window.prompt("Enter a number between 1 and 10");
    var max=10; 
    var random =Math.floor(Math.random() * (+max - +min)) + +min;
    
    if(x===random)
    {
        document.writeln("Right guess!")
     }
     else
     {
      document.writeln("wrong guess!");
      }
