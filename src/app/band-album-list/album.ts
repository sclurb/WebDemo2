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
