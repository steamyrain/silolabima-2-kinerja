interface Pekerjaan {
    pekerjaanId: number;
    pekerjaanName: string;
}

interface PekerjaanRepository {
    getPekerjaanByPekerjaanId: (pekerjaanId: number) => Pekerjaan;
}

export {Pekerjaan, PekerjaanRepository}
