import { PostForm, HomePage, NotFoundPage } from "./pages/index";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 bg-red-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}
export default App;