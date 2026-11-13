import React from 'react'

interface TestProps {
    id: string
}

interface DataNew {
    name: string,
    parternalLastName: string,
    maternalLastName: string
}

type DatanewOmit = Omit<DataNew, "maternalLastName">

type DatanewPick = Pick<DataNew, "name">

type DatanewPartial = Partial<DataNew>

type DantaNwerecord<T> = Record<string, T>

interface Extendido {
    year: number
}

interface TestPropsNuevo<T> {
    operaciont: number,
    result: T
}

const data: TestPropsNuevo<Extendido> = {
    operaciont: 1,
    result: { year: 2026 }
}

const Test = ({ id }: TestProps) => {

    const dataNew = async (name: string): Promise<{ success: boolean, data: DatanewPartial, error: string | null }> => {

        try {
            return { success: false, data: { name }, error: "Error" }
        } catch (error: unknown) {

            return { success: false, data: { name: "" }, error: (error as Error).message }
        }
    }

    const handleTData = async (info: string): Promise<{ result: string }> => {
        return { result: info }
    }


    const hanmdleDta = <T,>(data: T): T => {
        return data
    }



    const handlePrueba = async (): Promise<{ result: string }> => {
        return { result: "Willy" }
    }


    const resul = async (): Promise<{ result: string }> => {
        return { result: "" }
    }

    const hamdlet = <T,>(data: T): T => {
        return data
    }


    const pryuebas = async <T,>(data: T): Promise<T> => {
        return data
    }

    const pruebasAsnvcorn = async (res: string): Promise<string> => {



        const [resultq, results] = await Promise.all([
            pryuebas({ name: "Willy" }),
            pruebasAsnvcorn("abad")
        ])

        console.log(resultq, results)


        return res
    }



    return (
        <div>{id}
            <div>
                <button onClick={() => { dataNew("Willy"); handleTData("Willy") }}>Click</button>
            </div>
        </div>
    )
}

export default Test