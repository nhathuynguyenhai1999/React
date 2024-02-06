// A launch configuration that compiles the extension and then opens it inside a new window
// Use IntelliSense to learn about possible attributes.
// Hover to view descriptions of existing attributes.
// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
{
  "version": "0.2.0",
  "configurations": [
  {
    "name": "Run Extension",
    "type": "extensionHost",
    "request": "launch",
    "runtimeExecutable": "${execPath}",
    "args": [
      "--user-data-dir=vscode-test",
      "--extensionDevelopmentPath=${workspaceFolder}",
      "--disable-extensions",
      "--profile-temp"
    ],
    "outFiles": ["${workspaceFolder}/out/**/*.js"],
    "preLaunchTask": "npm: watch"
  }
]
}

