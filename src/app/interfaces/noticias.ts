export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    descripcion:string;
    fecha:string;
    imagen:string;
    texto:string;
    destacado:boolean;
    autor:string;
}

//Arreglo de objetoss

export let ListaNoticias:Array<Noticias>=[{
    id:1,
    idCategoria:1,
    titulo:"Lorem Ipsum",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.",
    fecha:Date().toString(),
    imagen:"imagen1.jpg",
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.Nulla sed dui vel magna convallis iaculis at id arcu. Aenean sed sapien sit amet turpis vestibulum vestibulum sit amet placerat lacus. Fusce a neque maximus, commodo dui id, placerat turpis. Nam rutrum nunc et gravida placerat. Aliquam erat volutpat. Nam pharetra dui eget vulputate venenatis.",
    destacado:true,
    autor:"Abel Gilbert"
},

{   id:2,
    idCategoria:2,
    titulo:"Lorem Ipsum",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.",
    fecha:Date().toString(),
    imagen:"imagen2.jpg",
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.Nulla sed dui vel magna convallis iaculis at id arcu. Aenean sed sapien sit amet turpis vestibulum vestibulum sit amet placerat lacus. Fusce a neque maximus, commodo dui id, placerat turpis. Nam rutrum nunc et gravida placerat. Aliquam erat volutpat. Nam pharetra dui eget vulputate venenatis.",
    destacado:false,
    autor:"Bartomeu Marí"
},
{   id:3,
    idCategoria:3,
    titulo:"Lorem Ipsum",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.",
    fecha:Date().toString(),
    imagen:"imagen3.jpg",
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.Nulla sed dui vel magna convallis iaculis at id arcu. Aenean sed sapien sit amet turpis vestibulum vestibulum sit amet placerat lacus. Fusce a neque maximus, commodo dui id, placerat turpis. Nam rutrum nunc et gravida placerat. Aliquam erat volutpat. Nam pharetra dui eget vulputate venenatis.",
    destacado:true,
    autor:"Beatriz Becerra"
},
{   id:4,
    idCategoria:4,
    titulo:"Lorem Ipsum",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.",
    fecha:Date().toString(),
    imagen:"imagen4.jpg",
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.Nulla sed dui vel magna convallis iaculis at id arcu. Aenean sed sapien sit amet turpis vestibulum vestibulum sit amet placerat lacus. Fusce a neque maximus, commodo dui id, placerat turpis. Nam rutrum nunc et gravida placerat. Aliquam erat volutpat. Nam pharetra dui eget vulputate venenatis.",
    destacado:false,
    autor:"Dani de la Orden"
},
{   id:5,
    idCategoria:5,
    titulo:"Lorem Ipsum",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.",
    fecha:Date().toString(),
    imagen:"imagen5.jpg",
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.Nulla sed dui vel magna convallis iaculis at id arcu. Aenean sed sapien sit amet turpis vestibulum vestibulum sit amet placerat lacus. Fusce a neque maximus, commodo dui id, placerat turpis. Nam rutrum nunc et gravida placerat. Aliquam erat volutpat. Nam pharetra dui eget vulputate venenatis.",
    destacado:true,
    autor:"Edesio Ureña"
},
{   id:6,
    idCategoria:6,
    titulo:"Lorem Ipsum",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.",
    fecha:Date().toString(),
    imagen:"imagen6.jpg",
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.Nulla sed dui vel magna convallis iaculis at id arcu. Aenean sed sapien sit amet turpis vestibulum vestibulum sit amet placerat lacus. Fusce a neque maximus, commodo dui id, placerat turpis. Nam rutrum nunc et gravida placerat. Aliquam erat volutpat. Nam pharetra dui eget vulputate venenatis.",
    destacado:false,
    autor:"Ian Duncan"
},
 {  id:7,
    idCategoria:7,
    titulo:"Lorem Ipsum",
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.",
    fecha:Date().toString(),
    imagen:"imagen7.jpg",
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor ipsum, viverra et ultrices non, sollicitudin nec elit. Nunc eu tellus aliquam, posuere nisl mattis, accumsan elit.Nulla sed dui vel magna convallis iaculis at id arcu. Aenean sed sapien sit amet turpis vestibulum vestibulum sit amet placerat lacus. Fusce a neque maximus, commodo dui id, placerat turpis. Nam rutrum nunc et gravida placerat. Aliquam erat volutpat. Nam pharetra dui eget vulputate venenatis.",
    destacado:false,
    autor:"Katherine Davidson"
}
];
