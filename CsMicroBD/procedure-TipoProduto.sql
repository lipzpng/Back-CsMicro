DROP PROCEDURE IF EXISTS SP_Ins_TipoProduto;
DROP PROCEDURE IF EXISTS SP_Del_TipoProduto;
DROP PROCEDURE IF EXISTS SP_Up_TipoProduto;
USE CsMicroBD;

-- CREATE ------------------------------------------------------------------
delimiter //
create procedure SP_Ins_TipoProduto(
	in descricao varchar(500),
    out message varchar(50)
)
begin 
  if (exists (select desc_tipo
            from TipoProduto 
            where desc_tipo = descricao))
            then
    set message = 'Esse tipo já existe no banco de dados';
  else
    insert into TipoProduto (descricao)
    values(desc_tipo);
    set message = 'Tipo inserido com sucessso';
  end if;
end//
delimiter ;

-- DELETE ------------------------------------------------------------------
delimiter //
create procedure SP_Del_TipoProduto(
	in id_tipoproduto int,
    out message varchar(50)
)
begin
	DELETE FROM TipoProduto
	WHERE id_tipo = id_tipoproduto;
    set message = 'TipoProduto deletado com sucessso';
end//
delimiter ;

-- UPDATE ------------------------------------------------------------------
delimiter //
create procedure SP_Up_TipoProduto(
	in desc_alterado varchar(100),
	in id_alteracao int,
	out message varchar(50)
)
begin    
    if (exists (select id_tipo
            from TipoProduto 
            where id_tipo = id_alteracao))
            then
    UPDATE TipoProduto
	SET
    desc_tipo = desc_alterado
	WHERE id_tipo = id_alteracao;
    set message = 'TipoProduto alterado com sucessso';
  else
    set message = 'TipoProduto não existe';
  end if;
end//
delimiter ;