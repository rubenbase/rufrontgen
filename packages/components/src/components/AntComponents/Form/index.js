import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderFormAdvancedsearch } from './Advancedsearch/index.js'
import { default as renderFormCoordinated } from './Coordinated/index.js'
import { default as renderFormCustomizedformcontrols } from './Customizedformcontrols/index.js'
import { default as renderFormDynamicformitem } from './Dynamicformitem/index.js'
import { default as renderFormDynamicrule } from './Dynamicrule/index.js'
import { default as renderFormForminmodal } from './Forminmodal/index.js'
import { default as renderFormGlobalstate } from './Globalstate/index.js'
import { default as renderFormHorizontallogin } from './Horizontallogin/index.js'
import { default as renderFormLayout } from './Layout/index.js'
import { default as renderFormNormallogin } from './Normallogin/index.js'
import { default as renderFormRegister } from './Register/index.js'
import { default as renderFormTimerelatedcontrols } from './Timerelatedcontrols/index.js'
import { default as renderFormValidateother } from './Validateother/index.js'
import { default as renderFormValidatestatic } from './Validatestatic/index.js'
import { default as renderFormWithoutformcreate } from './Withoutformcreate/index.js'

const Panel = Collapse.Panel

class FormItems extends React.Component {
  componentDidMount() {
    renderFormAdvancedsearch(ReactDOM, document.getElementById('FormAdvancedsearch'))
    renderFormCoordinated(ReactDOM, document.getElementById('FormCoordinated'))
    renderFormCustomizedformcontrols(
      ReactDOM,
      document.getElementById('FormCustomizedformcontrols'),
    )
    renderFormDynamicformitem(ReactDOM, document.getElementById('FormDynamicformitem'))
    renderFormDynamicrule(ReactDOM, document.getElementById('FormDynamicrule'))
    renderFormForminmodal(ReactDOM, document.getElementById('FormForminmodal'))
    renderFormGlobalstate(ReactDOM, document.getElementById('FormGlobalstate'))
    renderFormHorizontallogin(ReactDOM, document.getElementById('FormHorizontallogin'))
    renderFormLayout(ReactDOM, document.getElementById('FormLayout'))
    renderFormNormallogin(ReactDOM, document.getElementById('FormNormallogin'))
    renderFormRegister(ReactDOM, document.getElementById('FormRegister'))
    renderFormTimerelatedcontrols(ReactDOM, document.getElementById('FormTimerelatedcontrols'))
    renderFormValidateother(ReactDOM, document.getElementById('FormValidateother'))
    renderFormValidatestatic(ReactDOM, document.getElementById('FormValidatestatic'))
    renderFormWithoutformcreate(ReactDOM, document.getElementById('FormWithoutformcreate'))
  }

  render() {
    return (
      <div className="FormDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Form</strong>
                  <a
                    href="https://ant.design/components/form/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary ml-4"
                  >
                    Official Documentation <i className="icmn-link ml-1" />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-form-demo-advanced-search">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Advanced search</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Three columns layout is often used for advanced searching of data table.
                        Because the width of label is not fixed, you may need to adjust it by
                        customizing its style.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormAdvancedsearch" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Row, Col, Input, Button, Icon \} from 'antd';
const FormItem = Form.Item;

class AdvancedSearchForm extends React.Component \{
  state = \{
    expand\: false,
  \};

  handleSearch = (e) => \{
    e.preventDefault();
    this.props.form.validateFields((err, values) => \{
      console.log('Received values of form\: ', values);
    \});
  \}

  handleReset = () => \{
    this.props.form.resetFields();
  \}

  toggle = () => \{
    const \{ expand \} = this.state;
    this.setState(\{ expand\: !expand \});
  \}

  // To generate mock Form.Item
  getFields() \{
    const count = this.state.expand ? 10 \: 6;
    const \{ getFieldDecorator \} = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) \{
      children.push(
        <Col span=\{8\} key=\{i\} style=\{\{ display\: i < count ? 'block' \: 'none' \}\}>
          <FormItem label=\{\`Field \$\{i\}\`\}>
            \{getFieldDecorator(\`field-\$\{i\}\`)(
              <Input placeholder="placeholder" />
            )\}
          </FormItem>
        </Col>
      );
    \}
    return children;
  \}

  render() \{
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit=\{this.handleSearch\}
      >
        <Row gutter=\{24\}>\{this.getFields()\}</Row>
        <Row>
          <Col span=\{24\} style=\{\{ textAlign\: 'right' \}\}>
            <Button type="primary" htmlType="submit">Search</Button>
            <Button style=\{\{ marginLeft\: 8 \}\} onClick=\{this.handleReset\}>
              Clear
            </Button>
            <a style=\{\{ marginLeft\: 8, fontSize\: 12 \}\} onClick=\{this.toggle\}>
              Collapse <Icon type=\{this.state.expand ? 'up' \: 'down'\} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  \}
\}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);
ReactDOM.render(
  <div>
    <WrappedAdvancedSearchForm />
    <div className="search-result-list">Search Result List</div>
  </div>,
  mountNode
);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-form-demo-customized-form-controls"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized Form Controls</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Customized or third-party form controls can be used in Form, too. Controls
                        must follow these conventions: > * It has a controlled property{' '}
                        <code>{'value'}</code> or other name which is equal to the value of [<code>
                          {'valuePropName'}
                        </code>](http://ant.design/components/form/?locale=en-US#getFieldDecorator's-parameters).
                        > * It has event <code>{'onChange'}</code> or an event which name is equal
                        to the value of [<code>{'trigger'}</code>](http://ant.design/components/form/?locale=en-US#getFieldDecorator's-parameters).
                        > * It must be a class component.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormCustomizedformcontrols" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Input, Select, Button \} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class PriceInput extends React.Component \{
  constructor(props) \{
    super(props);

    const value = this.props.value || \{\};
    this.state = \{
      number\: value.number || 0,
      currency\: value.currency || 'rmb',
    \};
  \}
  componentWillReceiveProps(nextProps) \{
    // Should be a controlled component.
    if ('value' in nextProps) \{
      const value = nextProps.value;
      this.setState(value);
    \}
  \}
  handleNumberChange = (e) => \{
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) \{
      return;
    \}
    if (!('value' in this.props)) \{
      this.setState(\{ number \});
    \}
    this.triggerChange(\{ number \});
  \}
  handleCurrencyChange = (currency) => \{
    if (!('value' in this.props)) \{
      this.setState(\{ currency \});
    \}
    this.triggerChange(\{ currency \});
  \}
  triggerChange = (changedValue) => \{
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) \{
      onChange(Object.assign(\{\}, this.state, changedValue));
    \}
  \}
  render() \{
    const \{ size \} = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size=\{size\}
          value=\{state.number\}
          onChange=\{this.handleNumberChange\}
          style=\{\{ width\: '65%', marginRight\: '3%' \}\}
        />
        <Select
          value=\{state.currency\}
          size=\{size\}
          style=\{\{ width\: '32%' \}\}
          onChange=\{this.handleCurrencyChange\}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  \}
\}

class Demo extends React.Component \{
  handleSubmit = (e) => \{
    e.preventDefault();
    this.props.form.validateFields((err, values) => \{
      if (!err) \{
        console.log('Received values of form\: ', values);
      \}
    \});
  \}
  checkPrice = (rule, value, callback) => \{
    if (value.number > 0) \{
      callback();
      return;
    \}
    callback('Price must greater than zero!');
  \}
  render() \{
    const \{ getFieldDecorator \} = this.props.form;
    return (
      <Form layout="inline" onSubmit=\{this.handleSubmit\}>
        <FormItem label="Price">
          \{getFieldDecorator('price', \{
            initialValue\: \{ number\: 0, currency\: 'rmb' \},
            rules\: [\{ validator\: this.checkPrice \}],
          \})(<PriceInput />)\}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  \}
\}

const WrappedDemo = Form.create()(Demo);

ReactDOM.render(<WrappedDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-dynamic-rule">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Dynamic Rules</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Perform different check rules according to different situations.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormDynamicrule" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Input, Button, Checkbox \} from 'antd';
const FormItem = Form.Item;

const formItemLayout = \{
  labelCol\: \{ span\: 4 \},
  wrapperCol\: \{ span\: 8 \},
\};
const formTailLayout = \{
  labelCol\: \{ span\: 4 \},
  wrapperCol\: \{ span\: 8, offset\: 4 \},
\};
class DynamicRule extends React.Component \{
  state = \{
    checkNick\: false,
  \};
  check = () => \{
    this.props.form.validateFields(
      (err) => \{
        if (!err) \{
          console.info('success');
        \}
      \},
    );
  \}
  handleChange = (e) => \{
    this.setState(\{
      checkNick\: e.target.checked,
    \}, () => \{
      this.props.form.validateFields(['nickname'], \{ force\: true \});
    \});
  \}
  render() \{
    const \{ getFieldDecorator \} = this.props.form;
    return (
      <div>
        <FormItem \{...formItemLayout\} label="Name">
          \{getFieldDecorator('username', \{
            rules\: [\{
              required\: true,
              message\: 'Please input your name',
            \}],
          \})(
            <Input placeholder="Please input your name" />
          )\}
        </FormItem>
        <FormItem \{...formItemLayout\} label="Nickname">
          \{getFieldDecorator('nickname', \{
            rules\: [\{
              required\: this.state.checkNick,
              message\: 'Please input your nickname',
            \}],
          \})(
            <Input placeholder="Please input your nickname" />
          )\}
        </FormItem>
        <FormItem \{...formTailLayout\}>
          <Checkbox
            value=\{this.state.checkNick\}
            onChange=\{this.handleChange\}
          >
            Nickname is required
          </Checkbox>
        </FormItem>
        <FormItem \{...formTailLayout\}>
          <Button type="primary" onClick=\{this.check\}>
            Check
          </Button>
        </FormItem>
      </div>
    );
  \}
\}

const WrappedDynamicRule = Form.create()(DynamicRule);
ReactDOM.render(<WrappedDynamicRule />, mountNode);

`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-global-state">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">
                            Store Form Data into Upper Component
                          </strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        We can store form data into upper component or
                        [Redux](https://github.com/reactjs/redux) or
                        [dva](https://github.com/dvajs/dva) by using <code>{'onFieldsChange'}</code>{' '}
                        and <code>{'mapPropsToFields'}</code>, see more at this [rc-form
                        demo](http://react-component.github.io/form/examples/redux.html). **Note:**
                        You must wrap field data with <code>{'Form.createFormField'}</code> in{' '}
                        <code>{'mapPropsToFields'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormGlobalstate" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Input \} from 'antd';
const FormItem = Form.Item;

const CustomizedForm = Form.create(\{
  onFieldsChange(props, changedFields) \{
    props.onChange(changedFields);
  \},
  mapPropsToFields(props) \{
    return \{
      username\: Form.createFormField(\{
        ...props.username,
        value\: props.username.value,
      \}),
    \};
  \},
  onValuesChange(_, values) \{
    console.log(values);
  \},
\})((props) => \{
  const \{ getFieldDecorator \} = props.form;
  return (
    <Form layout="inline">
      <FormItem label="Username">
        \{getFieldDecorator('username', \{
          rules\: [\{ required\: true, message\: 'Username is required!' \}],
        \})(<Input />)\}
      </FormItem>
    </Form>
  );
\});

class Demo extends React.Component \{
  state = \{
    fields\: \{
      username\: \{
        value\: 'benjycui',
      \},
    \},
  \};
  handleFormChange = (changedFields) => \{
    this.setState(\{
      fields\: \{ ...this.state.fields, ...changedFields \},
    \});
  \}
  render() \{
    const fields = this.state.fields;
    return (
      <div>
        <CustomizedForm \{...fields\} onChange=\{this.handleFormChange\} />
        <pre className="language-bash">
          \{JSON.stringify(fields, null, 2)\}
        </pre>
      </div>
    );
  \}
\}

ReactDOM.render(<Demo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-layout">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Form Layout</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        There are three layout for form: <code>{'horizontal'}</code>,{' '}
                        <code>{'vertical'}</code>, <code>{'inline'}</code>.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormLayout" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Input, Button, Radio \} from 'antd';
const FormItem = Form.Item;

class FormLayoutDemo extends React.Component \{
  constructor() \{
    super();
    this.state = \{
      formLayout\: 'horizontal',
    \};
  \}
  handleFormLayoutChange = (e) => \{
    this.setState(\{ formLayout\: e.target.value \});
  \}
  render() \{
    const \{ formLayout \} = this.state;
    const formItemLayout = formLayout === 'horizontal' ? \{
      labelCol\: \{ span\: 4 \},
      wrapperCol\: \{ span\: 14 \},
    \} \: null;
    const buttonItemLayout = formLayout === 'horizontal' ? \{
      wrapperCol\: \{ span\: 14, offset\: 4 \},
    \} \: null;
    return (
      <div>
        <Form layout=\{formLayout\}>
          <FormItem
            label="Form Layout"
            \{...formItemLayout\}
          >
            <Radio.Group defaultValue="horizontal" onChange=\{this.handleFormLayoutChange\}>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </FormItem>
          <FormItem
            label="Field A"
            \{...formItemLayout\}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="Field B"
            \{...formItemLayout\}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem \{...buttonItemLayout\}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  \}
\}

ReactDOM.render(<FormLayoutDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-register">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Registration</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Fill in this form to create a new account for you.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormRegister" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete \} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [\{
  value\: 'zhejiang',
  label\: 'Zhejiang',
  children\: [\{
    value\: 'hangzhou',
    label\: 'Hangzhou',
    children\: [\{
      value\: 'xihu',
      label\: 'West Lake',
    \}],
  \}],
\}, \{
  value\: 'jiangsu',
  label\: 'Jiangsu',
  children\: [\{
    value\: 'nanjing',
    label\: 'Nanjing',
    children\: [\{
      value\: 'zhonghuamen',
      label\: 'Zhong Hua Men',
    \}],
  \}],
\}];

class RegistrationForm extends React.Component \{
  state = \{
    confirmDirty\: false,
    autoCompleteResult\: [],
  \};
  handleSubmit = (e) => \{
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => \{
      if (!err) \{
        console.log('Received values of form\: ', values);
      \}
    \});
  \}
  handleConfirmBlur = (e) => \{
    const value = e.target.value;
    this.setState(\{ confirmDirty\: this.state.confirmDirty || !!value \});
  \}
  compareToFirstPassword = (rule, value, callback) => \{
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) \{
      callback('Two passwords that you enter is inconsistent!');
    \} else \{
      callback();
    \}
  \}
  validateToNextPassword = (rule, value, callback) => \{
    const form = this.props.form;
    if (value && this.state.confirmDirty) \{
      form.validateFields(['confirm'], \{ force\: true \});
    \}
    callback();
  \}
  handleWebsiteChange = (value) => \{
    let autoCompleteResult;
    if (!value) \{
      autoCompleteResult = [];
    \} else \{
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => \`\$\{value\}\$\{domain\}\`);
    \}
    this.setState(\{ autoCompleteResult \});
  \}
  render() \{
    const \{ getFieldDecorator \} = this.props.form;
    const \{ autoCompleteResult \} = this.state;

    const formItemLayout = \{
      labelCol\: \{
        xs\: \{ span\: 24 \},
        sm\: \{ span\: 8 \},
      \},
      wrapperCol\: \{
        xs\: \{ span\: 24 \},
        sm\: \{ span\: 16 \},
      \},
    \};
    const tailFormItemLayout = \{
      wrapperCol\: \{
        xs\: \{
          span\: 24,
          offset\: 0,
        \},
        sm\: \{
          span\: 16,
          offset\: 8,
        \},
      \},
    \};
    const prefixSelector = getFieldDecorator('prefix', \{
      initialValue\: '86',
    \})(
      <Select style=\{\{ width\: 70 \}\}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key=\{website\}>\{website\}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit=\{this.handleSubmit\}>
        <FormItem
          \{...formItemLayout\}
          label="E-mail"
        >
          \{getFieldDecorator('email', \{
            rules\: [\{
              type\: 'email', message\: 'The input is not valid E-mail!',
            \}, \{
              required\: true, message\: 'Please input your E-mail!',
            \}],
          \})(
            <Input />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="Password"
        >
          \{getFieldDecorator('password', \{
            rules\: [\{
              required\: true, message\: 'Please input your password!',
            \}, \{
              validator\: this.validateToNextPassword,
            \}],
          \})(
            <Input type="password" />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="Confirm Password"
        >
          \{getFieldDecorator('confirm', \{
            rules\: [\{
              required\: true, message\: 'Please confirm your password!',
            \}, \{
              validator\: this.compareToFirstPassword,
            \}],
          \})(
            <Input type="password" onBlur=\{this.handleConfirmBlur\} />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label=\{(
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )\}
        >
          \{getFieldDecorator('nickname', \{
            rules\: [\{ required\: true, message\: 'Please input your nickname!', whitespace\: true \}],
          \})(
            <Input />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="Habitual Residence"
        >
          \{getFieldDecorator('residence', \{
            initialValue\: ['zhejiang', 'hangzhou', 'xihu'],
            rules\: [\{ type\: 'array', required\: true, message\: 'Please select your habitual residence!' \}],
          \})(
            <Cascader options=\{residences\} />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="Phone Number"
        >
          \{getFieldDecorator('phone', \{
            rules\: [\{ required\: true, message\: 'Please input your phone number!' \}],
          \})(
            <Input addonBefore=\{prefixSelector\} style=\{\{ width\: '100%' \}\} />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="Website"
        >
          \{getFieldDecorator('website', \{
            rules\: [\{ required\: true, message\: 'Please input website!' \}],
          \})(
            <AutoComplete
              dataSource=\{websiteOptions\}
              onChange=\{this.handleWebsiteChange\}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter=\{8\}>
            <Col span=\{12\}>
              \{getFieldDecorator('captcha', \{
                rules\: [\{ required\: true, message\: 'Please input the captcha you got!' \}],
              \})(
                <Input />
              )\}
            </Col>
            <Col span=\{12\}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem \{...tailFormItemLayout\}>
          \{getFieldDecorator('agreement', \{
            valuePropName\: 'checked',
          \})(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )\}
        </FormItem>
        <FormItem \{...tailFormItemLayout\}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    );
  \}
\}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

ReactDOM.render(<WrappedRegistrationForm />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-validate-other">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Other Form Controls</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Demostration for validataion configuration for form controls which are not
                        show in the above demos.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormValidateother" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate,
\} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Demo extends React.Component \{
  handleSubmit = (e) => \{
    e.preventDefault();
    this.props.form.validateFields((err, values) => \{
      if (!err) \{
        console.log('Received values of form\: ', values);
      \}
    \});
  \}
  normFile = (e) => \{
    console.log('Upload event\:', e);
    if (Array.isArray(e)) \{
      return e;
    \}
    return e && e.fileList;
  \}
  render() \{
    const \{ getFieldDecorator \} = this.props.form;
    const formItemLayout = \{
      labelCol\: \{ span\: 6 \},
      wrapperCol\: \{ span\: 14 \},
    \};
    return (
      <Form onSubmit=\{this.handleSubmit\}>
        <FormItem
          \{...formItemLayout\}
          label="Plain Text"
        >
          <span className="ant-form-text">China</span>
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="Select"
          hasFeedback
        >
          \{getFieldDecorator('select', \{
            rules\: [
              \{ required\: true, message\: 'Please select your country!' \},
            ],
          \})(
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="use">U.S.A</Option>
            </Select>
          )\}
        </FormItem>

        <FormItem
          \{...formItemLayout\}
          label="Select[multiple]"
        >
          \{getFieldDecorator('select-multiple', \{
            rules\: [
              \{ required\: true, message\: 'Please select your favourite colors!', type\: 'array' \},
            ],
          \})(
            <Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>
          )\}
        </FormItem>

        <FormItem
          \{...formItemLayout\}
          label="InputNumber"
        >
          \{getFieldDecorator('input-number', \{ initialValue\: 3 \})(
            <InputNumber min=\{1\} max=\{10\} />
          )\}
          <span className="ant-form-text"> machines</span>
        </FormItem>

        <FormItem
          \{...formItemLayout\}
          label="Switch"
        >
          \{getFieldDecorator('switch', \{ valuePropName\: 'checked' \})(
            <Switch />
          )\}
        </FormItem>

        <FormItem
          \{...formItemLayout\}
          label="Slider"
        >
          \{getFieldDecorator('slider')(
            <Slider marks=\{\{ 0\: 'A', 20\: 'B', 40\: 'C', 60\: 'D', 80\: 'E', 100\: 'F' \}\} />
          )\}
        </FormItem>

        <FormItem
          \{...formItemLayout\}
          label="Radio.Group"
        >
          \{getFieldDecorator('radio-group')(
            <RadioGroup>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </RadioGroup>
          )\}
        </FormItem>

        <FormItem
          \{...formItemLayout\}
          label="Radio.Button"
        >
          \{getFieldDecorator('radio-button')(
            <RadioGroup>
              <RadioButton value="a">item 1</RadioButton>
              <RadioButton value="b">item 2</RadioButton>
              <RadioButton value="c">item 3</RadioButton>
            </RadioGroup>
          )\}
        </FormItem>

        <FormItem
          \{...formItemLayout\}
          label="Rate"
        >
          \{getFieldDecorator('rate', \{
            initialValue\: 3.5,
          \})(
            <Rate />
          )\}
        </FormItem>

        <FormItem
          \{...formItemLayout\}
          label="Upload"
          extra="longgggggggggggggggggggggggggggggggggg"
        >
          \{getFieldDecorator('upload', \{
            valuePropName\: 'fileList',
            getValueFromEvent\: this.normFile,
          \})(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )\}
        </FormItem>

        <FormItem
          \{...formItemLayout\}
          label="Dragger"
        >
          <div className="dropbox">
            \{getFieldDecorator('dragger', \{
              valuePropName\: 'fileList',
              getValueFromEvent\: this.normFile,
            \})(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            )\}
          </div>
        </FormItem>

        <FormItem
          wrapperCol=\{\{ span\: 12, offset\: 6 \}\}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  \}
\}

const WrappedDemo = Form.create()(Demo);

ReactDOM.render(<WrappedDemo />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-form-demo-without-form-create"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Handle Form Data Manually</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        <code>{'Form.create'}</code> will collect and validate form data
                        automatically. But if you don't need this feature or the default behaviour
                        cannot satisfy your business, you can drop <code>{'Form.create'}</code> and
                        handle form data manually.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormWithoutformcreate" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, InputNumber \} from 'antd';
const FormItem = Form.Item;

function validatePrimeNumber(number) \{
  if (number === 11) \{
    return \{
      validateStatus\: 'success',
      errorMsg\: null,
    \};
  \}
  return \{
    validateStatus\: 'error',
    errorMsg\: 'The prime between 8 and 12 is 11!',
  \};
\}

class RawForm extends React.Component \{
  state = \{
    number\: \{
      value\: 11,
    \},
  \};
  handleNumberChange = (value) => \{
    this.setState(\{
      number\: \{
        ...validatePrimeNumber(value),
        value,
      \},
    \});
  \}
  render() \{
    const formItemLayout = \{
      labelCol\: \{ span\: 7 \},
      wrapperCol\: \{ span\: 12 \},
    \};
    const number = this.state.number;
    const tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
    return (
      <Form>
        <FormItem
          \{...formItemLayout\}
          label="Prime between 8 & 12"
          validateStatus=\{number.validateStatus\}
          help=\{number.errorMsg || tips\}
        >
          <InputNumber
            min=\{8\}
            max=\{12\}
            value=\{number.value\}
            onChange=\{this.handleNumberChange\}
          />
        </FormItem>
      </Form>
    );
  \}
\}

ReactDOM.render(<RawForm />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-form-demo-coordinated">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Coordinated Controls</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Use <code>{'setFieldsValue'}</code> to set other control's value
                        programmaticly.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormCoordinated" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Select, Input, Button \} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class App extends React.Component \{
  handleSubmit = (e) => \{
    e.preventDefault();
    this.props.form.validateFields((err, values) => \{
      if (!err) \{
        console.log('Received values of form\: ', values);
      \}
    \});
  \}
  handleSelectChange = (value) => \{
    console.log(value);
    this.props.form.setFieldsValue(\{
      note\: \`Hi, \$\{value === 'male' ? 'man' \: 'lady'\}!\`,
    \});
  \}
  render() \{
    const \{ getFieldDecorator \} = this.props.form;
    return (
      <Form onSubmit=\{this.handleSubmit\}>
        <FormItem
          label="Note"
          labelCol=\{\{ span\: 5 \}\}
          wrapperCol=\{\{ span\: 12 \}\}
        >
          \{getFieldDecorator('note', \{
            rules\: [\{ required\: true, message\: 'Please input your note!' \}],
          \})(
            <Input />
          )\}
        </FormItem>
        <FormItem
          label="Gender"
          labelCol=\{\{ span\: 5 \}\}
          wrapperCol=\{\{ span\: 12 \}\}
        >
          \{getFieldDecorator('gender', \{
            rules\: [\{ required\: true, message\: 'Please select your gender!' \}],
          \})(
            <Select
              placeholder="Select a option and change input text above"
              onChange=\{this.handleSelectChange\}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          )\}
        </FormItem>
        <FormItem
          wrapperCol=\{\{ span\: 12, offset\: 5 \}\}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  \}
\}

const WrappedApp = Form.create()(App);

ReactDOM.render(<WrappedApp />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-dynamic-form-item">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Dynamic Form Item</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Add or remove form items dynamically.</div>
                      <div className="card-body pb-0">
                        <div id="FormDynamicformitem" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Input, Icon, Button \} from 'antd';
const FormItem = Form.Item;

let uuid = 0;
class DynamicFieldSet extends React.Component \{
  remove = (k) => \{
    const \{ form \} = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) \{
      return;
    \}

    // can use data-binding to set
    form.setFieldsValue(\{
      keys\: keys.filter(key => key !== k),
    \});
  \}

  add = () => \{
    const \{ form \} = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue(\{
      keys\: nextKeys,
    \});
  \}

  handleSubmit = (e) => \{
    e.preventDefault();
    this.props.form.validateFields((err, values) => \{
      if (!err) \{
        console.log('Received values of form\: ', values);
      \}
    \});
  \}

  render() \{
    const \{ getFieldDecorator, getFieldValue \} = this.props.form;
    const formItemLayout = \{
      labelCol\: \{
        xs\: \{ span\: 24 \},
        sm\: \{ span\: 4 \},
      \},
      wrapperCol\: \{
        xs\: \{ span\: 24 \},
        sm\: \{ span\: 20 \},
      \},
    \};
    const formItemLayoutWithOutLabel = \{
      wrapperCol\: \{
        xs\: \{ span\: 24, offset\: 0 \},
        sm\: \{ span\: 20, offset\: 4 \},
      \},
    \};
    getFieldDecorator('keys', \{ initialValue\: [] \});
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => \{
      return (
        <FormItem
          \{...(index === 0 ? formItemLayout \: formItemLayoutWithOutLabel)\}
          label=\{index === 0 ? 'Passengers' \: ''\}
          required=\{false\}
          key=\{k\}
        >
          \{getFieldDecorator(\`names[\$\{k\}]\`, \{
            validateTrigger\: ['onChange', 'onBlur'],
            rules\: [\{
              required\: true,
              whitespace\: true,
              message\: "Please input passenger's name or delete this field.",
            \}],
          \})(
            <Input placeholder="passenger name" style=\{\{ width\: '60%', marginRight\: 8 \}\} />
          )\}
          \{keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled=\{keys.length === 1\}
              onClick=\{() => this.remove(k)\}
            />
          ) \: null\}
        </FormItem>
      );
    \});
    return (
      <Form onSubmit=\{this.handleSubmit\}>
        \{formItems\}
        <FormItem \{...formItemLayoutWithOutLabel\}>
          <Button type="dashed" onClick=\{this.add\} style=\{\{ width\: '60%' \}\}>
            <Icon type="plus" /> Add field
          </Button>
        </FormItem>
        <FormItem \{...formItemLayoutWithOutLabel\}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  \}
\}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);
ReactDOM.render(<WrappedDynamicFieldSet />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-form-in-modal">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Form in Modal to Create</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        When user visit a page with a list of items, and want to create a new item.
                        The page can popup a form in Modal, then let user fills in the form to
                        create an item.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormForminmodal" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Button, Modal, Form, Input, Radio \} from 'antd';
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component \{
    render() \{
      const \{ visible, onCancel, onCreate, form \} = this.props;
      const \{ getFieldDecorator \} = form;
      return (
        <Modal
          visible=\{visible\}
          title="Create a new collection"
          okText="Create"
          onCancel=\{onCancel\}
          onOk=\{onCreate\}
        >
          <Form layout="vertical">
            <FormItem label="Title">
              \{getFieldDecorator('title', \{
                rules\: [\{ required\: true, message\: 'Please input the title of collection!' \}],
              \})(
                <Input />
              )\}
            </FormItem>
            <FormItem label="Description">
              \{getFieldDecorator('description')(<Input type="textarea" />)\}
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              \{getFieldDecorator('modifier', \{
                initialValue\: 'public',
              \})(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )\}
            </FormItem>
          </Form>
        </Modal>
      );
    \}
  \}
);

class CollectionsPage extends React.Component \{
  state = \{
    visible\: false,
  \};
  showModal = () => \{
    this.setState(\{ visible\: true \});
  \}
  handleCancel = () => \{
    this.setState(\{ visible\: false \});
  \}
  handleCreate = () => \{
    const form = this.formRef.props.form;
    form.validateFields((err, values) => \{
      if (err) \{
        return;
      \}

      console.log('Received values of form\: ', values);
      form.resetFields();
      this.setState(\{ visible\: false \});
    \});
  \}
  saveFormRef = (formRef) => \{
    this.formRef = formRef;
  \}
  render() \{
    return (
      <div>
        <Button type="primary" onClick=\{this.showModal\}>New Collection</Button>
        <CollectionCreateForm
          wrappedComponentRef=\{this.saveFormRef\}
          visible=\{this.state.visible\}
          onCancel=\{this.handleCancel\}
          onCreate=\{this.handleCreate\}
        />
      </div>
    );
  \}
\}

ReactDOM.render(<CollectionsPage />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-horizontal-login">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Horizontal Login Form</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Horizontal login form is often used in navigation bar.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormHorizontallogin" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Icon, Input, Button \} from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) \{
  return Object.keys(fieldsError).some(field => fieldsError[field]);
\}

class HorizontalLoginForm extends React.Component \{
  componentDidMount() \{
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  \}
  handleSubmit = (e) => \{
    e.preventDefault();
    this.props.form.validateFields((err, values) => \{
      if (!err) \{
        console.log('Received values of form\: ', values);
      \}
    \});
  \}
  render() \{
    const \{ getFieldDecorator, getFieldsError, getFieldError, isFieldTouched \} = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit=\{this.handleSubmit\}>
        <FormItem
          validateStatus=\{userNameError ? 'error' \: ''\}
          help=\{userNameError || ''\}
        >
          \{getFieldDecorator('userName', \{
            rules\: [\{ required\: true, message\: 'Please input your username!' \}],
          \})(
            <Input prefix=\{<Icon type="user" style=\{\{ color\: 'rgba(0,0,0,.25)' \}\} />\} placeholder="Username" />
          )\}
        </FormItem>
        <FormItem
          validateStatus=\{passwordError ? 'error' \: ''\}
          help=\{passwordError || ''\}
        >
          \{getFieldDecorator('password', \{
            rules\: [\{ required\: true, message\: 'Please input your Password!' \}],
          \})(
            <Input prefix=\{<Icon type="lock" style=\{\{ color\: 'rgba(0,0,0,.25)' \}\} />\} type="password" placeholder="Password" />
          )\}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled=\{hasErrors(getFieldsError())\}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  \}
\}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-normal-login">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Login Form</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Normal login form which can contain more elements.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormNormallogin" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Icon, Input, Button, Checkbox \} from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component \{
  handleSubmit = (e) => \{
    e.preventDefault();
    this.props.form.validateFields((err, values) => \{
      if (!err) \{
        console.log('Received values of form\: ', values);
      \}
    \});
  \}
  render() \{
    const \{ getFieldDecorator \} = this.props.form;
    return (
      <Form onSubmit=\{this.handleSubmit\} className="login-form">
        <FormItem>
          \{getFieldDecorator('userName', \{
            rules\: [\{ required\: true, message\: 'Please input your username!' \}],
          \})(
            <Input prefix=\{<Icon type="user" style=\{\{ color\: 'rgba(0,0,0,.25)' \}\} />\} placeholder="Username" />
          )\}
        </FormItem>
        <FormItem>
          \{getFieldDecorator('password', \{
            rules\: [\{ required\: true, message\: 'Please input your Password!' \}],
          \})(
            <Input prefix=\{<Icon type="lock" style=\{\{ color\: 'rgba(0,0,0,.25)' \}\} />\} type="password" placeholder="Password" />
          )\}
        </FormItem>
        <FormItem>
          \{getFieldDecorator('remember', \{
            valuePropName\: 'checked',
            initialValue\: true,
          \})(
            <Checkbox>Remember me</Checkbox>
          )\}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  \}
\}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div
                      className="card card--example"
                      id="components-form-demo-time-related-controls"
                    >
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize" />
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        After <code>{'antd@2.0'}</code>, the <code>{'value'}</code> of time-related
                        components had been changed to <code>{'moment'}</code>. So, we need to
                        pre-process those values.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormTimerelatedcontrols" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, DatePicker, TimePicker, Button \} from 'antd';
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

class TimeRelatedForm extends React.Component \{
  handleSubmit = (e) => \{
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => \{
      if (err) \{
        return;
      \}

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = \{
        ...fieldsValue,
        'date-picker'\: fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker'\: fieldsValue['date-time-picker'].format('YYYY-MM-DD HH\:mm\:ss'),
        'month-picker'\: fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker'\: [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker'\: [
          rangeTimeValue[0].format('YYYY-MM-DD HH\:mm\:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH\:mm\:ss'),
        ],
        'time-picker'\: fieldsValue['time-picker'].format('HH\:mm\:ss'),
      \};
      console.log('Received values of form\: ', values);
    \});
  \}
  render() \{
    const \{ getFieldDecorator \} = this.props.form;
    const formItemLayout = \{
      labelCol\: \{
        xs\: \{ span\: 24 \},
        sm\: \{ span\: 8 \},
      \},
      wrapperCol\: \{
        xs\: \{ span\: 24 \},
        sm\: \{ span\: 16 \},
      \},
    \};
    const config = \{
      rules\: [\{ type\: 'object', required\: true, message\: 'Please select time!' \}],
    \};
    const rangeConfig = \{
      rules\: [\{ type\: 'array', required\: true, message\: 'Please select time!' \}],
    \};
    return (
      <Form onSubmit=\{this.handleSubmit\}>
        <FormItem
          \{...formItemLayout\}
          label="DatePicker"
        >
          \{getFieldDecorator('date-picker', config)(
            <DatePicker />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="DatePicker[showTime]"
        >
          \{getFieldDecorator('date-time-picker', config)(
            <DatePicker showTime format="YYYY-MM-DD HH\:mm\:ss" />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="MonthPicker"
        >
          \{getFieldDecorator('month-picker', config)(
            <MonthPicker />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="RangePicker"
        >
          \{getFieldDecorator('range-picker', rangeConfig)(
            <RangePicker />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="RangePicker[showTime]"
        >
          \{getFieldDecorator('range-time-picker', rangeConfig)(
            <RangePicker showTime format="YYYY-MM-DD HH\:mm\:ss" />
          )\}
        </FormItem>
        <FormItem
          \{...formItemLayout\}
          label="TimePicker"
        >
          \{getFieldDecorator('time-picker', config)(
            <TimePicker />
          )\}
        </FormItem>
        <FormItem
          wrapperCol=\{\{
            xs\: \{ span\: 24, offset\: 0 \},
            sm\: \{ span\: 16, offset\: 8 \},
          \}\}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  \}
\}

const WrappedTimeRelatedForm = Form.create()(TimeRelatedForm);

ReactDOM.render(<WrappedTimeRelatedForm />, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-form-demo-validate-static">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Customized Validation</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        We provide properties like <code>{'validateStatus'}</code>{' '}
                        <code>{'help'}</code> <code>{'hasFeedback'}</code> to customize your own
                        validate status and message, without using <code>{'Form.create'}</code> and{' '}
                        <code>{'getFieldDecorator'}</code>. 1. <code>{'validateStatus'}</code>:
                        validate status of form components which could be 'success', 'warning',
                        'error', 'validating'. 2. <code>{'hasFeedback'}</code>: display feed icon of
                        input control 3. <code>{'help'}</code>: display validate message.
                      </div>
                      <div className="card-body pb-0">
                        <div id="FormValidatestatic" />
                      </div>
                      <div className="utils__codeCollapse">
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                          <Panel
                            header={
                              <span>
                                <i
                                  className="fa fa-code"
                                  style={{ fontSize: 16, color: '#9f9f9f' }}
                                />
                                <span className="ml-2 text-primary">Show Code</span>
                              </span>
                            }
                            key="2"
                            showArrow={false}
                          >
                            <SyntaxHighlighter
                              language="jsx"
                              style={base16AteliersulphurpoolLight}
                              useInlineStyles={true}
                            >
                              {`import \{ Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber \} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = \{
  labelCol\: \{
    xs\: \{ span\: 24 \},
    sm\: \{ span\: 5 \},
  \},
  wrapperCol\: \{
    xs\: \{ span\: 24 \},
    sm\: \{ span\: 12 \},
  \},
\};

ReactDOM.render(
  <Form>
    <FormItem
      \{...formItemLayout\}
      label="Fail"
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Warning"
      validateStatus="warning"
    >
      <Input placeholder="Warning" id="warning" />
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Input placeholder="I'm the content is being validated" id="validating" />
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <Input placeholder="I'm the content" id="success" />
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <Input placeholder="Warning" id="warning" />
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Fail"
      hasFeedback
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <DatePicker style=\{\{ width\: '100%' \}\} />
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <TimePicker style=\{\{ width\: '100%' \}\} />
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Error"
      hasFeedback
      validateStatus="error"
    >
      <Select defaultValue="1">
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Cascader defaultValue=\{['1']\} options=\{[]\} />
    </FormItem>

    <FormItem
      label="inline"
      \{...formItemLayout\}
    >
      <Col span=\{11\}>
        <FormItem validateStatus="error" help="Please select the correct date">
          <DatePicker />
        </FormItem>
      </Col>
      <Col span=\{2\}>
        <span style=\{\{ display\: 'inline-block', width\: '100%', textAlign\: 'center' \}\}>
          -
        </span>
      </Col>
      <Col span=\{11\}>
        <FormItem>
          <DatePicker />
        </FormItem>
      </Col>
    </FormItem>

    <FormItem
      \{...formItemLayout\}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <InputNumber style=\{\{ width\: '100%' \}\} />
    </FormItem>
  </Form>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormItems
