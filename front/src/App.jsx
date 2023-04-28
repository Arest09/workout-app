import { Route, Routes } from 'react-router-dom'

import { Auth } from './pages/auth/Auth'
import { Home } from './pages/home/Home'
import { NewExericse } from './pages/new-exercise/NewExericse'
import { NewWorkout } from './pages/new-workout/NewWorkout'
import { NotFound } from './pages/notFound/NotFound'
import { Profile } from './pages/profile/Profile'

import { Layout } from './components/layout/Layout'

import { RequireAuth } from './hoc/RequireAuth'

import { LayoutWrapper } from './context/LayoutWrapper'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <LayoutWrapper title={'home'} height={'60%'}>
              <RequireAuth>
                <Home />
              </RequireAuth>
            </LayoutWrapper>
          }
        />
        <Route
          path='auth'
          element={
            <LayoutWrapper height={'55%'} title={'sign in'}>
              <Auth />
            </LayoutWrapper>
          }
        />
        <Route
          path='new-workout'
          element={
            <RequireAuth>
              <LayoutWrapper height={'65%'} title={'create new workout'} bgImage={'/workout.jpg'}>
                <NewWorkout />
              </LayoutWrapper>
            </RequireAuth>
          }
        />
        <Route
          path='new-exercise'
          element={
            <RequireAuth>
              <LayoutWrapper height={'77%'} title={'create new exercise'}>
                <NewExericse />
              </LayoutWrapper>
            </RequireAuth>
          }
        />

        <Route
          path='workouts'
          element={
            <RequireAuth>
              <LayoutWrapper height={'55%'} title={'workouts'}>
                <NewWorkout />
              </LayoutWrapper>
            </RequireAuth>
          }
        />
        <Route
          path='profile'
          element={
            <RequireAuth>
              <LayoutWrapper height={'50%'}>
                <Profile />
              </LayoutWrapper>
            </RequireAuth>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
