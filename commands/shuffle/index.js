module.exports = {
	Name: "shuffle",
	Aliases: null,
	Author: "supinic",
	Last_Edit: "2020-09-08T17:25:36.000Z",
	Cooldown: 10000,
	Description: "Shuffles the provided message, word by word.",
	Flags: ["pipe"],
	Whitelist_Response: null,
	Static_Data: null,
	Code: (async function shuffle (context, ...message) {
		if (message.length === 0) {
			return { reply: "No input provided!" };
		}
	
		const result = [];
		while (message.length > 0) {
			const randomIndex = sb.Utils.random(0, message.length - 1);
			result.push(message[randomIndex].replace(/[\[\]{}()]/g, ""));
			message.splice(randomIndex, 1);
		}
	
		const reply = result.join(" ");
		return { 
			reply: reply,
			cooldown: {
				length: (context.append.pipe) ? null : this.Cooldown
			}
		};
	}),
	Dynamic_Description: null
};