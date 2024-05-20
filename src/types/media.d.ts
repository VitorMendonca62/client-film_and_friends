interface IMediaBasic {
  id: string;
  urlTrailer: string | undefined;
  genres: string | string[];
  idAPI: string;
  rating: number;
}

interface IMedia extends IMediaBasic {
  title: string;
  releaseDate: string;
  backgroundPath: string | undefined;
  description: string;
  posterPath: string;
}

interface IMovie extends IMedia {
  duration: number;
}

interface ISerie extends IMedia {
  seasons: string;
}

type TypeMedia = "movie" | "tv";
