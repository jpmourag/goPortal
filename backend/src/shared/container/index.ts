import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/repositories/UsersRepository";
import { UsersTokensRepository } from "../../modules/accounts/infra/repositories/UsersTokensRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUserRepository";
import { IUsersTokensRepository } from "../../modules/accounts/repositories/IUserTokensRepository";

container.registerSingleton<IUsersRepository>(
	"UsersRepository",
	UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
	"UsersTokensRepository",
	UsersTokensRepository
);