(function(){

            let bar1 = document.querySelector('#burger div:nth-of-type(1)')
            let bar2 = document.querySelector('#burger div:nth-of-type(2)')
            let bar3 = document.querySelector('#burger div:nth-of-type(3)')
            let burger = document.getElementById('burger')
            burger.addEventListener('mousedown', function(){
                if(bar1.classList.add('ouvrirX1') == false)
                {
                    bar1.classList.remove('fermeX1')
                    bar1.classList.add('ouvrirX1')
                    bar2.classList.remove('fermeX2')
                    bar2.classList.add('ouvrirX2')
                    bar2.classList.remove('fermeX3')
                    bar2.classList.add('ouvrirX3')
                }
                else
                {
                    bar1.classList.add('ouvrirX1')
                    bar1.classList.remove('fermeX1')
                    bar2.classList.add('ouvrirX2')
                    bar2.classList.remove('fermeX2')
                    bar2.classList.add('ouvrirX3')
                    bar2.classList.remove('fermeX3')
                }
            })
        })()
