DROP PROCEDURE IF EXISTS SP_Ins_Marca;
DROP PROCEDURE IF EXISTS SP_Del_Marca;
DROP PROCEDURE IF EXISTS SP_Up_Marca;
USE CsMicroBD;

-- CREATE ------------------------------------------------------------------
delimiter //
create procedure SP_Ins_Marca(
    in descricao varchar(100),
    in logo varchar(100),
    in url varchar(100),
    out message varchar(50)
)
begin 
  -- verificar se a marca já existe
  if (exists (select desc_marca 
            from Marca 
            where desc_marca = descricao))
            then
    set message = 'Essa marca já existe no banco de dados';
  else
    insert into Marca (desc_marca, logo_marca, url_marca)
    values(descricao, logo, url);
    set message = 'Marca inserida com sucessso';
  end if;
end//
delimiter ;

-- DELETE ------------------------------------------------------------------
delimiter //
create procedure SP_Del_Marca(
	in id_deletar int,
	out message varchar(50)
)
begin 
    DELETE FROM Marca
	WHERE id_marca = id_deletar;
    set message = 'Marca deletado com sucessso';
end//
delimiter ;

-- UPDATE ------------------------------------------------------------------
delimiter //
create procedure SP_Up_Marca(
	in desc_alterado varchar(500),
	in img_alterado varchar(100),
	in url_alterado varchar(100),
	in id_alteracao int,
	out message varchar(50)
)
begin    
    if (exists (select id_marca
            from Marca 
            where id_marca = id_alteracao))
            then
    UPDATE Marca
	SET
    desc_marca = desc_alterado,
	logo_marca = logo_alterado,
	url_marca = url_alterado
	WHERE id_servico = id_alteracao;
    set message = 'Marca alterado com sucessso';
  else
    set message = 'Marca não existe';
  end if;
end//
delimiter ;