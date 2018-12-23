import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{
    state={
        description:'',
        note:'',
        amount:'',
        createdAt: moment(),
        focused:false,
        error:'',
    };

    onDescriptionChange = e => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onNoteChange = e => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = e => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}((\.|,)\d{0,2})?$/)) {
            this.setState(() => ({amount: amount.replace(',', '.')}));
        }
    }

    onDateChange = createdAt => {
        if (createdAt ){
            this.setState(() => ({createdAt}));
        }
    }

    onSubmit = e => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount){
            this.setState(prevSate => (
                !prevSate.description && !prevSate.amount 
                ? {error:'Please provide description and amount'}
                : {error:`Please provide a ${!prevSate.description ? 'description' : 'amount'}`}
            ));
        }else {
            if (this.state.error) this.setState(() => ({error:''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf(),
            });
        }
    }
    
    render(){
        return(
            <div>
                {this.state.error && <div>{this.state.error}</div>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={({focused}) => this.setState(()=>({focused}))}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.value}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}