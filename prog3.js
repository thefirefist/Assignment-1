var i=2014;
var d = new Date();
for(i=2014;i<=2050;i++)
{
  d.setFullYear(i,0,1);
  if(d.getDay()===0)
  {
     document.writeln("In the year "+ i +"1st January is a Sunday");
   }
 }