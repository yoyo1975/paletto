'use strict';

var paletto = function () {

    var board;


    var init = function () {
        board = new Array(6);
        for (var i = 0; i < 6; i++) {
            board[i] = new Array(6);
        }

        board[0][0] = "black";
        board[0][1] = "green";
        board[0][2] = "white";
        board[0][3] = "blue";
        board[0][4] = "red";
        board[0][5] = "white";

        board[1][0] = "yellow";
        board[1][1] = "white";
        board[1][2] = "green";
        board[1][3] = "red";
        board[1][4] = "yellow";
        board[1][5] = "blue";

        board[2][0] = "blue";
        board[2][1] = "yellow";
        board[2][2] = "blue";
        board[2][3] = "white";
        board[2][4] = "black";
        board[2][5] = "red";

        board[3][0] = "red";
        board[3][1] = "black";
        board[3][2] = "red";
        board[3][3] = "green";
        board[3][4] = "blue";
        board[3][5] = "white";

        board[4][0] = "white";
        board[4][1] = "green";
        board[4][2] = "yellow";
        board[4][3] = "black";
        board[4][4] = "yellow";
        board[4][5] = "green";

        board[5][0] = "yellow";
        board[5][1] = "blue";
        board[5][2] = "black";
        board[5][3] = "red";
        board[5][4] = "green";
        board[5][5] = "black";


    };

    this.isColor = function () {
        var test;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {

                if (board[i][j] = board [i][j + 1] ||
                    (board [i][j] = board[i][j - 1]) ||
                    (board[i][j] = board [i + 1][j]) ||
                    (board [i][j] = board [i - 1][j])
                ) {
                    test = 0;
                }

                else test = 1;

            }
        }
        return test;
    };

    this.isYellow = function () {
        return board[5][0];
    };


    init();

};

