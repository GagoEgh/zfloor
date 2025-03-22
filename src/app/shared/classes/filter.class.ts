import { signal } from "@angular/core";

export class Filter{
    protected allColors = signal(false)
    constructor(){}

    protected secletColor(item:string){
        console.log('item',item)
    }

    protected showAll():void{
        this.allColors.update((currentValue)=>currentValue=!currentValue);
    }
}