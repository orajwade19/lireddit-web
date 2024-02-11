import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react'
import Wrapper from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {

}


// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

const Register: React.FC<registerProps> = ({}) => {
       return (
        <Wrapper>
        <Formik initialValues={{username:"", password:""}} onSubmit={(values) => {console.log(values)}} >
            { ({values,handleChange,isSubmitting}) => (
                <Form>
                <InputField name='username' placeholder={'username'} label={'Username'} ></InputField>
                <Box mt={4}>
                <InputField name='password' placeholder={'password'} label={'Password'} type='password' ></InputField>
                </Box>
                <Button mt={4} type="submit" colorScheme="teal" isLoading={isSubmitting}>
                    Register
                </Button>
                </Form>
            )}
        </Formik>
        </Wrapper>
       );
}

export default Register;
