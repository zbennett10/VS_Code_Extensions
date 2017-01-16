// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.wordCount', function () {
        // The code you place here will be executed every time your command is executed
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; //Text editor is not open
        }

        var allText = editor.document.getText();
        var wordCount = allText.split(' ').length;

        // Display a message box to the user
        vscode.window.showInformationMessage(`Word Count: ${wordCount}`);
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;