interface KinerjaRepository {
    getKinerjaByKinerjaId(kinerjaId: number, cb: (err: Error,kinerja: object)=>void): void;
    getKinerjaByUserId(userId: number, cb: (err: Error,kinerja: object)=>void): void;
    setKinerja(kinerja: Object,cb: (err: Error)=>void): void; 
}

export {KinerjaRepository}
