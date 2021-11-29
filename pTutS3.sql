-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
<<<<<<< HEAD
-- Généré le : lun. 29 nov. 2021 à 10:36
=======>>>>>>> c82c64b22acf8d3fe5c19da55ceeeb2970da2a5d
-- Version du serveur : 8.0.27-0ubuntu0.20.04.1
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pTutS3`
--

-- --------------------------------------------------------

--
-- Structure de la table `answers`
--

CREATE TABLE `answers` (
  `id` int NOT NULL,
  `reponse` text NOT NULL,
  `isCorrect` tinyint(1) NOT NULL,
  `id_question` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jeux`
--

CREATE TABLE `jeux` (
  `id` int NOT NULL,
  `temps` int NOT NULL,
  `taux_err` int NOT NULL,
<<<<<<< HEAD
  `question` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
=======
  `questions` text NOT NULL,
  `propositions` text NOT NULL,
>>>>>>> c82c64b22acf8d3fe5c19da55ceeeb2970da2a5d
  `type` varchar(100) NOT NULL,
  `jeux_id` int NOT NULL,
  `categorie_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `questions_categorie`
--

CREATE TABLE `questions_categorie` (
  `id` int NOT NULL,
  `categorie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `questions_categorie`
--

INSERT INTO `questions_categorie` (`id`, `categorie`) VALUES
(1, '[value-2]');

-- --------------------------------------------------------

--
-- Structure de la table `question_depart`
--

CREATE TABLE `question_depart` (
  `id` int NOT NULL,
  `question` text NOT NULL,
  `reponse` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `type_jeux`
--

CREATE TABLE `type_jeux` (
  `id` int NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
<<<<<<< HEAD
  `dateInscription` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
=======
  `dateIncription` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
>>>>>>> c82c64b22acf8d3fe5c19da55ceeeb2970da2a5d
  `ip` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user_jeu`
--

CREATE TABLE `user_jeu` (
  `id_user` int NOT NULL,
  `id_jeu` int NOT NULL,
  `points` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_question_id_on_jeux_id` (`id_question`);

--
-- Index pour la table `jeux`
--
ALTER TABLE `jeux`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_codeATrouJeux_id_on_jeux_id` (`jeux_id`),
  ADD KEY `fk_codeATrouCategorie_id_on_questions_categorie_id` (`categorie_id`);

--
-- Index pour la table `questions_categorie`
--
ALTER TABLE `questions_categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `question_depart`
--
ALTER TABLE `question_depart`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type_jeux`
--
ALTER TABLE `type_jeux`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_jeu`
--
ALTER TABLE `user_jeu`
  ADD KEY `fk_id_jeu_on_jeux_id` (`id_jeu`),
  ADD KEY `fk_user_id_on_user_id` (`id_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jeux`
--
ALTER TABLE `jeux`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `questions_categorie`
--
ALTER TABLE `questions_categorie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `question_depart`
--
ALTER TABLE `question_depart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `type_jeux`
--
ALTER TABLE `type_jeux`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `fk_question_id_on_jeux_id` FOREIGN KEY (`id_question`) REFERENCES `jeux` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `jeux`
--
ALTER TABLE `jeux`
  ADD CONSTRAINT `fk_codeATrouCategorie_id_on_questions_categorie_id` FOREIGN KEY (`categorie_id`) REFERENCES `questions_categorie` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_codeATrouJeux_id_on_jeux_id` FOREIGN KEY (`jeux_id`) REFERENCES `type_jeux` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `user_jeu`
--
ALTER TABLE `user_jeu`
  ADD CONSTRAINT `fk_id_jeu_on_jeux_id` FOREIGN KEY (`id_jeu`) REFERENCES `jeux` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_user_id_on_user_id` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
