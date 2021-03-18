import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'FirstReactWpWebPartStrings';
import FirstReactWp from './components/FirstReactWp';
import { IFirstReactWpProps } from './components/IFirstReactWpProps';

export interface IFirstReactWpWebPartProps {
  description: string;
}

export default class FirstReactWpWebPart extends BaseClientSideWebPart<IFirstReactWpWebPartProps> {

  // Geben Sie diese Properties vom Objekt 'user' durch eine separate React-Komponente aus!
  user = {firstName: 'Max', lastName: 'Mustermann', id: 123}



  public render(): void {
    // neues ReactElement wird anhand von der Komponente FirstReactWp angelegt. 
    // Properties für diese Komponente werden als Objekt {description: ...} übergeben
    const element: React.ReactElement<IFirstReactWpProps> = React.createElement(
      FirstReactWp,
      {
        description: this.properties.description,
        user: this.user
      }
    );
    ReactDom.render(element, this.domElement);
  }

  // verursacht endloses laden vom Web Part
/*   protected onInit(): Promise<void> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))

    return new Promise<void>(() => {
      console.log(' Promise in onInit was created');
    })
  } */

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
