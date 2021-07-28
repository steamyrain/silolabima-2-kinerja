interface Kegiatan {
    kegiatanId: number;
    pekerjaanId: number;
    organisasiId: number;
    kegiatanName: string;
}

interface KegiatanRepository {
    getKegiatanByKegiatanId(kegiatanId: number, cb: (err: Error, kegiatan: Kegiatan)=>void): void;
    setKegiatan(kegiatan: Kegiatan,db: (err: Error)=>void): void;
}

export {Kegiatan,KegiatanRepository}
