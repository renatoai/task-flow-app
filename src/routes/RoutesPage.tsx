import { Routes, Route } from "react-router";
import Page from "../modules/projects/Page";
import Dashboard from "../modules/dashboard/Page";
import Layout from "../layout/Layout";
import ProjectView from "../modules/projects/ProjectView";

export default function RoutesPage() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Dashboard />} />
                <Route path="projects" element={<Page />} />
                <Route path="projects/details" element={<ProjectView />} />
                <Route path="services" element={<Dashboard />} />
            </Route>

            {/* <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route path="concerts">
                <Route index element={<ConcertsHome />} />
                <Route path=":city" element={<City />} />
                <Route path="trending" element={<Trending />} />
            </Route> */}
        </Routes>
    )
}