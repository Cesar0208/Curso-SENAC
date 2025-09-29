-- Clientes Inativos: Listar os usuários cadastrados que nunca realizaram um pedido.
select * from usuarios u
left join pedidos p on u.id = p.usuario_id
where p.id is null;
    