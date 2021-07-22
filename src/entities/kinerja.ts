import {Pekerjaan} from "./pekerjaan"

interface Kinerja {
    kinerjaId: number;
    kinerjaUserId: number;
    kinerjaStartUnixTime: number;
    kinerjaEndUnixTime: number;
    kinerjaPekerjaan: Pekerjaan;
    kinerjaDescription?: string;
}

interface KinerjaRepository {
    getKinerjaByKinerjaId: (id: number) => Kinerja;
    getKinerjaByUserId: (UserId: number) => Kinerja;
    setKinerja: (kinerja: Kinerja) => void; 
}

export {Kinerja,KinerjaRepository}
