import { useFormik } from "formik";
import * as yup from "yup";

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email("Please enter a valid email").required(),
    subject: yup.string().max(50).required(),
    message: yup.string().max(200).required(),
  });

  const onSubmit = async (values, { resetForm }) => {
    // function to send the values to my email
    await new Promise((resolve) => setTimeout(resolve, 2000));
    resetForm();
  };

  const {
    values,
    errors,
    touched,
    //  isSubmitting, if isSubmitting is true, a popup should be displayed
    //  How to useContext or pass a value from a child to parent
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-700 rounded-lg p-4 md:col-span-7 grid md:grid-cols-2 gap-4">
      <p className="font-medium md:col-span-2">Leave A Message</p>
      <div>
        <label htmlFor="Name">Name</label>
        <input
          className={errors.name && touched.name && "input-error"}
          type="text"
          id="name"
          value={values.name}
          placeholder="Enter your name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input
          className={errors.email && touched.email && "input-error"}
          type="email"
          id="email"
          value={values.email}
          placeholder="Enter your email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="Subject">Subject</label>
        <input
          className={errors.subject && touched.subject && "input-error"}
          type="text"
          id="subject"
          value={values.subject}
          placeholder="Enter your subject"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.subject && touched.subject && (
          <p className="error">{errors.subject}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="Message">Message</label>
        <textarea
          className={errors.message && touched.message && "input-error"}
          type="text"
          rows={5}
          id="message"
          value={values.message}
          placeholder="Enter your message"
          onChange={handleChange}
          onBlur={handleBlur}></textarea>
        {errors.message && touched.message && (
          <p className="error">{errors.message}</p>
        )}
      </div>
      <button className="btn-outline px-4 my-auto mr-auto" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default Form;
