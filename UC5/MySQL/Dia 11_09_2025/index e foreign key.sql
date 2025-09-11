-- Criar Indexs
create index idx_enderecos_usuarios_id on enderecos(usuario_id);

create index idx_produtos_categoria_id on produtos(categoria_id);

create index idx_pedidos_usuarios_id on pedidos(usuario_id);

create index idx_itens_pedido_pedido_id on itens_pedido(pedido_id);

create index idx_itens_pedido_produto_id on itens_pedido(produto_id);

-- Chaves Estrangeiras
alter table enderecos add constraint fk_enderecos_usuarios_id foreign key (usuario_id) references usuarios(id);

alter table produtos add constraint fk_produtos_categoria_id foreign key (categoria_id) references categorias(id); 

alter table pedidos add constraint fk_pedidos_usuarios_id foreign key (usuario_id) references usuarios(id);

alter table itens_pedido add constraint fk_itens_pedido_pedido_id foreign key (pedido_id) references pedidos(id);

alter table itens_pedido add constraint fk_itens_pedido_produto_id foreign key (produto_id) references produtos(id);
