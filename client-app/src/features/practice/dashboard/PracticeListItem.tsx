import React from 'react';
import { Item, Button, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Exercise } from '../../../app/models/exercise';
import { format } from 'date-fns';

interface Props{
  exercise: Exercise
}

export default function ActivityListItem ({ exercise }:Props) {
  return (
    <Segment.Group>
      <Segment clearing>
        <Item.Group link as={Link} to={`/exercise/${exercise.id}`}>
          <Item>
            <Item.Image
              size='tiny'
              class="ui image"
              src={exercise.image || '/assets/study.jpg'}
            />
            <Item.Content>
              <Item.Header >
                {exercise.title}
              </Item.Header>
              <Item.Description>
                {exercise.description}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>           
      </Segment>
    </Segment.Group>
  );
};




