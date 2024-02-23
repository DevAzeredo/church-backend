import { AppDataSource } from "./data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import "reflect-metadata";
import { roleRouter } from "./routes/role.routes";
import { memberRouter } from "./routes/member.routes";
dotenv.config();

const app = express();
const { PORT = 3000 } = process.env;
app.use(express.json());
app.use("/role", roleRouter);
app.use("/member", memberRouter);

app.get("*", (req: Request, res: Response) => {
    res.status(505).json({ message: "Bad Request" });
});

AppDataSource.initialize()
    .then(async () => {
        app.listen(PORT, () => {
            console.log("Server is running on http://localhost:" + PORT);
        });
        console.log("Data Source has been initialized!");
    })
    .catch((error) => console.log(error));