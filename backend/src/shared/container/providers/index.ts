import { container } from "tsyringe";
import { IDateProvider } from "./DateProvider/IDateProvider";
import { DateProvider } from "./DateProvider/implementarions/DateProvider";
import { IMailProvider } from "./Mail/IMailProvider";
import { MailtrapMailProvider } from "./Mail/implementations/MailtrapMailProvider";

container.registerSingleton<IDateProvider>("DayjsDateProvider", DateProvider);

container.registerInstance<IMailProvider>(
	"MailtrapMailProvider",
	new MailtrapMailProvider()
);