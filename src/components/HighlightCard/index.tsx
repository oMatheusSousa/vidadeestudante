import React from "react";
import
{
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction
} from "./styles";

export function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle" />
            </Header>

            <Footer>
                <Amount>R$ 1212,00</Amount>
                <LastTransaction>Ùltima entrada dia 04 de Março</LastTransaction>
            </Footer>
        </Container>
    );
}