module.exports = {
	Name: "discord",
	Aliases: null,
	Author: "supinic",
	Last_Edit: "2020-09-08T17:25:36.000Z",
	Cooldown: 15000,
	Description: "Posts the link to the current channel's Discord(?)",
	Flags: ["mention","pipe"],
	Whitelist_Response: null,
	Static_Data: null,
	Code: (async function discord (context) {
		if (context.privateMessage) {
			return {
				success: false,
				reply: "There's no Discord in whispers..."
			};
		}
	
		return {
			reply: (context.channel.Data.discord) ?? "This channel has no Discord description set up."
		}
	}),
	Dynamic_Description: null
};