describe('About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {

    // Your journey begins here: Replace the word false with true
    expect(true).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    var expectedValue = 2;
    var actualValue = 2;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    var expectedValue =2;
    var actualValue = 2;

  // toEqual() compares using common sense equality.
    expect(2).toEqual(2);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    var expectedValue = 2;
    var actualValue = (2).toString();

  // toBe() will always use === to compare.
    expect(2).toBe(2);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', function() {
    expect(2).toEqual(2);
  });
});
