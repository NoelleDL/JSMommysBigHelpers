function Chores() {
  const chores = [
      "cleaning the bathroom sink - upstairs",
      "cleaning the bathroom sink - downstairs",
      "dusting the family room",
      "sweeping the kithchen floor",
    ];

  const chore = [chores[Math.floor(Math.random() * chores.length)]];

  $('#exampleModalCenter').on('show.bs.modal', function (event) {
    var modal = $(this);
    modal.find('.modal-title').text("Today, you get to:");
    modal.find('.modal-body').text(`${chore}`);
  });
  return chore;
}
