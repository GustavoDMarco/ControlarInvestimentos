function ResultadoMês(mesReferencia, mesPagamento, totalInvestidoMes) {            //Objeto para o mês
    return{
        mesReferencia,
        mesPagamento,
        totalInvestidoMes,
        recebidosMes: [],

        Mes(){                                                  //Imprime meses de referência e pagamento
            console.log("Mês Referência: " + mesReferencia)
            console.log("Mês Pagamento: " + mesPagamento)
        },

        dividendos(...recebidosMes){                //Coloca todos os dividendos dentro de um array para serem somados
            this.recebidosMes = recebidosMes
        },

        somaMes(){                                              //Soma os dividendos do mes
            let soma = 0
            this.recebidosMes.forEach( function(valor){         //Entro dentro do array e em cada indice pego o valor
                soma = soma + valor
           })
           return soma
        },
        
        imprimirSomaMes(){                                      //Imprime soma dos dividedendos do mes
            let soma = 0
            this.recebidosMes.forEach( function(valor){         //Entro dentro do array e em cada indice pego o valor
                soma = soma + valor
            })
            console.log(soma)
        },

        dividendYieldMes(){                                     //Calcula o dividend yield e imprime
            let dy = (this.somaMes() / this.totalInvestidoMes)*100
            console.log("DY = " + dy)
        }

    }
}

function ResultadoAno(ano, totalInvestidoAno) {               //Objeto para relacionar todos os meses do ano
    return{
        ano,
        totalInvestidoAno,
        Meses: [],

        JuntaMeses(...Meses){                                 //Junta todos os objetos de meses dentro de um array (array de objetos)
            this.Meses=Meses
        },

        TotalRecebido(){                                      //Soma os dividendos de todos os meses
            let Total = 0
            this.Meses.forEach(function(valor) {
                Total = Total + valor.somaMes()
            })
            return Total
        },

        dividendYieldAno(){                                     //Calcula dividend yield do ano       
            let dy =0
            dy = (this.TotalRecebido() / this.totalInvestidoAno)*100
            return dy
        },

        relatorio(){                                            //Imprime o relatorio final do ano
            console.log("Resultado " + ano)
            
            this.Meses.forEach(function(valor) {
                    console.log("Mês Referência: " + valor.mesReferencia + " | Mês Pagamento: " + valor.mesPagamento + " = " + valor.somaMes())
            })
            console.log("TOTAL RECEBIDO: " + this.TotalRecebido())

            console.log(this.dividendYieldAno())
        }
    }
}


const mes1 = ResultadoMês("Dezembro", "Janeiro",5000)       //Criando objeto do mes. Passar mês referência e pagamento e valor final investido.
mes1.Mes()
mes1.dividendos(10.75,12.5,3.3,5.45,15)                     //Passar dividendos do mês
mes1.imprimirSomaMes()                                      //Imprime soma dos dividendos do mês
mes1.dividendYieldMes()                                     //Imprime dividend yield do mês
console.log("---------------------")

const mes2 = ResultadoMês("Janeiro","Fevereiro", 6000)
mes2.Mes()
mes2.dividendos(12,8,3.3,5.75,12.1,15)              
mes2.imprimirSomaMes()
mes2.dividendYieldMes()
console.log("---------------------")

const Ano2024 = ResultadoAno(2024, 10000)                          //Cria objeto do Ano. Passar ano e valor final investido.
Ano2024.JuntaMeses(mes1,mes2)
Ano2024.relatorio()
