import { api } from "./api";
import { Pedido } from "../models/Pedido";

export const criarPedido = async (pedido: Pedido) => {
  const response = await api.post("/pedidos", pedido);
  return response.data;
};

export const listarPedidos = async () => {
  const response = await api.get("/pedidos");
  return response.data;
};