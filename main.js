var userCounter = 1;
var userC=document.getElementById("typicode");
var btn=document.getElementById("btn");

btn.addEventLister("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET",'https://jsonplaceholder.typicode.com/todos'+userCounter+'.json');
	ourRequest.onload=function(){
	var ourData=JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
	};

	ourRequest.send();
	userCounter++;
	if(userCounter>3){
		btn.classlist.add("hide-me");
	}
});
function renderHTML(data){
	var htmlString ="";
	for(i=0; i<data.length; i++){
		htmlString +=data[i].userId+data[i].id;
		for(ii=0; ii<data[i].title.completed.length; ii++){
			if(ii=0){
				htmlString+=data[i].title.completed[ii];
			}else {
				htmlString+=" "data[i].title.completed[ii];
				userC.insertAdjacentHTML('beforeend', htmlString);
			}
		}
		htmlString+="";
		for(ii=0; ii<data[i].title.completed.length;ii++){
			if(ii=0){
				htmlString+=data[i].title.completed[ii];

			}else{
				htmlString+=data[i].title.completed[ii];
			}

		}
		
	}
}