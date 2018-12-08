describe("Chores", function() {
  it("returns a random chore", function() {
    result = getChores(chores, completedChores);
    expect(result.length).toEqual(1);
  });
});
