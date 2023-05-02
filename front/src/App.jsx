import { Route, Routes } from 'react-router-dom'

import { Auth } from './pages/auth/Auth'
import { ExerciseLogs } from './pages/exerciseLog/ExerciseLogs'
import { Home } from './pages/home/Home'
import { NewExericse } from './pages/new-exercise/NewExericse'
import { NewWorkout } from './pages/new-workout/NewWorkout'
import { NotFound } from './pages/notFound/NotFound'
import { Profile } from './pages/profile/Profile'
import { WorkoutList } from './pages/workouts/WorkoutList'
import { WorkoutLog } from './pages/workouts/wokoutLog/WorkoutLogList'

import { Layout } from './components/layout/Layout'

import { RequireAuth } from './hoc/RequireAuth'

import { LayoutWrapper } from './context/LayoutWrapper'

export function App() {
  function workoutLogTitle(title) {
    return title
  }

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
              <LayoutWrapper height={'63%'} title={'create new workout'} bgImage={'/workout.jpg'}>
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

        <Route path='WorkoutLogs/'>
          <Route
            index
            element={
              <RequireAuth>
                <LayoutWrapper height={'90%'} title={'workouts'}>
                  <WorkoutList />
                </LayoutWrapper>
              </RequireAuth>
            }
          />
          <Route
            path=':id'
            element={
              <RequireAuth>
                <LayoutWrapper title={workoutLogTitle()}>
                  <WorkoutLog workoutLogTitle={workoutLogTitle} />
                </LayoutWrapper>
              </RequireAuth>
            }
          />
        </Route>
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
        <Route
          path='exercise/:id'
          element={
            <RequireAuth>
              <LayoutWrapper height={'50%'}>
                <ExerciseLogs />
              </LayoutWrapper>
            </RequireAuth>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
