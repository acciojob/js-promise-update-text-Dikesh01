//your JS code here. If required.
const outPut = document.getElementById("output");

function getResolve(){
	new Promise((resolve) =>{
		setTimeout(()=>{
		resolve("Hello, world!")
	},1000)
	}).then(data =>{
		outPut.innerText = data;
	})	 
}

getResolve();



