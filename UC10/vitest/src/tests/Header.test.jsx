import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { describe, expect } from "vitest";

describe("Header", () => {
    it("Rendeiriza o nome do escritorio e os links principais", () => {
        render (<Header />);

        expect(screen.getByRole("heading", { name: "Oliveira & Mendes Advocacia" })).toBeInTheDocument();

        expect(screen.getByRole("link", { name: "Início" })).toBeInTheDocument();

        expect(screen.getByRole("link", { name: "Áreas de Atuação" })).toBeInTheDocument();

        expect(screen.getByRole("link", { name: "Sobre" })).toBeInTheDocument();

        expect(screen.getByRole("link", { name: "Contato" })).toBeInTheDocument();
    });
});