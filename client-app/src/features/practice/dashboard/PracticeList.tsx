import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Item, Loader } from 'semantic-ui-react';
import { RootStoreContext } from '../../../app/stores/rootStore';
import InfiniteScroll from 'react-infinite-scroller';
import PracticeListItem from './PracticeListItem';
import { IExercise } from '../../../app/models/exercise';

const ActivityDashboard: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {
  } = rootStore.cardStore;
  const [loadingNext, setLoadingNext] = useState(false);
  let exercises : Array<IExercise> = [
   { id: 1, title: 'Sounds',description:'Hear the different sounds',image:'/assets/images/hearing.jpg'},
   { id: 2, title: 'Words',description:'Practice words with their translation',image:'/assets/images/words.jpg'},
   { id: 3, title: 'Sentences',description:'Practice sentences with their translation',image:'/assets/images/read.jpg'},
 ]
 

//   useEffect(() => {
//     loadActivities();
//   }, [loadActivities]);

//   if (loadingInitial && page === 0)
//     return <LoadingComponent content='Loading activities...' />;

  return (
    <Grid textAlign='center'>
      <Grid.Column width={10}>
          <Item.Group divided >
            {exercises.map(exercise => (
              <PracticeListItem key={exercise.id} exercise={exercise} />
            ))}
          </Item.Group>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);

