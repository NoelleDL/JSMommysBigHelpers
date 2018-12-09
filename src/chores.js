var chores = [
    "Dust items family room",
    "Sweep the kithchen floor",
    "Clean sink in bathroom - upstairs",
    "Clean sink in bathroom - downstairs",
    "Clean toilet - upstairs",
    "Clean toilet - downstairs",
    "Put away items on top of dresser",
    "Tidy bookshelves in room",
    "Put away items under bed",
    "Wipe down cupboards in kitchen",
    "Sort through and arrange items in bed",
    "Clean mirror in bathroom upstairs",
    "Dust base boards",
    "Organize books downstairs",
    "Organize puzzles downstairs",
    "Look under downstairs furniture for toys - put away toys;",
    "Wipe off top of drawers - kitchen",
    "Wipe down doors"
  ];

var completedChores = [];
var chore = "";

function getChores(chores, completedChores) {

  if (this.chores.length === 0) {
    this.chores = this.completedChores;
    this.completedChores = [];
  }

  chore = this.chores[Math.floor(Math.random()*chores.length)];

  completedChores.push(chore);
  var deleteChore = chores.indexOf(chore);
  chores.splice(deleteChore, 1);

  $('#exampleModalCenter').on('show.bs.modal', function (event) {
    var modal = $(this);
    modal.find('.modal-title').text("Today, you get to:");
    modal.find('.modal-body').text(`${chore}`);
  });

  return chore;
}
