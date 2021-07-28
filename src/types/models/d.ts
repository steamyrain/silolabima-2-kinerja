import {Optional,Model} from 'sequelize'
import {Kinerja} from '../../entities/kinerja'
import {Kegiatan} from '../../entities/kegiatan'

// Optional is a type helper. Check the reference below
// [url]https://github.com/sequelize/sequelize/blob/main/types/index.d.ts[/url]
interface KinerjaCreationAttributes extends Optional<Kinerja, "kinerjaId"|"kinerjaDesc">{}

export class KinerjaModel 
    extends Model<Kinerja,KinerjaCreationAttributes> 
    implements Kinerja 
{
    // implemented from Interface Kinerja 
    public kinerjaId!: number;
    public userId!: number;
    public kinerjaStart!: Date;
    public kinerjaEnd!: Date;
    public kegiatanId!: number;
    public kinerjaDesc!: string|null;

    // timestamps
    public readonly createdAt!: number;
    public readonly updatedAd!: number;
}

interface KegiatanCreationAttributes extends Optional<Kegiatan, "kegiatanId">{}

export class KegiatanModel
    extends Model<Kegiatan,KegiatanCreationAttributes>
    implements Kegiatan
{
    public kegiatanId!: number;
    public pekerjaanId!: number;
    public organisasiId!: number;
    public kegiatanName!: string;
    
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}
