const { expect } = require('chai');
const solve = require('../index');

describe('#solve', () => {
  it('throw error for bad input types', () => {
    const result = () => solve(8);
    expect(result).to.throw('Puzzle must be string or array.');
  });

  it('throw error for invalid number of elements', () => {
    const result = () => solve('0123456');
    expect(result).to.throw('Puzzle is an invalid size.');
  });

  it('throw error if board has less than 17 hints', () => {
    const result = () => solve('000000015020060000000000408003000900000100000000008000050400000000070300800000060');
    expect(result).to.throw('A valid puzzle must have at least 17 hints.');
  });

  it('throw error if board is unabled to be solved', () => {
    const result = () => solve('039176248647852931281493567168549372735268419924731856512684793873915624496327185');
    expect(result).to.throw('Puzzle was unable to be solved.');
  });

  /* it('should solve puzzle with minimum hints', function() {
    var result = solve('000050074801000000000000000070240000600000100000000000200106300040000020000800000');
    expect(result).to.equal('962351874851467293437982516173248965684795132529613487295176348748539621316824759');
  }); */

  it('should solve easy puzzles', () => {
    const result = solve('050070200007850030280403000060040072035208410920030050000604093070015600006020080');
    expect(result).to.equal('359176248647852931281493567168549372735268419924731856512684793873915624496327185');
  });

  it('should solve medium puzzles', () => {
    const result = solve('005098014000000000019002708050087020400000001080960030508200640000000000740650100');
    expect(result).to.equal('625798314874136592319542768153487926496325871287961435538219647961874253742653189');
  });

  it('should solve hard puzzles', () => {
    const result = solve('002000004915008000006003000103700080600040007040009102000900500000300749300000800');
    expect(result).to.equal('832197654915468273476253918193726485628541397547839162784912536261385749359674821');
  });

  it('should solve evil puzzles', () => {
    const result = solve('700000050040600908030001000308040000002090500000010802000500060109007080050000003');
    expect(result).to.equal('781924356245673918936851724318245679672398541594716832423589167169437285857162493');
  });
});
