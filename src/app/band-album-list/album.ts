export interface Album {
    albumId: number;
    title: string;
    releaseDate: string | null;
    recordedAt: string;
    recordedDate: string | null;
    length: string;
    producer: string;
    succeededBy: string;
}

export interface Song {
    albumId: number,
    title: string,
    albumName: string,
    band: string,
    length: string,
    songWriters: string,
    youTubeUrl: string
}
