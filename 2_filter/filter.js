'use strict'

let elementArr = [
  {elementName: 'Bastille', elementKey: 1},
  {elementName: 'Imagine Dragons', elementKey: 2},
  {elementName: 'Gorillaz', elementKey: 3},
  {elementName: 'Riverline', elementKey: 4},
  {elementName: 'Linkin Park', elementKey: 5},
  {elementName: 'Limp Bizkit', elementKey: 6},
  {elementName: 'Feed Her To The Sharks', elementKey: 7},
  {elementName: 'Dead by April', elementKey: 8},
  {elementName: 'Rammstein', elementKey: 9},
  {elementName: 'DDT', elementKey: 10},
  {elementName: 'Lindemann', elementKey: 11}, 
  {elementName: 'Green Day', elementKey: 12}, 
  {elementName: 'The Heavy', elementKey: 13}, 
  {elementName: 'The Killers', elementKey: 14},  
  {elementName: 'Hollywood Undead', elementKey: 15}, 
  {elementName: 'Rise Against', elementKey: 16}, 
  {elementName: 'Scorpions', elementKey: 17}, 
  {elementName: 'Vanilla Sky', elementKey: 18}, 
  {elementName: 'Papa Roach', elementKey: 19},
  {elementName: 'Three Days Grace', elementKey: 20}, 
];

let FilterBlock = React.createClass({
    displayName: 'FilterBlock',
  
    propTypes: {
      elementArrForFilter: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          elementName: React.PropTypes.string,
          elementKey: React.PropTypes.number,
        })
      ).isRequired,
      initCheckboxState: React.PropTypes.bool,
      initFilterState: React.PropTypes.string,
    },
  
    getInitialState: function() {
      return {
        checkboxState: this.props.initCheckboxState || false,
        filterState: this.props.initFilterState ||'',
        elementArrFilteredSortedArr: [],
      }
    },
  
    getelementArrFilteredSortedArr: function() {
      let arrFilteredSorted = this.props.elementArrForFilter;
      if (this.state.filterState)
        arrFilteredSorted = arrFilteredSorted.filter(value => {
            return value.elementName.toLowerCase().indexOf(this.state.filterState) !== -1;
          }
        );
      if (this.state.checkboxState)
        arrFilteredSorted = JSON.parse(JSON.stringify(arrFilteredSorted)).sort(this.sortItemsNames);
      this.setState( {elementArrFilteredSortedArr: arrFilteredSorted});
    },
  
    sortItemsNames: function(a, b) {
      if(a.elementName < b.elementName) return -1;
      if(a.elementName > b.elementName) return 1;
      return 0;
    },
  
    changeCheckboxState: function(EO) {
      this.setState({checkboxState: EO.target.checked}, this.getelementArrFilteredSortedArr);
    },
  
    textInputChanged: function(EO) {
      this.setState( {filterState: EO.target.value}, this.getelementArrFilteredSortedArr);
    },
  
    clearChexboxAndTextInput: function() {
      this.setState( {checkboxState: false, filterState: ''}, this.getelementArrFilteredSortedArr);
    },
  
    componentDidMount: function() {
      this.getelementArrFilteredSortedArr();
    },
  
    render: function() {
      let optionsArray = this.state.elementArrFilteredSortedArr.map(value => {
          return React.DOM.option({key: value.elementKey}, value.elementName)
        }
        );
  
      return React.DOM.div({className: 'FilterBlock'},
        React.DOM.div({className: 'SearchBlock'}, 
          React.DOM.input({type: 'checkbox', checked: this.state.checkboxState, onChange: this.changeCheckboxState}),
          React.DOM.input({type: 'text', value: this.state.filterState, onChange: this.textInputChanged}),
          React.DOM.input({type: 'button', value: 'clear', onClick: this.clearChexboxAndTextInput}),
        ),
        React.DOM.select({className: 'SelectBlock', multiple: true}, optionsArray),      
      )
    },
})

ReactDOM.render(
  React.createElement(FilterBlock, {elementArrForFilter: elementArr, initCheckboxState: false,}),
  document.getElementById('filtercontainer')
);