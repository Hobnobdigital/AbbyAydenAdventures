// Initialize Supabase client
const SUPABASE_URL = 'https://guqcojsrmjndjgzdmcza.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1cWNvanNybWpuZGpnemRtY3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0MTM3NDMsImV4cCI6MjA3Njk4OTc0M30.I37ZcciEqCiZDASXHKlh3cLSoeV_CCkYkSybopHIsog';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Helper functions for game data
const SupabaseHelper = {
  // Test connection
  async testConnection() {
    try {
      const { data, error } = await supabase.from('scores').select('count');
      if (error && error.code === '42P01') {
        console.log('Supabase connected! (scores table needs to be created)');
        return true;
      }
      console.log('Supabase connected successfully!');
      return true;
    } catch (err) {
      console.error('Supabase connection error:', err);
      return false;
    }
  },

  // Save a score
  async saveScore(playerName, score, coinsCollected) {
    try {
      const { data, error } = await supabase
        .from('scores')
        .insert([
          {
            player_name: playerName,
            score: score,
            coins_collected: coinsCollected,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Error saving score:', error);
        return { success: false, error };
      }

      console.log('Score saved successfully!');
      return { success: true, data };
    } catch (err) {
      console.error('Error saving score:', err);
      return { success: false, error: err };
    }
  },

  // Get top scores
  async getTopScores(limit = 10) {
    try {
      const { data, error } = await supabase
        .from('scores')
        .select('*')
        .order('score', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching scores:', error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (err) {
      console.error('Error fetching scores:', err);
      return { success: false, error: err };
    }
  }
};

// Test connection on load
SupabaseHelper.testConnection();
