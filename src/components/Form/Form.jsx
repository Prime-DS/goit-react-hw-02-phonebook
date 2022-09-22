import React from "react";
import { nanoid } from "nanoid";
export class Form extends React.Component{
    state = {
        name: '',
        number: '',
    };
    nameId = nanoid();
    numberId = nanoid();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    };

    handleSubmit = event => {
        event.preventDefault()
        const { number, name } = this.state;
        this.props.onSubmit({ number, name })
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: ''})
    };

    render() {
        const { nameId, numberId } = this;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={nameId}>
                    Name
                    <input
                        id={nameId}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>

                <label htmlFor={numberId}>
                    Number
                    <input
                        id={numberId}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit">add contact</button>
            </form>
        );
    }
}