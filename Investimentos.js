function ResultadoMês(mesReferencia, mesPagamento) {            //Objeto para o mês
    return{
        mesReferencia,
        mesPagamento,
        recebidosMes: [],

        Mes(){                                                  //Imprime meses de referência e pagamento
            console.log("Mês Referência: " + mesReferencia)
            console.log("Mês Pagamento: " + mesPagamento)
        },

        dividendos(...recebidosMes){                //Coloca todos os dividendos dentro de um array para serem somados
            this.recebidosMes = recebidosMes
        },

        imprimirSomaMes(){                                      //Soma os dividendos de todos os meses e imprime
            let soma = 0
            this.recebidosMes.forEach( function(valor){         //Entro dentro do array e em cada indice pego o valor
                soma = soma + valor
           })
            console.log(soma)
        },

        somaTotal(){                                            //Soma os dividendos de todos os meses
            let soma = 0
            this.recebidosMes.forEach( function(valor){
                soma = soma + valor
           })
           return soma
        }

    }
}

function ResultadoAno(ano) {                                    //Objeto para relacionar todos os meses do ano
    return{
        ano: ano,
        Meses: [],

        JuntaMeses(...Meses){                 //Junta todos os objetos de meses dentro de um array (array de objetos)
            this.Meses=Meses
        },

        TotalRecebido(Meses){                                   //Soma os dividendos de todos os meses
            let Total = 0
            this.Meses.forEach(function(valor) {
                Total = Total + valor.somaTotal()
            })
            return Total
        },

        relatorio(mesReferencia, mesPagamento, Meses){          //Imprime o relatorio final do ano
            console.log("Resultado " + ano)
            
            this.Meses.forEach(function(valor) {
                    console.log("Mês Referência: " + valor.mesReferencia + " | Mês Pagamento: " + valor.mesPagamento + " = " + valor.somaTotal())
            })

            console.log("TOTAL RECEBIDO: " + this.TotalRecebido())
        }
    }
}

const mes1 = ResultadoMês("Dezembro", "Janeiro")            //Criando objeto do mes. Passar mês referência e pagamento
mes1.Mes()
mes1.dividendos(10.75,12.5,3.3,5.45,15)                     //Passar dividendos do mês
mes1.imprimirSomaMes()                                      //Imprime soma dos dividendos do mês
console.log("---------------------")

const mes2 = ResultadoMês("Janeiro","Fevereiro")
mes2.Mes()
mes2.dividendos(12,8,3.3,5.75,12.1,15)              
mes2.imprimirSomaMes()
console.log("---------------------")

const Ano2024 = ResultadoAno(2024)                          //Cria objeto do Ano. Passar ano
Ano2024.JuntaMeses(mes1,mes2)
Ano2024.relatorio()
