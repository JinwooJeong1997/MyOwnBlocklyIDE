Blocky.Blocks['demo_test'] = {
    init: function(){
        this.appendValueInput("print")
            .setCheck(["string","Number"])
            .appendField("출력");
        this.setColour(230);
    this.setTooltip("출력하는 블럭입니다.");
    this.setHelpUrl("");
    }
};