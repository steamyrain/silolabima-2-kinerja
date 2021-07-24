interface PekerjaanRepository {
    getPekerjaanByPekerjaanId(pekerjaanId: number, cb: (err: Error, pekerjaan: object)=>void): void;
}

export {PekerjaanRepository}
