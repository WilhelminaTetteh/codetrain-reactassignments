import { Component } from 'react';
import Image from './Image';
import Title from './Title';
import Description from './Description';


class SimpleCard extends Component {
  render() {
    const { title, description, imageUrl } = this.props;
    return (
      <div className='simpleCard'>
      <Image imageUrl={imageUrl}/>
        <div className='card_info'>
          <Title text={title}/>
          <Description text={description}/>
        </div>
      </div>
    );
  }
}
export default SimpleCard;


