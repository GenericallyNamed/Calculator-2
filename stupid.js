    btn1.addEventListener('mousedown', function() {
        enterInput('#btn1','btn1');
        ripple('#btn1', '#757575');
    });
    btn2.addEventListener('mousedown', function() {
        enterInput('#btn2', 'btn2');
        ripple('#btn2', '#757575');
    });
    btn3.addEventListener('mousedown', function() {
        enterInput('#btn3', 'btn3');
        ripple('#btn3', '#757575');
    });
    btn4.addEventListener('mousedown', function() {
        enterInput('#btn4', 'btn4');
        ripple('#btn4', '#757575');
    });
    btn5.addEventListener('mousedown', function() {
        enterInput('#btn5', 'btn5');
        ripple('#btn5', '#757575');
    });
    btn6.addEventListener('mousedown', function() {
        enterInput('#btn6', 'btn6');
        ripple('#btn6', '#757575');
    });
    btn7.addEventListener('mousedown', function() {
        enterInput('#btn7', 'btn7');
        ripple('#btn7', '#757575');
    });
    btn8.addEventListener('mousedown', function() {
        enterInput('#btn8', 'btn8');
        ripple('#btn8', '#757575');
    });
    btn9.addEventListener('mousedown', function() {
        enterInput('#btn9', 'btn9');
        ripple('#btn9', '#757575');
    });
    btn0.addEventListener('mousedown', function() {
        enterInput('#btn0', 'btn0');
        ripple('#btn0', '#757575');
    });
    btnAdd.addEventListener('mousedown', function() {
        enterInput('#btnPlus', 'btnPlus');
        ripple('#btnPlus', '#757575');
    });
    btnSubtract.addEventListener('mousedown', function() {
        enterInput('#btnMinus', 'btnMinus');
        ripple('#btnMinus', '#757575');
    });
    btnMultiply.addEventListener('mousedown', function() {
        enterInput('#btnMultiply', 'btnMultiply');
        ripple('#btnMultiply', '#757575');
    });
    btnDivide.addEventListener('mousedown', function() {
        enterInput('#btnDivide', 'btnDivide');
        ripple('#btnDivide', '#757575');
    });
    btnPoint.addEventListener('mousedown', function() {
        enterInput('#btnPoint', 'btnPoint');
        ripple('#btnPoint', '#757575');
    });

    btnBackspace.addEventListener('mousedown', function() {
        console.log("character removed");
        backKey();
        ripple('#btnBack', '#757575');
    });

    btnLP.addEventListener('mousedown', function() {
        enterInput('#btnLParenthesis', 'btnLParenthesis');
        ripple ('#btnLParenthesis', '#757575');
    });

    btnRP.addEventListener('mousedown', function() {
        enterInput('#btnRParenthesis', 'btnRParenthesis');
        ripple ('#btnRParenthesis', '#757575');
    });