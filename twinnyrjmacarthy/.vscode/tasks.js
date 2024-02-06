// See https://go.microsoft.com/fwlink/?LinkId=733558
// for the documentation about the tasks.json format
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "npm",
			"script": "watch",
			"problemMatcher": "$ts-webpack-watch",
			"isBackground": true,
			"presentation": {
				"reveal": "never",
				"group": "watchers"
			},
			"group": {
				"kind": "build",
				"isDefault": true
			}
		},
		{
			"type": "npm",
			"script": "watch-tests",
			"problemMatcher": "$tsc-watch",
			"isBackground": true,
			"presentation": {
				"reveal": "never",
				"group": "watchers"
			},
			"group": "build"
		},
		{
			"label": "tasks: watch-tests",
			"dependsOn": [
				"npm: watch",
				"npm: watch-tests"
			],
			"problemMatcher": []
		}
	]
}