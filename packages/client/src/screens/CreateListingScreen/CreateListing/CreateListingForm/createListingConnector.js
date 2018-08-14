import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Form as AntForm, Button } from "antd";
import { Form, Formik } from "formik";
import { Page1 } from "./ui/page1";
import { Page2 } from "./ui/page2";
import { Page3 } from "./ui/page3";
import { withCreateListing } from "@rufrontgen/controller";
const FormItem = AntForm.Item;

const pages = [<Page1 />, <Page2 />, <Page3 />];

class C extends React.PureComponent {
  state = {
    page: 0
  };

  submit = async (values, { setSubmitting }) => {
    await this.props.createListing(values);
    setSubmitting(false);
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
        {({ isSubmitting }) => (
          <Form>
            <div>
              {pages[this.state.page]}
              <FormItem>
                {this.state.page === pages.length - 1 ? (
                  <div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={isSubmitting}
                    >
                      create listing
                    </Button>
                  </div>
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

export const CreateListingConnector = withCreateListing(C);
