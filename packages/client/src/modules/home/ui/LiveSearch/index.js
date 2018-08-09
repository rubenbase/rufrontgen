import React from "react";
import { Input, Icon } from "antd";
import { Checkbox } from "antd";
import "./style.scss";

class LiveSearch extends React.Component {
  state = {
    show: false,
    searchText: ""
  };

  showLiveSearch = () => {
    this.searchInput.focus();
    this.setState({
      show: true
    });
  };

  hideLiveSearch = () => {
    this.searchInput.blur();
    this.setState({
      show: false,
      searchText: ""
    });
  };

  changeSearchText = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleKeyDown = event => {
    if (this.state.show) {
      let key = event.keyCode.toString();
      if (key === "27") {
        this.hideLiveSearch();
      }
    }
  };

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    let { show, searchText } = this.state;

    return (
      <div className="d-inline-block mr-4">
        <Input
          className="livesearch__topInput"
          placeholder="Buscador de premios"
          prefix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
          style={{ width: 200 }}
          onFocus={this.showLiveSearch}
        />

        <div
          className={
            show === true ? "livesearch livesearch--show" : "livesearch"
          }
          id="livesearch"
        >
          <div className="livesearch__close" onClick={this.hideLiveSearch}>
            <i className="icmn-cross" />
          </div>
          <div className="container-fluid">
            <div className="livesearch__wrapper">
              <div className="livesearch__logo">
                <img
                  className="livesearch__logo-img"
                  src="resources/images/logo.svg"
                  alt=""
                />
              </div>
              <div className="livesearch__search">
                <input
                  type="search"
                  className="livesearch__input"
                  value={searchText}
                  onChange={this.changeSearchText}
                  id="livesearchInput"
                  placeholder="Buscar..."
                  ref={ele => (this.searchInput = ele)}
                />
              </div>

              <div className="livesearch__results">
                <div className="livesearch__results-title">
                  <span className="livesearch__results-title-text">
                    Resultados por páginas
                  </span>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="livesearch__result-content">
                      <div
                        className="livesearch__result-thumb"
                        style={{
                          backgroundImage: "url(resources/images/photos/7.jpeg)"
                        }}
                      >
                        1
                      </div>
                      <div className="livesearch__result">
                        <div className="livesearch__result-text">
                          Premio de Literatura de La Rioja
                        </div>
                        <div className="livesearch__result-source">
                          20 de agosto de 2018
                        </div>
                      </div>
                    </div>
                    <div className="livesearch__result-content">
                      <div
                        className="livesearch__result-thumb"
                        style={{
                          backgroundImage: "url(resources/images/photos/9.jpeg)"
                        }}
                      >
                        2
                      </div>
                      <div className="livesearch__result">
                        <div className="livesearch__result-text">
                          Premio "Tigre Juan"
                        </div>
                        <div className="livesearch__result-source">
                          12 de septiembre de 2018
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="livesearch__result-content">
                      <div className="livesearch__result-thumb">3</div>
                      <div className="livesearch__result">
                        <div className="livesearch__result-text">
                          Premio de Literatura de Navarra
                        </div>
                        <div className="livesearch__result-source">
                          2 de octubre de 2018
                        </div>
                      </div>
                    </div>
                    <div className="livesearch__result-content">
                      <div className="livesearch__result-thumb">4</div>
                      <div className="livesearch__result">
                        <div className="livesearch__result-text">
                          Premio "Librín"
                        </div>
                        <div className="livesearch__result-source">
                          20 de noviembre de 2018
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveSearch;
