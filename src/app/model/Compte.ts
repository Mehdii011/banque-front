export interface Compte{
  id?:number
    numeroCompte?:number;
    solde?:number;
    dateCreation?:string;
    decouvert?:number;
    operations?:[{
        idOperation?:number,
        dateOperation?:string,
        montant:number
    }];
    clients?:[{
      id?: number;
      nom?: string;
      prenom?: string;
      adresse?: string;
      codePostal?: number;
      compte?: any;
      cartes?: any;
      ville?: string;
      telephone?: any;
      password?: string
    }]

}
