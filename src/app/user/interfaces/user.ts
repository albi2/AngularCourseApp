

export interface User {
  _id?: any,
  username: string,
  email: string,
  password: string,
  coursesIds: any[], 
  userType: 'admin' | 'student' | 'teacher',
}


