import React from "react";
import { Formik, Form, Field } from "formik";
import { CreateMessage } from "@rufrontgen/controller";

import { InputField } from "containers/shared/inputField";

class InputBar extends React.PureComponent {
  render() {
    const { listingId } = this.props;
    return (
      <CreateMessage>
        {({ createMessage }) => (
          <Formik
            initialValues={{ text: "" }}
            onSubmit={async ({ text }, { resetForm }) => {
              await createMessage({
                variables: {
                  message: { text, listingId }
                }
              });
              resetForm();
            }}
          >
            {() => (
              <Form>
                <Field name="text" component={InputField} />
                <button type="submit"> Send message </button>
              </Form>
            )}
          </Formik>
        )}
      </CreateMessage>
    );
  }
}
export default InputBar;
