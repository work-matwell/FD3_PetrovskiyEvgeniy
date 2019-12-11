var productArr = [
    {name:'Материнская плата Gigabyte',
    prise:150,
    foto:'https://shop.by/images/gigabyte_z390_aorus_pro_wifi_%28rev__1_0%29_1.jpg',
    inStock:8},
    {name:'Оперативная память Kingston DDR4 Hyper-X 8Gb',
    prise:100,
    foto:'https://www.onlinetrade.ru/img/items/m/910818_1.jpg',
    inStock:16},
    {name:'Процессор AMD Ryzen 5 2600',
    prise:230,
    foto:'https://avatars.mds.yandex.net/get-mpic/1363071/img_id6895287055628929609.jpeg/9hq',
    inStock:8},
    {name:'Видеокарта MSI GeForce GTX 1050Ti',
    prise:300,
    foto:'https://avatars.mds.yandex.net/get-mpic/199079/img_id8541849599035302376/9hq',
    inStock:8},
    {name:'Блок питания beQuiet SP11 750W',
    prise:320,
    foto:'https://content2.onliner.by/catalog/device/header@2/28a8d600cdb8caf50f82fd4e0eb44b2c.jpeg',
    inStock:8},
    {name:'Корпус Zalman K1',
    prise:165,
    foto:'https://content2.onliner.by/catalog/device/200x200/4181dd4e15da5eda5cb16953a964b97c.jpeg',
    inStock:8},
]
var ProductBlock = React.createClass({

    displayName:'ProductBlock',

    getDefaultProps: function() {
        return { inStock: "Нет на складе" }
    },

    render: function(){

        var productsCode = [];
        for(var i=0; i < this.props.card.length; i++ ){
            var product = this.props.card[i];
            var productCode=
            React.DOM.div({key:product.name,className:'Product'},
                React.DOM.div({className:'Foto'},product.foto),    
                React.DOM.div({className:'Name'},product.name),
                React.DOM.div({className:'Prise'},product.prise),             
                React.DOM.div({className:'InStock'},product.inStock),
            );
            productsCode.push(productCode); 
        }

        return React.DOM.div({className:'ProductBlock'},
        React.DOM.div({className:'Products'},productsCode),
        );
    },
})