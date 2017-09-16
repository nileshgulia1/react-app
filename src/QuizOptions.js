import React, { Component } from 'react';

class QuizOptions extends Component{
    render(){
        return (
            <div className="fields"><div className="field-block">{this.props.options}</div></div>
            
        );
    }
}
export default QuizOptions;