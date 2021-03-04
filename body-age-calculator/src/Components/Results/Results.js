import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResults } from '../../store/actions/results'
import classes from './Results.module.css';
import {formatDate} from '../../Utilities/Utilities';

export class Results extends Component {

    state = {
        gridFilter: 'all'
    }

    componentDidMount() {
        this.props.getResults();
    }

    filterChangedHandler = (event) => {
        this.setState({
            gridFilter: event.target.value
        })
    }

    render() {
        let results = null;
        let filteredResults = null;
        var sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        switch (this.state.gridFilter) {
            case 'all':
                filteredResults = this.props.results;
                break;
            case 'recent':
                filteredResults = this.props.results.filter(result => new Date(result.date) >= sevenDaysAgo);
                break;
            case 'older':
                filteredResults = this.props.results.filter(result => new Date(result.date) < sevenDaysAgo);
                break;
            default:
                filteredResults = this.props.results;
                break;
        }

        if (this.props.results) {
            results = filteredResults.map(data => (
                <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.bodyAge}</td>
                    <td>{formatDate(data.date)}</td>
                </tr>
            ))
        }

        return (
            <div className={classes.ResultsGrid}>
                <label htmlFor="gridFilter">Filter Results: </label>
                <select name="gridFilter" onChange={this.filterChangedHandler}>
                    <option value="all">All</option>
                    <option value="recent">Within Past 7 Days</option>
                    <option value="older">Older Than 7 Days</option>
                </select>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Body Age</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results.results,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getResults: () => dispatch(getResults())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);