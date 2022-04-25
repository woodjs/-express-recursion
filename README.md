# express-recursion
Стек: ExpressJS, MySQL + ORM Sequelize

## Установка и запуск проекта
`git clone https://github.com/woodjs/express-recursion.git`<br><br>
` cd express-recursion`<br>
<br>
Измените учетные данные базы данных MySQL в `.env`<br><br>
` npm install`<br><br>

Если не хотите импортировать файл `data.sql` в БД, то запустите команду ` npm run dev`<br> 
В ином случае импортируйте в таблицу файл `data.sql` и запустите команду `npm run start`<br> 
<br>
Порт по умолчанию: 5000<br>
url: http://localhost:5000/

## Примеры

### Результат
![image](https://user-images.githubusercontent.com/45289944/165083162-d7956ffa-90e4-4474-9c19-e0c2ff5630b4.png)

### Тултип при наведений
![image](https://user-images.githubusercontent.com/45289944/165083287-9bc91340-f5fb-44f9-861d-7287b9d5ad75.png)
![image](https://user-images.githubusercontent.com/45289944/165083225-05e21ee1-9e5c-4367-9ece-8f6f25a59a19.png)
![image](https://user-images.githubusercontent.com/45289944/165083252-158e39f4-46b9-4f92-8ac2-4dbec313ee13.png)

### Изменить порядок вложенности
Для примера добавлю страну.
```
INSERT INTO `groups`(`type`) VALUES ('country');
INSERT INTO `groups_name`(`groupId`, `parentId`, `name`) VALUES (4, null, 'Россия');
UPDATE `groups_name` SET `parentId` = 25 WHERE `id` IN (1,2,3);
```

![image](https://user-images.githubusercontent.com/45289944/165091385-68663c78-b98f-49d0-aa3d-23e0a926a007.png)
