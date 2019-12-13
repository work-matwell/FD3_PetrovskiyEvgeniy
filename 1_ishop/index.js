var ProductBlock = React.createClass({

    displayName:'ProductBlock',

    getDefaultProps: function() {
        return { inStock: "Нет на складе" }
    },
    render: function(){

        var headerCode=[];
        for(var n=0; n<this.props.tHeader.lenght; n++){
            var thElement = this.props.tHeader[n];
            var headerCode =
            React.DOM.tr({key:thElement.nameH,className:'TableHeader'},   
                React.DOM.td(thElement.nameH),
                React.DOM.td(thElement.priseH),             
                React.DOM.td(thElement.inStockH),
                React.DOM.td(thElement.fotoH), 
            );
            headerCode.push(headerCode);
        }
        var productsCode = [];
        for(var i=0; i < this.props.card.length; i++ ){
            var product = this.props.card[i];
            var productCode=
            React.DOM.tr({key:product.name,className:'Product'},   
                React.DOM.td({className:'Name'},product.name),
                React.DOM.td({className:'Prise'},product.prise),             
                React.DOM.td({className:'InStock'},product.inStock),
                React.DOM.td({className:'Foto'},product.foto), 
            );
            productsCode.push(productCode); 
        }
        return React.DOM.div({className:'ProductBlock'},
            React.DOM.span({className:'ShopTitle'},this.props.shopTitle),
            React.DOM.table({className:'ProductTable'},
                React.DOM.thead({className:'TableHdr'},headerCode),
                React.DOM.tbody({className:'Products'},productsCode),
            ),
        );
    },
})