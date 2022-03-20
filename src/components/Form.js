// React Form Handling - Controlled Component
import React from "react";

class Form extends React.Component {
    state = {
        title: "",
        description: "",
        frameworks: 'nextjs',
        isAwesome: true
    }

    handleChange = (event) => {
        // we used the ES6 computed property name syntax to update the state key corresponding to the given input name.
        // This is the short way to handle all inputs values
        this.setState({
            [event.target.name]: event.target.value
        })

        // OR

        // if (event.target.type === 'text') {
        //     this.setState({title: event.target.value})
        // } else if (event.target.type === 'textarea') {
        //     this.setState({description: event.target.value})
        // } else if (event.target.type === 'select-one') {
        //     this.setState({frameworks: event.target.value})
        // } else if (event.target.type === 'checkbox') {
        //     this.setState({isAwesome: event.target.checked})
        // }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {title, description, frameworks, isAwesome} = this.state
        console.log(title, description, frameworks, isAwesome)
    }

    render() {
        const {title, description, frameworks, isAwesome} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" placeholder="Enter title" value={title} onChange={this.handleChange}/>
                <br/><br/>
                <textarea name="description" placeholder="Enter description" value={description}
                          onChange={this.handleChange}/>
                <br/><br/>
                <select name="frameworks" value={frameworks} onChange={this.handleChange}>
                    <option value="NextJS">NextJS</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
                <br/><br/>
                <input name="isAwesome" type="checkbox" value={isAwesome} onChange={this.handleChange}/>
                <label>Javascript is awesome</label>
                <br/><br/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default Form;
