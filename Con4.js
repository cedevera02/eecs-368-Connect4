var winArr = ["blank", "blank", "blank", "blank"];
var turnChange = true;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
function test(){
    document.getElementById("G1").style.backgroundColor = "pink";
    document.getElementById("G2").style.backgroundColor = "pink";
    document.getElementById("G3").style.backgroundColor = "pink";
    document.getElementById("G4").style.backgroundColor = "pink";
    document.getElementById("G5").style.backgroundColor = "pink";
    document.getElementById("G6").style.backgroundColor = "pink";
}

function winner(color){
    // document.body.innerHTML = '';
    // var el = document.createElement("p");
    // var winpar = document.createTextNode("Game End! The winner is player " + color + ".");
    // var body = document.getElementById("bod");
    // el.appendChild(winpar);
    // body.appendChild(el);
    //alert("Winner is Player " + color);
    // color[0] = color[0].toUpper();
    document.getElementById("con4").innerHTML = "Winner is Player " + color;
    document.getElementById("rules").innerHTML = "Winning positions: " + winArr[0] + " " + winArr[1] + " " + winArr[2] + " " + winArr[3];
    for (var i = 0; i < 7; i++){
        document.getElementById(letters[i]).setAttribute("value", "Closed");
    }
}

function checkHor(color){
    var inarrow = 0;
    var prev = false;
    for (var i = 1; i <= 6; i++){
        for (var j = 0; j < 7; j++){
            if (inarrow == 0){
                if (document.getElementById(letters[j]+i.toString()).getAttribute("value") == color){
                    inarrow++;
                    winArr[inarrow-1] = letters[j]+i.toString();
                    prev = true;
                }
            }else{
                if (document.getElementById(letters[j]+i.toString()).getAttribute("value") == color && prev){
                    inarrow++;
                    winArr[inarrow-1] = letters[j]+i.toString();
                }else{
                    inarrow = 0;
                    winArr[0] = "blank";
                    winArr[1] = "blank";
                    winArr[2] = "blank";
                    winArr[3] = "blank";
                    prev= false;
                }
            }
            if (inarrow ==4){
                winner(color);
                break;
            }
        }
    }
}

function checkVer(color){
    var inarrow = 0;
    var prev = false;
    for (var i = 0; i < 7; i++){
        for (var j = 1; j <= 6; j++){
            if (inarrow == 0){
                if (document.getElementById(letters[i]+j.toString()).getAttribute("value") == color){
                    inarrow++;
                    winArr[inarrow-1] = letters[i]+j.toString();
                    prev = true;
                }
            }else{
                if (document.getElementById(letters[i]+j.toString()).getAttribute("value") == color && prev){
                    inarrow++;
                    winArr[inarrow-1] = letters[i]+j.toString();
                }else{
                    inarrow = 0;
                    winArr[0] = "blank";
                    winArr[1] = "blank";
                    winArr[2] = "blank";
                    winArr[3] = "blank";
                    prev= false;
                }
            }
            if (inarrow ==4){
                winner(color);
                break;
            }
        }
        inarrow = 0;
        prev = false;
        winArr[0] = "blank";
        winArr[1] = "blank";
        winArr[2] = "blank";
        winArr[3] = "blank";
    }
    winArr[0] = "blank";
    winArr[1] = "blank";
    winArr[2] = "blank";
    winArr[3] = "blank";
}

function checkDia1(color){
    var inarrow = 0;
    var prev = false;

    for (var i = 1; i <= 6 ; i++){
        for (var j = i; j >= 1; j--){
            var k = i-j;
            if (inarrow == 0){
                if (document.getElementById(letters[k]+j.toString()).getAttribute("value") == color){
                    inarrow++;
                    winArr[inarrow-1] = letters[k]+j.toString();
                    prev = true;
                }
            }else{
                if (document.getElementById(letters[k]+j.toString()).getAttribute("value") == color && prev){
                    inarrow++;
                    winArr[inarrow-1] = letters[k]+j.toString();
                }else{
                    inarrow = 0;
                    winArr[0] = "blank";
                    winArr[1] = "blank";
                    winArr[2] = "blank";
                    winArr[3] = "blank";
                    prev= false;
                }
            }
            if (inarrow ==4){
                winner(color);
                break;
            }
        }
        inarrow = 0;
        prev = false;
        winArr[0] = "blank";
        winArr[1] = "blank";
        winArr[2] = "blank";
        winArr[3] = "blank";
    }
    inarrow = 0;
    prev = false;
    //lower half of diagonal
    for (var i = 2; i <= 6 ; i++){
        var k;
        for (var j = 6, k=i-1; j >= i-1; j--, k++){
            //var k = i-j;
            if (inarrow == 0){
                if (document.getElementById(letters[k]+j.toString()).getAttribute("value") == color){
                    inarrow++;
                    winArr[inarrow-1] = letters[k]+j.toString();
                    prev = true;
                }
            }else{
                if (document.getElementById(letters[k]+j.toString()).getAttribute("value") == color && prev){
                    inarrow++;
                    winArr[inarrow-1] = letters[k]+j.toString();
                }else{
                    inarrow = 0;
                    winArr[0] = "blank";
                    winArr[1] = "blank";
                    winArr[2] = "blank";
                    winArr[3] = "blank";
                    prev= false;
                }
            }
            if (inarrow ==4){
                winner(color);
                break;
            }
        }
        inarrow = 0;
        prev = false;
        winArr[0] = "blank";
        winArr[1] = "blank";
        winArr[2] = "blank";
        winArr[3] = "blank";
    }
    winArr[0] = "blank";
    winArr[1] = "blank";
    winArr[2] = "blank";
    winArr[3] = "blank";
}

function checkDia2(color){
    var inarrow = 0;
    var prev = false;
    for (var i = 6; i > 0; i--){
        var k;
        for (var j = 1, k=i; j <= 6-i+1; j++, k++){
            if (inarrow == 0){
                if (document.getElementById(letters[j-1]+k.toString()).getAttribute("value") == color){
                    inarrow++;
                    winArr[inarrow-1] = letters[j-1]+k.toString();
                    prev = true;
                }
            }else{
                if (document.getElementById(letters[j-1]+k.toString()).getAttribute("value") == color && prev){
                    inarrow++;
                    winArr[inarrow-1] = letters[j-1]+k.toString();
                }else{
                    inarrow = 0;
                    winArr[0] = "blank";
                    winArr[1] = "blank";
                    winArr[2] = "blank";
                    winArr[3] = "blank";
                    prev= false;
                }
            }
            if (inarrow ==4){
                winner(color);
                break;
            }
        }
        inarrow = 0;
        prev = false;
        winArr[0] = "blank";
        winArr[1] = "blank";
        winArr[2] = "blank";
        winArr[3] = "blank";
    }

    //second half
    var inarrow = 0;
    var prev = false;
    for (var i = 2; i <= 4; i++){
        var k;
        for (var j = 1, k=i; j <= 7-i+1; j++, k++){
            if (inarrow == 0){
                if (document.getElementById(letters[k-1]+j.toString()).getAttribute("value") == color){
                    inarrow++;
                    winArr[inarrow-1] = letters[k-1]+j.toString();
                    prev = true;
                }
            }else{
                if (document.getElementById(letters[k-1]+j.toString()).getAttribute("value") == color && prev){
                    inarrow++;
                    winArr[inarrow-1] = letters[k-1]+j.toString();
                }else{
                    inarrow = 0;
                    winArr[0] = "blank";
                    winArr[1] = "blank";
                    winArr[2] = "blank";
                    winArr[3] = "blank";
                    prev= false;
                }
            }
            if (inarrow ==4){
                winner(color);
                break;
            }
        }
        inarrow = 0;
        prev = false;
        winArr[0] = "blank";
        winArr[1] = "blank";
        winArr[2] = "blank";
        winArr[3] = "blank";
    }
    winArr[0] = "blank";
    winArr[1] = "blank";
    winArr[2] = "blank";
    winArr[3] = "blank";
}

function checkWinner(color){
    checkHor(color);
    checkVer(color);
    checkDia1(color);
    checkDia2(color);
}

function gameTurn(pos, num){
    var color;
    if(document.getElementById(pos).getAttribute("value") == "Drop"){
        if (turnChange){
            color = "red";
            turnChange = false;
        }else{
            color = "blue";
            turnChange = true;
        }
        //checkHor(color);
        const runProm = new Promise((resolve, reject)=>{
            turns(pos, num, color)
            resolve("Turn is over")
        });
        //Promise.resolve(turns(pos, num, color)).then(checkWinner(color));

        runProm.then(checkWinner(color));
    }
}

function turns(pos, num, color){
    if (num == 6){
        document.getElementById(pos+num.toString()).style.backgroundColor = color;
        document.getElementById(pos+num.toString()).setAttribute("value", color);
    }else if(document.getElementById(pos+(num+1).toString()).getAttribute("value") != "blank"){
        document.getElementById(pos+num.toString()).style.backgroundColor = color;
        document.getElementById(pos+num.toString()).setAttribute("value", color);
        if(num == 1){
            document.getElementById(pos).setAttribute("value", "Closed");
        }   
    }else{
        document.getElementById(pos+num.toString()).style.backgroundColor = color;
        setTimeout(function(){
            document.getElementById(pos+num.toString()).style.backgroundColor = "white";
            turns(pos, num+1, color);
        }, 100);
        //gameTurn(pos,num+1);
    }
}