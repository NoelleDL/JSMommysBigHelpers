function Chores() {
  const chores = [
      "cleaning the bathroom sink - upstairs",
      "cleaning the bathroom sink - downstairs",
      "dusting the family room",
      "sweeping the kithchen floor",
    ];

  const chore = [chores[Math.floor(Math.random() * chores.length)]];

  alert(`${chore}`);
  return chore;
}
