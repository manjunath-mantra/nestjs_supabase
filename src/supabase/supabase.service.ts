import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://ipnfbphaxigukhksztum.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwbmZicGhheGlndWtoa3N6dHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzOTU2MjUsImV4cCI6MjAwNjk3MTYyNX0.DXyhJN5DeZC2YlFHa8VAUBL_CvV05H8SjYw8cXqa7Sg'
    );
  }

  getSupabaseClient(): SupabaseClient {
    return this.supabase;
  }
}
