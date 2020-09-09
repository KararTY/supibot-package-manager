module.exports = {
	Name: "pastebin",
	Aliases: null,
	Author: "supinic",
	Last_Edit: "2020-09-08T17:25:36.000Z",
	Cooldown: 20000,
	Description: "Takes the result of a different command (pipe-only) and posts a Pastebin paste with it.",
	Flags: ["mention","pipe"],
	Whitelist_Response: null,
	Static_Data: null,
	Code: (async function pastebin (context, ...args) {
		if (args.length === 0) {
			return {
				success: false,
				reply: "No input provided!"
			};
		}
	
		return {
			reply: await sb.Pastebin.post(args.join(" "))
		};
	}),
	Dynamic_Description: null
};