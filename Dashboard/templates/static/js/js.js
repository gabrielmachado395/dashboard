function geraTonsAzul(qtd = 1) {
    let bg_color = [];
    let border_color = [];

    for (let i = 0; i < qtd; i++) {
        // Gera um tom de azul (valores r e g baixos, valores b altos)
        let r = 0;  // Manter r = 0 para tons de azul
        let g = Math.floor(Math.random() * 100); // g baixo para um tom mais azul puro
        let b = Math.floor(Math.random() * 156) + 100; // b alto para manter a base azul

        bg_color.push(`rgba(${r}, ${g}, ${b}, 0.2)`); // Cores de fundo com opacidade
        border_color.push(`rgba(${r}, ${g}, ${b}, 1)`); // Cores de borda mais sólidas
    }

    return [bg_color, border_color];
}

function renderiza_total_vendido(url){  
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        document.getElementById('faturamento_total').innerHTML = data.total
    })

}


function renderiza_despesas_total(url) {
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        document.getElementById('despesas_total').innerHTML = data.total
    })

}
 
function renderiza_lucro_total(url) {
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        document.getElementById('retorna_lucro').innerHTML = data.lucro
    })

}
    
function renderiza_faturamento_mensal(url){

    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){

        const ctx = document.getElementById('faturamento_mensal').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Faturamentos',
                    data: data.data,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
            
        });


    })


    

}

function renderiza_despesas_mensal(url){

    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){

        const ctx = document.getElementById('relatorio_despesas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Despesas',
                    data: data.data,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }]
            },
            
        });


    })


    

}


function renderiza_produtos_mais_vendidos(url){

    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        
        let [bgColors, borderColors] = geraTonsAzul(5);
        const ctx = document.getElementById('produtos_mais_vendidos').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Vendas',
                    data: data.data,
                    backgroundColor: bgColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                }]
            },
                        
        });


    })
  
}

function renderiza_funcionario_mes(url){
    fetch(url, {
        method: 'get',
    }).then(function(result){
        return result.json()
    }).then(function(data){
        
        const ctx = document.getElementById('funcionarios_do_mes').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: "Total de Vendas",
                    data: data.data,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                indexAxis: 'y', // Isso faz com que o gráfico seja horizontal
                scales: {
                    x: {
                        beginAtZero: true
                    }
                },
                responsive: true,
            }
        });


    })

}