type Query<T, P = keyof T> = { $text: string } | opt<number> | aggr<T>;

type opts = '$lt' | '$gt' | '$eq';
type opt<P> = {
  [key in opts]: P;
};

type aggrKeys = '$and' | '$or' | '$in';
type aggr<T> = {
  [key in aggrKeys]: Array<
    {
      [key in keyof T]: opt<T[key]>;
    }
  >;
};

export class Database<T> {
  protected filename: string;
  protected fullTextSearchFieldNames: (keyof T)[];

  constructor(filename: string, fullTextSearchFieldNames: (keyof T)[]) {
    this.filename = filename;
    this.fullTextSearchFieldNames = fullTextSearchFieldNames;
  }

  async find(query: Query<T>): Promise<T[]> {
    return [];
  }
}
