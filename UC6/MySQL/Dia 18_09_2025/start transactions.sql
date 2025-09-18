START TRANSACTION;
insert into pedidos(id, usuario_id, data_pedido, status, total)
values(31, 1, now(), 'Pago', 360.00);

insert into itens_pedido(id, pedido_id, produto_id, quantidade, preco_unitario)
values(31, 31, 1, 2, 180.00);

update produtos
set estoque = estoque - 2
where id = 1;
COMMIT;

START TRANSACTION;
update pedidos
set status = 'Cancelado'
where id = 31;

update produtos
set estoque = estoque + 2
where id = 1;
COMMIT;

START TRANSACTION;
UPDATE produtos
SET preco = 900.00
WHERE categoria_id = 1;
ROLLBACK;

SELECT nome, preco FROM produtos WHERE categoria_id = 1;