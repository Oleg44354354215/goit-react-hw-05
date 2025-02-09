import { Field, Formik, Form } from "formik";

const SearchBar = ({ handleDate, query }) => {
  const initialValues = {
    query,
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    handleDate(values.query);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
