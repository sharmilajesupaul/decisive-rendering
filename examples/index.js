import './app.css';
var React = require('react');
var HelloWorld = require('HelloWorld');
var rd3 = require('react-d3');
var PieChart = rd3.PieChart;
var pieData = [
  {label: 'Pros', value: 50.0},
  {label: 'Cons', value: 50.0 }
];
var colorScale = (idx) => ['#70DB70', '#FF8080'][idx];

var App = React.createClass({
  getInitialState(){
    return {
      pieData:  this.props.pieData
    }
  },
  addPro() {
    this.setState({
      pieData: [
        {label: 'Pros', value: this.props.data[0].value++},
        {label: 'Cons', value: this.props.data[1].value-- }
      ]
    });
  },
  addCon() {
    this.setState({
      pieData: [
        {label: 'Pros', value: this.props.data[0].value--},
        {label: 'Cons', value: this.props.data[1].value++}
      ]
    });
  },
  render() {
    return (
      <div>
        <button 
          onClick={this.addPro} 
          className="proButton"
        >
        Add Pro
        </button>
        <button 
          onClick={this.addCon} 
          className="conButton"
        > 
          Add Con 
        </button>
        <PieChart
          data={this.state.pieData}
          width={400}
          height={400}
          radius={100}
          innerRadius={10}
          sectorBorderColor="white"
          title="Yay it rendered"
          colors={colorScale}
      />
      </div>
    );
  }
});

React.render(
  <App data={pieData}/>,
  document.getElementById('app')
);