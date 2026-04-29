import {CollectionConfig} from 'payload'

export const QuizQuestions: CollectionConfig ={
    slug:"quiz-questions",
    fields:
    [
        {
            name:"question",
            type:"text",
            required:true
        },
        {
            name:"key",
            type:"select",
            options:
            [
                { label: "Имя", value: "name" },
                { label: "Контакт", value: "contact" },
                { label: "Доход", value: "income" },
                { label: "Расходы", value: "expenses" },
                { label: "Подушка", value: "savings" },
                { label: "Цель", value: "goal" },
                { label: "Долги", value: "debts" },
                { label: "Другое", value: "other" },
            ]

        },
        {
            name:"type",
            type:"select",
            options:
            [
                {
                    "label":"Text",
                    "value":"text"
                },
                {
                    "label":"Number",
                    "value":"number"
                },
                {
                    "label":"Select",
                    "value":"select"
                },



            ],
            required:true
        },
        {
            name:"required",
            type:"checkbox",
            required:true
        },
        {
            name:"order",
            type:"number",
            required:true
        },
        {
            name:"options",
            type:"array",
            fields:[
            {
                name:"value",
                type:"text"
            }
            ]
        }

    ]
 
}