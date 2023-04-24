export class ArticleInfo {
    constructor(public Content: string, public Links: ArticleLinks) { }
}

export class ArticleLinks {
    constructor(public Next: string, public Prev: string) { }
}