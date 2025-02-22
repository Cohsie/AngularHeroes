export interface heroe{
  id: String,
  superhero: String,
  publisher: String,
  alter_ego: String,
  first_appearance: String,
  characters: String;
  alt_img?:string;
}

export enum Publisher{
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
