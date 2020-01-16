'use strict'
var shopName ='Компьютеры и комплектующие';
var tableHeader = ['Наименование товара', 'Производитель', 'Цена за шт.','Количество на складе', 'Код товара', 'Действие'];
var productArr = [  
    {name:'Материнская плата', vendor:'Gigabyte', prise:150, inStock:8, productCode:1001},
    {name:'Оперативная память', vendor:'Kingston', prise:100, inStock:16, productCode:1002},
    {name:'Процессор', vendor:'AMD', prise:230, inStock:8, productCode:1003},
    {name:'Видеокарта', vendor:'MSI', prise:300, inStock:8, productCode:1004},
    {name:'Блок питания', vendor:'beQuiet', prise:320, inStock:8, productCode:1005},
    {name:'Корпус', vendor:'Zalman', prise:165, inStock:8, productCode:1006}, 
]
ReactDOM.render(
  React.createElement(ShopFullTable,{shop: shopName, header: tableHeader, product: productArr}),
  document.getElementById('products')
);