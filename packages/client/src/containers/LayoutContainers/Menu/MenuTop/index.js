import React from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import { reduce } from "lodash";
import { default as menuData } from "./menuData";
import "./style.scss";

const SubMenu = Menu.SubMenu;
const Divider = Menu.Divider;

const mapStateToProps = ({ app, routing }, props) => {
  const { layoutState } = app;
  return {
    pathname: routing.location.pathname,
    collapsed: layoutState.menuCollapsed,
    theme: layoutState.themeLight ? "light" : "dark",
    settingsOpened: layoutState.settingsOpened
  };
};

@withRouter
class MenuTop extends React.Component {
  state = {
    pathname: this.props.pathname,
    collapsed: this.props.collapsed,
    theme: this.props.theme,
    selectedKeys: "",
    openKeys: [""],
    settingsOpened: this.props.settingsOpened
  };

  handleClick = e => {
    const { dispatch, isMobile } = this.props;
    if (isMobile) {
      // collapse menu on isMobile state
      dispatch(setLayoutState({ menuMobileOpened: false }));
    }
    if (e.key === "settings") {
      // prevent click and toggle settings block on theme settings link
      dispatch(setLayoutState({ settingsOpened: !this.state.settingsOpened }));
      return;
    }
    // set current selected keys
    this.setState({
      selectedKeys: e.key,
      openKeys: e.keyPath
    });
  };

  onOpenChange = openKeys => {
    this.setState({
      openKeys
    });
  };

  getPath(data, id, parents = []) {
    const { selectedKeys } = this.state;
    let items = reduce(
      data,
      (result, entry) => {
        if (result.length) {
          return result;
        } else if (entry.url === id && selectedKeys === "") {
          return [entry].concat(parents);
        } else if (entry.key === id && selectedKeys !== "") {
          return [entry].concat(parents);
        } else if (entry.children) {
          let nested = this.getPath(
            entry.children,
            id,
            [entry].concat(parents)
          );
          return nested ? nested : result;
        }
        return result;
      },
      []
    );
    return items.length > 0 ? items : false;
  }

  getActiveMenuItem = (props, items) => {
    const { selectedKeys, pathname } = this.state;
    let { collapsed } = props;
    let [activeMenuItem, ...path] = this.getPath(
      items,
      !selectedKeys ? pathname : selectedKeys
    );

    this.setState({
      selectedKeys: activeMenuItem ? activeMenuItem.key : "",
      collapsed
    });
  };

  generateMenuPartitions(items) {
    return items.map(menuItem => {
      if (menuItem.children) {
        let subMenuTitle = (
          <span className="menuTop__title-wrap" key={menuItem.key}>
            {menuItem.icon && (
              <span className={menuItem.icon + " menuTop__icon"} />
            )}
            <span className="menuTop__item-title">{menuItem.title}</span>
          </span>
        );
        return (
          <SubMenu title={subMenuTitle} key={menuItem.key}>
            {this.generateMenuPartitions(menuItem.children)}
          </SubMenu>
        );
      }
      return this.generateMenuItem(menuItem);
    });
  }

  generateMenuItem(item) {
    const { key, title, url, icon, disabled } = item;
    const { dispatch } = this.props;
    return item.divider ? (
      <Divider key={Math.random()} />
    ) : item.url ? (
      <Menu.Item key={key} disabled={disabled}>
        <Link
          to={url}
          onClick={
            this.props.isMobile
              ? () => {
                  dispatch(setLayoutState({ menuCollapsed: false }));
                }
              : undefined
          }
        >
          {icon && <span className={icon + " menuTop__icon"} />}
          <span className="menuTop__item-title">{title}</span>
        </Link>
      </Menu.Item>
    ) : (
      <Menu.Item key={key} disabled={disabled}>
        <span className="menuTop__item-title">{title}</span>
        {icon && <span className={icon + " menuTop__icon"} />}
      </Menu.Item>
    );
  }

  componentWillMount() {
    this.getActiveMenuItem(this.props, menuData);
  }

  componentWillReceiveProps(newProps) {
    this.setState(
      {
        pathname: newProps.pathname,
        theme: newProps.theme,
        settingsOpened: newProps.settingsOpened
      },
      () => {
        if (!newProps.isMobile) {
          this.getActiveMenuItem(newProps, menuData);
        }
      }
    );
  }

  render() {
    const { selectedKeys, openKeys, theme } = this.state;
    const menuItems = this.generateMenuPartitions(menuData);
    return (
      <div className="menuTop">
        <div className="menuTop__logo">
          <div className="menuTop__logoContainer">
            <img src="resources/images/logo-inverse.png" alt="" />
          </div>
        </div>
        <Menu
          theme={theme}
          onClick={this.handleClick}
          selectedKeys={[selectedKeys]}
          openKeys={openKeys}
          onOpenChange={this.onOpenChange}
          mode="horizontal"
          className="menuTop__navigation"
        >
          <Menu.Item key={"settings"}>
            <span
              className={
                "icmn icmn-cog menuTop__icon utils__spin-delayed--pseudo-selector"
              }
            />
            <span className="menuTop__item-title">Settings</span>
          </Menu.Item>
          {menuItems}
        </Menu>
      </div>
    );
  }
}

export { MenuTop, menuData };
