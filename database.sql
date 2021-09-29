DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(
    id INT AUTO_INCREMENT
    , username VARCHAR (50)
    , email VARCHAR (50)
    , password VARCHAR (50)
    , dateInscription DATE
    , ip INT
    , points INT
    ,PRIMARY KEY (id)
);


DROP TABLE IF EXISTS JEUX;
CREATE TABLE JEUX(
    id INT AUTO_INCREMENT
    , nom VARCHAR (50)
    , regles VARCHAR (255)
    , PRIMARY KEY (id)
);

DROP TABLE IF EXISTS QUESTIONS;
CREATE TABLE QUESTIONS(
    id INT AUTO_INCREMENT
    , questions VARCHAR (255)
    , reponses VARCHAR (255)
    , PRIMARY KEY (id)
);




DROP TABLE IF EXISTS CLASSEMENT_JEU1;
CREATE TABLE CLASSEMENT_JEU1(
    id INT AUTO_INCREMENT
    , id_joueur INT
    , id_jeu INT
    , precision INT
    , temps INT
    , mpm INT
    , PRIMARY KEY (id)
    , CONSTRAINT fk_classementJeu1_users FOREIGN KEY (id_joueur) REFERENCES USERS(id)
    , CONSTRAINT fk_classementJeu1_jeu FOREIGN KEY (id_jeu) REFERENCES JEUX(id)
);

DROP TABLE IF EXISTS CLASSEMENT_JEU2;
CREATE TABLE CLASSEMENT_JEU2(
    id INT AUTO_INCREMENT
    , id_joueur INT
    , id_jeu INT
    , precision INT
    , temps INT
    , mpm INT
    , PRIMARY KEY (id)
    , CONSTRAINT fk_classementJeu2_users FOREIGN KEY (id_joueur) REFERENCES USERS(id)
    , CONSTRAINT fk_classementJeu2_jeu FOREIGN KEY (id_jeu) REFERENCES JEUX(id)
);

DROP TABLE IF EXISTS CLASSEMENT_JEU3;
CREATE TABLE CLASSEMENT_JEU3(
    id INT AUTO_INCREMENT
    , id_joueur INT
    , id_jeu INT
    , precision INT
    , temps INT
    , mpm INT
    , PRIMARY KEY (id)
    , CONSTRAINT fk_classementJeu3_users FOREIGN KEY (id_joueur) REFERENCES USERS(id)
    , CONSTRAINT fk_classementJeu3_jeu FOREIGN KEY (id_jeu) REFERENCES JEUX(id)
);
