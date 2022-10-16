import React from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <Segment
            vertical
            as="footer"
            style={{
                padding: '4em 0em',
                marginTop: '3em',
                borderTop: '1px solid #ddd',
            }}
        >
            <Container text>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as='h4' content="About the shop" />
                            <List>
                                <List.Item>
                                    <Link href="/about">
                                        <a>About us</a>
                                    </Link>
                                </List.Item>
                            </List>

                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header as='h4' content="Services" />
                            <List>
                                <List.Item>
                                    <Link href="/">
                                        <a>All products</a>
                                    </Link>
                                </List.Item>
                            </List>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' content="Made for" />
                            <p>Made for{' '}
                                <a href='https://twitter.com/fredydlemus'>@fredydlemus</a>
                            </p>
                            <List horizontal style={{ display: 'flex' }}>
                                <List.Item
                                    icon="twitter"
                                    style={{ display: 'flex' }}
                                    content={<a href='https://twitter.com/fredydlemus'>Twitter</a>}
                                />
                                <List.Item
                                    icon="github"
                                    style={{ display: 'flex' }}
                                    content={<a href='https://github.com/fredydlemus/next-avocados'>Github</a>}
                                />
                            </List>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div className='colophon'>
                    <p className='colophon-entry'>
                        Icons made by{' '}
                        <a target="_blank" href='https://www.flaticon.com/authors/freepik' title='Freepik'>Freepik</a>
                        {' from '}
                        <a target="_blank" href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a>
                    </p>
                    <p className='colophon-entry'>
                        Avocado images taken from{' '}
                        <a
                            className="acnor"
                            target="_blank"
                            href="https://www.californiaavocado.com/avocado101/avocado-varieties"
                            title="California Avocado"
                        >
                            Avocado 101
                        </a>
                        {' at '}
                        <a
                            target="_blank"
                            href="https://www.californiaavocado.com"
                            title="Flaticon"
                        >
                            California Avocado
                        </a>
                    </p>
                </div>
            </Container>
            <style jsx>{`
                .colophon {
                    text-align: center;
                    margin-top: 3.2rem;
                    font-size: 0.8rem;
                }
                .colophon-entry {
                    color: grey;
                    margin-bottom: 0
                }
            `}</style>
        </Segment>
    )
}

export default Footer;