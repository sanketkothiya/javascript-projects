console.log("this is fetch api")
// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content 
let content = document.getElementById("content");

// function getData(){
//     console.log("started getdata");
//     url="sanket.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data); 
//     })
// }

// function getData(){
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// console.log("Before running getData")
// getData()
// console.log("After running getData")

function postdata(){
    url="http://dummy.restapiexample.com/api/v1/create";
    data='{"name":"fdrfgglry347485674945","salary":"123","age":"23"}'
    params={
        method:'post',
        headers:{
            'content-Type':'application/json'
        },
        body:data
    }
    fetch(url,params).then(response=>response.json())
    .then(data=>console.log(dara))
}


function postData(){
    url = "https://jsonplaceholder.typicode.com/posts";
    data = {
        "userId": "561",
        "id" : "167",
        "title" : "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}

postData()