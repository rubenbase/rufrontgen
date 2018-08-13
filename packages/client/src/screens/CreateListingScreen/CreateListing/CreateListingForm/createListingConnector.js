import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Form as AntForm, Button } from "antd";
import { Form, Formik } from "formik";
import { Page1 } from "./ui/page1";
import { Page2 } from "./ui/page2";
import { Page3 } from "./ui/page3";

const FormItem = AntForm.Item;

const pages = [<Page1 />, <Page2 />, <Page3 />];

export default class CreateListingConnector extends React.PureComponent {
  state = {
    page: 0
  };

  submit = values => {
    console.log("values: ", values);
  };

  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          category: "",
          description: "",
          price: 0,
          latitude: 0,
          longitude: 0,
          amenities: []
        }}
        onSubmit={this.submit}
      >
        {() => (
          <Form>
            <div>
              {pages[this.state.page]}
              <FormItem>
                {this.state.page === pages.length - 1 ? (
                  <Button type="primary" htmlType="submit">
                    create listing
                  </Button>
                ) : (
                  <Button type="primary" onClick={this.nextPage}>
                    next page
                  </Button>
                )}
              </FormItem>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
