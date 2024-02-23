import { Request, Response } from "express";
import { Role } from "../entity/Role";
import RoleService from "../services/role.services";

export class RoleController {
    private static instance: RoleController;
    private service: RoleService;
    constructor() {
        this.service = new RoleService;
    }

    public static getInstance(): RoleController {
        if (!this.instance) {
            this.instance = new RoleController();
        }
        return this.instance;
    }


    public async create(req: Request, res: Response): Promise<void> {
        try {
            const roleData: Role = req.body;
            const newRole = await this.service.create(roleData);
            res.status(201).json(newRole);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar o cargo' });
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const roles = await this.service.getAll();
            res.json(roles);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar cargos' });
        }
    }

    public async get(req: Request, res: Response): Promise<void> {
        try {
            const role = await this.service.get(parseInt(req.params.id, 10));
            res.json(role);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar cargo' });
        }
    }
}
