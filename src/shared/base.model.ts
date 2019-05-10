import { Document, SchemaOptions } from 'mongoose'
import { ApiModelPropertyOptional } from '@nestjs/swagger'
import { Timestamp } from 'bson';
export interface BaseModel extends Document {
    createdAt?:Date;
    updatedAt?:Date;
}
export class BaseModelVm{
    @ApiModelPropertyOptional({type:String,format:'Date-time'})
    createdAt?:Date;

    @ApiModelPropertyOptional({type:String,format:'Date-time'})
    updatedAt?:Date;

    @ApiModelPropertyOptional() id?:string

}

export const schemaOptions:SchemaOptions={ 
    toJSON:{
        virtuals:true,
        getters:true
        
    }

}