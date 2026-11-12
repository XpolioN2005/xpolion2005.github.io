/**
 * Netlify Function — forwards contact form submissions to a Discord webhook.
 *
 * Requires the DISCORD_WEBHOOK_URL environment variable to be set
 * (Netlify dashboard → Site settings → Environment variables).
 */

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK;

const AVATAR_URL = "https://cdn-icons-png.flaticon.com/512/7796/7796009.png";
const AUTHOR_ICON_URL =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydvX2g6QqJQgz_KJq_8gGBOB-Ivd_ngXW3dmmvRBiRg&s=10";

const jsonResponse = (statusCode, body) => ({
	statusCode,
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(body),
});

/** Discord message content is limited to 2000 characters. */
const clip = (value, max) =>
	value.length > max ? `${value.slice(0, max - 1)}…` : value;

export const handler = async (event) => {
	if (event.httpMethod !== "POST") {
		return jsonResponse(405, { error: "Method not allowed" });
	}

	if (!WEBHOOK_URL) {
		console.error("DISCORD_WEBHOOK_URL is not set");
		return jsonResponse(500, { error: "Server configuration error" });
	}

	let name;
	let email;
	let message;
	try {
		({ name, email, message } = JSON.parse(event.body ?? "{}"));
	} catch {
		return jsonResponse(400, { error: "Invalid JSON body" });
	}

	name = typeof name === "string" ? name.trim() : "";
	email = typeof email === "string" ? email.trim() : "";
	message = typeof message === "string" ? message.trim() : "";

	if (!name || !email || !message) {
		return jsonResponse(400, {
			error: "name, email and message are required",
		});
	}

	const payload = {
		username: "XPO CONTACT",
		avatar_url: AVATAR_URL,
		content: "NEW CONTACT THROUGH WEBSITE",
		embeds: [
			{
				title: "CONTACT",
				description: `${clip(message, 1900)}\n\n\n[${email}](mailto:${email})`,
				color: 15548997,
				author: {
					name: clip(name, 256),
					icon_url: AUTHOR_ICON_URL,
				},
				footer: {
					text: "contact @ xpolion.is-a.dev",
				},
			},
		],
	};

	try {
		const discordResponse = await fetch(WEBHOOK_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		if (!discordResponse.ok) {
			const discordBody = await discordResponse.text();
			console.error(
				`Discord webhook failed: ${discordResponse.status} ${discordBody}`,
			);
			return jsonResponse(502, {
				error: "Failed to deliver message",
				discordStatus: discordResponse.status,
				discordBody,
			});
		}

		return jsonResponse(200, { ok: true });
	} catch (error) {
		console.error("Discord webhook request error:", error);
		return jsonResponse(502, {
			error: "Failed to deliver message",
			details: error instanceof Error ? error.message : String(error),
		});
	}
};
