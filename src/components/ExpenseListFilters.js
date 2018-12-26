import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null,
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = calenderFocused => {
        this.setState(()=>({calenderFocused}))
    }

    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text}
                    onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={o => 
                        this.props.dispatch(o.target.value === 'date' ? sortByDate() : sortByAmount())
                    }>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}; 

export default connect(state => ({filters: state.filters}))(ExpenseListFilters);