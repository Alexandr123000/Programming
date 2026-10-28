class OldScreen {
    show(information) {
        console.log(`The old screen is showing "${information}"`);
    }
}
class NewScreen {
    showInformation(information) {
        console.log(`The new screen is showing "${information}"`);
    }
}
class ScreenAdapter {
    constructor(newScreen) {
        this.newScreen = newScreen;
    }
    show(information) {
        this.newScreen.showInformation(information);
    }
}

const oldScreenModule = new OldScreen();

oldScreenModule.show("2 + 2 = 4");

const newScreenModule = new NewScreen();
const adaptedScreenModule = new ScreenAdapter(newScreenModule); //adapt the new screen module to the old screen module

adaptedScreenModule.show("2 + 2 = 4");
