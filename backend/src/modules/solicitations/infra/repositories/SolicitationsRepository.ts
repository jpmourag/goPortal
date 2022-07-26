import { Repository } from "typeorm";
import { AppDataSource } from "../../../../shared/container/infra/typeorm/database";
import { ISolicitationsRepository } from "../../repositories/ISolicitationsRepository";
import { Solicitations } from "../entities/Solicitations";

class SolicitationsRepository implements ISolicitationsRepository {
	private repository: Repository<Solicitations>;

	constructor() {
		this.repository = AppDataSource.getRepository(Solicitations);
	}

	async create({
		id,
		name,
		description,
		user_id,
		is_open = true,
		reply = "",
	}: ICreateSolicitationsDTO): Promise<Solicitations> {
		const solicitation = this.repository.create({
			id,
			name,
			description,
			user_id,
			is_open,
			reply,
		});
		return await this.repository.save(solicitation);
	}

	async findByName(name: string): Promise<Solicitations> {
		return await this.repository.findOne({ where: { name } });
	}

	async list(user_id: string): Promise<Solicitations[]> {
		return await this.repository.find({ where: { user_id } });
	}

	async findById(id: string): Promise<Solicitations> {
		return this.repository.findOne({ where: { id } });
	}

	async listAll(): Promise<Solicitations[]> {
		return await this.repository.find();
	}
}

export { SolicitationsRepository };
