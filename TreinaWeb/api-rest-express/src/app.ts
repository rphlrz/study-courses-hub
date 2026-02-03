import express, { type Request, type Response } from "express";

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", router);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is running!" });
});

router.get("/books", (req: Request, res: Response) => {
    const books = [
        {
            id: 1,
            title: "Book 1",
            author: "Author 1",
        },
        {
            id: 2,
            title: "Book 2",
            author: "Author 2",
        },
    ];
    res.status(200).json(books);
});

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});