import { environment } from "src/environments/environment";

export const API_URL = environment.apiUrl;

export const APIs= {
    GET_ALL_IMAGES: `${API_URL}/program/file/paths/`,
    GET_COLLAGE_IMAGES: `${API_URL}/program/file/paths/status?fileType=COLLAGE`,
    UPLOAD_COLLAGE: `${API_URL}/program/collage/images`,
    GET_AGENCIES: `${API_URL}/agencies`,
    GET_PROGRAMS: `${API_URL}/agency/programs/dropdown`,
};