class CalcController {
    constructor(){
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this._dataEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")

        
        this._currentDate 
        this.initialize()
        

    }

    initialize(){

        setInterval(()=>{
            this.displayData = this.currentDate.toLocaleDateString(this._locale,{
                day: "2-digit",
                month: "long",
                year: "numeric"
            })
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale)

        },1000)

    

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