//XMLHttpRequest (XHR) object is use to interact with the servers. 
//you can retrieve data from URL without having to do a full page refresh.this enable
//the web page to update just part of the page without disrupting what the user is doing.

const output = document.querySelector(".output")
// let's define the url
const url ="https://api.nobelprize.org/2.0/laureates"
//let us initialize new XMLHttpRequest
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  console.log(xhr.readyState);
  
  if(xhr.readyState == 4 // request finished 
    && xhr.status == 200 // success
    ){
    console.log("success");
    console.log(xhr.responseText);
    const str = xhr.responseText;

    const obj= JSON.parse(str);
    for(let prop in obj.laureates){
      let temp = obj.laureates[prop];
      console.log(temp.fullName.en)
      for(let prop in temp.nobelPrizes){
       let temp2 = temp.nobelPrizes[prop];
       console.log(temp2.awardYear)
   //let's output our collection
       output.innerHTML += temp.fullName.en +'|'+ temp2.awardYear+'|'+temp2.category.en+'|'+temp2.motivation.en+'<br>'
      }
        }

   console.log(obj)
   console.log(obj.laureates[0].birth.date)
   console.log(obj.laureates[0].fullName.en)
   
  }else{
    console.log("error " + this.status);
  }
}
//let initialize the constructor xhr.open(method, url, [async,user,password] )
//In our case we only need the method and the url
xhr.open("GET",url)

//Let's open the connection and send the request to the server
xhr.send()
console.log(xhr)