import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { RootStoreContext } from '../../../app/stores/rootStore';
import InfiniteScroll from 'react-infinite-scroller';

const ActivityDashboard: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {
  } = rootStore.cardStore;
  const [loadingNext, setLoadingNext] = useState(false);

 

//   useEffect(() => {
//     loadActivities();
//   }, [loadActivities]);

//   if (loadingInitial && page === 0)
//     return <LoadingComponent content='Loading activities...' />;

  return (
    <Grid>
      <Grid.Column width={10}>

      </Grid.Column>
      <Grid.Column width={6}>
     <h2>Cards</h2>
      </Grid.Column>
      <Grid.Column width={10}>
        <Loader active={loadingNext} />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);