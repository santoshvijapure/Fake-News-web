var a=document.getElementById("btnn")


function myFunction() {
    var leb=document.getElementById("news")
    var a=Math.round(Math.random()%2);
    var b=["This is Fake", "This is True"]
    var status=b[a];    
    leb.innerHTML=status;
  }