// Basic analytics placeholder
export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    // In production, this would send to your analytics service
    console.log('Analytics event:', event, properties)
  },
  
  page: (name: string, properties?: Record<string, any>) => {
    console.log('Analytics page view:', name, properties)
  },
  
  identify: (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics identify:', userId, traits)
  }
}
