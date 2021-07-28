interface Kinerja {
    kinerjaId: number;
    userId: number;
    kinerjaStart: Date;
    kinerjaEnd: Date;
    kegiatanId: number;
    kinerjaDesc: string|null;
}

interface KinerjaRepository {
    getKinerjaByKinerjaId(kinerjaId: number, cb: (err: Error,kinerja: Kinerja)=>void): void;
    getKinerjaByUserId(userId: number, cb: (err: Error,kinerja: Kinerja)=>void): void;
    setKinerja(kinerja: Kinerja,cb: (err: Error)=>void): void; 
}

export {Kinerja,KinerjaRepository}
