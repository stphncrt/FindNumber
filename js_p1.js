let btn = document.getElementById('btn');
//let output = 

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input =document.getElementById('userInput').Value;
    if (input == number){
        output.innerHTML = 'You are the winner:you guest after  times!'

    } else if (input < number){
        output.innerHTML = "I am thinking about lower number"
    };
    if (input > number){
        output.innerHTML = "I am thinking about higher number"
    }
});