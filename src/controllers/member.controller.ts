import { Request, Response } from "express";
import CargoService from "../services/role.services";
import { Member } from "../entity/Member";
import MemberService from "../services/member.services";

export class MemberController {
    private static instance: MemberController;
    private service: MemberService;
    constructor() {
        this.service = new MemberService;
    }

    public static getInstance(): MemberController {
        if (!this.instance) {
            this.instance = new MemberController();
        }
        return this.instance;
    }


    public async create(req: Request, res: Response): Promise<void> {
        try {
            const memberData: Member = req.body;
            const newMember = await this.service.create(memberData);
            res.status(201).json(newMember);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar o membro' });
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const members = await this.service.getAll();
            res.json(members);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar membros' });
        }
    }

    public async get(req: Request, res: Response): Promise<void> {
        try {
            const member = await this.service.get(parseInt(req.params.id, 10));
            res.json(member);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar membro' });
        }
    }
}
