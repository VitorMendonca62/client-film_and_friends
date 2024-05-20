interface IRoom {
  id: string;
  idAPI: string;
  author: string;
  participants: string[]; // ATENCAO
  path: string;
  type: TypeMedia;
}