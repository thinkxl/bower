var resolve = require('../../lib/util/resolve');
var homeDir = require('os').homedir();
var expect = require('expect.js');

describe('resolve', function () {
    it('should resolve local module path', function () {
        expect(resolve('mocha', { cwd: process.cwd })).to.contain('/node_modules/mocha/index.js');
        expect(resolve('mocha', { cwd: process.cwd })).to.contain(homeDir);
    });

    it('should fallback on global require if can\'t resolve local module path', function () {
        expect(resolve('npm', { cwd: process.cwd })).to.contain('/node_modules/npm/lib/npm.js');
        expect(resolve('npm', { cwd: process.cwd })).to.not.contain(homeDir);
    });
    it('should return `undefined` if can\'t be resolved', function () {
        expect(resolve('foo', { cwd: process.cwd })).to.be.undefined;
    });
});
