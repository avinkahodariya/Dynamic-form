import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Formik } from "formik";
import Yup from "yup";
import _ from "lodash";
import PopModel from "./PopModel";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
        .min(4, "Password must be 4 characters or longer")
        .required(),
                text:Yup.string().required("Text is required"),
        url:Yup.string(),
        color:Yup.string,
        select:Yup.string(),
        checkbox:Yup.string(),
        number:Yup.number(),
        radio:Yup.string(),
        date:Yup.date(),
});

const LoginForm = () => {
    const [typeArray, setTypeArray] = useState([
        "text",
        "email",
        "password",
        "url",
        "color",
        "select",
        "checkbox",
        "number",
        "radio",
        "date",
    ]);
    const [selected, setSelected] = useState([]);
    const [data,setData]=useState('')
    const [open,setopen]=useState(false)



    const addFeild = () => {
        let newItem =_.shuffle(typeArray).slice(0,1)
      let remain=  [...typeArray.filter((d)=>d!==newItem[0])]
        let selectedArray = [...selected];
         selectedArray.push(newItem[0]);
         setTypeArray([...remain])
        setSelected(selectedArray);
    };

    return (
        <div>
            <Button
                color="primary"
                onClick={() => {
                    addFeild();
                }}>
                Add Feilds
            </Button>
            <PopModel data={data} selected={selected} open={open} close={setopen}></PopModel>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    text: "",
                    select: "",
                    radio: "",
                    color: "",
                    date: "",
                    number: "",
                    checkbox: {checkin:false,checkout:false},
                    url: "",
                }}
                // validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(
                        "🚀 ~ file: LoginForm.js ~ line 75 ~ LoginForm ~ values",
                        values
                    );
                    setData(values)
                    setopen(true)

                    // setSubmitting(true);
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    isSubmitting,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        {console.log("selected", selected)}
                        <div className={"form-wrap"}>
                            {selected.includes("email") && (
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="email"
                                        placeholder="Enter Email"
                                    />
                                    {touched.email && errors.email && (
                                        <p className="red">{errors.email}</p>
                                    )}
                                </FormGroup>
                            )}
                            {selected.includes("text") && (
                                <FormGroup>
                                    <Label for="text">Text</Label>
                                    <Input
                                        type="text"
                                        name="text"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="text"
                                        placeholder="Enter text"
                                    />
                                    {touched.text && errors.text && (
                                        <p className="red">{errors.text}</p>
                                    )}
                                </FormGroup>
                            )}
                            {selected.includes("password") && (
                                <FormGroup>
                                    <Label for="password">password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="password"
                                        placeholder="Enter password"
                                    />
                                    {touched.password && errors.password && (
                                        <p className="red">{errors.password}</p>
                                    )}
                                </FormGroup>
                            )}
                            {selected.includes("url") && (
                                <FormGroup>
                                    <Label for="url">Url</Label>
                                    <Input
                                        type="url"
                                        name="url"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="url"
                                        placeholder="Enter Email"
                                    />
                                    {touched.url && errors.url && (
                                        <p className="red">{errors.url}</p>
                                    )}
                                </FormGroup>
                            )}

                            {selected.includes("number") && (
                                <FormGroup>
                                    <Label for="number">number</Label>
                                    <Input
                                        type="number"
                                        name="number"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="number"
                                        placeholder="Enter number"
                                    />
                                    {touched.number && errors.number && (
                                        <p className="red">{errors.number}</p>
                                    )}
                                </FormGroup>
                            )}

                            {selected.includes("date") && (
                                <FormGroup>
                                    <Label for="date">date</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="date"
                                        placeholder="Enter date"
                                    />
                                    {touched.date && errors.date && (
                                        <p className="red">{errors.date}</p>
                                    )}
                                </FormGroup>
                            )}

                            {selected.includes("time") && (
                                <FormGroup>
                                    <Label for="time">time</Label>
                                    <Input
                                        type="time"
                                        name="time"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="time"
                                        placeholder="Enter time"
                                    />{" "}
                                    <Label for="time">time</Label>
                                    <Input
                                        type="time"
                                        name="time"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="time"
                                        placeholder="Enter time"
                                    />
                                    {touched.time && errors.time && (
                                        <p className="red">{errors.time}</p>
                                    )}
                                </FormGroup>
                            )}

                            {selected.includes("color") && (
                                <FormGroup>
                                    <Label for="color">color</Label>
                                    <Input
                                        type="color"
                                        name="color"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="color"
                                        placeholder="Enter color"
                                    />
                                    {touched.color && errors.color && (
                                        <p className="red">{errors.color}</p>
                                    )}
                                </FormGroup>
                            )}

                            {selected.includes("select") && (
                                <FormGroup>
                                    <Label for="exampleSelect">Select</Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>

                                    {touched.select && errors.select && (
                                        <p className="red">{errors.select}</p>
                                    )}
                                </FormGroup>
                            )}

                            {selected.includes("radio") && (
                                <FormGroup className="d-flex flex-row ">
                                    <Label>Radio:</Label>
                                    <div className="d-flex flex-row ml-5 justify-content-around w-100">
                                        <div>
                                            <Input
                                                type="radio"
                                                name="radio"
                                                value={"one"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <Label>One</Label>
                                        </div>
                                        <div>
                                            <Input
                                                type="radio"
                                                name="radio"
                                                value={"two"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <Label>Two</Label>
                                        </div>
                                    </div>
                                </FormGroup>
                            )}

                            {selected.includes("checkbox") && (
                                <FormGroup className="d-flex flex-row ">
                                    <Label>CheckBox:</Label>
                                    <div className="d-flex flex-row ml-5 justify-content-around w-100">
                                        <div>
                                            {" "}
                                            <Input
                                                type="checkbox"
                                                name={"checkbox"}
                                                value={"checkin"}
                                                onChange={(e) => {
                                                    setFieldValue(
                                                        "checkbox",
                                                        {...values.checkbox,checkin:!values.checkbox['checkin']}
                                                    );
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            <Label check>Check me in</Label>
                                        </div>

                                        <div>
                                            <Input
                                                type="checkbox"
                                                name={"checkbox"}
                                                value={"checkout"}
                                                onChange={(e) => {
                                                    setFieldValue(
                                                        "checkbox",
                                                        {...values.checkbox,checkout:!values.checkbox['checkout']}
                                                    );
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            <Label check>Check me out</Label>
                                        </div>
                                    </div>
                                </FormGroup>
                            )}
                        </div>
                        {selected.length ? (
                            <Button color="primary" type={"submit"}>
                                Submit
                            </Button>
                        ) : (
                            ""
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
