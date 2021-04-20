export interface Course {
  _id?: any;
  id: string | number;
  courseName: string;
  credits: number;
  lecturer: string;
  noOfStudents: number;
  startDate?: string;
  noOfWeeks?: number;
  lastUpdated?: string;
  description?: string;
}
