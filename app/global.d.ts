import type { Database as DB } from '@/types/database.types';

declare global {
  type Database = DB;
  type Akun = DB['public']['Tables']['akun']['Row'];
}
