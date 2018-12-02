import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
    render () {
        const robots = this.props.cards;
        return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
        );
    }
}

export default CardList;
