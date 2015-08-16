import * as React from 'react/addons';
import * as Icon from 'react-svg-icons';
import { $, Expression, Datum, Dataset } from 'plywood';

import { DataSource } from "../../models/index";

interface HeaderBarProps {
  dataSource: DataSource;
  onNavClick: () => void;
}

interface HeaderBarState {
}

export class HeaderBar extends React.Component<HeaderBarProps, HeaderBarState> {
  render() {
    var { dataSource, onNavClick } = this.props;

    return JSX(`
      <header className="header-bar">
        <div className="burger-bar" onClick={onNavClick}>
          <Icon className="menu" name="menu" width={14} height={12} color="white"/>
          <div className="dataset-title">{dataSource.title}</div>
        </div>
        <div className="right-bar">
          <Icon className="text-logo" name="text-logo" height={20} color="white"/>
        </div>
      </header>
    `);
  }
}
