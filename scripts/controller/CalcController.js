class CalcController {
    constructor(){
        this._operation = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this._dataEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")

        
        this._currentDate 
        this.initialize()
        this.initButtonsEvents()
        

    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();
            
        },1000)

        }
 setDisplayDateTime(){

            this.displayData = this.currentDate.toLocaleDateString(this._locale,{
                day: "2-digit",
                month: "short",
                year: "numeric"
            })
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event=>{
            element.addEventListener(event, fn, false)
        })

    }
    clearAll(){
        this._operation = []

    }
    clearEntry(){
        this._operation.pop()

    }
    getLastOperation(value){
        return this._operation[this._operation.length-1]
    }
    
    isOperator(value){
        return (['+','-','*','/','%'].indexOf(value) > -1)
    }

    addOperation(value){

        if(isNaN(this.getLastOperation())){
            //false "String"
            if(this.isOperator(value)){
                //Trocar o Operador
                this._operation[this._operation.length-1] = value

            }else{
                //Digitou um numero
                console.log(value)
            }


        }else {
            //True "Number"
            let newValue = this.getLastOperation().toString() + value.toString
            this._operation.push(newValue)
        }

        

        console.log(this._operation)

    }
    setError(){
        this.displayCalc = "ERROR"

    }



    execBtn(value){
        switch(value){
            case 'ac':
                this.clearAll()
                break
            case 'ce':
                this.clearEntry()
                break
            case 'soma':
                
                break
            case 'subtracao':
                
                break
            case 'divisao':
                
                break
            case 'multiplicacao':
                
                break
            case 'porcento':
                
                break
            case 'igual':
                
                break
            case 'ponto':
                
                break

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
                break

            default:
                this.setError()
                break
        }
        
    }

    initButtonsEvents(){

       let buttons = document.querySelectorAll("#buttons > g, #parts > g")

       buttons.forEach((btn, index)=>{
        
        this.addEventListenerAll(btn, "click drag", e =>{

            let texBtn = btn.className.baseVal.replace("btn-", "")
            console.log(texBtn)

            this.execBtn(texBtn)

        })

        this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

            btn.style.cursor = "pointer"
        })

       })

    }

    get displayTime(){
        return this._timeEl.innerHTML

    } 
    set displayTime(value){
        return this._timeEl.innerHTML = value

    }
    get displayData(){
        return this._dataEl.innerHTML

    }
    set displayData(value){
        return this._dataEl.innerHTML = value

    }
    get displayCalc(){
        return this._displayCalcEl.innerHTML 
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value
    }
    get currentDate(){
        return new Date()
    }
    set currentDate(value){
        this._currentDate = value
    }
}