const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Your plagin is activated!');

    let disposable = vscode.commands.registerCommand('MainFile.helloWorld', function () {
        const now = new Date();
        const currentTime = now.toLocaleTimeString();

        vscode.window.showInformationMessage(`Hello! This is your plagin! Plagin was invoked: ${currentTime} MSK`);
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};

