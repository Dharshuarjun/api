var div=document.createElement("div");
div.innerHTML = `<input type="text" id="txt">
<button type="button" onclick="foo()"> Search</button>
<div id="Active"></div>
<div id="Recovered"></div>
<div id="Deaths"></div>`;


document.body.append(div);
div.style.textAlign="center";
console.log(div);
async function foo(){
    let cc =document.getElementById("txt").value;
    let res=await fetch(`https://api.covid19api.com/total/country/${cc}`);
    let res1=await res.json();
    console.log(res1);

    let index=res1.length-1;
    var result=res1[index].Active;
    console.log(result);
    document.getElementById("Active").innerText=`Total Active cases:${result}`;

    
    var result1=res1[index].Recovered;
    console.log(result1);
    document.getElementById("Recovered").innerText=`Total recovered cases:${result1}`;

   
    var result2=res1[index].Deaths;
    console.log(result2);
    document.getElementById("Deaths").innerHTML=`Total deaths cases:${result2}`;
    // document.getElementById("name").innerText=`Total recovered cases:${result1}`;
}
