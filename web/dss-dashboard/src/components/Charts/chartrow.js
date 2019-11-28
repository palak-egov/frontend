import React, { Component } from 'react';
import GenericChart from './genericchart';
import { withStyles } from '@material-ui/styles';
import style from './layOutStyle';
import { connect } from 'react-redux';

class ChartRow extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { strings } = this.props;
		let { classes, rowData, displayName, filters, page,Gfilter } = this.props;
		console.log(rowData.name)
		return (
			<div className="container-fluid" style={{ padding: '0px', margin: '0px' }}>
				{
					displayName &&
					<div className={classes.tab}><div className={classes.header}>{strings[rowData.name]}</div></div>
				}
				<GenericChart key={rowData.id} gFilter={Gfilter} chartData={rowData} filters={filters} page={page} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	strings: state.lang
  });

export default withStyles(style)(connect(mapStateToProps)(ChartRow));
