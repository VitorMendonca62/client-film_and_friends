interface IRoom {
  id: string;
  idAPI: string;
  author: string;
  participants: string[]; // ATENCAO
  path: string;
  type: TypeMedia;
}

type TypeDataRoom = [ISerie | IMovie, IRoom];

type APIName = 'movie' | 'tv';

interface IRoomInput {
  id: string;
  type: TypeMedia;
  APIName: APIName;
}
