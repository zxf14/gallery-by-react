require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');


// 将图片的信息转换为图片的url信息，js中对象传递为引用传递
(imageDatasArr=>{
  for(let i=0,j=imageDatasArr.length;i<j;i++){
    let singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);

    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
})(imageDatas);



class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
controllerUnits
        </section>
        <nav className="controller-nav">
controllerUnits
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
