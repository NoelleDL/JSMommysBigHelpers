var chores = [
    "Dust the family room",
    "Sweep the kithchen floor",
    "Clean bathroom",
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
