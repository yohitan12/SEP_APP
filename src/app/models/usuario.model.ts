export class Usuario  {

    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public rol?: string,
        public disponible?: boolean,
        public _id?: string
    ) { }

}
