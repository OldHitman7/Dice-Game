// On load:
var state = history.state || {};
var reloadCount = state.reloadCount || 0;
if (performance.navigation.type === 1) { // Reload
    state.reloadCount = ++reloadCount;
    history.replaceState(state, null, document.URL);
} else if (reloadCount) {
    delete state.reloadCount;
    reloadCount = 0;
    history.replaceState(state, null, document.URL);
}
if (reloadCount >= 1) {
    // Now, do whatever you want...
    // alert('The page was reloaded more than twice!');
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomImageSource2 = "images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    if(randomNumber1 > randomNumber2)
    {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    else if(randomNumber2 > randomNumber1)
    {
      document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
    }
    // else if(randomNumber2 == 6 && randomNumber1 == 6)
    // {
    //   document.querySelector("h1").innerHTML = "Refresh Me!";
    // }
    else{
      document.querySelector("h1").innerHTML = "It's a Tie!";
    }
}
