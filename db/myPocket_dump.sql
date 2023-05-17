-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Mag 08, 2023 alle 17:32
-- Versione del server: 10.4.18-MariaDB
-- Versione PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myPocket`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` varchar(255) DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `role`) VALUES
(1, 'test', '1234', 'me@test.it', 'Admin'),
(2, 'test2', '4567', 'me@test2.it', 'user'),
(3, 'test3', '98910', 'me@test3.it', 'user'),
(4, 'test4', 'prova', 'me@test4.it', 'user'),
(6, 'test5', 'prova', 'me@test5.it', 'user'),
(7, 'test6', '', 'me@test6.it', 'user'),
(8, 'test8', '$2b$15$CjxGyUoHIpHozaGmfWXRZO30Hd9EpmVxrSZdgcARVAUZ4KFfjzIzS', 'me@test8.it', 'user'),
(9, 'test9', '$2b$15$wxSOYDMVnIhEEdC6L9Lpp.yPWFBLViPl36HrsUPnAxXeCxIYpM8M2', 'me@test9.it', 'user'),
(10, 'test10', '$2b$15$wdEJ3K35ML4vgKWtCYnGreEd0RwIltVdJh5VEs/Md8W21F9ChMQ5i', 'me@test10.it', 'user');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_username_IDX` (`username`) USING BTREE;

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
