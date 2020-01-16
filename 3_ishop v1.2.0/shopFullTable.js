'use strict'
let ShopFullTable = React.createClass({
    displayName: 'ShopFullTable',
  
    propTypes:{
      shop: React.PropTypes.string.isRequired,
      product: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          productCode: React.PropTypes.number.isRequired,
          vendor: React.PropTypes.string.isRequired,
          prise: React.PropTypes.number.isRequired,
          inStock: React.PropTypes.number.isRequired,
        }),
      ).isRequired,
      header: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    },
  
    getInitialState: function() {
      return {
        readyRow: this.props.product,
        selectedRow: null,
      }
    },
  
    utillRow: function(code) {
      let updReadyRow = this.state.readyRow.filter(value => {return value.productCode !== code});
      this.setState({readyRow: updReadyRow});
    },
  
    selectRow: function (code) {
      if (code !== this.state.selectedRow)
        this.setState({selectedRow: code});
      else this.setState({selectedRow: null});
    },
  
    render: function() {
      let compliteTable = [];
      let headerTable = this.props.header.map((value, index) => {
        return React.DOM.td({key: value, className: `TableHeaderElem`}, value);
      });
      compliteTable.push(
        React.DOM.thead({key: 'thead', className: 'TableHead'},
          React.DOM.tr(null, headerTable)
        )
      );
      let tableRows = this.state.readyRow.map(value => {
        return React.createElement(ShopTableRow, 
          {key: value.productCode,
          name: value.name,
          vendor: value.vendor,
          prise: value.prise,
          inStock: value.inStock,
          productCode: value.productCode,
          cbUtillRow: this.utillRow,
          cbSelectRow: this.selectRow,
          onClickRow: this.state.selectedRow,
          }
        )
      });
      compliteTable.push(
        React.DOM.tbody({key: 'tbody', className: 'TableBody'}, tableRows)
      );
  
      return React.DOM.div({className: 'MainBlock'},
        React.DOM.div({className: 'ShopName'}, this.props.shop),
        React.DOM.table({className: 'Table'}, compliteTable),
      )
    },
  })