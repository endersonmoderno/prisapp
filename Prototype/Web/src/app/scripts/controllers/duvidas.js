'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:DuvidasCtrl
 * @description
 * # DuvidasCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('DuvidasCtrl', function (Notification, $scope, $http, $localStorage, $location) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.ShowLoad = false;

        //manipula o load da página
        $scope.Loader = function (isCarregar, msg) {
            if (msg === undefined) { msg = "Aguarde, carregando..."; }
            $scope.ShowLoad = isCarregar;
            $scope.MsgDivLoad = msg;
        };

        //carrega usuário
        $scope.usuario = $localStorage.simusuario;

        $scope.accordianData = [
            {
                "heading": "O que é Criptomoeda?",
                "content": "A criptomoeda (ou criptodinheiro) é um meio de troca que se utiliza de criptografia para assegurar transações. São moedas digitais. O Bitcoin tornou-se a primeira criptomoeda descentralizada em 2009 e é a mais conhecida atualmente. Hoje existem inúmeras criptomoedas. É uma forma de dinheiro, com a diferença de ser digital e não ser emitido por nenhum governo, funciona com blockchain (Banco de transações de Criptomoedas)."
            },
            {
                "heading": "Investir em criptomoedas é seguro?",
                "content": "Sim, pois é uma moeda digital criptografada, tornando as transações mais seguras que as dos sistemas bancários tradicionais. Sua movimentação não pode ser rastreada e nem violada."
            },
            {
                "heading": "O site é seguro?",
                "content": "Sim, atualmente este é apenas um simulador, em breve iremos lançar a versão final que possui alta segurança e será auditada pelos órgãos competentes."
            },
            {
                "heading": "Por que é melhor usar o Pri$ para investir em criptomoedas?",
                "content": "Você não precisa saber como as criptomoedas funcionam, nós iremos procurar diariamente o melhor investimento para você e realizar a melhor transação, em qualquer criptomoeda. Algumas das transações são realizas em mercados estrangeiros em outras línguas."
            },
            {
                "heading": "Como o investimento rende tanto em tão pouco tempo?",
                "content": "As criptomoedas estão em alta no mercado, as tendências são que valorizem ainda mais, o Pri$ busca sempre a melhor moeda para investir seu dinheiro naquele período, por isso os ganhos são tão expressivos."
            },
            {
                "heading": "Posso investir mais valores ao longo dos meses?",
                "content": "Sim, você poderá investir a qualquer momento, cada investimento terá seu prazo e rendimento, a tela de resumo mostrará seus investimentos e ganhos agrupados."
            },
            {
                "heading": "Como envio meu dinheiro para poder investir?",
                "content": "Atualmente este é apenas um simulador, em breve você poderá enviar o dinheiro para sua conta Pri$ através de TED, tranferência bancária, boleto e cartão de crédito;"
            },
            {
                "heading": "Como recebo meu dinheiro dos rendimentos?",
                "content": "Atualmente este é apenas um simulador, em breve você poderá transferir o dinheiro direto para sua conta bancária, sem taxas."
            },
            {
                "heading": "Tem imposto?",
                "content": "A Receita Federal do Brasil (RFB) quer que o brasileiro declare a quantidade que possui em Bitcoins (BTC) ou qualquer outra criptomoeda, por meio do Imposto de Renda de Pessoa Física (IRPF), no programa da Receita Federal em “outros bens e direitos”. O valor varia conforme seus ganhos, se você obteve rendimentos até R$ 5 milhões serão tributados em 15%, de R$ 5 milhões até R$ 10 milhões serão tributados 17,5%, de R$ 10 milhões até R$ 30 milhões serão tributados 20% e acima de R$ 30 milhões serão tributados 22,5%. A tributação só ocorre sobre seu ganho (rendimento)."
            },
            {
                "heading": "Existe algum custo para realização de operações (resgate e retirada)?",
                "content": "Não, atualmente este é apenas um simulador, não há custo algum, em breve você poderá realizar operações livre de taxas."
            },
            {
                "heading": "É possível retirar meu dinheiro a qualquer momento?",
                "content": "Sim, atualmente esta versão apenas faz simulações, em breve você poderá investir usando o Pri$, poderá retirar seu dinheiro quando quiser, caso não cumpra o prazo estipulado por você na hora de realizar o investimento, você não terá diretiro aos rendimentos, mas poderá sacar todo seu dinheiro investido."
            },
            {
                "heading": "Existe algum custo para manter a minha conta?",
                "content": "Esta versão é apenas um simulador, futuramente não haverão custos para manter sua conta, mesmo que ela não possua recursos ou saldo."
            },
            {
                "heading": "Existe algum limite para depósitos em minha conta?",
                "content": "Esta versão é apenas um simulador, futuramente iremos analisar a necessidade de limites, no momento não temos limites estabelecidos."
            },
            {
                "heading": "Qual o valor mínimo que posso investir?",
                "content": "Esta versão é apenas um simulador, futuramente iremos analisar os limites, sugerimos um investimento acima de R$ 100,00."
            },
            {
                "heading": "O que é Blockchain?",
                "content": "A cadeia de blocos, ou blockchain, é o sistema de registros que garante a segurança das operações realizadas por criptomoedas, este Banco de transações de Criptomoedas funciona como um livro de registros."
            },
            {
                "heading": "Como funcionam as transações de criptomoedas?",
                "content": "Neste momento o aplicativo apenas realiza simulações, futuramente as transações de compra e venda de moedas serão gerenciadas pelo Pri$, de maneira transparente, autmática, para facilitar sua vida."
            },
            {
                "heading": "Quais as diferenças entre as criptomoedas?",
                "content": "Cada uma destas moedas possui seu próprio blockchain, valores diferenciados e portanto se torna necessário acompanha-las diariamente para sabermos qual é o melhor investimento para você."
            }
        ];
    });
