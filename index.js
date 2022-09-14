const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1080
canvas.height = 720

class Card{
    constructor({id, position, color, type, isSelected, offset}){
        this.id = id
        this.position = position
        this.color = color
        this.type = type
        this.isSelected = isSelected
        this.offset = offset
    }

    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, 100, 150)
    }

    drawShadow(){
        ctx.fillStyle = 'rgba(0,0,0,.1)'
        ctx.fillRect(this.position.x - 10, this.position.y - 10, 120, 170)
    }

    update(){
        this.draw()
        if(this.isSelected){
            this.drawShadow()
        }
       
    }
}

let cardSet = [
    new Card({
        id: 0,
        position: {
            x: 500,
            y: 300
        },
        color: 'blue',
        type: '1h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 1,
        position: {
            x: 500,
            y: 300
        },
        color: 'yellow',
        type: '2h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 2,
        position: {
            x: 500,
            y: 300
        },
        color: 'purple',
        type: '3h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 3,
        position: {
            x: 500,
            y: 300
        },
        color: 'yellow',
        type: '4h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 4,
        position: {
            x: 500,
            y: 300
        },
        color: 'purple',
        type: '5h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 5,
        position: {
            x: 500,
            y: 300
        },
        color: 'yellow',
        type: '6h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 6,
        position: {
            x: 500,
            y: 300
        },
        color: 'purple',
        type: '7h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 7,
        position: {
            x: 500,
            y: 300
        },
        color: 'yellow',
        type: '8h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 8,
        position: {
            x: 500,
            y: 300
        },
        color: 'purple',
        type: '9h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 9,
        position: {
            x: 500,
            y: 300
        },
        color: 'yellow',
        type: '10h',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 10,
        position: {
            x: 500,
            y: 300
        },
        color: 'purple',
        type: 'jh',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 11,
        position: {
            x: 500,
            y: 300
        },
        color: 'yellow',
        type: 'qh',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
    new Card({
        id: 12,
        position: {
            x: 500,
            y: 300
        },
        color: 'purple',
        type: 'kh',
        isSelected: false,
        offset: {
            x: 0,
            y: 0
        }
    }),
]

function getMousePos(canvas, evt){
    var rect = canvas.getBoundingClientRect();
        scaleX = canvas.width / rect.width;
        scaleY = canvas.height / rect.height;

    return{
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY
    }
}

canvas.addEventListener('mousemove', function(e){
    mousePos = {
      x: getMousePos(canvas,e).x,
      y: getMousePos(canvas,e).y
    }
}, false)

let isDown = false
let isCurrentSelected = false



function reset(){
    cardSet.length = 0
    ctx.clearRect(0,0, canvas.width, canvas.height)
    cardSet = [
        new Card({
            id: 0,
            position: {
                x: 500,
                y: 300
            },
            color: 'blue',
            type: '1h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 1,
            position: {
                x: 500,
                y: 300
            },
            color: 'yellow',
            type: '2h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 2,
            position: {
                x: 500,
                y: 300
            },
            color: 'purple',
            type: '3h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 3,
            position: {
                x: 500,
                y: 300
            },
            color: 'yellow',
            type: '4h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 4,
            position: {
                x: 500,
                y: 300
            },
            color: 'purple',
            type: '5h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 5,
            position: {
                x: 500,
                y: 300
            },
            color: 'yellow',
            type: '6h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 6,
            position: {
                x: 500,
                y: 300
            },
            color: 'purple',
            type: '7h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 7,
            position: {
                x: 500,
                y: 300
            },
            color: 'yellow',
            type: '8h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 8,
            position: {
                x: 500,
                y: 300
            },
            color: 'purple',
            type: '9h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 9,
            position: {
                x: 500,
                y: 300
            },
            color: 'yellow',
            type: '10h',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 10,
            position: {
                x: 500,
                y: 300
            },
            color: 'purple',
            type: 'jh',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 11,
            position: {
                x: 500,
                y: 300
            },
            color: 'yellow',
            type: 'qh',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
        new Card({
            id: 12,
            position: {
                x: 500,
                y: 300
            },
            color: 'purple',
            type: 'kh',
            isSelected: false,
            offset: {
                x: 0,
                y: 0
            }
        }),
    ]
}
function animate(){
    requestAnimationFrame(animate)
    
  
    cardSet.forEach(card => {
        if(card.isSelected){
            ctx.clearRect(card.position.x - 10, card.position.y - 10, 120, 170)
            ctx.clearRect(card.position.x, card.position.y, 100, 150)
            card.position.x = mousePos.x + card.offset.x
            card.position.y = mousePos.y + card.offset.y
        }
    })


    canvas.addEventListener('mousedown', () => {
        isDown = true
    })

    canvas.addEventListener('mouseup', () => {
        isDown = false
    })

        if(isDown){
            cardSet.forEach(card => {
                if(mousePos.x > card.position.x && mousePos.x < card.position.x + 100 && mousePos.y > card.position.y && mousePos.y < card.position.y + 150){
                    if(card.isSelected == false && !isCurrentSelected){
                        card.isSelected = true
                        isCurrentSelected = true
                        card.offset.x = card.position.x - mousePos.x
                        card.offset.y = card.position.y - mousePos.y
                        card.id = cardSet[0].id - 1
                        var first = card;
                        
                        cardSet.sort(function(x,y){ return x == first ? -1 : y == first ? 1 : 0; });
                        console.log(cardSet)
                    }
                    
                }
            })
            
        }else if(!isDown){
            cardSet.forEach(card => {
                if(card.isSelected){
                    card.isSelected = false
                    currentCardPos = card.position
                    isCurrentSelected = false
                    
                }
            })
        }
    
        //read card from bottom to top
        cardSet.slice().reverse().forEach(card => card.update())
   
}

animate()