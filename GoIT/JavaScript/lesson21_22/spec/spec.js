var pow = require('../js/dist/script.js');

describe('pow', function(){
  it('should call pow function', function(){
    //prepare
    var result;
    //act
    result = pow(2,4);
    //assert
    expect(result).toBe(16);
  });

  it('should call pow function', function(){
    //prepare
    var result;
    //act
    result = pow(2, 2);
    //assert
    expect(result).toBe(4);
  });
});
