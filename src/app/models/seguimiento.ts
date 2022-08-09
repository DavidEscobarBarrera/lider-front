export interface UltimoSeguimiento {
  status: number;
  data: Data;
}
export interface Data {
  tale_id: number;
  segu_id: number;
  reco_habilidadblanda: string;
  reco_habilidadtecnica: string;
  opme_habilidadblanda: string;
  opme_habilidadtecnica: string;
  competencias: Competencias;
  segu_fecha: string;
}
export interface Competencias {
  COMUNICACIÓN: number;
  'TRABAJO EN EQUIPO': number;
  'CONOCIMIENTO TÉCNICO': number;
  'ORIENTACIÓN AL LOGRO': number;
  'ORIENTACIÓN AL SERVICIO': number;
}


