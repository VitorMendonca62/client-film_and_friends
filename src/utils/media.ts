export function defineTypeMedia(media: ISerie | IMovie) {
  if ((media as IMovie).duration !== undefined) {
    return 'movie';
  }
  if ((media as ISerie).seasons !== undefined) {
    return 'serie';
  }

  return null;
}