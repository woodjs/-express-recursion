-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 25 2022 г., 15:45
-- Версия сервера: 8.0.19
-- Версия PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `recidents`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cities`
--

CREATE TABLE `cities` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `data` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `cities`
--

INSERT INTO `cities` (`id`, `name`, `data`) VALUES
(1, 'Москва', '10000000'),
(2, 'Воронеж', '1000000'),
(3, 'Санкт-Петербург', '3000000');

-- --------------------------------------------------------

--
-- Структура таблицы `groups`
--

CREATE TABLE `groups` (
  `id` int NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `groups`
--

INSERT INTO `groups` (`id`, `type`) VALUES
(1, 'city'),
(2, 'district'),
(3, 'street');

-- --------------------------------------------------------

--
-- Структура таблицы `groups_name`
--

CREATE TABLE `groups_name` (
  `id` int NOT NULL,
  `groupId` int NOT NULL,
  `parentId` int DEFAULT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `groups_name`
--

INSERT INTO `groups_name` (`id`, `groupId`, `parentId`, `name`) VALUES
(1, 1, NULL, 'Москва г.'),
(2, 1, NULL, 'Воронеж г.'),
(3, 1, NULL, 'Санкт-Петербург г.'),
(4, 2, 1, 'Пресненский р-н'),
(5, 2, 1, 'Коптево р-н'),
(6, 2, 1, 'Отрадное р-н'),
(7, 2, 5, 'Коптевская ул'),
(8, 2, 5, 'Нарвская ул.'),
(9, 2, 6, 'Сигнальный проезд'),
(10, 2, 4, 'Гашека ул.'),
(11, 2, 4, 'Рочдельская ул.'),
(12, 2, 6, 'Отрадная ул.'),
(13, 2, 2, 'Советский р-н'),
(14, 2, 2, 'Центральный р-н'),
(15, 2, 13, 'Патриотов пр-т'),
(16, 2, 13, 'Кривошеина ул.'),
(17, 2, 14, 'Ленина ул.'),
(18, 2, 14, 'Рабочий пр-т'),
(19, 2, 3, 'Выборгский р-н'),
(20, 2, 3, 'Фрунзенский р-н'),
(21, 2, 19, 'Светлановский пр-т'),
(22, 2, 19, 'Орбели ул.'),
(23, 2, 20, 'Лиговский пр-т\"'),
(24, 2, 20, 'Воронежская ул.');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `cityId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `cityId`) VALUES
(1, 'Анна', 1),
(2, 'Степан', 1),
(3, 'Виктор', 1),
(4, 'Григорий', 2),
(5, 'Алексей', 1),
(6, 'Ярослав', 1),
(7, 'Антонина', 1),
(8, 'Владимир', 2),
(9, 'Александр', 2),
(10, 'Василий', 2),
(11, 'Яков', 3),
(12, 'Виктория', 3),
(13, 'Николай', 3),
(14, 'Валентин', 3),
(15, 'Михаил', 1),
(16, 'Арсений', 1),
(17, 'Варвара', 1),
(18, 'Вячеслав', 1),
(19, 'Владислав', 1),
(20, 'Светлана', 3),
(21, 'Константин', 3),
(22, 'Мирослава', 3),
(23, 'Семен', 3),
(24, 'Ульяна', 3),
(25, 'Влада', 3),
(26, 'Наталья', 3),
(27, 'Ирина', 3),
(28, 'Кира', 3),
(29, 'Роман', 1),
(30, 'Иван', 1),
(31, 'Антон', 2),
(32, 'Томара', 2),
(33, 'Юлия', 2),
(34, 'Петр', 2),
(35, 'Елена', 2),
(36, 'Валентина', 2),
(37, 'Татьяна', 2),
(38, 'Ян', 3),
(39, 'Ольга', 3),
(40, 'Анатолий', 3),
(41, 'Степан', 1),
(42, 'Павел', 1),
(43, 'Григорий', 1),
(44, 'Валерий', 1),
(45, 'Леонид', 1),
(46, 'Тимофей', 1),
(47, 'Олег', 1),
(48, 'Олег', 3),
(49, 'Дмитрий', 2),
(50, 'Жан', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `user_groups`
--

CREATE TABLE `user_groups` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `nameId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user_groups`
--

INSERT INTO `user_groups` (`id`, `userId`, `nameId`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 1, 4),
(4, 1, 10),
(5, 2, 4),
(6, 2, 11),
(7, 3, 1),
(8, 3, 5),
(9, 3, 8),
(10, 4, 2),
(11, 4, 13),
(12, 4, 15),
(13, 5, 1),
(14, 5, 5),
(15, 6, 1),
(16, 6, 6),
(17, 6, 9),
(18, 7, 1),
(19, 7, 6),
(20, 7, 12),
(21, 8, 2),
(22, 8, 14),
(23, 8, 17),
(24, 10, 2),
(25, 10, 14),
(26, 10, 18),
(27, 11, 3),
(28, 11, 19),
(29, 11, 21),
(30, 9, 2),
(31, 9, 13),
(32, 9, 16),
(33, 12, 3),
(34, 12, 19),
(35, 12, 22),
(36, 13, 3),
(37, 13, 20),
(38, 14, 3),
(39, 14, 20),
(40, 14, 24),
(41, 15, 1),
(42, 15, 4),
(43, 15, 10),
(44, 16, 1),
(45, 16, 4),
(46, 16, 10),
(47, 17, 1),
(48, 17, 4),
(49, 17, 11),
(50, 18, 1),
(51, 18, 6),
(52, 18, 9),
(53, 19, 1),
(54, 19, 6),
(55, 19, 9),
(56, 20, 3),
(57, 20, 19),
(58, 20, 21),
(59, 21, 3),
(60, 21, 19),
(61, 21, 22),
(62, 22, 3),
(63, 22, 19),
(64, 22, 22),
(65, 23, 3),
(66, 23, 20),
(67, 24, 3),
(68, 24, 20),
(69, 25, 3),
(70, 25, 20),
(71, 26, 3),
(72, 26, 20),
(73, 26, 24),
(74, 27, 3),
(75, 27, 20),
(76, 27, 24),
(77, 28, 3),
(78, 28, 20),
(79, 28, 24),
(80, 33, 2),
(81, 33, 14),
(82, 33, 18),
(83, 29, 1),
(84, 29, 5),
(85, 29, 8),
(86, 30, 1),
(87, 30, 5),
(88, 30, 8),
(89, 31, 2),
(90, 31, 13),
(91, 31, 15),
(92, 32, 2),
(93, 32, 13),
(94, 32, 15),
(95, 38, 3),
(96, 38, 19),
(97, 38, 22),
(98, 34, 2),
(99, 34, 14),
(100, 34, 18),
(101, 35, 2),
(102, 35, 14),
(103, 35, 18),
(104, 36, 2),
(105, 36, 14),
(106, 36, 18),
(107, 37, 2),
(108, 37, 14),
(109, 37, 18),
(110, 39, 3),
(111, 39, 19),
(112, 39, 22),
(113, 40, 3),
(114, 40, 19),
(115, 40, 22),
(116, 41, 1),
(117, 41, 4),
(118, 41, 10),
(119, 42, 1),
(120, 42, 4),
(121, 42, 10),
(122, 43, 1),
(123, 43, 4),
(124, 43, 10),
(125, 44, 1),
(126, 44, 6),
(127, 44, 9),
(128, 45, 1),
(129, 45, 5),
(130, 45, 8),
(131, 46, 1),
(132, 46, 5),
(133, 46, 8),
(134, 47, 1),
(135, 47, 5),
(136, 47, 8),
(137, 48, 3),
(138, 48, 20),
(139, 49, 2),
(140, 49, 13),
(141, 49, 16),
(142, 50, 1),
(143, 50, 5);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `groups_name`
--
ALTER TABLE `groups_name`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groupId` (`groupId`),
  ADD KEY `parentId` (`parentId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cityId` (`cityId`);

--
-- Индексы таблицы `user_groups`
--
ALTER TABLE `user_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `nameId` (`nameId`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `groups_name`
--
ALTER TABLE `groups_name`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT для таблицы `user_groups`
--
ALTER TABLE `user_groups`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `groups_name`
--
ALTER TABLE `groups_name`
  ADD CONSTRAINT `groups_name_ibfk_1` FOREIGN KEY (`groupId`) REFERENCES `groups` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `groups_name_ibfk_2` FOREIGN KEY (`parentId`) REFERENCES `groups_name` (`id`) ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`cityId`) REFERENCES `cities` (`id`) ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `user_groups`
--
ALTER TABLE `user_groups`
  ADD CONSTRAINT `user_groups_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_groups_ibfk_2` FOREIGN KEY (`nameId`) REFERENCES `groups_name` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
