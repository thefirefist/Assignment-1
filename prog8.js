//<p style="line-height: 18px; font-size: 18px;  font-family: times;">

//<script>
function tocap(str1)
{
  var a1= str1.split(" ");
  var a2 = [];
  for(var x = 0; x < a1.length; x++)
  {
      a2.push(a1[x].charAt(0).toUpperCase()+a1[x].slice(1));
      }
      var a3= a2.join(' ');
      document.writeln(a3);
      //return a3;
      }
      tocap("all silver tea cups");
      document.writeln("\ngiven word: all silver tea cups")
 

//</script>
//</p>
