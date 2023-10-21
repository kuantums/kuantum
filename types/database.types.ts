export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      akun: {
        Row: {
          bio: string | null
          divisi: string | null
          domisili: string | null
          email: string
          foto_profil: string | null
          gender: Database["public"]["Enums"]["jenis kelamin"] | null
          id: string
          jabatan: string | null
          jenis_kontrak: Database["public"]["Enums"]["status"] | null
          nama: string | null
          nik: number | null
          npwp: string | null
          phone: string | null
          roles: Database["public"]["Enums"]["access"] | null
          status: Database["public"]["Enums"]["Penikahan"] | null
          "tanggal masuk": string
          umur: number | null
          updated_pada: string | null
          username: string | null
        }
        Insert: {
          bio?: string | null
          divisi?: string | null
          domisili?: string | null
          email: string
          foto_profil?: string | null
          gender?: Database["public"]["Enums"]["jenis kelamin"] | null
          id?: string
          jabatan?: string | null
          jenis_kontrak?: Database["public"]["Enums"]["status"] | null
          nama?: string | null
          nik?: number | null
          npwp?: string | null
          phone?: string | null
          roles?: Database["public"]["Enums"]["access"] | null
          status?: Database["public"]["Enums"]["Penikahan"] | null
          "tanggal masuk"?: string
          umur?: number | null
          updated_pada?: string | null
          username?: string | null
        }
        Update: {
          bio?: string | null
          divisi?: string | null
          domisili?: string | null
          email?: string
          foto_profil?: string | null
          gender?: Database["public"]["Enums"]["jenis kelamin"] | null
          id?: string
          jabatan?: string | null
          jenis_kontrak?: Database["public"]["Enums"]["status"] | null
          nama?: string | null
          nik?: number | null
          npwp?: string | null
          phone?: string | null
          roles?: Database["public"]["Enums"]["access"] | null
          status?: Database["public"]["Enums"]["Penikahan"] | null
          "tanggal masuk"?: string
          umur?: number | null
          updated_pada?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "akun_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      access:
        | "ceo"
        | "humanresource"
        | "user"
        | "contentcreator"
        | "digitalmarketing"
      "jenis kelamin": "PRIA" | "WANITA" | "MEMILIH TIDAK DISEBUTKAN"
      Penikahan: "MENIKAH" | "JANDA" | "DUDA" | "BELUM MENIKAH"
      status:
        | "PERMANEN"
        | "KONTRAK"
        | "TRAINING"
        | "NONAKTIF"
        | "PENSIUN"
        | "MAGANG"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
