import React, { useState } from 'react'
import { Card, Grid, Icon, Image, Item, Label, Segment } from 'semantic-ui-react'
import { CardItem } from '../../models/card';

interface Props {
  card: CardItem
}



export default function FlashCard({ card }: Props) {
  const [state, setState] = useState(true)
  const [text, setText] = useState(card.word);

  const handleReveal = () => {
    if (state) {
      setText(card.translation);
      setState(false)
    } else {
      setText(card.word);
      setState(true)
    }
  }

  return (

    <Segment attached cleared  >
      <Item.Group >
        <Item style={{ position: 'relative' }} onClick={() => handleReveal()}>
          <Label
            style={{ position: 'absolute' }}
            color='green'
            ribbon='right'
            onClick={() => alert('der Hund')}
          >Listen</Label>
          <Image size='small' src={card.image} />
          <Item.Content verticalAlign='middle'>
            <Item.Header>{text}</Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  )

}
