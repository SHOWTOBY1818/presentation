function hello (message) {
	//body...
	console.log ("hello world",message);
}

hello("Judi");


var navbar ={

	"home": {
		"url": "index.html"
	}
	"about": {
		"url": "about.html",
		"heading": "About Me"
	},
	"blog":{
		"url": "blog.html",
		"heding": "Blog"
	},
	"contact": {
		"url": "contact.html",
		"heading": "Blog"
	}
	
};


var1 = 0;
 function navigationbar(pageID, Logo) {
	console.log("pageID", pageID, logo, typeof  navbar);
	if (typeof navbar ==="object" 
		console.log("yes"); 
		for(var n in navbar)}
			console.log("n,navbar", n, navbar);
			console.log("navbar", n, navbar);
			document.getElementById("navbarUL")
					.appendChild(
						document.createElement('li')
						)
					.setAttribute('class','item');

	var nav;
	if (pageID === "home") { :
		//<a href="index.html#home</a>
		nav ='<a href= "'+navbar[pageID] [url+'">+'#'+n+ '">+navbar[n].heading+'</a>';'>+navbar'
	}
	docment.geetElementsByTagName("li") [l].innerHTML= Nav;
	location++;
	console.log('l++',location);
}

`} 	else {
	/
	console.log("error");
`}
}
navigationBar("home" "img/logo.png")

