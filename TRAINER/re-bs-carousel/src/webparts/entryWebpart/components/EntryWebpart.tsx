import * as React from 'react';
import styles from './EntryWebpart.module.scss';
import { IEntryWebpartProps } from './IEntryWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

export default class EntryWebpart extends React.Component<IEntryWebpartProps, {}> {
  public render(): React.ReactElement<IEntryWebpartProps> {
    return (
      <div className={styles.entryWebpart}>
        <div className={styles.row}>
          test
          </div>

        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
              <Button size="sm" active={false} disabled={true}>re-bs-button1</Button>
              <Button size="lg" variant="outline-danger">re-bs-button2</Button>
              <Carousel>
                <Carousel.Item>
                  <div>
                    <img
/*                     className="d-block w-100 wte-img"
 */                    className={styles.wteimg}
                      src="https://picsum.photos/id/237/200/300"
                      alt="First slide"
                    />
                    {/* <span>Beschreibung</span> */}
                    <div className={styles.wteright}>
                    <h3 >Beschreibung</h3>
                    <a href="#" className={styles.wtelink}>link</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Ipsum minima unde maxime? Repellat, repudiandae. 
                      Dignissimos error odio commodi eos ea! 
                      Consequuntur facere fugiat aspernatur id, unde incidunt odio harum quasi!
                      </p>
                    </div>
                  </div>


                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/238/200/300"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div>
                    <img
                      className="d-block w-100"
                      src="https://picsum.photos/id/239/200/300"
                      alt="Third slide"
                    />
                  </div>


                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
