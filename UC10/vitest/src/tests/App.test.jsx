import {render, screen} from "@testing-library/react";
import App from "../App";
import { describe } from "vitest";

describe("App", () => {
    it("Rendeiriza as seções principais", () => {
        render(<App />);

        expect(screen.getByRole("heading", { name: /áreas de Atuação/i})).toBeInTheDocument();
        expect(screen.getAllByRole("heading", { name: /direito civil/i})).toBeInTheDocument();
        expect(screen.getAllByRole("heading", { name: /direito trabalhista/i})).toBeInTheDocument();
        expect(screen.getAllByRole("heading", { name: /direito empresarial/i})).toBeInTheDocument();
    });
});