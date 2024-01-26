
import './App.css';
import MusicUploadForm from './components/music_upload/MusicUploadForm';
import SongList from './pages/song_list/SongList';

function App() {
  return (
    <div className="App">
      <SongList />
      <MusicUploadForm />
    </div>
  );
}

export default App;
