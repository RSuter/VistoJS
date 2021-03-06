import visto = require("libs/visto");
import common = require("common/main");

export class SampleControlModel extends visto.ViewModel {
    selectedText: KnockoutObservable<string>;
    transformedText: KnockoutComputed<string>;

	initialize() {
        this.selectedText = this.parameters.getObservableString("selectedText", "");
        this.transformedText = ko.computed<string>(() => this.selectedText().toUpperCase());
	}

    changeText() {
        common.prompt(this.context, "Change text", "Please change the text: ", this.selectedText()).then((newText: string) => {
            if (newText !== null)
                this.selectedText(newText);
        });
    }
}