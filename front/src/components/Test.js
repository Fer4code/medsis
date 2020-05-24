import React, { Component } from 'react';
import Validator from 'react-forms-validator';
import TextField from '@material-ui/core/TextField'

class Test extends React.Component{
    
    constructor( props ){
        super( props );
        this.state = {
            contact_no:"",
            password:"",
            isFormValidationErrors : true,
            submitted:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.isValidationError = this.isValidationError.bind(this);
        this.flag= true;
    }
    
    
    handleChange(event){
        let { name, value } = event.target;
        this.setState( { [name]:value } );
        let { submitted } = this.state;
    }
 
    isValidationError(flag){
         this.setState({isFormValidationErrors:flag});
    }
        
    handleFormSubmit(event){
        event.preventDefault();
        this.setState( { submitted:true } );
        let { contact_no, password, isFormValidationErrors } = this.state;
        if ( !isFormValidationErrors ){
            //you are ready to perform your action here like dispatch
            // let { dispatch, login } = this.props;
            // dispatch( login( { params:{},data:{ contact_no, password } } ) );
        }
    }
        
    render() {
        let { contact_no, password, submitted } = this.state;
        return(
            <div>
                <form noValidate onSubmit={this.handleFormSubmit}>
                    <div className="formgroup">
                      
                        <TextField 
                            type="text" name="contact_no" 
                            placeholder="Contact number" 
                            value={ contact_no } 
                            onChange={ this.handleChange}
                            
                            />
                            <Validator
                                isValidationError={this.isValidationError}
                                isFormSubmitted={submitted} 
                                reference={{contact_no:contact_no}}
                                validationRules={{required:true,number:true,maxLength:10}}
                                validationMessages={{required:"This fieldsdsd is required",number:"Not a valid number",maxLength:"Not a valid number"}}/>
                    </div>
                    <div className="formgroup">
                        <TextField 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={ password } 
                            onChange={ this.handleChange } 
                            />
                            <Validator 
                                isValidationError={this.isValidationError}
                                isFormSubmitted={submitted} 
                                reference={{password:password}} 
                                validationRules={{required:true}} 
                                validationMessages={{required:"This field is required",}}/>
 
                    </div>
                    <div>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>  
        )
    }
}
export default Test