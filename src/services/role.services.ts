import { Role } from "../entity/Role";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

class RoleService {
    private repository: Repository<Role>;

    constructor() {
        this.repository = AppDataSource.getRepository(Role)
    }

    public async create(role: Role): Promise<Role> {
        return this.repository.create(role);
    }
    public async get(id: number): Promise<Role> {
        return this.repository.findOneBy({ id: id });
    }

    public async delete(id: number): Promise<String> {
        this.repository.delete({ id: id });
        return 'OK'
    }

    public async getAll(): Promise<Role[]> {
        return this.repository.find();
    }

}
export default RoleService;