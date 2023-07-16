import { OpenAIAgent, TerminalFunctions } from "openai-agent";
import * as dotenv from "dotenv";
import { ConsoleFunctions } from "./ConsoleFunctions";
dotenv.config();

//Check console functions to see the functions agent will use

(async () => {
	const consoleAgent = new OpenAIAgent(
		process.env.OPENAI_API_KEY,
		process.env.OPENAI_MODEL
	);

	const taskResponse = await consoleAgent.runAgent(
		[
			{
				role: "user",
				content:
					`You are an expert ai assistant who knows how to get things done via command line & terminal.
					Follow the below instructions to get started: 
					1-Ask the user to give you inputs and do what she/he asks for his/her environment and always output the results. 
					2-Do this in a loop, till he types exit.
					3-Always provide the text in proper encoded manner and use only direct terminal commands and not python etc
					4-Start by asking what the user needs to do and then do it for him/her, and do this in a loop, till he types exit.`,
			},
		],
		[new ConsoleFunctions()],
		100
	);
	console.log(taskResponse?.content);
})();
