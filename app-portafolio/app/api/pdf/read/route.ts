export async function POST() {
    try {
        return Response.json({ message: "PDF readed" }, { status: 200 })
    } catch (error: unknown) {
        return Response.json({ message: (error as Error).message }, { status: 500 })
    }
}
