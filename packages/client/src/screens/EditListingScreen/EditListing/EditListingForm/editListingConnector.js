import * as React from "react";
import { Link } from "react-router-dom";
import { ViewListing, UpdateListing } from "@rufrontgen/controller";
import { Form as AntForm, Button } from "antd";
import { Form, Formik } from "formik";
import { ImageFile } from "react-dropzone";
import { Page1 } from "./ui/page1";
import { Page2 } from "./ui/page2";
import { Page3 } from "./ui/page3";
const FormItem = AntForm.Item;

export class EditListingConnector extends React.PureComponent {
  render() {
    const {
      match: {
        params: { listingId }
      }
    } = this.props;
    return (
      <ViewListing listingId={listingId}>
        {data => {
          if (!data.listing) {
            return <div>...loading</div>;
          }

          return (
            <UpdateListing>
              {({ updateListing }) => (
                <Formik
                  initialValues={{
                    picture: null,
                    name: data.listing.name,
                    category: data.listing.category,
                    description: data.listing.description,
                    price: data.listing.price,
                    pictureUrl: data.listing.pictureUrl,
                    latitude: data.listing.latitude,
                    longitude: data.listing.longitude,
                    amenities: data.listing.amenities
                  }}
                  onSubmit={async values => {
                    const { __typename: ____, ...newValues } = values;

                    if (newValues.pictureUrl) {
                      const parts = newValues.pictureUrl.split("/");
                      newValues.pictureUrl = parts[parts.length - 1];
                    }

                    const result = await updateListing({
                      variables: {
                        input: newValues,
                        listingId
                      }
                    });

                    console.log(result);
                  }}
                >
                  {({ isSubmitting, values }) =>
                    console.log(values) || (
                      <Form style={{ display: "flex" }}>
                        <div style={{ width: 400, margin: "auto" }}>
                          <Page1 />
                          <Page2 />
                          <Page3 />
                          <ul>
                            <li>
                              {values && values.picture
                                ? values.picture.name
                                : ""}
                            </li>
                          </ul>
                          <FormItem>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end"
                              }}
                            >
                              <div>
                                <Button
                                  type="primary"
                                  htmlType="submit"
                                  disabled={isSubmitting}
                                >
                                  Modificar concurso
                                </Button>
                              </div>
                            </div>
                          </FormItem>
                        </div>
                      </Form>
                    )
                  }
                </Formik>
              )}
            </UpdateListing>
          );
        }}
      </ViewListing>
    );
  }
}
