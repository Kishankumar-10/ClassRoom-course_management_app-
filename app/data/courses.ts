export interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: 'Pending' | 'Submitted' | 'Graded';
}

export interface Material {
  id: number;
  title: string;
  type: 'PDF' | 'Video' | 'Link';
  url: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  students: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  instructor: string;
  category: string;
  assignments?: Assignment[];
  materials?: Material[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Artificial Intelligence & ML',
    description: 'Learn the core concepts of AI and Machine Learning algorithms.',
    image: '/course-thumbnails/AiMi.png',
    rating: 4.8,
    reviews: 2340,
    students: 18200,
    level: 'Advanced',
    duration: '12 Weeks',
    lessons: 36,
    instructor: 'Dr. Michael Carter',
    category: 'AI & ML',
    assignments: [
      { id: 1, title: 'Neural Networks Basics', description: 'Implement a simple perceptron.', dueDate: '2024-03-20', status: 'Pending' },
      { id: 2, title: 'Linear Regression', description: 'Predict house prices using regression.', dueDate: '2024-03-15', status: 'Submitted' }
    ],
    materials: [
      { id: 1, title: 'Intro to Deep Learning PDF', type: 'PDF', url: '#' },
      { id: 2, title: 'TensorFlow Tutorial', type: 'Video', url: '#' }
    ]
  },
  {
    id: 2,
    title: 'Android App Development',
    description: 'Build professional Android apps using Kotlin and Jetpack Compose.',
    image: '/course-thumbnails/android-development.png',
    rating: 4.6,
    reviews: 1125,
    students: 12540,
    level: 'Intermediate',
    duration: '10 Weeks',
    lessons: 28,
    instructor: 'Prof. Emily Rodriguez',
    category: 'Android Development',
    assignments: [
      { id: 1, title: 'Layout Design', description: 'Create a complex XML layout.', dueDate: '2024-03-22', status: 'Pending' }
    ],
    materials: [
      { id: 1, title: 'Kotlin Syntax Guide', type: 'Link', url: '#' }
    ]
  },
  {
    id: 3,
    title: 'Business & Entrepreneurship',
    description: 'Master the skills to launch and grow your own successful business.',
    image: '/course-thumbnails/bussiness-entrepreneurship.png',
    rating: 4.4,
    reviews: 892,
    students: 9870,
    level: 'Beginner',
    duration: '8 Weeks',
    lessons: 20,
    instructor: 'Sophia Bennett',
    category: 'Business',
  },
  {
    id: 4,
    title: 'Cloud Computing',
    description: 'Understand cloud infrastructure, services, and deployment models.',
    image: '/course-thumbnails/cloud-computing.png',
    rating: 4.7,
    reviews: 1876,
    students: 15300,
    level: 'Advanced',
    duration: '14 Weeks',
    lessons: 40,
    instructor: 'Dr. Daniel Lee',
    category: 'Cloud Computing',
  },
  {
    id: 5,
    title: 'Cybersecurity Essentials',
    description: 'Protect systems and networks from digital attacks and threats.',
    image: '/course-thumbnails/cyberse-curity.png',
    rating: 4.5,
    reviews: 1032,
    students: 11400,
    level: 'Intermediate',
    duration: '10 Weeks',
    lessons: 30,
    instructor: 'Dr. Olivia Clarke',
    category: 'Cyber Security',
  },
  {
    id: 6,
    title: 'Database Management',
    description: 'Design, implement, and manage efficient relational databases.',
    image: '/course-thumbnails/database.png',
    rating: 4.3,
    reviews: 654,
    students: 7950,
    level: 'Beginner',
    duration: '6 Weeks',
    lessons: 18,
    instructor: 'Arjun Mehta',
    category: 'Database',
  },
  {
    id: 7,
    title: 'Data Structures & Algorithms',
    description: 'Master the fundamental building blocks of efficient programming.',
    image: '/course-thumbnails/dsa.png',
    rating: 4.7,
    reviews: 1540,
    students: 12800,
    level: 'Intermediate',
    duration: '10 Weeks',
    lessons: 32,
    instructor: 'Ethan Williams',
    category: 'Development',
  },
  {
    id: 8,
    title: 'Web Development (HTML/CSS)',
    description: 'Build responsive and modern websites from scratch.',
    image: '/course-thumbnails/html.png',
    rating: 4.6,
    reviews: 980,
    students: 11200,
    level: 'Beginner',
    duration: '8 Weeks',
    lessons: 24,
    instructor: 'Prof. Aisha Khan',
    category: 'Development',
  },
  {
    id: 9,
    title: 'Python Programming',
    description: 'Learn Python for software development, data analysis, and more.',
    image: '/course-thumbnails/python.png',
    rating: 4.9,
    reviews: 3105,
    students: 21780,
    level: 'Beginner',
    duration: '8 Weeks',
    lessons: 24,
    instructor: 'Dr. Michael Carter',
    category: 'Python',
  },
  {
    id: 10,
    title: 'UI/UX Design',
    description: 'Create intuitive and visually appealing user interfaces.',
    image: '/course-thumbnails/ui-ux.png',
    rating: 4.6,
    reviews: 1540,
    students: 13220,
    level: 'Intermediate',
    duration: '9 Weeks',
    lessons: 26,
    instructor: 'Sophia Bennett',
    category: 'UI/UX',
  },
];
