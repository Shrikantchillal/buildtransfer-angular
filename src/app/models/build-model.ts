export class Build {
    id: number;
    host: string;
    pod: number;
    dc: number;
    build: string;
    build_size: number;
    total_size: number;
    build_timestamp: number;
    location: string;
    build_hsize: string;
    total_hsize: string;
    last_pushed_by: string;
    last_pushed_date: number;
    nfs_build_size: number;
    build_status: string;
    estimated_time_remaining: number;
}
