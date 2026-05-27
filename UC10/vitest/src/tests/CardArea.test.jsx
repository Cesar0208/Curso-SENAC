import {render} from "@testing-library/react"
import CardArea from "../components/CardArea"
import { describe, expect } from "vitest"

describe("CardArea", () => {
    it("Rendeiriza o título e a descrição recebidos via props", () => {
    render(<CardArea titulo="Titulo do Card" descricao="Descrição do Card"/>);

    expect(screen.getByRole("heading", { name: "Título do Card" })).toBeInTheDocument();
    expect(screen.getByText("Descrição do Card")).toBeInTheDocument();
    });
});