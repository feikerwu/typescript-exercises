type FieldQuery<FT> = { $eq: FT } | { $gt: FT } | { $lt: FT } | { $in: FT[] };

type Query<T extends {}> = { [K in keyof T]?: FieldQuery<T[K]> } & {
  $text?: string;
  $and?: Query<T>[];
  $or?: Query<T>[];
};

type Options<T> = {
  sort?: {
    [P in keyof T]?: 1 | -1;
  };
  projection?: {
    [P in keyof T]?: 1;
  };
};

export class Database<T> {
  protected filename: string;
  protected fullTextSearchFieldNames: unknown[];

  constructor(filename: string, fullTextSearchFieldNames: (keyof T)[]) {
    this.filename = filename;
    this.fullTextSearchFieldNames = fullTextSearchFieldNames;
  }

  async find(query: Query<T>, options?: Options<T>): Promise<T[]> {
    return [];
  }

  async insert(query: T) {}

  async delete(query: Query<T>) {}
}
