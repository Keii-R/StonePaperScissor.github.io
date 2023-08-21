var humanChoice;
var computerChoice;
var choice = ["Rock","Paper","Scissor"];
//console.log(choice);

function humanChoser(){
    let hChoice;
    var humChoice = document.getElementById('rockH')
    humChoice.addEventListener('click',function()
    {
        hChoice = choice[0];
        var computerChoice = computerChoser();
        var replacedImage = document.getElementById('blankH');
        replacedImage.setAttribute('src','./Images/rock.png');
        var restoreplace = document.getElementById('rslt');
        restoreplace.textContent = winner(computerChoice,hChoice);
        console.log(winner(computerChoice,hChoice))
        console.log("computrer: "+ computerChoice);
        console.log("human: "+ hChoice);
    })
    humChoice = document.getElementById('paperH')
    humChoice.addEventListener('click',function()
    {
        hChoice = choice[1];
        var computerChoice = computerChoser();
        var replacedImage = document.getElementById('blankH');
        replacedImage.setAttribute('src','./Images/paper.png');
        var restoreplace = document.getElementById('rslt');
        restoreplace.textContent = winner(computerChoice,hChoice);
        console.log(winner(computerChoice,hChoice))
        console.log("computrer: "+ computerChoice);
        console.log("human: "+ hChoice);
    })
    humChoice = document.getElementById('scissorH')
    humChoice.addEventListener('click',function()
    {
        hChoice = choice[2];
        var computerChoice = computerChoser();
        var replacedImage = document.getElementById('blankH');
        replacedImage.setAttribute('src','./Images/scissor.png');
        var restoreplace = document.getElementById('rslt');
        restoreplace.textContent = winner(computerChoice,hChoice);
        console.log(winner(computerChoice,hChoice))
        console.log("computrer: "+ computerChoice);
        console.log("human: "+ hChoice);
    })
}

function computerChoser(){
    let cChoice = Math.floor(Math.random()*3)
    if(cChoice == 0)
    {
        var replacedImage = document.getElementById('blankC');
        replacedImage.setAttribute('src','./Images/rock.png');
    }
    else if(cChoice == 1)
    {
        var replacedImage = document.getElementById('blankC');
        replacedImage.setAttribute('src','./Images/paper.png');
    }
    else if(cChoice == 2)
    {
        var replacedImage = document.getElementById('blankC');
        replacedImage.setAttribute('src','./Images/scissor.png');
    }
    cChoice = choice[cChoice];
    return cChoice;
}

var humanChoice = humanChoser();

function winner(computerChoice,humanChoice){
    if(computerChoice == humanChoice)
    {
        return "Draw";
    }
    else if(humanChoice == "Rock" && computerChoice == "Scissor" || humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Scissor" && computerChoice == "Paper")
    {
        return "You Win";
    }
    else
    {
        return "Computer Wins";
    }
}
