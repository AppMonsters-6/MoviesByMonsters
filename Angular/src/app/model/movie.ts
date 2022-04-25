export class Movie {
    constructor(public id: number, public movieName: string, public rating: string, public genre: string, public overview: string, public duration: string, public quality: string, public imagePath: string, public releaseDate: Date) {}
}