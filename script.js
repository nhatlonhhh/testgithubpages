let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//cú pháp: scoreBoard_div = document.querySelector(CSS Selector);
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    //hàm randomNumber này dùng để random số từ 0 -> 2,
    //Thay đổi * 3 thành số khác nếu muốn lấy nhiều hơn
    //Ví dụ là muốn lấy 3 giá trị thì nhân 4
    const randomNumber = Math.floor(Math.random() * 3);
    //return để lấy element là r,p,s thay vì là số 0, 1 ,2
    return choices[randomNumber]; 
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(computer). You wins !🔥`;
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) lost to ${convertToWord(computerChoice)}(computer). You lost !😭`;
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)}(user) equals ${convertToWord(computerChoice)}(computer). Its a draw !💀`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            console.log("USER WINS.");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            console.log("COMPUTER WINS.");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            console.log("Its a draw.");
            break;                
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");

    })

    scissor_div.addEventListener('click', function () {
        game("s");

    })
}

main();