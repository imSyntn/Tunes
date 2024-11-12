interface imageType {
    quality: string,
    url: string
}

interface artistsType {
    name: string,
    id: string,
    image: imageType[]
}

export interface ResultsInDataType {
    name: string,
    artist?: string,
    description?: string,
    id: string,
    image?: imageType[],
    language?: string,
    songIds?: string,
    songCount?: number,
    title: string,
    type: string,
    url?: string,
    year?: string,
    duration?: number,
    releaseDate?: string,
    label?: string,
    playCount?: string,
    hasLyrics?: boolean,
    copyright?: string,
    album?: { id?: string, name?: string },
    artists?: {
        primary?: artistsType[],
        all?: artistsType[]
    },
    downloadUrl?: { quality: string, url: string }[],
    songs?: ResultsInDataType[],
    albums?: ResultsInDataType[],
    lyrics?: string,
    isVerified?: boolean,
    fanCount?: string,
    bio?: { text: string, title: string }[],
    results?: ResultsInDataType[],
}

export interface globalSearchResultType {
    [key: string]: resultsType
}
export interface resultsType {
    results: ResultsInDataType[] | []
}

export interface top_artists {
    artistid: string,
    image: string,
    name: string,
}

export interface userType {
    loggedIn: boolean,
    registered: boolean,
    userSavedData: userDataType | {},
    updated: number
}

export interface dataInUserDataType {
    dataId: string,
    type: string,
    image: string
}

export interface userDataType {
    userId: string,
    songs: dataInUserDataType[],
    albums: dataInUserDataType[],
    playlists: dataInUserDataType[]
}