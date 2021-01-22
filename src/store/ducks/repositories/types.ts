/* eslint-disable no-shadow */
/**
 * Action types
*/
export enum RepositoriesTypes {
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
    LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

export interface Repository {
    name: string,
    topLevelDomain: [string],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: [string],
    capital: string,
    altSpellings: [string, string],
    region: string,
    subregion: string,
    population: number,
    latlng: [number, number],
    demonym: string,
    area: number,
    gini: number,
    timezones: [string],
    borders: [string, string, string, string, string, string],
    nativeName: string,
    numericCode: string,
    currencies: [
        {
            code: string,
            name: string,
            symbol: string
        },
    ],
    languages: [
        {
            'iso639_1': string,
            'iso639_2': string,
            name: string,
            nativeName: string
        },
        {
            'iso639_1': string,
            'iso639_2': string,
            name: string,
            nativeName: string
        },
        {
            'iso639_1': string,
            'iso639_2': string,
            name: string,
            nativeName: string
        }],
    translations:
    {
        de: string,
        es: string,
        fr: string,
        ja: string,
        it: string,
        br: string,
        pt: string,
        nl: string,
        hr: string,
        fa: string
    },
    flag: string,
    regionalBlocs: [
        {
            acronym: string,
            name: string,
            otherAcronyms: [],
            otherNames: []
        }
    ],
    cioc: string
}

/** *
 * State type
 */

export interface RepositoriesState {
    readonly data:Repository[],
    readonly loading:boolean,
    readonly error:boolean
}
