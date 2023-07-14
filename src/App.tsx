import * as React from 'react';
import { CourseCard } from './components/course-card';
import { Course } from './components/course.model';
import './style.css';

export default function App() {
  const courseExample: Course = {
    title: 'CURSO XPTO',
    description:
      'ad asjndkjd asd asd asd sad asd asd sad asd asd asd sad asd sad sad sad asd as das dsad asd asd asd sad asd sad asd sad asd asd sad asd asd sad asd asd asd asd asd asd asd asd asd asd asd asd asd asd sad asd asd asd bd jkasbd kasjd asd asd',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg',
  };

  return (
    <div>
      <CourseCard courseValue={courseExample} />
    </div>
  );
}
