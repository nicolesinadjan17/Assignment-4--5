import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { StudentService } from './student.service';
  import { Student } from './student.entity';
  
  @Controller('students')
  export class StudentController {
    constructor(private readonly studentService: StudentService) {}


    @Get()
    async findAll(): Promise<Student[]> {
      return await this.studentService.findAll();
    }
      
  
    @Post()
    async create(@Body() student: Partial<Student>): Promise<Student> {
      return await this.studentService.create(student);
    }
  

  }
  
