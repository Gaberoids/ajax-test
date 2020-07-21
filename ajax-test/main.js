// var xhr = new XMLHttpRequest(); //it is a object buit in to allow to consume APIs

// // we can call this a listener
// xhr.onreadystatechange = function() {// onreadystatechange is AJAX property. whenever state change, we will write a check (see below)
//     if (this.readyState == 4 && this.status == 200) { // 4 maeans that the operation has been completed // 200 means ok
//         document.getElementById("data").innerHTML = this.responseText; //innerHTML is DOM property. It change the HTML element content / responseText is a server response property (AJAX) "this" = xhr
//         console.log(typeof(this.responseText)); //this line is to show that the response is a string. see below how we give the Json/object type to the return.
//         console.log(typeof(JSON.parse(this.responseText))); //see that the type is object
//         console.log(JSON.parse(this.responseText)); //this is use loggin the content inthe object to the console

//     } 
// }
// // Here we open a connection
// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.send();
//
//








// //Other version of the code above
// var xhr = new XMLHttpRequest(); 
// var data;

// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.send();

// // function setData(jsonData) { // this function is pretty much how to give a value to a variable in JSON. Needs to give the variable a value INSIDE OF THE FUNCTION cus code outside the function will run before the functions run
// //     data = jsonData;
// //     console.log(data);
// // }

// xhr.onreadystatechange = function() {
//     console.log(readyState);
//     if (this.readyState == 4 && this.status == 200) { 
//         data = JSON.parse(this.responseText);
//     } 
// }









// Other way to go around the problem of having console.log() out of the function.

// function getData(cb) {
//     var xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
//     xhr.send();

//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             cb(JSON.parse(this.responseText)); // this line is running the function because lines 69 or 77
//         };
//     };
// };

// // 2 options
// getData(function(data){console.log(data);}); //compare this line with line 63. function = cb  and   data = this.responseText 

// //OR

// function printDataToConsole(data) {
//     console.log(data);
// }

// getData(printDataToConsole);// compare with line 63 printdatatoconsole = cb  , data = this.responseText






const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); // this line is running the function because lines 69 or 77
        };
    };
};

function writeToDocument(type) {
    getData(type, function(data){document.getElementById("data").innerHTML = data;})
}