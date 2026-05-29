function scrollToServices(){

document
.getElementById("services")
.scrollIntoView({
behavior:"smooth"
});

}

let services=0;
let security=0;
let cdn=0;

let counter=setInterval(()=>{

if(services<4)
services++;

if(security<100)
security+=5;

if(cdn<300)
cdn+=10;

document.getElementById("serviceCount").innerHTML=services;

document.getElementById("securityCount").innerHTML=security+"%";

document.getElementById("cdnCount").innerHTML=cdn+"+";

if(
services>=4 &&
security>=100 &&
cdn>=300
){
clearInterval(counter);
}

},40);