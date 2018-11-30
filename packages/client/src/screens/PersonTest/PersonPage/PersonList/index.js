import * as React from "react";
import {List, Button} from "antd"

/**
 * Class that holds the data from a person, handling click events as well.
 * Expected props:
 * - id: string
 * - name: string
 * - lastName: string
 * - age: int
 */
class PersonItem extends React.PureComponent{

    render(){
        return (
            <div>
                <div><p> {this.props.name} {this.props.lastName} {this.props.age} </p></div>
            </div>
        );
    }

}


/**
 * Class which builds a list of persons to be shown in the screen.
 * Props arguments: 
 * - personsData: {
 *     name: string (required)
 *     lastName: string (required)
 *     age: string (required) 
 *   }
 */
export default class PersonList extends React.PureComponent{

    constructor(props){
        super(props);

        this.renderListItem = this.renderListItem.bind(this);
    }

    handleItemClick(personData, event){
        event.preventDefault();
        this.props.onItemClick(personData);   
    }

    handleDeleteClick(id, event){
        event.preventDefault();
        this.props.onDeleteRequested(id);
    }

    renderListItem(item){
        return (
            <List.Item onClick={this.handleItemClick.bind(this, item)}> 
                <PersonItem 
                id={item.id} 
                name={item.name} 
                lastName={item.lastName} 
                age={item.age}/>
                <Button type="danger" onClick={this.handleDeleteClick.bind(this, item.id)}>
                    Cerrar
                </Button>
            </List.Item>);
    }

    render(){
        return (
            <List 
            size="small" 
            dataSource={this.props.personData} 
            bordered
            renderItem={this.renderListItem}/>
        );
    }

}