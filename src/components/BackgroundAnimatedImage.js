import React from 'react';
import styled from 'styled-components/macro';

/**
 * Component not used. It is not possible (or at least I couldnt achieve it) to create an smooth transition between two backgrounds
 * when using divs and background image property because it flicks (0.1 seconds?). It works nice
 * using <img> components but right now css is not prepared. Incoming functionality
 */

const blur = '20px';

const BackgroundImage = styled.div`
  position: fixed;
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;

  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;

  opacity: ${props => (props.transparent ? 0 : 1)};
`;

const BackgroundBlurredImage = styled(BackgroundImage)`
  width: calc(100% + (${blur} * 2));
  top: -${blur};
  left: -${blur};

  -webkit-filter: blur(${blur});
  -moz-filter: blur(${blur});
  -o-filter: blur(${blur});
  -ms-filter: blur(${blur});
  filter: blur(${blur});
`;
/*
  It renders 2 BackgroundImages and 1 hidden Image.
  state.imgs its an array formed in getDerivedStateFromProps which contains
  [imageWaitingToBeLoaded, previousImage]. As soon as imageWaitingToBeLoaded is loaded (in hidden 
  <image> tag) previousImage changes its opacity to 0 with animation
*/
class BackgroundAnimatedImage extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const firstItem = state.imgs.length > 0 ? state.imgs[0] : null;
    if (!firstItem || firstItem.url !== props.imageUrl) {
      return {
        imgs: [
          { url: props.imageUrl, loaded: false, transparent: false, id: new Date().getTime() },
          ...state.imgs.slice(0, 1)
        ]
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      imgs: []
    };
    this.onLoad = this.onLoad.bind(this);
  }

  onLoad() {
    // First image -> loaded
    // Other images -> transparent
    this.setState(prevState => ({
      imgs: prevState.imgs.map((x, i) => {
        if (i !== 0) {
          return { ...x, transparent: true };
        } else {
          return { ...x, loaded: true };
        }
      })
    }));
  }

  render() {
    const firstImg = this.state.imgs[0];
    const Component = this.props.blurred ? BackgroundBlurredImage : BackgroundImage;
    return (
      <React.Fragment>
        {this.state.imgs
          .filter(img => img.loaded)
          .map(img => {
            return <Component key={img.id} src={img.url} transparent={img.transparent} />;
          })}
        {firstImg && <img style={{ display: 'none' }} src={firstImg.url} onLoad={this.onLoad} />}
      </React.Fragment>
    );
  }
}

export default BackgroundAnimatedImage;
