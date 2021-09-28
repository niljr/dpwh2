// env config
export const API_CONFIG = {
    API_URL: process.env.REACT_APP_API_HOST,
    // oAuthService: 'oauth2-service/',
    CLIENT_CREDENTIALS_INTERNAL: process.env.REACT_APP_CLIENT_CREDENTIALS_INTERNAL
};

// keys for localstorage
export const STORAGE_KEY = {
    ACCESS_TOKEN: 'oldst_accesstoken',
    SIDEBAR_STATE: 'sidebar-state'
};

// WEBFONT config
export const WEBFONT_CONFIG = {
    google: {
        families: [
            'Poppins:300',
            'Poppins:400',
            'Poppins:500',
            'Poppins:600',
            'Poppins:700',
            'Poppins:800',
            'Poppins:900'
        ]
    }
};

export const colorBrandActive = '#0069e6';
export const colorBrandGreen = '#25b862';
