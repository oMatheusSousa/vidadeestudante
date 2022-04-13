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
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps{
  id: string;
}
export function Home() {
  const transactionData: DataListProps[] = [
    {
      id: '1',
      type: 'expense',
      title: 'Feira do mês',
      amount: 'R$ 300,00',
      category: {
        icon: 'cart',
        name: 'Supermercado'
      },
      date: '05/03/2022'
    },
    {
      id: '2',
      type: 'income',
      title: 'Salário',
      amount: 'R$ 1212,00',
      category: {
        icon: 'cached',
        name: 'Recebimentos'
      },
      date: '04/03/2022'
    },
    {
      id: '3',
      type: 'expense',
      title: 'Compra de Uniforme',
      amount: 'R$ 50,00',
      category: {
        icon: 'tshirt-crew',
        name: 'Shopping'
      },
      date: '03/03/2022'
    },
    {
      id: '4',
      type: 'expense',
      title: 'Recarga de celular',
      amount: 'R$ 30,00',
      category: {
        icon: 'cellphone',
        name: 'Recargas'
      },
      date: '02/04/2022'
    },
    {
      id: '5',
      type: 'income',
      title: 'Projeto de Extensão',
      amount: 'R$ 400,00',
      category: {
        icon: 'book-open-outline',
        name: 'Estudos'
      },
      date: '01/03/2022'
    },
    {
      id: '6',
      type: 'expense',
      title: 'Plano Fitness',
      amount: 'R$ 90,00',
      category: {
        icon: 'bone',
        name: 'Academia'
      },
      date: '31/02/2022'
    },
  ];

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
        <HighlightCard
          title='Entrada'
          amount='R$ 1212,00'
          lastTransaction='Ùltima entrada dia 04 de Março'
          type='income'
        />
        <HighlightCard
          title='Saída'
          amount='R$ 350,00'
          lastTransaction='Ùltima saída dia 03 de Março'
          type='expense'
        />
        <HighlightCard
          title='Total'
          amount='R$ 862,00'
          lastTransaction='Ùltima atualização dia 05 de Março'
          type='total'
        />
      </HighlightCards>
        
      <Transactions>
        <Title>Últimas movimentações</Title>
        <TransactionList
          data={transactionData}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <TransactionCard data={item}/>}
          
        />  
        
        
      </Transactions>      
    </Container>
  );
}