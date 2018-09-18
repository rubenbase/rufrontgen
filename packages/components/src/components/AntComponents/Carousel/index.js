import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism'
import { Collapse, Icon } from 'antd'

import { default as renderCarouselAutoplay } from './Autoplay/index.js'
import { default as renderCarouselBasic } from './Basic/index.js'
import { default as renderCarouselFade } from './Fade/index.js'
import { default as renderCarouselVertical } from './Vertical/index.js'

const Panel = Collapse.Panel

class CarouselItems extends React.Component {
  componentDidMount() {
    renderCarouselAutoplay(ReactDOM, document.getElementById('CarouselAutoplay'))
    renderCarouselBasic(ReactDOM, document.getElementById('CarouselBasic'))
    renderCarouselFade(ReactDOM, document.getElementById('CarouselFade'))
    renderCarouselVertical(ReactDOM, document.getElementById('CarouselVertical'))
  }

  render() {
    return (
      <div className="CarouselDemo">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Carousel</strong>
                  <a
                    href="https://ant.design/components/carousel/"
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
                    <div className="card card--example" id="components-carousel-demo-autoplay">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Scroll automatically</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">
                        Timing of scrolling to the next card/picture.
                      </div>
                      <div className="card-body pb-0">
                        <div id="CarouselAutoplay" />
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
                              {`import \{ Carousel \} from 'antd';

ReactDOM.render(
  <Carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-carousel-demo-fade">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Fade in</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Slides use fade for transition.</div>
                      <div className="card-body pb-0">
                        <div id="CarouselFade" />
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
                              {`import \{ Carousel \} from 'antd';

ReactDOM.render(
  <Carousel effect="fade">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="card card--example" id="components-carousel-demo-basic">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Basic</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Basic usage.</div>
                      <div className="card-body pb-0">
                        <div id="CarouselBasic" />
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
                              {`import \{ Carousel \} from 'antd';

function onChange(a, b, c) \{
  console.log(a, b, c);
\}

ReactDOM.render(
  <Carousel afterChange=\{onChange\}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
, mountNode);
`}
                            </SyntaxHighlighter>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    <div className="card card--example" id="components-carousel-demo-vertical">
                      <div className="card-header">
                        <h5 className="text-black">
                          <strong className="text-capitalize">Vertical</strong>
                        </h5>
                      </div>
                      <div className="card-body pb-0">Vertical pagination.</div>
                      <div className="card-body pb-0">
                        <div id="CarouselVertical" />
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
                              {`import \{ Carousel \} from 'antd';

ReactDOM.render(
  <Carousel vertical>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
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

export default CarouselItems
