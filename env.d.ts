declare namespace NodeJS {
    interface ProcessEnv {
        MAIL_HOST: string;
        MAIL_USER: string;
        MAIL_PORT: number;
        MAIL_PASS: string;
    }
}