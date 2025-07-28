import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageResponse } from './models/image.model';
import { AgencyResponse } from './models/agencies.model';
import { ProgramResponse } from './models/program.model';
import { APIs } from './constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'https://metaverseedu.in/workflow/program/file/paths/status/1?fileType=COLLAGE';

  constructor(private http: HttpClient) {}

  getCollageImages(): Observable<any[]> {
  return this.http.get<any[]>(`${APIs.GET_COLLAGE_IMAGES}`);
}
  
  getAllImages(programId:number): Observable<any[]> {
    return this.http.get<any[]>(`${APIs.GET_ALL_IMAGES}/${programId}`);
  }
  

  getImageUrl(name: string): string {
    return `${this.baseUrl}/images/${name}`;
  }

  getCollageImageUrl(name: string): string {
    return `${this.baseUrl}/CollagePhotos/${name}`;
  }

  getAgencies(): Observable<AgencyResponse> {
    return this.http.get<AgencyResponse>(`${APIs.GET_AGENCIES}`);
  }

  getPrograms(agencyId: number): Observable<ProgramResponse> {
    return this.http.get<ProgramResponse>(`${APIs.GET_PROGRAMS}/${agencyId}`);
  }

}
