import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { Auth } from "./pages/auth/Auth"
import { Home } from "./pages/home/Home"
import { NewWorkout } from "./pages/new-workout/NewWorkout"
import { NotFound } from "./pages/notFound/NotFound"
import { Profile } from "./pages/profile/Profile"
import { RequireAuth } from "./hoc/RequireAuth"
import { LayoutWrapper } from "./context/LayoutWrapper"
import { userContext } from "./context/FooContext"

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <LayoutWrapper title={"home"} height={"60%"}>
              <Home />
            </LayoutWrapper>
          }
        />
        <Route
          path='auth'
          element={
            <userContext.Provider value={"asd"}>
              <LayoutWrapper height={"55%"}>
                <Auth />
              </LayoutWrapper>
            </userContext.Provider>
          }
        />

        <Route
          path='new-workout'
          element={
            <RequireAuth>
              <LayoutWrapper height={"30%"}>
                <NewWorkout />
              </LayoutWrapper>
            </RequireAuth>
          }
        />
        <Route
          path='profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
