var number = window.prompt("Enter a number to reverse: ");
var rem = 0;
var ans =0;


while(number!=0)
 {
   rem = number%10;
    ans = ans*10 + rem;
   number=Math.floor(number/10);
   }
   document.writeln(ans);