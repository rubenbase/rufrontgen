import * as React from "react";
import { FieldProps } from "formik";
import { InputItem } from "antd-mobile-rn";

const errStyle = {
  color: "red"
};

export class InputField extends React.Component<FieldProps<any>> {
  constructor(props: any) {
    super(props);
    this.state = { isError: null };
  }

  onChange = (text: string) => {
    const {
      form: { setFieldValue },
      field: { name }
    } = this.props;
    setFieldValue(name, text);
  };

  render() {
    const {
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      ...props
    } = this.props;
    const errorMsg = touched[field.name] && errors[field.name];
    return (
      <InputItem
        {...props}
        // style={[this.state.isError ? errStyle : null]}
        // error={}
        onErrorClick={errorMsg}
        onChangeText={this.onChange}
        value={field.value}
        onBlur={field.onBlur}
      />
    );
  }
}

// export const InputField: React.SFC<
//   FieldProps<any> & { prefix: React.ReactNode }
// > = ({
//

//   return (
//     // <FormItem help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
//     //   <Input {...field} {...props} />
//     // </FormItem>
//     <InputItem>

//     </InputItem>
//   );
// }
// ;
