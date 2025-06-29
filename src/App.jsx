import Header from './components/Header/Header';


const App = ({ toggleTheme, isDark}) => {

  return (
    <>
    <Header toggleTheme={toggleTheme} isDark={isDark}/>
    </>
  )
}

export default App
