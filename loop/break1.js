var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
  text += cars[0] ; 
  text += cars[1] ; 
  break list;
  text += cars[2] ; 
  text += cars[3] ; 
}
console.log(text)  //BMWVolvo