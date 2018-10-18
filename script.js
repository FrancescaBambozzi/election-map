//function to create the two politicians
var createPolitician = function(name, partyColor) {

  var politician={};

    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

    return politician;

};

var bob = createPolitician("Bob Bobby", [132, 17, 11]);
var tea = createPolitician("Tea Teopolis", [245, 131, 136]);

console.log("Bob's party color is " + bob.partyColor + "!");
console.log("Tea's party color is " + tea.partyColor + "!");

bob.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];


tea.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//change the values inside the arrays to put the correct ones given in Excel file
bob.electionResults[9] = 1;
tea.electionResults[9] = 28;

bob.electionResults[4] = 17;
tea.electionResults[4] = 38;

bob.electionResults[43] = 11;
tea.electionResults[43] = 27;

//functions to calculate the winner based on the numbers of votes in each country
var setStateResults = function(state) {
  theStates[state].winner = null;

  if (bob.electionResults[state] > tea.electionResults[state])
  {
    theStates[state].winner = bob;
  }
  else if (bob.electionResults[state] < tea.electionResults[state])
  {
    theStates[state].winner = tea;
  }

var stateWinner = theStates[state].winner;

  if (theStates[state].winner !== null)
  {
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  else {
    theStates[state].rgbColor = [11, 32, 57];
  }

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];

var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = bob.name;
candidate2Name.innerText = tea.name;

candidate1Results.innerText = bob.electionResults[state];
candidate2Results.innerText = tea.electionResults[state];

if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}

}

bob.tallyUpTotalVotes = function()
{
  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

tea.tallyUpTotalVotes = function()
{
  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

bob.tallyUpTotalVotes();
tea.tallyUpTotalVotes();

//call the number of votes of each candidate
console.log(bob.totalVotes);
console.log(tea.totalVotes);

//if statement to declare the winner
var winner = "???";

  if (bob.totalVotes > tea.totalVotes)
  {
    winner = bob.name;
  }
  else if (tea.totalVotes > bob.totalVotes)
  {
    winner = tea.name;
  }
  else
  {
    winner = "DRAW.";
  }

console.log("The winner is " + winner + "!");

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = bob.name;
row.children[1].innerText = bob.totalVotes;
row.children[2].innerText = tea.name;
row.children[3].innerText = tea.totalVotes;
row.children[5].innerText = winner;
