export const APP_NAME = "AutoApply"
export const APP_DESCRIPTION = "AutoApply is an AI-powered job application platform"
export const APP_URL = "https://autoapply.com"

export const APP_AUTHOR_URL = "https://autoapply.com"


export const signInDefaultValues = {
    email: '',
    password: '',
  }
  
  export const signUpDefaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }


  export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(', ')
  : ['admin', 'user']