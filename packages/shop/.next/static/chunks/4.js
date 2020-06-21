(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../../node_modules/react-multi-carousel/index.js":
/*!******************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../../node_modules/react-multi-carousel/lib/index.js");


/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/Arrows.js":
/*!***********************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/Arrows.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(/*! react */ "../../node_modules/react/index.js"),LeftArrow=function(_a){var customLeftArrow=_a.customLeftArrow,getState=_a.getState,previous=_a.previous;return customLeftArrow?React.cloneElement(customLeftArrow,{onClick:function(){return previous()},carouselState:getState()}):React.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left",onClick:function(){return previous()}})};exports.LeftArrow=LeftArrow;var RightArrow=function(_a){var customRightArrow=_a.customRightArrow,next=_a.next,getState=_a.getState;return customRightArrow?React.cloneElement(customRightArrow,{onClick:function(){return next()},carouselState:getState()}):React.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right",onClick:function(){return next()}})};exports.RightArrow=RightArrow;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/Carousel.js":
/*!*************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/Carousel.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __extends=this&&this.__extends||function(){var extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(/*! react */ "../../node_modules/react/index.js"),utils_1=__webpack_require__(/*! ./utils */ "../../node_modules/react-multi-carousel/lib/utils/index.js"),types_1=__webpack_require__(/*! ./types */ "../../node_modules/react-multi-carousel/lib/types.js"),Dots_1=__webpack_require__(/*! ./Dots */ "../../node_modules/react-multi-carousel/lib/Dots.js"),Arrows_1=__webpack_require__(/*! ./Arrows */ "../../node_modules/react-multi-carousel/lib/Arrows.js"),CarouselItems_1=__webpack_require__(/*! ./CarouselItems */ "../../node_modules/react-multi-carousel/lib/CarouselItems.js"),common_1=__webpack_require__(/*! ./utils/common */ "../../node_modules/react-multi-carousel/lib/utils/common.js"),defaultTransitionDuration=400,defaultTransition="transform 400ms ease-in-out",Carousel=function(_super){function Carousel(props){var _this=_super.call(this,props)||this;return _this.containerRef=React.createRef(),_this.listRef=React.createRef(),_this.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:React.Children.count(props.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},_this.onResize=_this.onResize.bind(_this),_this.handleDown=_this.handleDown.bind(_this),_this.handleMove=_this.handleMove.bind(_this),_this.handleOut=_this.handleOut.bind(_this),_this.onKeyUp=_this.onKeyUp.bind(_this),_this.handleEnter=_this.handleEnter.bind(_this),_this.setIsInThrottle=_this.setIsInThrottle.bind(_this),_this.next=utils_1.throttle(_this.next.bind(_this),props.transitionDuration||defaultTransitionDuration,_this.setIsInThrottle),_this.previous=utils_1.throttle(_this.previous.bind(_this),props.transitionDuration||defaultTransitionDuration,_this.setIsInThrottle),_this.goToSlide=utils_1.throttle(_this.goToSlide.bind(_this),props.transitionDuration||defaultTransitionDuration,_this.setIsInThrottle),_this.onMove=!1,_this.initialX=0,_this.lastX=0,_this.isAnimationAllowed=!1,_this.direction="",_this.initialY=0,_this.isInThrottle=!1,_this.transformPlaceHolder=0,_this}return __extends(Carousel,_super),Carousel.prototype.resetTotalItems=function(){var _this=this,totalItems=React.Children.count(this.props.children),currentSlide=utils_1.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,totalItems));this.setState({totalItems:totalItems,currentSlide:currentSlide},function(){_this.setContainerAndItemWidth(_this.state.slidesToShow,!0)})},Carousel.prototype.setIsInThrottle=function(isInThrottle){void 0===isInThrottle&&(isInThrottle=!1),this.isInThrottle=isInThrottle},Carousel.prototype.setTransformDirectly=function(position,withAnimation){var additionalTransfrom=this.props.additionalTransfrom,currentTransform=common_1.getTransform(this.state,this.props,position);this.transformPlaceHolder=position,this.listRef&&this.listRef.current&&(this.setAnimationDirectly(withAnimation),this.listRef.current.style.transform="translate3d("+(currentTransform+additionalTransfrom)+"px,0,0)")},Carousel.prototype.setAnimationDirectly=function(animationAllowed){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=animationAllowed?this.props.customTransition||defaultTransition:"none")},Carousel.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.props.autoPlaySpeed&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},Carousel.prototype.setClones=function(slidesToShow,itemWidth,forResizing,resetCurrentSlide){var _this=this;void 0===resetCurrentSlide&&(resetCurrentSlide=!1),this.isAnimationAllowed=!1;var childrenArr=React.Children.toArray(this.props.children),initialSlide=utils_1.getInitialSlideInInfiniteMode(slidesToShow||this.state.slidesToShow,childrenArr),clones=utils_1.getClones(this.state.slidesToShow,childrenArr),currentSlide=childrenArr.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:clones.length,currentSlide:forResizing&&!resetCurrentSlide?currentSlide:initialSlide},function(){_this.correctItemsPosition(itemWidth||_this.state.itemWidth)})},Carousel.prototype.setItemsToShow=function(shouldCorrectItemPosition,resetCurrentSlide){var _this=this,responsive=this.props.responsive;Object.keys(responsive).forEach(function(item){var _a=responsive[item],breakpoint=_a.breakpoint,items=_a.items,max=breakpoint.max,min=breakpoint.min;window.innerWidth>=min&&window.innerWidth<=max&&(_this.setState({slidesToShow:items,deviceType:item}),_this.setContainerAndItemWidth(items,shouldCorrectItemPosition,resetCurrentSlide))})},Carousel.prototype.setContainerAndItemWidth=function(slidesToShow,shouldCorrectItemPosition,resetCurrentSlide){var _this=this;if(this.containerRef&&this.containerRef.current){var containerWidth=this.containerRef.current.offsetWidth,itemWidth_1=utils_1.getItemClientSideWidth(this.props,slidesToShow,containerWidth);this.setState({containerWidth:containerWidth,itemWidth:itemWidth_1},function(){_this.props.infinite&&_this.setClones(slidesToShow,itemWidth_1,shouldCorrectItemPosition,resetCurrentSlide)}),shouldCorrectItemPosition&&this.correctItemsPosition(itemWidth_1)}},Carousel.prototype.correctItemsPosition=function(itemWidth,isAnimationAllowed,setToDomDirectly){isAnimationAllowed&&(this.isAnimationAllowed=!0),!isAnimationAllowed&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var nextTransform=this.state.totalItems<this.state.slidesToShow?0:-itemWidth*this.state.currentSlide;setToDomDirectly&&this.setTransformDirectly(nextTransform,!0),this.setState({transform:nextTransform})},Carousel.prototype.onResize=function(value){var shouldCorrectItemPosition;shouldCorrectItemPosition=!!this.props.infinite&&("boolean"!=typeof value||!value),this.setItemsToShow(shouldCorrectItemPosition)},Carousel.prototype.componentDidUpdate=function(_a,_b){var _this=this,keyBoardControl=_a.keyBoardControl,autoPlay=_a.autoPlay,children=_a.children,containerWidth=_b.containerWidth,domLoaded=_b.domLoaded,currentSlide=_b.currentSlide;this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==containerWidth&&setTimeout(function(){_this.setItemsToShow(!0)},this.props.transitionDuration||defaultTransitionDuration),keyBoardControl&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!keyBoardControl&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),autoPlay&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),autoPlay||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),children.length!==this.props.children.length?setTimeout(function(){_this.props.infinite?_this.setClones(_this.state.slidesToShow,_this.state.itemWidth,!0,!0):_this.resetTotalItems()},this.props.transitionDuration||defaultTransitionDuration):this.props.infinite&&this.state.currentSlide!==currentSlide&&this.correctClonesPosition({domLoaded:domLoaded}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform)},Carousel.prototype.correctClonesPosition=function(_a){var _this=this,domLoaded=_a.domLoaded,childrenArr=React.Children.toArray(this.props.children),_b=utils_1.checkClonesPosition(this.state,childrenArr,this.props),isReachingTheEnd=_b.isReachingTheEnd,isReachingTheStart=_b.isReachingTheStart,nextSlide=_b.nextSlide,nextPosition=_b.nextPosition;this.state.domLoaded&&domLoaded&&(isReachingTheEnd||isReachingTheStart)&&(this.isAnimationAllowed=!1,setTimeout(function(){_this.setState({transform:nextPosition,currentSlide:nextSlide})},this.props.transitionDuration||defaultTransitionDuration))},Carousel.prototype.next=function(slidesHavePassed){var _this=this;void 0===slidesHavePassed&&(slidesHavePassed=0);var _a=this.props,afterChange=_a.afterChange,beforeChange=_a.beforeChange;if(!utils_1.notEnoughChildren(this.state)){var _b=utils_1.populateNextSlides(this.state,this.props,slidesHavePassed),nextSlides=_b.nextSlides,nextPosition=_b.nextPosition,previousSlide=this.state.currentSlide;void 0!==nextSlides&&void 0!==nextPosition&&("function"==typeof beforeChange&&beforeChange(nextSlides,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:nextPosition,currentSlide:nextSlides},function(){"function"==typeof afterChange&&setTimeout(function(){afterChange(previousSlide,_this.getState())},_this.props.transitionDuration||defaultTransitionDuration)}))}},Carousel.prototype.previous=function(slidesHavePassed){var _this=this;void 0===slidesHavePassed&&(slidesHavePassed=0);var _a=this.props,afterChange=_a.afterChange,beforeChange=_a.beforeChange;if(!utils_1.notEnoughChildren(this.state)){var _b=utils_1.populatePreviousSlides(this.state,this.props,slidesHavePassed),nextSlides=_b.nextSlides,nextPosition=_b.nextPosition;if(void 0!==nextSlides&&void 0!==nextPosition){var previousSlide=this.state.currentSlide;"function"==typeof beforeChange&&beforeChange(nextSlides,this.getState()),this.isAnimationAllowed=!0,this.setState({transform:nextPosition,currentSlide:nextSlides},function(){"function"==typeof afterChange&&setTimeout(function(){afterChange(previousSlide,_this.getState())},_this.props.transitionDuration||defaultTransitionDuration)})}}},Carousel.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},Carousel.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},Carousel.prototype.handleDown=function(e){if(!(!types_1.isMouseMoveEvent(e)&&!this.props.swipeable||types_1.isMouseMoveEvent(e)&&!this.props.draggable||this.isInThrottle)){var _a=types_1.isMouseMoveEvent(e)?e:e.touches[0],clientX=_a.clientX,clientY=_a.clientY;this.onMove=!0,this.initialX=clientX,this.initialY=clientY,this.lastX=clientX,this.isAnimationAllowed=!1}},Carousel.prototype.handleMove=function(e){if(!(!types_1.isMouseMoveEvent(e)&&!this.props.swipeable||types_1.isMouseMoveEvent(e)&&!this.props.draggable||utils_1.notEnoughChildren(this.state))){var _a=types_1.isMouseMoveEvent(e)?e:e.touches[0],clientX=_a.clientX,clientY=_a.clientY,diffX=this.initialX-clientX,diffY=this.initialY-clientY;if(!types_1.isMouseMoveEvent(e)&&this.autoPlay&&this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.onMove){if(!(Math.abs(diffX)>Math.abs(diffY)))return;var _b=utils_1.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,clientX,this.transformPlaceHolder),direction=_b.direction,nextPosition=_b.nextPosition,canContinue=_b.canContinue;direction&&(this.direction=direction,canContinue&&void 0!==nextPosition&&this.setTransformDirectly(nextPosition)),this.lastX=clientX}}},Carousel.prototype.handleOut=function(e){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var shouldDisableOnMobile="touchend"===e.type&&!this.props.swipeable,shouldDisableOnDesktop=("mouseleave"===e.type||"mouseup"===e.type)&&!this.props.draggable;if(!shouldDisableOnMobile&&!shouldDisableOnDesktop&&this.onMove){if(this.setAnimationDirectly(!0),"right"===this.direction)if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var slidesHavePassed=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(slidesHavePassed)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);if("left"===this.direction)if(this.lastX-this.initialX>this.props.minimumTouchDrag){slidesHavePassed=Math.round((this.lastX-this.initialX)/this.state.itemWidth);this.previous(slidesHavePassed)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.resetMoveStatus()}},Carousel.prototype.onKeyUp=function(e){switch(e.keyCode){case 37:return this.previous();case 39:return this.next()}},Carousel.prototype.handleEnter=function(){this.autoPlay&&this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},Carousel.prototype.goToSlide=function(slide,skipCallbacks){var _this=this;if(!this.isInThrottle){var itemWidth=this.state.itemWidth,_a=this.props,afterChange=_a.afterChange,beforeChange=_a.beforeChange,previousSlide=this.state.currentSlide;"function"!=typeof beforeChange||skipCallbacks&&("object"!=typeof skipCallbacks||skipCallbacks.skipBeforeChange)||beforeChange(slide,this.getState()),this.isAnimationAllowed=!0,this.setState({currentSlide:slide,transform:-itemWidth*slide},function(){_this.props.infinite&&_this.correctClonesPosition({domLoaded:!0}),"function"!=typeof afterChange||skipCallbacks&&("object"!=typeof skipCallbacks||skipCallbacks.skipAfterChange)||setTimeout(function(){afterChange(previousSlide,_this.getState())},_this.props.transitionDuration||defaultTransitionDuration)})}},Carousel.prototype.getState=function(){return this.state},Carousel.prototype.renderLeftArrow=function(){var _this=this,customLeftArrow=this.props.customLeftArrow;return React.createElement(Arrows_1.LeftArrow,{customLeftArrow:customLeftArrow,getState:function(){return _this.getState()},previous:this.previous})},Carousel.prototype.renderRightArrow=function(){var _this=this,customRightArrow=this.props.customRightArrow;return React.createElement(Arrows_1.RightArrow,{customRightArrow:customRightArrow,getState:function(){return _this.getState()},next:this.next})},Carousel.prototype.renderButtonGroups=function(){var _this=this,customButtonGroup=this.props.customButtonGroup;return customButtonGroup?React.cloneElement(customButtonGroup,{previous:function(){return _this.previous()},next:function(){return _this.next()},goToSlide:function(slideIndex,skipCallbacks){return _this.goToSlide(slideIndex,skipCallbacks)},carouselState:this.getState()}):null},Carousel.prototype.renderDotsList=function(){var _this=this;return React.createElement(Dots_1.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return _this.getState()}})},Carousel.prototype.renderCarouselItems=function(){var clones=[];if(this.props.infinite){var childrenArr=React.Children.toArray(this.props.children);clones=utils_1.getClones(this.state.slidesToShow,childrenArr)}return React.createElement(CarouselItems_1.default,{clones:clones,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:utils_1.notEnoughChildren(this.state),props:this.props})},Carousel.prototype.render=function(){var _a=this.props,deviceType=_a.deviceType,arrows=_a.arrows,removeArrowOnDeviceType=_a.removeArrowOnDeviceType,infinite=_a.infinite,containerClass=_a.containerClass,sliderClass=_a.sliderClass,customTransition=_a.customTransition,additionalTransfrom=_a.additionalTransfrom,renderDotsOutside=_a.renderDotsOutside,renderButtonGroupOutside=_a.renderButtonGroupOutside,className=_a.className; true&&utils_1.throwError(this.state,this.props);var _b=utils_1.getInitialState(this.state,this.props),shouldRenderOnSSR=_b.shouldRenderOnSSR,shouldRenderAtAll=_b.shouldRenderAtAll,isLeftEndReach=utils_1.isInLeftEnd(this.state),isRightEndReach=utils_1.isInRightEnd(this.state),shouldShowArrows=arrows&&!(removeArrowOnDeviceType&&(deviceType&&-1<removeArrowOnDeviceType.indexOf(deviceType)||this.state.deviceType&&-1<removeArrowOnDeviceType.indexOf(this.state.deviceType)))&&!utils_1.notEnoughChildren(this.state)&&shouldRenderAtAll,disableLeftArrow=!infinite&&isLeftEndReach,disableRightArrow=!infinite&&isRightEndReach,currentTransform=common_1.getTransform(this.state,this.props);return React.createElement(React.Fragment,null,React.createElement("div",{className:"react-multi-carousel-list "+containerClass+" "+className,ref:this.containerRef},React.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+sliderClass,style:{transition:this.isAnimationAllowed?customTransition||defaultTransition:"none",overflow:shouldRenderOnSSR?"hidden":"unset",transform:"translate3d("+(currentTransform+additionalTransfrom)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),shouldShowArrows&&!disableLeftArrow&&this.renderLeftArrow(),shouldShowArrows&&!disableRightArrow&&this.renderRightArrow(),shouldRenderAtAll&&!renderButtonGroupOutside&&this.renderButtonGroups(),shouldRenderAtAll&&!renderDotsOutside&&this.renderDotsList()),shouldRenderAtAll&&renderDotsOutside&&this.renderDotsList(),shouldRenderAtAll&&renderButtonGroupOutside&&this.renderButtonGroups())},Carousel.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0},Carousel}(React.Component);exports.default=Carousel;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/CarouselItems.js":
/*!******************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/CarouselItems.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(/*! react */ "../../node_modules/react/index.js"),utils_1=__webpack_require__(/*! ./utils */ "../../node_modules/react-multi-carousel/lib/utils/index.js"),CarouselItems=function(_a){var props=_a.props,state=_a.state,goToSlide=_a.goToSlide,clones=_a.clones,notEnoughChildren=_a.notEnoughChildren,itemWidth=state.itemWidth,children=props.children,infinite=props.infinite,itemClass=props.itemClass,partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,_b=utils_1.getInitialState(state,props),flexBisis=_b.flexBisis,shouldRenderOnSSR=_b.shouldRenderOnSSR,domFullyLoaded=_b.domFullyLoaded,partialVisibilityGutter=_b.partialVisibilityGutter;return _b.shouldRenderAtAll?(partialVisbile&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),React.createElement(React.Fragment,null,(infinite?clones:React.Children.toArray(children)).map(function(child,index){return React.createElement("li",{key:index,"data-index":index,onClick:function(){props.focusOnSelect&&goToSlide(index)},"aria-hidden":utils_1.getIfSlideIsVisbile(index,state)?"false":"true",style:{flex:shouldRenderOnSSR?"1 0 "+flexBisis+"%":"auto",position:"relative",width:domFullyLoaded?((partialVisbile||partialVisible)&&partialVisibilityGutter&&!notEnoughChildren?itemWidth-partialVisibilityGutter:itemWidth)+"px":"auto"},className:"react-multi-carousel-item "+(utils_1.getIfSlideIsVisbile(index,state)?"react-multi-carousel-item--active":"")+" "+itemClass},child)}))):null};exports.default=CarouselItems;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/Dots.js":
/*!*********************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/Dots.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(/*! react */ "../../node_modules/react/index.js"),clones_1=__webpack_require__(/*! ./utils/clones */ "../../node_modules/react-multi-carousel/lib/utils/clones.js"),dots_1=__webpack_require__(/*! ./utils/dots */ "../../node_modules/react-multi-carousel/lib/utils/dots.js"),common_1=__webpack_require__(/*! ./utils/common */ "../../node_modules/react-multi-carousel/lib/utils/common.js"),Dots=function(_a){var props=_a.props,state=_a.state,goToSlide=_a.goToSlide,getState=_a.getState,showDots=props.showDots,customDot=props.customDot,dotListClass=props.dotListClass,infinite=props.infinite,children=props.children;if(!showDots||common_1.notEnoughChildren(state))return null;var numberOfDotsToShow,currentSlide=state.currentSlide,slidesToShow=state.slidesToShow,slidesToSlide=common_1.getSlidesToSlide(state,props),childrenArr=React.Children.toArray(children);numberOfDotsToShow=infinite?Math.ceil(childrenArr.length/slidesToSlide):Math.ceil((childrenArr.length-slidesToShow)/slidesToSlide)+1;var nextSlidesTable=dots_1.getLookupTableForNextSlides(numberOfDotsToShow,state,props,childrenArr),lookupTable=clones_1.getOriginalIndexLookupTableByClones(slidesToShow,childrenArr),currentSlides=lookupTable[currentSlide];return React.createElement("ul",{className:"react-multi-carousel-dot-list "+dotListClass},Array(numberOfDotsToShow).fill(0).map(function(_,index){var isActive,nextSlide;if(infinite){nextSlide=nextSlidesTable[index];var cloneIndex=lookupTable[nextSlide];isActive=currentSlides===cloneIndex||cloneIndex<=currentSlides&&currentSlides<cloneIndex+slidesToSlide}else{var maximumNextSlide=childrenArr.length-slidesToShow,possibileNextSlides=index*slidesToSlide;isActive=(nextSlide=maximumNextSlide<possibileNextSlides?maximumNextSlide:possibileNextSlides)===currentSlide||nextSlide<currentSlide&&currentSlide<nextSlide+slidesToSlide&&currentSlide<childrenArr.length-slidesToShow}return customDot?React.cloneElement(customDot,{index:index,active:isActive,key:index,onClick:function(){return goToSlide(nextSlide)},carouselState:getState()}):React.createElement("li",{"data-index":index,key:index,className:"react-multi-carousel-dot "+(isActive?"react-multi-carousel-dot--active":"")},React.createElement("button",{onClick:function(){return goToSlide(nextSlide)}}))}))};exports.default=Dots;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/index.js":
/*!**********************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var Carousel_1=__webpack_require__(/*! ./Carousel */ "../../node_modules/react-multi-carousel/lib/Carousel.js");exports.default=Carousel_1.default;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/types.js":
/*!**********************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/types.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __extends=this&&this.__extends||function(){var extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(/*! react */ "../../node_modules/react/index.js");function isMouseMoveEvent(e){return"clientY"in e}exports.isMouseMoveEvent=isMouseMoveEvent;var Carousel=function(_super){function Carousel(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(Carousel,_super),Carousel}(React.Component);exports.default=Carousel;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/clones.js":
/*!*****************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/clones.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function getOriginalCounterPart(index,_a,childrenArr){var slidesToShow=_a.slidesToShow,currentSlide=_a.currentSlide;return childrenArr.length>2*slidesToShow?index+2*slidesToShow:currentSlide>=childrenArr.length?childrenArr.length+index:index}function getOriginalIndexLookupTableByClones(slidesToShow,childrenArr){if(childrenArr.length>2*slidesToShow){for(var table={},firstBeginningOfClones=childrenArr.length-2*slidesToShow,firstEndOfClones=childrenArr.length-firstBeginningOfClones,firstCount=firstBeginningOfClones,i=0;i<firstEndOfClones;i++)table[i]=firstCount,firstCount++;var secondBeginningOfClones=childrenArr.length+firstEndOfClones,secondEndOfClones=secondBeginningOfClones+childrenArr.slice(0,2*slidesToShow).length,secondCount=0;for(i=secondBeginningOfClones;i<=secondEndOfClones;i++)table[i]=secondCount,secondCount++;var originalEnd=secondBeginningOfClones,originalCounter=0;for(i=firstEndOfClones;i<originalEnd;i++)table[i]=originalCounter,originalCounter++;return table}table={};var totalSlides=3*childrenArr.length,count=0;for(i=0;i<totalSlides;i++)table[i]=count,++count===childrenArr.length&&(count=0);return table}function getClones(slidesToShow,childrenArr){return childrenArr.length<slidesToShow?childrenArr:childrenArr.length>2*slidesToShow?childrenArr.slice(childrenArr.length-2*slidesToShow,childrenArr.length).concat(childrenArr,childrenArr.slice(0,2*slidesToShow)):childrenArr.concat(childrenArr,childrenArr)}function getInitialSlideInInfiniteMode(slidesToShow,childrenArr){return childrenArr.length>2*slidesToShow?2*slidesToShow:childrenArr.length}function checkClonesPosition(_a,childrenArr,props){var isReachingTheEnd,currentSlide=_a.currentSlide,slidesToShow=_a.slidesToShow,itemWidth=_a.itemWidth,totalItems=_a.totalItems,nextSlide=0,nextPosition=0,isReachingTheStart=0===currentSlide,originalFirstSlide=childrenArr.length-(childrenArr.length-2*slidesToShow);return childrenArr.length<slidesToShow?(nextPosition=nextSlide=0,isReachingTheStart=isReachingTheEnd=!1):childrenArr.length>2*slidesToShow?((isReachingTheEnd=currentSlide>=originalFirstSlide+childrenArr.length)&&(nextPosition=-itemWidth*(nextSlide=currentSlide-childrenArr.length)),isReachingTheStart&&(nextPosition=-itemWidth*(nextSlide=originalFirstSlide+(childrenArr.length-2*slidesToShow)))):((isReachingTheEnd=currentSlide>=2*childrenArr.length)&&(nextPosition=-itemWidth*(nextSlide=currentSlide-childrenArr.length)),isReachingTheStart&&(nextPosition=props.showDots?-itemWidth*(nextSlide=childrenArr.length):-itemWidth*(nextSlide=totalItems-2*slidesToShow))),{isReachingTheEnd:isReachingTheEnd,isReachingTheStart:isReachingTheStart,nextSlide:nextSlide,nextPosition:nextPosition}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOriginalCounterPart=getOriginalCounterPart,exports.getOriginalIndexLookupTableByClones=getOriginalIndexLookupTableByClones,exports.getClones=getClones,exports.getInitialSlideInInfiniteMode=getInitialSlideInInfiniteMode,exports.checkClonesPosition=checkClonesPosition;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/common.js":
/*!*****************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/common.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var elementWidth_1=__webpack_require__(/*! ./elementWidth */ "../../node_modules/react-multi-carousel/lib/utils/elementWidth.js");function notEnoughChildren(state){var slidesToShow=state.slidesToShow;return state.totalItems<slidesToShow}function getInitialState(state,props){var flexBisis,domLoaded=state.domLoaded,slidesToShow=state.slidesToShow,containerWidth=state.containerWidth,itemWidth=state.itemWidth,deviceType=props.deviceType,responsive=props.responsive,ssr=props.ssr,partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,domFullyLoaded=Boolean(domLoaded&&slidesToShow&&containerWidth&&itemWidth);ssr&&deviceType&&!domFullyLoaded&&(flexBisis=elementWidth_1.getWidthFromDeviceType(deviceType,responsive));var shouldRenderOnSSR=Boolean(ssr&&deviceType&&!domFullyLoaded&&flexBisis);return{shouldRenderOnSSR:shouldRenderOnSSR,flexBisis:flexBisis,domFullyLoaded:domFullyLoaded,partialVisibilityGutter:elementWidth_1.getPartialVisibilityGutter(responsive,partialVisbile||partialVisible,deviceType,state.deviceType),shouldRenderAtAll:shouldRenderOnSSR||domFullyLoaded}}function getIfSlideIsVisbile(index,state){var currentSlide=state.currentSlide,slidesToShow=state.slidesToShow;return currentSlide<=index&&index<currentSlide+slidesToShow}function getTransformForCenterMode(state,props,transformPlaceHolder){var transform=transformPlaceHolder||state.transform;return!props.infinite&&0===state.currentSlide||notEnoughChildren(state)?transform:transform+state.itemWidth/2}function isInLeftEnd(_a){return!(0<_a.currentSlide)}function isInRightEnd(_a){var currentSlide=_a.currentSlide,totalItems=_a.totalItems;return!(currentSlide+_a.slidesToShow<totalItems)}function getTransformForPartialVsibile(state,partialVisibilityGutter,props,transformPlaceHolder){void 0===partialVisibilityGutter&&(partialVisibilityGutter=0);var currentSlide=state.currentSlide,slidesToShow=state.slidesToShow,isRightEndReach=isInRightEnd(state),shouldRemoveRightGutter=!props.infinite&&isRightEndReach,baseTransform=transformPlaceHolder||state.transform;if(notEnoughChildren(state))return baseTransform;var transform=baseTransform+currentSlide*partialVisibilityGutter;return shouldRemoveRightGutter?transform+(state.containerWidth-(state.itemWidth-partialVisibilityGutter)*slidesToShow):transform}function getTransform(state,props,transformPlaceHolder){var partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,responsive=props.responsive,deviceType=props.deviceType,centerMode=props.centerMode,transform=transformPlaceHolder||state.transform,partialVisibilityGutter=elementWidth_1.getPartialVisibilityGutter(responsive,partialVisbile||partialVisible,deviceType,state.deviceType);return partialVisible||partialVisbile?getTransformForPartialVsibile(state,partialVisibilityGutter,props,transformPlaceHolder):centerMode?getTransformForCenterMode(state,props,transformPlaceHolder):transform}function getSlidesToSlide(state,props){var domLoaded=state.domLoaded,slidesToShow=state.slidesToShow,containerWidth=state.containerWidth,itemWidth=state.itemWidth,deviceType=props.deviceType,responsive=props.responsive,slidesToScroll=props.slidesToSlide||1,domFullyLoaded=Boolean(domLoaded&&slidesToShow&&containerWidth&&itemWidth);return props.ssr&&props.deviceType&&!domFullyLoaded&&Object.keys(responsive).forEach(function(device){var slidesToSlide=responsive[device].slidesToSlide;deviceType===device&&slidesToSlide&&(slidesToScroll=slidesToSlide)}),domFullyLoaded&&Object.keys(responsive).forEach(function(item){var _a=responsive[item],breakpoint=_a.breakpoint,slidesToSlide=_a.slidesToSlide,max=breakpoint.max,min=breakpoint.min;slidesToSlide&&window.innerWidth>=min&&window.innerWidth<=max&&(slidesToScroll=slidesToSlide)}),slidesToScroll}exports.notEnoughChildren=notEnoughChildren,exports.getInitialState=getInitialState,exports.getIfSlideIsVisbile=getIfSlideIsVisbile,exports.getTransformForCenterMode=getTransformForCenterMode,exports.isInLeftEnd=isInLeftEnd,exports.isInRightEnd=isInRightEnd,exports.getTransformForPartialVsibile=getTransformForPartialVsibile,exports.getTransform=getTransform,exports.getSlidesToSlide=getSlidesToSlide;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/dots.js":
/*!***************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/dots.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var clones_1=__webpack_require__(/*! ./clones */ "../../node_modules/react-multi-carousel/lib/utils/clones.js"),common_1=__webpack_require__(/*! ./common */ "../../node_modules/react-multi-carousel/lib/utils/common.js");function getLookupTableForNextSlides(numberOfDotsToShow,state,props,childrenArr){var table={},slidesToSlide=common_1.getSlidesToSlide(state,props);return Array(numberOfDotsToShow).fill(0).forEach(function(_,i){var nextSlide=clones_1.getOriginalCounterPart(i,state,childrenArr);if(0===i)table[0]=nextSlide;else{var now=table[i-1]+slidesToSlide;table[i]=now}}),table}exports.getLookupTableForNextSlides=getLookupTableForNextSlides;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/elementWidth.js":
/*!***********************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/elementWidth.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var hasWarnAboutTypo=!1;function getPartialVisibilityGutter(responsive,partialVisible,serverSideDeviceType,clientSideDeviceType){var gutter=0,deviceType=clientSideDeviceType||serverSideDeviceType;return partialVisible&&deviceType&&(!hasWarnAboutTypo&&"production"!=="development"&&responsive[deviceType].paritialVisibilityGutter&&(hasWarnAboutTypo=!0,console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")),gutter=responsive[deviceType].partialVisibilityGutter||responsive[deviceType].paritialVisibilityGutter),gutter}function getWidthFromDeviceType(deviceType,responsive){var itemWidth;responsive[deviceType]&&(itemWidth=(100/responsive[deviceType].items).toFixed(1));return itemWidth}function getItemClientSideWidth(props,slidesToShow,containerWidth){return Math.round(containerWidth/(slidesToShow+(props.centerMode?1:0)))}exports.getPartialVisibilityGutter=getPartialVisibilityGutter,exports.getWidthFromDeviceType=getWidthFromDeviceType,exports.getItemClientSideWidth=getItemClientSideWidth;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/index.js":
/*!****************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var clones_1=__webpack_require__(/*! ./clones */ "../../node_modules/react-multi-carousel/lib/utils/clones.js");exports.getOriginalCounterPart=clones_1.getOriginalCounterPart,exports.getClones=clones_1.getClones,exports.checkClonesPosition=clones_1.checkClonesPosition,exports.getInitialSlideInInfiniteMode=clones_1.getInitialSlideInInfiniteMode;var elementWidth_1=__webpack_require__(/*! ./elementWidth */ "../../node_modules/react-multi-carousel/lib/utils/elementWidth.js");exports.getWidthFromDeviceType=elementWidth_1.getWidthFromDeviceType,exports.getPartialVisibilityGutter=elementWidth_1.getPartialVisibilityGutter,exports.getItemClientSideWidth=elementWidth_1.getItemClientSideWidth;var common_1=__webpack_require__(/*! ./common */ "../../node_modules/react-multi-carousel/lib/utils/common.js");exports.getInitialState=common_1.getInitialState,exports.getIfSlideIsVisbile=common_1.getIfSlideIsVisbile,exports.getTransformForCenterMode=common_1.getTransformForCenterMode,exports.getTransformForPartialVsibile=common_1.getTransformForPartialVsibile,exports.isInLeftEnd=common_1.isInLeftEnd,exports.isInRightEnd=common_1.isInRightEnd,exports.notEnoughChildren=common_1.notEnoughChildren,exports.getSlidesToSlide=common_1.getSlidesToSlide;var throttle_1=__webpack_require__(/*! ./throttle */ "../../node_modules/react-multi-carousel/lib/utils/throttle.js");exports.throttle=throttle_1.default;var throwError_1=__webpack_require__(/*! ./throwError */ "../../node_modules/react-multi-carousel/lib/utils/throwError.js");exports.throwError=throwError_1.default;var next_1=__webpack_require__(/*! ./next */ "../../node_modules/react-multi-carousel/lib/utils/next.js");exports.populateNextSlides=next_1.populateNextSlides;var previous_1=__webpack_require__(/*! ./previous */ "../../node_modules/react-multi-carousel/lib/utils/previous.js");exports.populatePreviousSlides=previous_1.populatePreviousSlides;var mouseOrTouchMove_1=__webpack_require__(/*! ./mouseOrTouchMove */ "../../node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js");exports.populateSlidesOnMouseTouchMove=mouseOrTouchMove_1.populateSlidesOnMouseTouchMove;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js":
/*!***************************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/mouseOrTouchMove.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function populateSlidesOnMouseTouchMove(state,props,initialX,lastX,clientX,transformPlaceHolder){var direction,nextPosition,itemWidth=state.itemWidth,slidesToShow=state.slidesToShow,totalItems=state.totalItems,currentSlide=state.currentSlide,infinite=props.infinite,canContinue=!1,slidesHavePassedRight=Math.round((initialX-lastX)/itemWidth),slidesHavePassedLeft=Math.round((lastX-initialX)/itemWidth),isMovingLeft=initialX<clientX;if(clientX<initialX&&!!(slidesHavePassedRight<=slidesToShow)){direction="right";var translateXLimit=Math.abs(-itemWidth*(totalItems-slidesToShow)),nextTranslate=transformPlaceHolder-(lastX-clientX),isLastSlide=currentSlide===totalItems-slidesToShow;(Math.abs(nextTranslate)<=translateXLimit||isLastSlide&&infinite)&&(nextPosition=nextTranslate,canContinue=!0)}isMovingLeft&&slidesHavePassedLeft<=slidesToShow&&(direction="left",((nextTranslate=transformPlaceHolder+(clientX-lastX))<=0||0===currentSlide&&infinite)&&(canContinue=!0,nextPosition=nextTranslate));return{direction:direction,nextPosition:nextPosition,canContinue:canContinue}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.populateSlidesOnMouseTouchMove=populateSlidesOnMouseTouchMove;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/next.js":
/*!***************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/next.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var common_1=__webpack_require__(/*! ./common */ "../../node_modules/react-multi-carousel/lib/utils/common.js");function populateNextSlides(state,props,slidesHavePassed){void 0===slidesHavePassed&&(slidesHavePassed=0);var nextSlides,nextPosition,slidesToShow=state.slidesToShow,currentSlide=state.currentSlide,itemWidth=state.itemWidth,totalItems=state.totalItems,slidesToSlide=common_1.getSlidesToSlide(state,props),nextMaximumSlides=currentSlide+1+slidesHavePassed+slidesToShow+(0<slidesHavePassed?0:slidesToSlide);return nextPosition=nextMaximumSlides<=totalItems?-itemWidth*(nextSlides=currentSlide+slidesHavePassed+(0<slidesHavePassed?0:slidesToSlide)):totalItems<nextMaximumSlides&&currentSlide!==totalItems-slidesToShow?-itemWidth*(nextSlides=totalItems-slidesToShow):nextSlides=void 0,{nextSlides:nextSlides,nextPosition:nextPosition}}exports.populateNextSlides=populateNextSlides;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/previous.js":
/*!*******************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/previous.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(/*! react */ "../../node_modules/react/index.js"),common_1=__webpack_require__(/*! ./common */ "../../node_modules/react-multi-carousel/lib/utils/common.js"),common_2=__webpack_require__(/*! ./common */ "../../node_modules/react-multi-carousel/lib/utils/common.js");function populatePreviousSlides(state,props,slidesHavePassed){void 0===slidesHavePassed&&(slidesHavePassed=0);var nextSlides,nextPosition,currentSlide=state.currentSlide,itemWidth=state.itemWidth,slidesToShow=state.slidesToShow,children=props.children,showDots=props.showDots,infinite=props.infinite,slidesToSlide=common_1.getSlidesToSlide(state,props),nextMaximumSlides=currentSlide-slidesHavePassed-(0<slidesHavePassed?0:slidesToSlide),additionalSlides=(React.Children.toArray(children).length-slidesToShow)%slidesToSlide;return nextPosition=0<=nextMaximumSlides?(nextSlides=nextMaximumSlides,showDots&&!infinite&&0<additionalSlides&&common_2.isInRightEnd(state)&&(nextSlides=currentSlide-additionalSlides),-itemWidth*nextSlides):nextSlides=nextMaximumSlides<0&&0!==currentSlide?0:void 0,{nextSlides:nextSlides,nextPosition:nextPosition}}exports.populatePreviousSlides=populatePreviousSlides;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/throttle.js":
/*!*******************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/throttle.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var throttle=function(func,limit,setIsInThrottle){var inThrottle;return function(){var args=arguments;inThrottle||(func.apply(this,args),inThrottle=!0,"function"==typeof setIsInThrottle&&setIsInThrottle(!0),setTimeout(function(){inThrottle=!1,"function"==typeof setIsInThrottle&&setIsInThrottle(!1)},limit))}};exports.default=throttle;

/***/ }),

/***/ "../../node_modules/react-multi-carousel/lib/utils/throwError.js":
/*!*********************************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-multi-carousel/lib/utils/throwError.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function throwError(state,props){var partialVisbile=props.partialVisbile,partialVisible=props.partialVisible,centerMode=props.centerMode,ssr=props.ssr,responsive=props.responsive;if((partialVisbile||partialVisible)&&centerMode)throw new Error("center mode can not be used at the same time with partialVisible");if(!responsive)throw ssr?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(responsive&&"object"!=typeof responsive)throw new Error("responsive prop must be an object")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=throwError;

/***/ }),

/***/ "./components/MultiCarousel/MultiCarousel.tsx":
/*!****************************************************!*\
  !*** ./components/MultiCarousel/MultiCarousel.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/theme-get */ "../../node_modules/@styled-system/theme-get/dist/index.esm.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel */ "../../node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Image_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Image/Image */ "./components/Image/Image.tsx");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "../../node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MultiCarousel_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiCarousel.style.css */ "./components/MultiCarousel/MultiCarousel.style.css");
/* harmony import */ var _MultiCarousel_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MultiCarousel_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");



var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/components/MultiCarousel/MultiCarousel.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var SingleItem = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].li.withConfig({
  displayName: "MultiCarousel__SingleItem",
  componentId: "sc-1nzkl3p-0"
})(["border:1px solid ", ";border-radius:6px;margin-right:20px;padding:0;outline:none;width:70px;height:auto;overflow:hidden;&:last-child{margin-right:0;}&.custom-dot--active{border:2px solid ", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('colors.borderColor', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('colors.primary', '#009E7F'));
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200
    },
    items: 1
  }
};

var CarouselWithCustomDots = function CarouselWithCustomDots(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$deviceType = _ref.deviceType,
      mobile = _ref$deviceType.mobile,
      tablet = _ref$deviceType.tablet,
      desktop = _ref$deviceType.desktop,
      title = _ref.title,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["items", "deviceType", "title"]);

  var children = items.slice(0, 6).map(function (item, index) {
    return __jsx(components_Image_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
      url: item.url,
      key: index,
      alt: title,
      style: {
        minWidth: 'auto',
        height: 'auto',
        position: 'relative',
        margin: 'auto'
      },
      className: "product-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    });
  });
  var images = items.map(function (item, index) {
    return __jsx(components_Image_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
      url: item.url,
      key: index,
      alt: title,
      style: {
        width: '100%',
        height: '100%',
        position: 'relative'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }
    });
  });

  var CustomDot = function CustomDot(_ref2) {
    var index = _ref2.index,
        _onClick = _ref2.onClick,
        active = _ref2.active,
        _ref2$carouselState = _ref2.carouselState,
        currentSlide = _ref2$carouselState.currentSlide,
        deviceType = _ref2$carouselState.deviceType;
    return __jsx(SingleItem, {
      "data-index": index,
      key: index,
      onClick: function onClick() {
        return _onClick();
      },
      className: "custom-dot ".concat(active && 'custom-dot--active'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.toArray(images)[index]);
  };

  var deviceType = 'desktop';

  if (mobile) {
    deviceType = 'mobile';
  }

  if (tablet) {
    deviceType = 'tablet';
  }

  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    showDots: true,
    ssr: true,
    infinite: true,
    slidesToSlide: 1,
    containerClass: "carousel-with-custom-dots",
    responsive: responsive,
    deviceType: deviceType,
    autoPlay: false,
    arrows: false,
    customDot: __jsx(CustomDot, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 18
      }
    })
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselWithCustomDots);

/***/ }),

/***/ "./components/Truncate/Truncate.tsx":
/*!******************************************!*\
  !*** ./components/Truncate/Truncate.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/components/Truncate/Truncate.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ReadMore = function ReadMore(_ref) {
  var children = _ref.children,
      more = _ref.more,
      less = _ref.less,
      character = _ref.character;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var toggleLines = function toggleLines(event) {
    event.preventDefault();
    setExpanded(!expanded);
  };

  if (!children) return null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children && children.length < character || expanded ? children : children.substring(0, character), children && children.length > character && !expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, more))), children && children.length > character && expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, less))));
};

ReadMore.defaultProps = {
  character: 150,
  more: 'Read more',
  less: 'less'
};
/* harmony default export */ __webpack_exports__["default"] = (ReadMore);

/***/ }),

/***/ "./containers/QuickView/QuickView.style.tsx":
/*!**************************************************!*\
  !*** ./containers/QuickView/QuickView.style.tsx ***!
  \**************************************************/
/*! exports provided: QuickViewWrapper, ProductDetailsWrapper, ProductPreview, SaleTag, DiscountPercent, ProductInfoWrapper, ProductInfo, ProductTitle, ProductWeight, ProductDescription, ProductPriceWrapper, ProductPrice, SalePrice, ProductCartBtn, ProductCartWrapper, ProductMeta, MetaSingle, MetaItem, ModalClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickViewWrapper", function() { return QuickViewWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsWrapper", function() { return ProductDetailsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPreview", function() { return ProductPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleTag", function() { return SaleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountPercent", function() { return DiscountPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfoWrapper", function() { return ProductInfoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfo", function() { return ProductInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTitle", function() { return ProductTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWeight", function() { return ProductWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescription", function() { return ProductDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPriceWrapper", function() { return ProductPriceWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPrice", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePrice", function() { return SalePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCartBtn", function() { return ProductCartBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCartWrapper", function() { return ProductCartWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMeta", function() { return ProductMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaSingle", function() { return MetaSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaItem", function() { return MetaItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClose", function() { return ModalClose; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "../../node_modules/@styled-system/theme-get/dist/index.esm.js");


var QuickViewWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__QuickViewWrapper",
  componentId: "sc-6nsgke-0"
})(["max-width:1020px;"]);
var ProductDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductDetailsWrapper",
  componentId: "sc-6nsgke-1"
})(["background-color:#fff;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;min-height:100%;border-radius:6px;overflow:hidden;box-sizing:border-box;box-shadow:0 10px 40px rgba(0,0,0,0.16);*{box-sizing:border-box;}"]);
var ProductPreview = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductPreview",
  componentId: "sc-6nsgke-2"
})(["flex:0 0 50%;max-width:50%;padding:30px 60px;display:flex;align-items:center;justify-content:center;position:relative;@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 47px 40px 30px;order:0;}img{width:100%;@media (max-width:767px){min-width:auto !important;}}"]);
var SaleTag = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "QuickViewstyle__SaleTag",
  componentId: "sc-6nsgke-3"
})(["font-size:12px;font-weight:700;color:#ffffff;background-color:", ";padding:0 10px;line-height:24px;border-radius:12px;display:inline-block;position:absolute;top:40px;right:30px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'));
var DiscountPercent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "QuickViewstyle__DiscountPercent",
  componentId: "sc-6nsgke-4"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:#ffffff;line-height:24px;background-color:", ";padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:30px;right:30px;border-radius:12px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'));
var ProductInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductInfoWrapper",
  componentId: "sc-6nsgke-5"
})(["flex:0 0 50%;max-width:50%;border-left:1px solid ", ";@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:10px 0 30px;order:1;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightMediumColor', '#f3f3f3'));
var ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductInfo",
  componentId: "sc-6nsgke-6"
})(["padding:50px;@media (max-width:767px){padding:0px 45px 30px 30px;}"]);
var ProductTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "QuickViewstyle__ProductTitle",
  componentId: "sc-6nsgke-7"
})(["font-family:'Poppins',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.5s;margin-bottom:10px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
var ProductWeight = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductWeight",
  componentId: "sc-6nsgke-8"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798c'));
var ProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "QuickViewstyle__ProductDescription",
  componentId: "sc-6nsgke-9"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:2;margin-top:30px;margin-bottom:65px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkMedium', '#424561'));
var ProductPriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductPriceWrapper",
  componentId: "sc-6nsgke-10"
})(["display:flex;align-items:center;"]);
var ProductPrice = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductPrice",
  componentId: "sc-6nsgke-11"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.3', '19'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
var SalePrice = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "QuickViewstyle__SalePrice",
  componentId: "sc-6nsgke-12"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;overflow:hidden;position:relative;margin-right:15px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'));
var ProductCartBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductCartBtn",
  componentId: "sc-6nsgke-13"
})(["margin-top:30px;.reusecore__button{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";height:36px;border-radius:4rem;.btn-icon{margin-right:5px;}&:hover{color:#fff;background-color:", ";border-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
var ProductCartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductCartWrapper",
  componentId: "sc-6nsgke-14"
})(["display:flex;flex-direction:column;"]);
var ProductMeta = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__ProductMeta",
  componentId: "sc-6nsgke-15"
})(["margin-top:30px;"]);
var MetaSingle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "QuickViewstyle__MetaSingle",
  componentId: "sc-6nsgke-16"
})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:10px;&:last-child{margin-bottom:0;}"]);
var MetaItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "QuickViewstyle__MetaItem",
  componentId: "sc-6nsgke-17"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin-right:10px;background-color:", ";padding:0 15px;border-radius:6px;cursor:pointer;height:30px;display:flex;align-items:center;justify-content:center;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightColor', '#f7f7f7'));
var ModalClose = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "QuickViewstyle__ModalClose",
  componentId: "sc-6nsgke-18"
})(["position:fixed;top:20px;right:15px;padding:10px 15px;z-index:1;cursor:pointer;display:block;color:rgba(0,0,0,0.5);background:transparent;border:0;outline:none;display:inline-block;svg{width:12px;height:12px;}@media (max-width:767px){top:5px;right:0;}"]);

/***/ }),

/***/ "./containers/QuickView/QuickView.tsx":
/*!********************************************!*\
  !*** ./containers/QuickView/QuickView.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "../../node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/InputIncDec/InputIncDec */ "./components/InputIncDec/InputIncDec.tsx");
/* harmony import */ var _QuickView_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QuickView.style */ "./containers/QuickView/QuickView.style.tsx");
/* harmony import */ var helper_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helper/constant */ "./helper/constant.ts");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contexts/cart/cart.context */ "./contexts/cart/cart.context.tsx");
/* harmony import */ var helper_utility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helper/utility */ "./helper/utility.ts");
/* harmony import */ var components_Truncate_Truncate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Truncate/Truncate */ "./components/Truncate/Truncate.tsx");
/* harmony import */ var components_MultiCarousel_MultiCarousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/MultiCarousel/MultiCarousel */ "./components/MultiCarousel/MultiCarousel.tsx");
/* harmony import */ var contexts_language_language_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! contexts/language/language.context */ "./contexts/language/language.context.js");
var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/QuickView/QuickView.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var QuickView = function QuickView(_ref) {
  var modalProps = _ref.modalProps,
      deviceType = _ref.deviceType,
      onModalClose = _ref.onModalClose;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_9__["CartContext"]),
      add = _useContext.add,
      update = _useContext.update,
      products = _useContext.products;

  var id = modalProps.id,
      type = modalProps.type,
      title = modalProps.title,
      unit = modalProps.unit,
      price = modalProps.price,
      discountInPercent = modalProps.discountInPercent,
      salePrice = modalProps.salePrice,
      description = modalProps.description,
      gallery = modalProps.gallery,
      categories = modalProps.categories;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_language_language_context__WEBPACK_IMPORTED_MODULE_13__["default"]),
      lang = _useContext2.state.lang;

  var index = Object(helper_utility__WEBPACK_IMPORTED_MODULE_10__["findProductIndex"])(products, id);
  var quantity = Object(helper_utility__WEBPACK_IMPORTED_MODULE_10__["getProductQuantity"])(products, index);

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    add(e, modalProps);
  };

  var handleUpdate = function handleUpdate(value, e) {
    if (index === -1 && value === 1) {
      add(e, modalProps);
    } else {
      update(id, value);
    }
  };

  function onCategoryClick(slug) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: "/".concat(type.toLowerCase()),
      query: {
        category: slug
      }
    }).then(function () {
      return window.scrollTo(0, 0);
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["closeModal"])();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ModalClose"], {
    onClick: onModalClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_8__["CloseIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["QuickViewWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsWrapper"], {
    className: "product-card",
    dir: "ltr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, lang === 'ar' || lang === 'he' ? '' : __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductPreview"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(components_MultiCarousel_MultiCarousel__WEBPACK_IMPORTED_MODULE_12__["default"], {
    items: gallery,
    deviceType: deviceType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }), !!discountInPercent && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["DiscountPercent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, discountInPercent, "%"))), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductInfoWrapper"], {
    dir: lang === 'ar' || lang === 'he' ? 'rtl' : 'ltr',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
    universal: true,
    autoHide: true,
    autoHeight: true,
    autoHeightMax: "90vh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductInfo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, title), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductWeight"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, unit), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductDescription"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(components_Truncate_Truncate__WEBPACK_IMPORTED_MODULE_11__["default"], {
    character: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, description)), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductCartWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductPriceWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, discountInPercent ? __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["SalePrice"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 23
    }
  }, helper_constant__WEBPACK_IMPORTED_MODULE_7__["CURRENCY"], price) : '', __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductPrice"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, helper_constant__WEBPACK_IMPORTED_MODULE_7__["CURRENCY"], salePrice ? salePrice : price)), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductCartBtn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }, quantity <= 0 ? __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Cart",
    intlButtonId: "addCartButton",
    iconPosition: "left",
    colors: "primary",
    size: "small",
    variant: "outlined",
    className: "cart-button",
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_8__["CartIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 31
      }
    }),
    onClick: function onClick(e) {
      return handleClick(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 23
    }
  }) : __jsx(components_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: quantity,
    onUpdate: function onUpdate(value, e) {
      return handleUpdate(value, e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }))), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductMeta"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["MetaSingle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, categories ? categories.map(function (item) {
    return __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["MetaItem"], {
      onClick: function onClick() {
        return onCategoryClick(item.slug);
      },
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 27
      }
    }, item.title);
  }) : ''))))), lang === 'ar' || lang === 'he' ? __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["ProductPreview"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, __jsx(components_MultiCarousel_MultiCarousel__WEBPACK_IMPORTED_MODULE_12__["default"], {
    items: gallery,
    deviceType: deviceType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }), !!discountInPercent && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_6__["DiscountPercent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }, discountInPercent, "%"))) : '')));
};

/* harmony default export */ __webpack_exports__["default"] = (QuickView);

/***/ }),

/***/ "./contexts/language/language.context.js":
/*!***********************************************!*\
  !*** ./contexts/language/language.context.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var LanguageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
/* harmony default export */ __webpack_exports__["default"] = (LanguageContext);

/***/ })

}]);
//# sourceMappingURL=4.js.map