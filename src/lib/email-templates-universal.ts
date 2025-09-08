// Universal Email Template for EmailJS Dashboard
// This single template handles all form types: Contact, Quote, Career, Support

export const universalTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{form_type}} - NeuralTale</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8fafc;
    }
    .container { 
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header { 
      text-align: center;
      border-bottom: 3px solid #3b82f6;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .logo { 
      font-size: 24px;
      font-weight: bold;
      color: #1e40af;
      margin-bottom: 10px;
    }
    .form-type { 
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      display: inline-block;
    }
    .content { 
      margin: 20px 0;
    }
    .section { 
      margin: 25px 0;
      padding: 20px;
      background: #f1f5f9;
      border-radius: 8px;
      border-left: 4px solid #3b82f6;
    }
    .field { 
      margin: 12px 0;
    }
    .field-label { 
      font-weight: 600;
      color: #1e40af;
      margin-bottom: 5px;
    }
    .field-value { 
      background: white;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }
    .footer { 
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      color: #64748b;
      font-size: 14px;
    }
    .priority-high { border-left-color: #ef4444; }
    .priority-medium { border-left-color: #f59e0b; }
    .priority-low { border-left-color: #10b981; }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="logo">🧠 NeuralTale Technologies</div>
      <div class="form-type">{{form_type}}</div>
    </div>

    <!-- Contact Information Section -->
    <div class="section">
      <h3 style="margin-top: 0; color: #1e40af;">Contact Information</h3>
      <div class="field">
        <div class="field-label">Name:</div>
        <div class="field-value">{{from_name}}{{applicant_name}}{{client_name}}</div>
      </div>
      <div class="field">
        <div class="field-label">Email:</div>
        <div class="field-value">{{from_email}}{{applicant_email}}{{client_email}}</div>
      </div>
      <div class="field">
        <div class="field-label">Phone:</div>
        <div class="field-value">{{from_phone}}{{applicant_phone}}{{client_phone}}</div>
      </div>
      {{#from_company}}
      <div class="field">
        <div class="field-label">Company:</div>
        <div class="field-value">{{from_company}}</div>
      </div>
      {{/from_company}}
      {{#client_company}}
      <div class="field">
        <div class="field-label">Company:</div>
        <div class="field-value">{{client_company}}</div>
      </div>
      {{/client_company}}
    </div>

    <!-- Contact Form Fields -->
    {{#subject}}
    <div class="section">
      <h3 style="margin-top: 0; color: #1e40af;">Contact Details</h3>
      <div class="field">
        <div class="field-label">Subject:</div>
        <div class="field-value">{{subject}}</div>
      </div>
      {{#service_type}}
      <div class="field">
        <div class="field-label">Service Type:</div>
        <div class="field-value">{{service_type}}</div>
      </div>
      {{/service_type}}
      <div class="field">
        <div class="field-label">Message:</div>
        <div class="field-value">{{message}}</div>
      </div>
      {{#budget_range}}
      <div class="field">
        <div class="field-label">Budget Range:</div>
        <div class="field-value">{{budget_range}}</div>
      </div>
      {{/budget_range}}
      {{#timeline}}
      <div class="field">
        <div class="field-label">Timeline:</div>
        <div class="field-value">{{timeline}}</div>
      </div>
      {{/timeline}}
    </div>
    {{/subject}}

    <!-- Quote Request Fields -->
    {{#service_requested}}
    <div class="section">
      <h3 style="margin-top: 0; color: #1e40af;">Quote Request Details</h3>
      <div class="field">
        <div class="field-label">Service Requested:</div>
        <div class="field-value">{{service_requested}}</div>
      </div>
      <div class="field">
        <div class="field-label">Budget Range:</div>
        <div class="field-value">{{budget_range}}</div>
      </div>
      <div class="field">
        <div class="field-label">Timeline:</div>
        <div class="field-value">{{timeline}}</div>
      </div>
      {{#location}}
      <div class="field">
        <div class="field-label">Location:</div>
        <div class="field-value">{{location}}</div>
      </div>
      {{/location}}
      {{#employee_count}}
      <div class="field">
        <div class="field-label">Company Size:</div>
        <div class="field-value">{{employee_count}} employees</div>
      </div>
      {{/employee_count}}
      <div class="field">
        <div class="field-label">Requirements:</div>
        <div class="field-value" style="white-space: pre-wrap;">{{requirements}}</div>
      </div>
    </div>
    {{/service_requested}}

    <!-- Career Application Fields -->
    {{#position_applied}}
    <div class="section">
      <h3 style="margin-top: 0; color: #1e40af;">Career Application Details</h3>
      <div class="field">
        <div class="field-label">Position Applied:</div>
        <div class="field-value">{{position_applied}}</div>
      </div>
      <div class="field">
        <div class="field-label">Years of Experience:</div>
        <div class="field-value">{{experience_years}} years</div>
      </div>
      <div class="field">
        <div class="field-label">Education:</div>
        <div class="field-value">{{education}}</div>
      </div>
      <div class="field">
        <div class="field-label">Key Skills:</div>
        <div class="field-value">{{key_skills}}</div>
      </div>
      {{#portfolio_link}}
      <div class="field">
        <div class="field-label">Portfolio:</div>
        <div class="field-value"><a href="{{portfolio_link}}" style="color: #3b82f6;">{{portfolio_link}}</a></div>
      </div>
      {{/portfolio_link}}
      <div class="field">
        <div class="field-label">Cover Letter:</div>
        <div class="field-value" style="white-space: pre-wrap;">{{cover_letter}}</div>
      </div>
    </div>
    {{/position_applied}}

    <!-- Support Request Fields -->
    {{#issue_subject}}
    <div class="section {{#priority_level}}priority-{{priority_level}}{{/priority_level}}">
      <h3 style="margin-top: 0; color: #1e40af;">Support Request Details</h3>
      {{#priority_level}}
      <div class="field">
        <div class="field-label">Priority Level:</div>
        <div class="field-value">
          <span style="padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600;">
            {{priority_level}} Priority
          </span>
        </div>
      </div>
      {{/priority_level}}
      {{#support_category}}
      <div class="field">
        <div class="field-label">Category:</div>
        <div class="field-value">{{support_category}}</div>
      </div>
      {{/support_category}}
      <div class="field">
        <div class="field-label">Subject:</div>
        <div class="field-value">{{issue_subject}}</div>
      </div>
      <div class="field">
        <div class="field-label">Description:</div>
        <div class="field-value" style="white-space: pre-wrap;">{{issue_description}}</div>
      </div>
      {{#system_info}}
      <div class="field">
        <div class="field-label">System Information:</div>
        <div class="field-value">{{system_info}}</div>
      </div>
      {{/system_info}}
    </div>
    {{/issue_subject}}

    <!-- Footer -->
    <div class="footer">
      <p><strong>NeuralTale Technologies</strong></p>
      <p>This message was sent via the {{form_type}} form on neuraltale.com</p>
      <p style="margin-top: 20px;">
        📧 Reply to: {{reply_to}}<br>
        🌐 Visit us: <a href="https://neuraltale.com" style="color: #3b82f6;">neuraltale.com</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

// Instructions for EmailJS Dashboard Setup:
/*
🚀 SIMPLE SETUP INSTRUCTIONS:

1. Go to your EmailJS dashboard (https://dashboard.emailjs.com/)
2. Create ONE email template 
3. Copy and paste the universalTemplate HTML above into the template editor
4. Save the template and copy its ID
5. Replace 'YOUR_TEMPLATE_ID' in emailjs.ts with your actual template ID
6. Replace 'YOUR_PUBLIC_KEY' in emailjs.ts with your EmailJS public key

✨ That's it! This single template will automatically show different sections based on form type:
- Contact forms show contact details and messages
- Quote requests show service details and requirements  
- Career applications show position and experience details
- Support requests show priority and issue details

The {{form_type}} variable will show: "Contact Form", "Quote Request", "Career Application", or "Support Request"
*/
