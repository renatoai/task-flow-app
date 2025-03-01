import { Routes, Route } from "react-router";
import Page from "../admin/projects/Page";
import Dashboard from "../admin/dashboard/Page";
import Layout from "../layout/Layout";
import ProjectView from "../admin/projects/ProjectView";
import Tags from "../admin/tags/Tags";
import Profile from "../admin/profile/Profile";
import Login from "../admin/auth/Login";
import Register from "../admin/auth/Register";
import AuthLayout from "../admin/auth/AuthLayout";

export default function Root() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Dashboard />} />
                <Route path="projects" element={<Page />} />
                <Route path="projects/details" element={<ProjectView />} />
                <Route path="tags" element={<Tags />} />
                <Route path="profile" element={<Profile />} />

            </Route>

            <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            {/* 

            <Route path="concerts">
                <Route index element={<ConcertsHome />} />
                <Route path=":city" element={<City />} />
                <Route path="trending" element={<Trending />} />
            </Route> */}
        </Routes>
    )
}