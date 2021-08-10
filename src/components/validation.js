const validation = (values) => {
    let errors={};
    

    if(!values.fname){
        errors.fname="Please enter your name"
    }

    if (!values.email) {
        errors.email = "Please enter your email"
    }else if
        (!/\S+@\S+\.\S+/.test(values.email)){
            errors.email="Please enter a valid email"
    }
    
    if (!values.sweetname) {
        errors.sweetname = "Please the name of your favourite treat place"
    }

    if (!values.location) {
        errors.location = "Please enter the location of your favourite treat place"
    }

    if (!values.name) {
        errors.description = "Please enter a description"
    }

    

    return errors;
}
export default validation;