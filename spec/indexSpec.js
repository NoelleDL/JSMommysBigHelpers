describe("Mocking the Date object", function(){
    it("mocks the Date object and sets it to a given time", function() {
      var baseTime = new Date(2018, 11, 25).toDateString();
      jasmine.clock().install();
      jasmine.clock().mockDate(baseTime);

      expect(new Date(baseTime).toDateString()).toEqual("Tue Dec 25 2018");
    });
  });
