import React, { useContext } from 'react';
import { Menu, Container, Button, Dropdown, Image } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink, Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';

const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to='/'>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '10px' }}
          />
          Language Flash
        </Menu.Item>
        <Menu.Item name='Practice' as={NavLink} to='/practice' />
        <Menu.Item>
          <Button
            as={NavLink}
            to='/createCard'
            positive
            content='Create Card'
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);