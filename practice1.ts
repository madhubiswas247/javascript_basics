function fun(contact:number,name?:string,defaultName:string="Usopp",...restName:string[])
	{
	    console.log("defaultName has: "+defaultName);
	}
fun(1234567891,undefined,"Luffy", "Zoro", "Nami", "Sanji");

// const a =["Rajendra Prasad", "Sarvepalli Radhakrishnan"]; 
// function fun() {
//       setTimeout(() => {
//         var a = ["Abdul Kalam", "Pratibha Patil", "Pranab Mukherjee"];
//     }, 10);
// }
// fun();
// a.push("Ram Nath Kovind");
// console.log(a);

// const alterEgo = "Slade Wilson";
// 	function outerFunction()
// 	{
// 	    let alterEgo = "Wade Wilson";
// 	    setTimeout(
// 		function(){
//             console.log(alterEgo);
// 		},2000);
// 	}
// 	outerFunction();