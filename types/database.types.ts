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
      user_details: {
        Row: {
          avatar_url: string | null
          email: string | null
          full_name: string | null
          id: string
          roles: Database["public"]["Enums"]["role_name"]
          status: Database["public"]["Enums"]["status"]
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          roles?: Database["public"]["Enums"]["role_name"]
          status?: Database["public"]["Enums"]["status"]
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          roles?: Database["public"]["Enums"]["role_name"]
          status?: Database["public"]["Enums"]["status"]
          updated_at?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_details_id_fkey"
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
      role_name:
        | "ceo"
        | "user"
        | "customercare"
        | "digitalmarketing"
        | "humanres"
        | "contentcreator"
        | "customerservice"
        | "designgraphic"
        | "videoeditor"
        | "cashier"
        | "technician"
        | "accounting"
        | "operational"
      status: "active" | "training" | "inactive"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
