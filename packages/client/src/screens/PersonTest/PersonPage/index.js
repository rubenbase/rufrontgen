import React from "react";
import PersonConnector from "./PersonForm/personConnector";
import "./style.scss";
import FooterView from "containers/footer/ui/FooterView";
import AuthHeader from "containers/LayoutContainers/AuthHeader/index";
import PersonList from "./PersonList/index";
import gql from 'graphql-tag'
import { graphql, Query } from "react-apollo"
import { Icon } from "antd"

class PersonPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      formData: null,
    }

    this.handleClick = this.handleClick.bind(this);
    this.onUpdatePerson = this.onUpdatePerson.bind(this);
    this.onCreatePerson = this.onCreatePerson.bind(this);
    this.onDeleteRequested = this.onDeleteRequested.bind(this);
    this.loadData = this.loadData.bind(this);

  }

  componentDidMount() {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.getElementsByTagName("body")[0].style.overflow = "";
  }

  onUpdatePerson(values){
    this.props.mutate({
      mutation: updatePersonMutation,
      variables: {
        id: values.id,
        name: values.name,
        lastName: values.lastName,
        age: values.age,
      }
    });

    this.setState({ formData: null, })
  }

  onCreatePerson(values){
    console.log(values);
    this.props.mutate({
      variables: {
        name: values.name,
        lastName: values.lastName,
        age: values.age,
      }
    });

    this.setState({ formData: null, });
  }

  onDeleteRequested(id){
    this.props.mutate({
      mutation: deletePersonMutation,
      variables: { id, }
    });

    this.setState({ formData: null, })
    alert(id);
  }

  handleClick(personData){
    this.setState({ formData: personData });
  }

  loadData({loading, error, data, }){
        
    if (loading) {
      return <Icon type="loading" />
    }

    if (error) {
      return <p>{error}</p>
    }

    return (
      <PersonList 
      onItemClick={this.handleClick} 
      personData={data.findPersons} 
      onDeleteRequested={this.onDeleteRequested}/>
    );

}

  render() {
    return (
      <div
        className="main-login main-login--fullscreen"
        style={{ backgroundImage: `url(resources/images/bg.jpg)` }}
      >
        <AuthHeader />
        
        <div className="main-login__block main-login__block--extended pb-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="main-login__block__inner">
                
                <div className="main-login__block__form">
                  <PersonConnector 
                  personData={this.state.formData} 
                  onCreatePerson={this.onCreatePerson}
                  onUpdatePerson={this.onUpdatePerson}/>
                </div>

                <div className="main-login__block__sidebar">
                <Query query={findPersonsQuery} >
                    {(result) => this.loadData(result)}
                </Query>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
        <FooterView />

      </div>
    );
  }
}

const createPersonMutation = gql`
  mutation todoCreatePerson($name: String!, $lastName: String!, $age: Int!){
      createPerson(input: {
        name: $name
        lastName: $lastName
        age: $age
      })
  }`;

const updatePersonMutation = gql`
  mutation todoUpdatePerson($id: ID!, $name: String!, $lastName: String!, $age: Int!){
      updatePerson(id: $id, input: {
        name: $name
        lastName: $lastName
        age: $age
      })
  }`;

const deletePersonMutation = gql`
  mutation todoDeletePerson($id: ID!){
      deletePerson(id: $id)
  }`;

const findPersonsQuery = gql`
  query getPersons{
      findPersons{
          id
          name
          lastName
          age
      }
  }`;

export default graphql(createPersonMutation)(PersonPage);
