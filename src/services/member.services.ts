import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { Member } from "../entity/Member";

class MemberService {
    private repository: Repository<Member>;

    constructor() {
        this.repository = AppDataSource.getRepository(Member)
    }

    public async create(cargo: Member): Promise<Member> {
        return this.repository.create(cargo);
    }
    public async get(id: number): Promise<Member> {
        return this.repository.findOneBy({ id: id });
    }
    
    public async delete(id: number): Promise<String> {
        this.repository.delete({ id: id });
        return 'OK'
    }

    public async getAll(): Promise<Member[]> {
        return this.repository.find();
    }

}
export default MemberService;