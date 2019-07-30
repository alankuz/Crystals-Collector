var goal = [];
var gem1 = [];
var gem2 = [];
var gem3 = [];
var gem4 = [];
var totalScore = 0;
var win = 0;
var losses = 0;
$('#score').text(totalScore)
function randNumbGen() {
    goal = Math.floor((Math.random() * 96) + 24);
    $('#ranNumb').text(goal)
}
function gemGen() {
    gem1 = Math.floor((Math.random() * 12) + 1);
    gem2 = Math.floor((Math.random() * 12) + 1);
    gem3 = Math.floor((Math.random() * 12) + 1);
    gem4 = Math.floor((Math.random() * 12) + 1);
    if (gem1 === gem2 || gem1 === gem3 || gem1 === gem4) {
        gemGen()
        console.log('test1');
    }
    if (gem2 === gem1 || gem2 === gem3 || gem2 === gem4) {
        gemGen()
        console.log('test2');

    }
    if (gem3 === gem1 || gem3 === gem2 || gem3 === gem4) {
        gemGen()
        console.log('test3');

    }
    if (gem4 === gem1 || gem4 === gem2 || gem4 === gem3) {
        gemGen()
        console.log('test4');

    }
}
$("#gem1").click(function () {
    totalScore = totalScore + gem1;
    console.log(totalScore)
    $('#score').text(totalScore)
    console.log(totalScore + 'this' + goal)
    winCheck()
});
$("#gem2").click(function () {
    totalScore = totalScore + gem2;
    console.log(totalScore)
    $('#score').text(totalScore)
    winCheck()
});
$("#gem3").click(function () {
    totalScore = totalScore + gem3;
    console.log(totalScore)
    $('#score').text(totalScore)
    winCheck()
});
$("#gem4").click(function () {
    totalScore = totalScore + gem4;
    console.log(totalScore)
    $('#score').text(totalScore)
    winCheck()
});
function winCheck() {
    if (totalScore === goal) {
        win++;
        $('#wins').text('Wins: ' + win)
        $('#standing').text('You Win!')
        reset()
    }
    if (totalScore > goal) {
        losses++;
        $('#loss').text('Losses: ' + losses)
        $('#standing').text('You Lose!')
        reset()
    }
    if (totalScore > 1) {
        $('#standing').text('')

    }
}
$('#wins').text('Wins: ' + win)
$('#loss').text('Losses: ' + losses)

function reset() {
    totalScore = 0;
    gemGen()
    randNumbGen()
    $('#score').text(totalScore)

}
randNumbGen();
gemGen();


