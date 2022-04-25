import React from "react";
import { Button } from "../../components/forms/Button";
import { Input } from "../../components/forms/input";


import { 
    Container,
    Title,
    Form,
    Fields,
} from "./styles";

export function Register(){
    return(
        <Container>
            
            <Title>
                Cadastro
            </Title>
            <Form>
                <Fields>
                    <Input 
                        placeholder="Nome"
                    />
                    <Input 
                        placeholder="Preço"
                    />
                </Fields>
                <Button title="Enviar"/>
            </Form>
        </Container>
    );
}