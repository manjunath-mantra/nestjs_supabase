// import { Injectable } from '@nestjs/common';
// import { createClient, SupabaseClient } from '@supabase/supabase-js';

// export class SupabaseService {
//   private supabase: SupabaseClient;

//   constructor() {
//     this.supabase = createClient(
//       'https://ipnfbphaxigukhksztum.supabase.co',
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwbmZicGhheGlndWtoa3N6dHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzOTU2MjUsImV4cCI6MjAwNjk3MTYyNX0.DXyhJN5DeZC2YlFHa8VAUBL_CvV05H8SjYw8cXqa7Sg'
//     );
//   }

//   getSupabaseClient(): SupabaseClient {
//     return this.supabase;
//   }
// }

import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;
  constructor(private readonly configService: ConfigService) {
    let supabase_url = 'https://ipnfbphaxigukhksztum.supabase.co';
    let supabase_key =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwbmZicGhheGlndWtoa3N6dHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzOTU2MjUsImV4cCI6MjAwNjk3MTYyNX0.DXyhJN5DeZC2YlFHa8VAUBL_CvV05H8SjYw8cXqa7Sg';
    this.supabase = createClient(supabase_url, supabase_key);
  }

  getSupabaseClient(): SupabaseClient {
    return this.supabase;
  }
}
