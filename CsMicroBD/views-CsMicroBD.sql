USE CsMicroBD;

SELECT * FROM Servico;

CREATE VIEW VW_TipoProduto AS
	SELECT * FROM TipoProduto;

CREATE VIEW VW_Servico AS
	SELECT * FROM Servico;
    
CREATE VIEW VW_Marca AS
	SELECT * FROM Marca;