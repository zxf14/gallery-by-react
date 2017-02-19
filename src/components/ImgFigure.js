import React from 'react';

class ImgFigure extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * imgFigure的点击处理函数
   */
  handleClick(e){
    if(this.props.arrange.isCenter){
      this.props.inverse();
    }else{
      this.props.center();
    }
    e.stopPropagation();
    e.preventDefault();
  }

  render () {

    let styleObj={};
    //如果props属性指定了这张图片的位置，则使用
    if(this.props.arrange.pos){
      styleObj = this.props.arrange.pos;
    }
    //如果图片的旋转角度有值且不为0，则设置旋转角度
    if(this.props.arrange.rotate){
      (['MozT','msT','OT','WebkitT','t']).forEach(
        (value)=>styleObj[value+'ransform'] = 'rotate('+this.props.arrange.rotate+'deg)'
      );
    }

    if(this.props.arrange.isCenter){
      styleObj.zIndex = 11;
    }

    let imgFigureClassName =  'img-figure';
        imgFigureClassName += this.props.arrange.isInverse?' is-inverse':' ';
    return (
      <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
          <div className = 'img-back' onClick={this.handleClick} >
            <p>
              {this.props.data.desc}
            </p>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default ImgFigure;
