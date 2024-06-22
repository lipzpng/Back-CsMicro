DROP PROCEDURE IF EXISTS SP_Ins_Servico;
DROP PROCEDURE IF EXISTS SP_Del_Servico;
DROP PROCEDURE IF EXISTS SP_Up_Servico;
USE CsMicroBD;

-- CREATE ------------------------------------------------------------------
delimiter //
create procedure SP_Ins_Servico(
	in titulo varchar(100),
	in descricao varchar(500),
	in img varchar(100),
	in ordm_apresenta integer,
    in url varchar(100),
    in ativo boolean,
    out message varchar(50)
)
begin 
  if (exists (select titulo 
            from Servico 
            where Servico.titulo = titulo))
            then
    set message = 'Esse servico já existe no banco de dados';
  else
    insert into Servico (titulo, desc_servico, img, ordem_apresentacao, url, ativo)
    values(titulo, descricao, img, ordm_apresenta, url, ativo);
    set message = 'Servico inserida com sucessso';
  end if;
end//
delimiter ;

-- DELETE ------------------------------------------------------------------
delimiter //
create procedure SP_Del_Servico(
	in id_alteracao int,
	in altera_ativo boolean,
	out message varchar(50)
)
begin 
    UPDATE Servico
	SET ativo = altera_ativo
	WHERE id_servico = id_alteracao;
    set message = 'Servico deletado com sucessso';
end//
delimiter ;

-- UPDATE ------------------------------------------------------------------
delimiter //
create procedure SP_Up_Servico(
	in tit_alterado varchar(100),
	in desc_alterado varchar(500),
	in img_alterado varchar(100),
	in ordm_alterado int,
	in url_alterado varchar(100),
	in id_alteracao int,
	out message varchar(50)
)
begin    
--     if (exists (select id_servico 
--             from Servico 
--             where id_servico = id_alteracao))
--             then
    UPDATE Servico
	SET
    titulo = tit_alterado,
	desc_servico = desc_alterado,
	img = img_alterado,
	ordem_apresentacao = ordm_alterado,
	url = url_alterado
	WHERE id_servico = id_alteracao;
    set message = 'Servico alterado com sucessso';
--   else
--     set message = 'Servico não existe';
--  end if;
end//
delimiter ;