var shopName ='Компьютеры и комплектующие';
var tableHeader = ['Наименование товара', 'Производитель', 'Цена за шт.','Количество на складе', 'Код товара'];
var productArr = [  
    {name:'Материнская плата', vendor:'Gigabyte', prise:150, inStock:8, productCode:001},
    {name:'Оперативная память', vendor:'Kingston', prise:100, inStock:16, productCode:002},
    {name:'Процессор', vendor:'AMD', prise:230, inStock:8, productCode:003},
    {name:'Видеокарта', vendor:'MSI', prise:300, inStock:8, productCode:004},
    {name:'Блок питания', vendor:'beQuiet', prise:320, inStock:8, productCode:005},
    {name:'Корпус', vendor:'Zalman', prise:165, inStock:8, productCode:006}, 
]

let ShopTable = React.createClass({ 
  displayName: 'ShopTable',

  render: function() {
    let fullTable = [];
    let tableHeader = [];
    let table = [];
    this.props.tablehead.map((value, index) => {
      let headCell = React.DOM.td({key: value}, value);
      tableHeader.push(headCell);
    });
    fullTable.push(
      React.DOM.thead({key:'thead', className: 'TableHead'},
        React.DOM.tr({}, tableHeader)
      )
    );
    this.props.goods.forEach(value => {
      let tableRow = React.DOM.tr({key: value.productCode, className: 'TableRow'},
        React.DOM.td({}, value.name),
        React.DOM.td({}, value.vendor),
        React.DOM.td({}, value.prise),
        React.DOM.td({}, value.inStock),
        React.DOM.td({}, value.productCode),   
      );
      table.push(tableRow);
    });
    fullTable.push(
      React.DOM.tbody({key: 'tbody', className: 'TableBody'}, table)
    );

    return React.DOM.div(
      {className: 'shop'},
      React.DOM.div({className:'ShopName'}, this.props.shop),
      React.DOM.table({className: 'ShopTable'}, fullTable),
    )
  },
})
ReactDOM.render(
  React.createElement(ShopTable, {shop: shopName, goods: productArr, tablehead: tableHeader}),
  document.getElementById('products')
);