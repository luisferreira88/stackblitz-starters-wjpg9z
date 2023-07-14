import * as React from 'react';
import './course-card.css';
import { Course } from './course.model';

interface CourseCardProps {
  courseValue: Course;
}

export const CourseCard = (props: CourseCardProps) => {
  return (
    <div className="course-card card-shadow">
      <div className="course-card-img">
        <img src={props.courseValue.imageUrl} alt="img" />
      </div>
      <div className="course-card-body">
        <h3 className="course-card-title" title={props.courseValue.title}>
          {props.courseValue.title}
        </h3>
        <div className="course-card-description-wrapper">
          <p
            title={props.courseValue.description}
            className="course-card-description"
          >
            {props.courseValue.description}
          </p>
        </div>
        <div className="course-card-actions">
          <button className="course-card-button">Action Button</button>
        </div>
      </div>
    </div>
  );
};
