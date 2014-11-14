'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {

    var game = new paletto();
    assertTrue(game.isColor() == 0);

};

PalettoTestCase.prototype.testStory2 = function () {

    var game = new paletto();
    assertTrue(game.isYellow() == "yellow");
}