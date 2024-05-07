import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Please enter a valid email").required(),
  subject: yup.string().max(50).required(),
  message: yup.string().max(200).required(),
});
