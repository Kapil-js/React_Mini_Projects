// import CurrencyConvertor from './CurrencyConvertor/Page'
// import PasswordGenrator from './PasswordGenrator/Page'

import { useEffect, useState } from 'react'
import { ThemeProvider } from './ThemeSwitcher/contexts/theme'
import ThemeButton from './ThemeSwitcher/components/ThemeButton'
import Card from './ThemeSwitcher/components/Card'

// import UserContextProvider from './ContextApi/UserContextProvider'
// import Login from './components/ContextCompo/Login'
// import Profile from './components/ContextCompo/Profile'

function App () {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])







  return (
    <>
      {/* <PasswordGenrator /> */}
      {/* <CurrencyConvertor /> */}
      {/* <div
        className='contextapi'
        style={{
          backgroundColor: '#282828',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
          height: '100vh'
        }}
      >
        <UserContextProvider>
          <h1>Hello World</h1>
          <Login />
          <Profile />
        </UserContextProvider>
      </div> */}

      {/* <h1>Hello World</h1> */}

      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className='theme_app_ui'>
          <div className='flex flex-wrap min-h-screen items-center'>
            <div className='w-full'>
              <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
                <ThemeButton />
              </div>

              <div className='w-full max-w-sm mx-auto'>
                <Card />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
