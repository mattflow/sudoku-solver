'use strict';

var expect = require('chai').expect;
var solver = require('../index');

describe('#numFormatter', function() {
    it('should solve easy puzzles', function() {
        var result = solver('050070200007850030280403000060040072035208410920030050000604093070015600006020080');
        expect(result).to.equal('359176248647852931281493567168549372735268419924731856512684793873915624496327185');
    });

    it('should solve medium puzzles', function() {
        var result = solver('005098014000000000019002708050087020400000001080960030508200640000000000740650100');
        expect(result).to.equal('625798314874136592319542768153487926496325871287961435538219647961874253742653189');
    });

    it('should solve hard puzzles', function() {
        var result = solver('002000004915008000006003000103700080600040007040009102000900500000300749300000800');
        expect(result).to.equal('832197654915468273476253918193726485628541397547839162784912536261385749359674821');
    });

    it('should solve evil puzzles', function() {
        var result = solver('700000050040600908030001000308040000002090500000010802000500060109007080050000003');
        expect(result).to.equal('781924356245673918936851724318245679672398541594716832423589167169437285857162493');
    });

});