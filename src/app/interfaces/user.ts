export interface User {
  id: number,
  name: string,
  surname: string,
  email: string,
  courses: number[], 
  userType: 'admin' | 'student' | 'teacher'
}