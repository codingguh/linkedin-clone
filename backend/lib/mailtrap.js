import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = "4cd41016f279427021e464d14ba88f2b";

export const mailtrapClient = new MailtrapClient({
	token: TOKEN,
});

export const sender = {
	email: "mailtrap@demomailtrap.com",
	name: "Mailtrap Test",
};

