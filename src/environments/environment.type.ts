export interface ApiHost {
    host: string;
    port: number;
    ssl: boolean;
}

export interface Environment {
    name: 'dev' | 'stg' | 'prod';
    production: boolean;
    api: ApiHost;
}
