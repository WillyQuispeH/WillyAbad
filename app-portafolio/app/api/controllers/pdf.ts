import { Response, Request } from "express"

const read = async (req: Request, res: Response) => {
    try {

        return res.status(200).json({ message: "PDF readed" })
    } catch (error: unknown) {
        return res.status(500).json({ message: (error as Error).message })

    }
}

export { read }