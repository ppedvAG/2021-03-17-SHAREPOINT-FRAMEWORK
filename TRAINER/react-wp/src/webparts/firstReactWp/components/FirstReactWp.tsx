import * as React from 'react';
import styles from './FirstReactWp.module.scss';
import { IFirstReactWpProps } from './IFirstReactWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}
export default class FirstReactWp extends React.Component<IFirstReactWpProps, { users: IUser[] }> {

  constructor(props) {
    super(props)
    this.state = {
      users: null
    }
  }

  // users: any;

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState(prevState => {
          console.log('prevState: ', prevState); // { users: null }
          return { users: json }
        })
      })
      .then(json => console.log('json: ', json)) // undefined

    /* return new Promise<void>(() => {
      console.log(' Promise in onInit was created');
    }) */
    console.log('this.users :>> ', this.state.users); // undefined
  }
  public render(): React.ReactElement<IFirstReactWpProps> {
    console.log('this.state.users :>> ', this.state.users); // 10 user
    let usersList;
    if (this.state.users != null) {
      console.log('bin im if');
      usersList = this.state.users.map(el => {
        // ohne return -> Array of undefined
        // schreibt man return for dem JSX, dann Fehler:
        // Invariant Violation: Objects are not valid as a React child, todo #1
        // return <li key={el.id}>{el.name}, {el.company}</li>
        // deswegen eine Zwischenvariable eingeführt:
        let listItem = <li key={el.id}>{el.name}, {el.company}</li>
        return listItem
        // eine zweite Option wäre: createElement()
        // return React.createElement('li', {key: el.id}, `name: ${el.name}, company: ${el.company.name}`)
      })
      return (
        <div className={styles.firstReactWp}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.title}>Welcome to SharePoint!</span>
                <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
                <p className={styles.description}>{escape(this.props.description)}</p>
                <p className={styles.description}>{escape(this.props.user.firstName)}</p>
                <p className={styles.description}>{escape(this.props.user.lastName)}</p>
                <p className={styles.description}>{this.props.user.id}</p>
                <h3>Users from State</h3>
                <ul>
                  {usersList}
                </ul>
                {console.log('usersList: ', usersList)}
                <a href="https://aka.ms/spfx" className={styles.button}>
                  <span className={styles.label}>Learn more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {



      return (
        <div className={styles.firstReactWp}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.title}>Welcome to SharePoint!</span>

                <p>Loading...</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
