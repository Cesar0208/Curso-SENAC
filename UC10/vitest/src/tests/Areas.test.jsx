import { render, screen } from "@testing-library/react";
import Areas from "../sections/Areas";
import { expect} from "vitest";

describe("Areas", () => {
    it("Rendeiriza o título e os cards de áreas de atuação", () => {
        render (<Areas />);

        expect(screen.getByRole("heading", { name: /Áreas de Atuação/i})).toBeInTheDocument();
        expect(screen.getAllByRole("heading", { name: /Direito Civil/i})).toBeInTheDocument();
        expect(screen.getAllByRole("heading", { name: /Direito Trabalhista/i})).toBeInTheDocument();
        expect (screen.getAllByRole("heading", { name: /Direito Empresarial/i})).toßeInTheDocument();
    });
});