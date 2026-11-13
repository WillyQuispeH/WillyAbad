import { Router } from "express"
import * as pdfControlles from "../controllers/pdf"

const routerPDF = Router()

routerPDF.post("/read", pdfControlles.read)

export default routerPDF