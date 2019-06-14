var dogButton = document.getElementById("dogButton");

dogButton.addEventListener("click", function(){
    this.innerHTML= "Generate Doggo";
    axios.get("https://dog.ceo/api/breeds/image/random").then(function(data){
        //console.log(data)
        var dogImageURL = data.data.message;
        document.getElementById("dogImage").src = dogImageURL
    });
});



