import {CollectionConfig} from 'payload'

export const Services : CollectionConfig ={
    slug:'services',
    versions:{
        drafts:true
    },
    fields:
    [
        {
            name:"title",
            type:"text",
            required:true
        },
        {
            name:"description",
            type:"text",
            required:true
        },
        {
            name:"order",
            type:"number",
            required:true
        },
        {
            name: "icon",
            type: "select",
            options: [
            { label: "Деньги", value: "wallet" },
            { label: "Расходы", value: "creditCard" },
            { label: "Накопления", value: "piggyBank" },
            { label: "Капитал", value: "coins" },

            { label: "Рост", value: "growth" },
            { label: "Аналитика", value: "chart" },
            { label: "Цель", value: "target" },

            { label: "Стратегия", value: "brain" },
            { label: "Идея", value: "lightbulb" },
            { label: "Направление", value: "compass" },

            { label: "Сопровождение", value: "repeat" },
            { label: "Обновление", value: "refresh" },
            { label: "Процесс", value: "activity" },

            { label: "Безопасность", value: "shield" },
            { label: "Стабильность", value: "lock" },
            ]
        }
    ]
}