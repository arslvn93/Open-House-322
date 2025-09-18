const config = {
  "property": {
    "streetAddress": "1441 23 Street SW",
    "city": "Calgary",
    "cityStateZip": "Calgary, AB T3C 1H5",
    "heroSubtitle": "Close to downtown, oversized front attached garage, and located in an incredible neighbourhood. Register to receive the full Home & Neighbourhood Info Package, floor plan, and more.",
    "backgroundImageUrl": "https://static01.nyt.com/images/2017/09/24/realestate/24OMT-TORONTO-slide-NFYL/24OMT-TORONTO-slide-NFYL-articleLarge-v2.jpg"
  },
  "realtor": {
    "fullName": "Eric Palin",
    "title": "REALTOR®",
    "phone": "14035596847",
    "email": "eric.l.palin@gmail.com",
    "bio": "",
    "photoUrl": "",
    "social": {
      "facebook": "https://www.facebook.com/share/1CWf7o8URQ/?mibextid=LQQJ4d",
      "instagram": "https://instagram.com/@ericpalinyyc"
    }
  },
  "brokerage": {
    "name": "RE/MAX",
    "logoUrl": "",
    "address": ""
  },
  "openHouse": {
    "eventDate": "2025-09-17",
    "secondEventDate": "2025-09-21",
    "bundleItems": [
      {
        "icon": "fas fa-link",
        "text": "Property Listing"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Eric Palin Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": ""
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        {
          "value": "committed",
          "text": "Yes, I'm committed to an agent."
        },
        {
          "value": "not_committed",
          "text": "No, I'm not committed to an agent."
        },
        {
          "value": "gathering_info",
          "text": "Just gathering information at this stage."
        }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        {
          "value": "very_interested",
          "text": "Very interested, actively looking."
        },
        {
          "value": "somewhat_interested",
          "text": "Somewhat interested, keeping options open."
        },
        {
          "value": "just_browsing",
          "text": "Just browsing for now."
        }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        {
          "value": "resident_explorer",
          "text": "I live here and love exploring locally."
        },
        {
          "value": "considering_move",
          "text": "I'm considering moving to this area."
        },
        {
          "value": "just_visiting",
          "text": "Just visiting for the open house."
        }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        {
          "value": "design_layout",
          "text": "The design and layout."
        },
        {
          "value": "location_neighborhood",
          "text": "The location and neighborhood."
        },
        {
          "value": "home_price",
          "text": "The price of the home."
        }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-322",
    "repoUrl": "https://github.com/arslvn93/Open-House-322",
    "netlifyUrl": "",
    "tag": ""
  }
};