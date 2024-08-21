# Magic

CREATE TABLE DECK (
ID_Deck               INT PRIMARY KEY AUTO_INCREMENT,
Tipo                  VARCHAR(120) NOT NULL,
Cores                 VARCHAR(100) NOT NULL,
ARTEFATOS             INT,
ENCANTAMENTOS         INT,
FEITIÇOS              INT,
MAGICA_INSTANTANEA    INT,
TERRENO               INT,
PLANINALTA            INT,
COMANDANTE            INT
);



