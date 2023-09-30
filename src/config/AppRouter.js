import Task from "../components/Task"
import Login from "../components/Login"
import Signup from "../components/Signup"
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Protect from "../components/protect"
export default function AppRouter(){
    return(
        <>
    <Router>
        <Routes>
            <Route path="/" element={<Protect  Screen={Task}  />}  />
            <Route path="login" element={<Login/>}  />
            <Route path="signup" element={<Signup/>}  />

        </Routes>
    </Router>
        </>
    )
}