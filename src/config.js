const COLORS = ['#FFEBEE', '#FCE4EC', '#F3E5F5', '#EDE7F6', '#E8EAF6', '#E3F2FD', '#E1F5FE',
                '#E0F7FA', '#E0F2F1', '#E8F5E9', '#F1F8E9', '#F9FBE7', '#FFFDE7', '#FFF8E1',
                '#FFF3E0', '#FBE9E7', '#EFEBE9', '#FAFAFA', '#ECEFF1']

export default {
  API: 'https://demo2837922.mockable.io/kickstarter',
  KICK_URL: 'https://www.kickstarter.com/',
  CURRENCY: {
    'usd': '$',
    'cad': 'C$',
    'gbp': '£',
    'aud': 'A$',
    'chf': 'CHF',
    'eur': '€',
  },
  COUNTRY: {
    'US': 'United States',
    'CA': 'Canada',
    'RW': 'Rwanda',
    'FR': 'France',
    'GB': 'Great Britain',
    'AU': 'Australia',
    'CH': 'Switzerland',
    'CN': 'China'
  },
  COLOR: () => {
    return COLORS[Math.floor(Math.random()*COLORS.length)]
  },
  TIME_SINCE: (date) => {

    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  };
