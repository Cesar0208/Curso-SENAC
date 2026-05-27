import {render, screen} from "@testing-library/react"
import Button from "../components/Button"
import { describe, expect } from "vitest"

describe("Button", () => {
    it("Renderiza o texto recebido via props", () => {
        render(<Button text="Agende uma consulta" />)

        expect(screen.getByRole("button", { name: "Agende uma consulta"})).toBeInTheDocument();
    });
});