const person= {
    name: "Luke Skywalker",
    occupation: "Jedi",
    powers:"The force"
 }
  
 for(const prop in person) {
     const propValue = person[prop];
    console.log(propValue);
 }
  