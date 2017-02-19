import React from 'react';

class ControllerUnit extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

    if(this.props.arrange.isCenter){
      this.props.inverse();
    }else{
      this.props.center();

    }

    e.stopPropagation();
    e.preventDefault();
  }

  render(){
    let controllerName = 'controller-unit';

    //对应的图片如果居中，则按钮居中
    if(this.props.arrange.isCenter){
      controllerName += this.props.arrange.isCenter?' is-center':' ';

      //如果对应的图片翻转，则按钮旋转
      if(this.props.arrange.isInverse){
        controllerName += this.props.arrange.isInverse?' is-inverse':' ';
      }
    }

    return (
      <span className={controllerName} onClick={this.handleClick}></span>
    );
  }
}

export default ControllerUnit;
