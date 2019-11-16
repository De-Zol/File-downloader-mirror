import * as request from 'request';
import * as path from 'path';
import * as mime from 'mime-types';
import {FileDownloader} from './src/FileDownloader';
// const request = require('request');
const url = 'https://sefon.fm/api/mp3_download/direct/124487/3vUCAHkDiTi3de-wLLryDnSok2sj_BxwG9l5HzrWXybjWG3kiVPTv-PLPl8Z_QY16n2k48jCsGSlmZW3IfhuaK-ZGWV-fLpxsYssOunol_EMVKBx16BEsx42TVmIOEmygqNQpikTiI9CyU3A4Aep9PgUTfZO6Qm6KdKW3XMY/';
// const url = 'http://modp.wgcdn.co/media/mod_files/WoT_ModPack_by_Amway921_v1.6.1.3_-_9a.zip';
// const url = 'https://dl.pstmn.io/download/latest/win64';
// const url = 'https://github-production-release-asset-2e65be.s3.amazonaws.com/23216272/71c5a100-00d6-11ea-822c-0617e3aba1d7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20191110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20191110T160815Z&X-Amz-Expires=300&X-Amz-Signature=062e97d6f14ecad5f5ad2fe375f48a71fc3742b6eb319ef66a75181dcb9fe7bb&X-Amz-SignedHeaders=host&actor_id=0&response-content-disposition=attachment%3B%20filename%3DGit-2.24.0.2-64-bit.exe&response-content-type=application%2Foctet-stream';
// const url = 'http://n.tracktor.site/td.php?s=u7mGjDqozeDlYspHg2YDjvSFgQO7RDwQIbqqddVIhpaXkWhEyTMZ3gLLlm39xtihHRH9I8K4cBNYhKl4QYhPEfTo%2BTKu8l3oTce%2FpLeQoKLfI2TBrMKbnT8yhccuHD2M%2BaCyHA%3D%3D';

const downloader = new FileDownloader(url, 'C:\\Users\\Beasty\\Documents\\Projects\\File-downloader\\');
downloader.start();

function getFileExtension(resp): string {
    let extension = '';
    extension = mime.extension(resp.headers['content-type']);
    if (extension === 'bin') {
        extension = 'exe';
    }
    return '.' + extension;
}
