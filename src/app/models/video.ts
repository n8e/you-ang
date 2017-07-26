class PageInfo {
  constructor(
    public totalResults: number,
    public resultsPerPage: number
  ){}
}

export class Video {
  constructor(
    public kind: string,
    public etag: string,
    public nextPageToken: string,
    public regionCode: string,
    public pageInfo: PageInfo,
    public items:Array<any>
  ){}
}
