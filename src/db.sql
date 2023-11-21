CREATE TABLE Produto (
    ProdutoID INT PRIMARY KEY,
    Nome VARCHAR(255),
    Imagem VARCHAR(255),
    Valor DECIMAL(10, 2)
);

CREATE TABLE Categoria (
    CategoriaID INT PRIMARY KEY,
    Nome VARCHAR(255)
);

CREATE TABLE Carrinho (
    CarrinhoID INT PRIMARY KEY,
    ProdutoID INT,
    Quantidade INT,
    Total DECIMAL(10, 2),
    FOREIGN KEY (ProdutoID) REFERENCES Produto(ProdutoID)
);

CREATE TABLE ProdutoCategoria (
    ProdutoID INT,
    CategoriaID INT,
    PRIMARY KEY (ProdutoID, CategoriaID),
    FOREIGN KEY (ProdutoID) REFERENCES Produto(ProdutoID),
    FOREIGN KEY (CategoriaID) REFERENCES Categoria(CategoriaID)
);

INSERT INTO Categoria (CategoriaID, Nome) VALUES
(1, 'Computadores'),
(2, 'Periféricos'),
(3, 'Acessórios');

---inserindo itens

INSERT INTO Produto (ProdutoID, Nome, Imagem, Valor) VALUES
(0, 'COMPUTADOR GAMER', './assents/img/1pcgamer.jpeg', 3999.99),
(1, 'FONTE GAMER', './assents/img/2fontegamer.jpeg', 1999.99),
(2, 'Monitor', './assents/img/3monitor.jpeg', 2999.99),
(3, 'Teclado Mecânico', './assents/img/4tecladogamer.jpeg', 149.99),
(4, 'Mouse Gamer', './assents/img/5mousegamer.jpeg', 79.99),
(5, 'Headset Gamer', './assents/img/6headsetgamer.jpeg', 299.99),
(6, 'Cadeira Gamer', './assents/img/7cadeiragamer.jpeg', 599.99),
(7, 'Placa de Vídeo', './assents/img/8placadevideo.jpeg', 999.99),
(8, 'SSD 1TB', './assents/img/9ssd.jpeg', 199.99),
(9, 'Webcam HD', './assents/img/10webcamhd.jpeg', 49.99),
(10, 'Impressora Laser', './assents/img/11impressora.jpeg', 299.99),
(11, 'Roteador Wi-Fi', './assents/img/12roteadorwifi.jpeg', 59.99),
(12, 'Caixa de Som Bluetooth', './assents/img/13caixadesombluetooth.jpeg', 79.99),
(13, 'Monitor Ultrawide', './assents/img/14monitorultrawide.jpeg', 499.99),
(14, 'Impressora 3D', './assents/img/15impressora3d.jpeg', 399.99),
(15, 'Câmera DSLR', './assents/img/16cameradsrl.jpeg', 899.99),
(16, 'Microfone USB', './assents/img/17microfone.jpeg', 59.99),
(17, 'Mochila Gamer', './assents/img/18mochila.jpeg', 29.99),
(18, 'Cooler RGB', './assents/img/19cooler.jpeg', 19.99),
(19, 'Tapete para Mouse', './assents/img/20tapete.jpeg', 9.99);

INSERT INTO ProdutoCategoria (ProdutoID, CategoriaID) VALUES
(0, 1),
(1, 2)

INSERT INTO Carrinho (CarrinhoID, ProdutoID, Quantidade, Total) VALUES
(1, 0, 2, 7999.98), 
(2, 3, 1, 149.99); 

--consultas
SELECT Produto.Nome, Produto.Valor
FROM Produto
JOIN ProdutoCategoria ON Produto.ProdutoID = ProdutoCategoria.ProdutoID
WHERE ProdutoCategoria.CategoriaID = 1;

SELECT Produto.Nome, Carrinho.Quantidade, Carrinho.Total
FROM Carrinho
JOIN Produto ON Carrinho.ProdutoID = Produto.ProdutoID
WHERE Carrinho.CarrinhoID = 1;

SELECT produto.nome, produto.valor
FROM produto
WHERE ProdutoID= 5;