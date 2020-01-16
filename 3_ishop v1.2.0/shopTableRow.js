'use strict'
let ShopTableRow = React.createClass({
    displayName: 'ShopTableRow',
    propTypes:{
      name: React.PropTypes.string.isRequired,
      vendor: React.PropTypes.string.isRequired,
      prise: React.PropTypes.number.isRequired,
      inStock: React.PropTypes.number.isRequired,
      productCode: React.PropTypes.number.isRequired,
      cbUtillRow: React.PropTypes.func.isRequired,
      cbSelectRow:React.PropTypes.func.isRequired,
      selectedRow: React.PropTypes.number,
    },
    utillRowSelect: function(EO) {
      EO.stopPropagation();
      let question = confirm(`Удалить выделенный элемент?`);
      if (question)
        this.props.cbUtillRow(this.props.productCode);
    },
    selectRow: function(EO) {
      this.props.cbSelectRow(this.props.productCode);
    },
    render: function() {  
      return React.DOM.tr({className: (this.props.onClickRow !== this.props.productCode) ? 'TableRow' : 'TableRowSelected', onClick: this.selectRow},
        React.DOM.td(null, this.props.name),
        React.DOM.td(null, this.props.vendor),
        React.DOM.td(null, this.props.prise),
        React.DOM.td(null, this.props.inStock),
        React.DOM.td(null, this.props.productCode),
        React.DOM.td({className: 'DeleteBtn'},
          React.DOM.input({type: 'button', value: 'Удалить', onClick: this.utillRowSelect})
        ),
      );    
    },
  })