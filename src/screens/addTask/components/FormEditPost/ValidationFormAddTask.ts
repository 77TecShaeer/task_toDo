import * as yup from "yup";

export const schema = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
});