export interface CatalogFilterJson{
    katalogFilter:CatalogFilterInterface[]
}

export interface CatalogFilterInterface{
    name:string,
    colors:RoomColorsInterface,
    types:TypeInterface,
    brend:TypeInterface,
    roomType:RoomColorsInterface,
    picture:TypeInterface

}

export interface TypeInterface{
    name:string,
    type:string[]

}

export interface RoomColorsInterface {
    name:string,
    type:RoomColorsTypeInterface[]
}

export interface RoomColorsTypeInterface{
    name:string,
    item:string
}

