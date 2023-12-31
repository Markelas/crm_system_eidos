# Тестовое задание на позицию Frontend разработчика. 

[Посмотреть рабочий проект](https://crm-system-eidos.vercel.app/)

## Требования:
- Сверстать страницу по макету из Figma. Кроме основного можно использовать и другие средства разработки.
- Сделать левую колонку меню сворачиваемой
- При нажатие на колонку таблицы должна выполняться сортировка
- Кнопки пагинации должны быть рабочими
- Поиск по названию модуля рабочий

## Ход выполнения:
Первоначально был выполнен sidebar, для него в state (vuex) были созданны переменные collapsed, с boolean значением, означающий состояние sidebar'а (открыт или закрыт). Далее, SIDEBAR_WIDTH - ширина развёрнутого sidebar'а и SIDEBAR_WIDTH_COLLAPSED - свёрнутого. Далее для переключения состояния sidebar'a использована мутация toggleSidebar. И добавленно вычисляемое свойство sidebarWidthChange, где в зависимости от состояния collapsed менялась ширина sidebar'а. В состоянии свёрнутого сайдбара, скрываем элементы списка, полное название компании и информацию о пользователе, оставляя только иконки. Далее, используя предоставленный JSON файл, в Vuex, в actions мы делаем запрос в этот файл, размещаем полученный ответ в state - массив tableData. В качестве таблицы для базы данных использовал элементы из библиотеки Vuetify. В компоненте "TableMain.vue" мы проходимся по массиву с объектами, изменяем их, согласно макету и формируем каждую строчку как объект, формируем новый массив, с корректными и нужными для нас данными и передаем в компонент библиотеки. Далее, добавляем пагинацию страниц, с помощью тега v-pagination, из библиотеки Vuetify, передаём информацию о количестве страниц (за это отвечает вычисляемое свойство pageCount, берется длина массива и делится на количество отображаемых элементов в таблице). И отслеживаем изменения с помощью @update, при клике на страницу в элементе пагинации - мы открываем нужную. Затем формируем под макет, добавляем кнопки, которые при клике могут открывать модальное окно. Завершающий этап - изменяем ширину страницы, в зависимости от состояния sidebar'а, отслеживая collapsed.
## UPD: 27.11.2023 добавил модальное окно с формой, для внесения новой записи об учебной сессии.
Чтобы обновлять список сессий, необходимо было оживить кнопку "Создать", при клике на нее, открывается модальное окно с полями: Название учебного модуля, Дата и время, Тип сессии (селектор), комната и группа. Если не будет заполнено какое-либо из полей выйдет уведомление об этом. Отображение окна связал с boolean переменной, и с помощью созданного метода pushNewSession, добавил возможность открывать и закрывать его кнопками на странице. Валидацию даты реализовал с помощью библиотеки moment, сравнивая текущую дату и введеную, если выбрана прошедшая дата - выходит ошибка.

![image](https://github.com/Markelas/crm_system_eidos/assets/95120171/43b07e9e-c9ec-4b37-bcbb-f777b1498c10)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
