import { PostContainer } from "./context/postContext";
import { PostForm, HomePage, NotFoundPage } from "./pages/index";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostContainer>
      </div>
    </div>
  )
}
export default App;