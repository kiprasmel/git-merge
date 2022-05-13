const { execSync} = require("child_process")

run("my-cool-script")

const run = (scriptName) => {
	console.log("run", scriptName)
	executeScriptAndDoOtherCoolStuff(scriptName)
}

function executeScriptAndDoOtherCoolStuff(scriptName) {
	execSync(scriptName)
	consle.log("finished executing")
}

