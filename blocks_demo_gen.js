Blockly.JavaScript['demo_test'] = function(block) {
    var value_print = Blockly.JavaScript.valueToCode(block, 'print',Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'console.log('+value_print+');';
    return code;
};