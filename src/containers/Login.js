import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = () => {
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Bắt buộc phải nhập email'),
        password: Yup.string()
            .min(6, 'Password phải có ít nhất 6 ký tự')
            .max(10, 'Bạn nhập quá số ký tự cho phép')
            .required()
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // formik.touched: boolean biểu hiện trạng thái khi forcus vào 1 field input
    // formik.errors: { email: error, password: error } => Khi có lỗi errors được lưu vào formil error theo từng field

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Nhập email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                <p className="text-danger">{ formik.touched.email && formik.errors.email }</p>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Nhập mật khẩu"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
                <p className="text-danger">{ formik.touched.password && formik.errors.password }</p>
            </FormGroup>
            <Button color="success">Đăng nhập</Button>
        </Form>
    );
};

export default Login;