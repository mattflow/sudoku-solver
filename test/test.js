const solve = require('..');
const assert = require('assert');

const easy = {
  puzzle: '050070200007850030280403000060040072035208410920030050000604093070015600006020080',
  solution: '359176248647852931281493567168549372735268419924731856512684793873915624496327185',
};

const medium = {
  puzzle: '005098014000000000019002708050087020400000001080960030508200640000000000740650100',
  solution: '625798314874136592319542768153487926496325871287961435538219647961874253742653189',
};

const hard = {
  puzzle: '002000004915008000006003000103700080600040007040009102000900500000300749300000800',
  solution: '832197654915468273476253918193726485628541397547839162784912536261385749359674821',
};

const evil = {
  puzzle: '700000050040600908030001000308040000002090500000010802000500060109007080050000003',
  solution: '781924356245673918936851724318245679672398541594716832423589167169437285857162493',
};

const notEnoughHints = '700000050040000908000001000008040000002000500000000800000500000100007080000000003';
const unsolvable = '781924356245673918936851724318245679672398541594716832423589167169437285857162430'
const empty = Array.apply(null, Array(81)).map(() => 0).join('');
const forced = '123456789456789123789123456214365897365897214897214365531642978642978531978531642';
const unBruteForceable = '000000000000003085001020000000507000004000100090000000500000073002010000000040009';

describe('#solve()', () => {
  it('should solve easy puzzles', () => {
    assert.equal(solve(easy.puzzle), easy.solution);
  });

  it('should solve medium puzzles', () => {
    assert.equal(solve(medium.puzzle), medium.solution);
  });

  it('should solve hard puzzles', () => {
    assert.equal(solve(hard.puzzle), hard.solution);
  });

  it('should solve evil puzzles', () => {
    assert.equal(solve(evil.puzzle), evil.solution);
  });

  it('should solve a puzzle with a custom empty value', () => {
    const periodChar = easy.puzzle.replace(/0/g, '.');
    assert.equal(solve(periodChar, { emptyValue: '.' }), easy.solution);
  });

  it('should output an array if specified', () => {
    assert.equal(Array.isArray(solve(easy.puzzle, { outputArray: true })), true);
  });

  it('should allow hint check bypass', () => {
    assert.equal(solve(empty, { hintCheck: false }), forced);
  });

  it('should throw an error for incorrect input', () => {
    assert.throws(() => { solve(8) }, {
      name: 'TypeError',
      message: 'Puzzle must be string or array.',
    });
  });

  it('should throw an error for invalid size', () => {
    assert.throws(() => { solve(easy.puzzle.slice(1)) }, {
      name: 'Error',
      message: 'Puzzle is an invalid size.',
    });
  });

  it('should throw an error for minimum hints', () => {
    assert.throws(() => { solve(notEnoughHints) }, {
      name: 'Error',
      message: 'A valid puzzle must have at least 17 hints.',
    });
  });

  it('should throw an error for unsolvable puzzles', () => {
    assert.throws(() => { solve(unsolvable) }, {
      name: 'Error',
      message: 'Puzzle could not be solved.',
    });
  });

  it('should throw an error for invalid puzzle values', () => {
    assert.throws(() => { solve(easy.puzzle.replace('0', '.')) }, {
      name: 'TypeError',
      message: 'Invalid puzzle value: .',
    });
  });

  it('should throw an error for out of range puzzle values', () => {
    const outOfRange = easy.puzzle.split('');
    outOfRange[0] = 10;

    assert.throws(() => { solve(outOfRange) }, {
      name: 'TypeError',
      message: 'Invalid puzzle value: 10',
    });

    outOfRange[0] = '-1';

    assert.throws(() => { solve(outOfRange) }, {
      name: 'TypeError',
      message: 'Invalid puzzle value: -1',
    });
  });

  it('should throw an error for reaching max iterations', () => {
    assert.throws(() => { solve(unBruteForceable) }, {
      name: 'Error',
      message: 'Max iterations reached. No solution found.',
    });
  });
});