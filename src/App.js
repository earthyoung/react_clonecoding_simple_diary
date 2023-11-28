import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    "id": 1,
    "author": "soyoung",
    "content": "hello",
    "emotion": 1,
    "created_date": new Date().getTime()
  },
  {
    "id": 2,
    "author": "earthyoung",
    "content": "I WANT YOU",
    "emotion": 4,
    "created_date": new Date().getTime()
  },
  {
    "id": 3,
    "author": "ksy",
    "content": "LOL",
    "emotion": 5,
    "created_date": new Date().getTime()
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
