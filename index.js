var selectTag = document.getElementById('mySelect'); 
axios.get("https://dog.ceo/api/breeds/list/all").then(function(response){  
    var breeds = Object.keys(response.data.message); 
    for(var i = 0; i <= Object.keys(response.data.message).length; i++){ 
        var optionTag = document.createElement('option'); 
        optionTag.text = breeds[i]; 
        optionTag.value= breeds[i]; 
        selectTag.appendChild(optionTag); 
    }
});


selectTag.addEventListener('change',function(){  
    axios.get(`https://dog.ceo/api/breed/${this.value}/images/random`).then(function(data){ 
    var dogImageURL = data.data.message; 
    document.getElementById("dogImage").src = dogImageURL 
    });
});

