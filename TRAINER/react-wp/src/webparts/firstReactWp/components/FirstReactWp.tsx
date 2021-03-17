import * as React from 'react';
import styles from './FirstReactWp.module.scss';
import { IFirstReactWpProps } from './IFirstReactWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FirstReactWp extends React.Component<IFirstReactWpProps, {}> {
  public render(): React.ReactElement<IFirstReactWpProps> {
    return (
      <div className={ styles.firstReactWp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <p className={ styles.description }>{escape(this.props.user.firstName)}</p>
              <p className={ styles.description }>{escape(this.props.user.lastName)}</p>
              <p className={ styles.description }>{this.props.user.id}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
