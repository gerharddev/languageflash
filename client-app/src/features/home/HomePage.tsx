import React, { useContext, Fragment } from 'react';
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';


const HomePage = () => {
  const rootStore = useContext(RootStoreContext);

  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          Language Flash
        </Header>
            <Fragment>
                <Button as={Link} to='/activities' size='huge' inverted>
                    Go to activities!
                </Button>
          </Fragment>
      </Container>
    </Segment> );
};

export default HomePage;