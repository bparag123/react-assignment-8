
import * as yup from "yup"

const SignupSchema = yup.object().shape({
    name: yup.string()
        .min(15, 'Name Shoul be atleast 15 character long')
        .required('Name is Required'),
    email: yup.string().email('Please Provide Valid Email').required('Email is Required'),
    password: yup.string().required("Password is Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Confirm Password and Password should be same").required("Confirm Password is Required"),
    phoneNumber: yup.string().matches(/(\+91)?(\d{3})[ -]?(\d{3})[ -]?(\d{4}$)/g, "Phone Number Should be Indian").required("Phone Number is Required"),
    photo:
        yup.mixed()
            .test({
                message: "File is Required",
                test: (value) => {
                    if (!value) {
                        console.log(false);
                        return false
                    }
                    if (value.size > 2 * 1000 * 1000) {
                        return false
                    }
                    const { type } = value
                    if (type !== "image/png" && type !== "image/jpeg") {
                        return false
                    }
                    console.log("last");
                    return true
                }
            })
});
export default SignupSchema