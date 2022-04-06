import React from 'react';

import {MaterialIcons} from '@expo/vector-icons';

import { Container,
    Header,
    ContentWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';

export function Home() {
  return (
    <Container>
      <Header>
        <ContentWrapper>
            <UserInfo>
                <Photo source={{uri: 'https://github.com/jairopedr.png'}}/>
                <User>
                    <UserGreeting>Olá, </UserGreeting>
                    <UserName>Jairo Pedro!</UserName>
                </User>
            </UserInfo>

            <Icon name="logout"/>
        </ContentWrapper>
      </Header>
      
      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
        
      
    </Container>
  );
}
