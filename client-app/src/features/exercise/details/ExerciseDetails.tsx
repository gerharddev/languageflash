import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import FlashCard from '../../../app/common/form/FlashCard';
import { Exercise } from '../../../app/models/exercise';
import { CardItem } from '../../../app/models/card';


interface DetailParams {
  id: string;
}

export default observer(function ExerciseDetails() {

  let card: CardItem = { id: 1, word: 'the dog', translation: 'der Hund', image: '/assets/cardimages/dog.jpg' };

  return (
    <Grid >
      <Grid.Row>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10} textAlign='center'>
          <FlashCard card={card} />
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
})
