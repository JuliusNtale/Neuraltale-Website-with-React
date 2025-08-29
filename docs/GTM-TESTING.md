# 🧪 GTM Testing Guide

## Testing Your Google Tag Manager Integration

### Quick Tests to Verify GTM is Working

#### 1. **Check GTM Container Loading**
Open your website and check browser console:
```javascript
// Should show GTM container object
console.log(window.dataLayer);
// Should show your GTM container ID
console.log('GTM Container:', 'GTM-5S5TH6VB');
```

#### 2. **Test Cookie Consent Flow**
1. Visit your website
2. Accept analytics cookies
3. Check console for: `consent_update` event
4. Verify `analytics_consent: 'granted'` in dataLayer

#### 3. **Test Business Events**
Navigate through your site and watch for these events:
- Visit Services page → `service_interest` event
- Click contact forms → `contact_attempt` event  
- Request quotes → `quote_request` event

#### 4. **GTM Preview Mode**
1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Open container `GTM-5S5TH6VB`
3. Click "Preview" button
4. Enter your website URL
5. Navigate your site and watch tags fire

### Expected Results ✅

**Console Output:**
```
dataLayer: [
  {event: "gtm.js", gtm.start: 1234567890},
  {event: "consent_update", analytics_consent: "granted"},
  {event: "service_interest", service_name: "TP-Link Omada"}
]
```

**GTM Preview Shows:**
- GTM container loaded ✅
- Consent triggers firing ✅
- Business events tracking ✅
- Privacy compliance active ✅

Your GTM implementation is now live and ready for business intelligence! 🚀

## Next Steps
1. Connect Google Analytics 4 to GTM
2. Set up conversion tracking
3. Create custom audiences
4. Monitor business metrics
