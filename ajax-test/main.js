var xhr = new XMLHttpRequest(); //it is a object buit in to allow to consume APIs

// we can call this a listener
xhr.onreadystatechange = function() {// onreadystatechange is AJAX property. whenever state change, we will write a check (see below)
    if (this.readyState == 4 && this.status == 200) { // 4 maeans that the operation has been completed // 200 means ok
        document.getElementById("data").innerHTML = this.responseText; //innerHTML is DOM property. It change the HTML element content / responseText is a server response property (AJAX) "this" = xhr
        console.log(typeof(this.responseText)); //this line is to show that the response is a string. see below how we give the Json/object type to the return.
        console.log(typeof(Json.parse(this.responseText))); //see that the type is object
        console.log(Json.parse(this.responseText)); //this is use loggin the content inthe object to the console

    } 
}

// Here we open a connection
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();