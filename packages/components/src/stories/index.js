import React from "react";
// import "../resources/_antd.less"; // redefinition AntDesign variables
// import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap styles

// import "../resources/AntStyles/AntDesign/antd.cleanui.scss";
// import "../resources/CleanStyles/Core/core.cleanui.scss";
// import "../resources/CleanStyles/Vendors/vendors.cleanui.scss";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Avatar from "components/CleanComponents/Avatar";
import Invoice from "../components/CleanComponents/Invoice";
import PaymentAccount from "../components/CleanComponents/PaymentAccount";
import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("CleanUI", module)
  .add("Avatar", () => <Avatar />)
  .add("Invoice", () => <Invoice />)
  .add("PaymentAccount", () => (
    <PaymentAccount
      icon={"lnr lnr-inbox"}
      number={"US 4658-1678-7528"}
      footer={"Current month charged: $10,200.00"}
      sum={"$2,156.78"}
    />
  ));
