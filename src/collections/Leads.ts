import { CollectionConfig } from "payload";

export const Leads:CollectionConfig = {
    slug:"leads",
    fields:
    [
        {
            name:"name",
            type:"text",
            required:true
        },
        {
            name:"contact",
            type:"text",
            required:true

        },
        {
            name:"status",
            type:"select",
            defaultValue:"new",
            options:[
                {
                    "label":"новый",
                    "value":"new"                    

                },
                {
                    "label":"аппрувнут",
                    "value":"approved"
                },
                {
                    "label":"реджектнут",
                    "value":"rejected"
                },
                {
                    "label":"написал",
                    "value":"contacted"
                }
            ]
        },
        {
            name:"answers",
            type:"array",
            fields:[
                    {
                        name:"question",
                        type:"text"
                    },
                    {
                        name:"answer",
                        type:"text"
                    }
            ]
        }
    ]
}