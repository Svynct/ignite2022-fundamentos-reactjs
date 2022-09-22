import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'

const posts: Array<PostProps> = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://image.winudf.com/v2/image/Y29tLk5pZXJBdXRvbWF0YS51c2VmdWxtaW5kX3NjcmVlbl8wXzE1MjA4NjUzMjNfMDQx/screen-0.jpg?fakeurl=1&type=.webp',
      name: 'A2',
      role: 'YoRHa Soldier'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: '👉 jane.design / doctorcare'
      }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pinimg.com/474x/27/b8/af/27b8afe9ba3570b0561c71ab884e90ac.jpg',
      name: '2B',
      role: 'YoRHa Soldier'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: '👉 jane.design / doctorcare'
      }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
];

interface PostProps {
  id: number,
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  },
  content: Array<Content>;
  publishedAt: Date;
}

interface Content {
  type: 'paragraph' | 'link',
  content: string;
}

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}