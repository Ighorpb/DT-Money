import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api"


       

export function TransactiosTable() {
    useEffect(() => {
        api.get('transactions')
           .then(response => console.log(response.data))

    }, []);
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>13/04/2023</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$1.100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    );
}
