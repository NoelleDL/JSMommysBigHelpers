describe("Chores", function() {
  it("returns a random chore", function() {
    result = Chores();
    expect(result.length).toEqual(1);
  });
});
