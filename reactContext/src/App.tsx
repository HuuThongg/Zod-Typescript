import { createContext, useContext, useState,PropsWithChildren } from 'react';

import './App.css'

const ThemeContext = createContext<string | null>("dark")

function App() {
  const [theme, setTheme] = useState<string>('dark');
  return (
    <ThemeContext.Provider value={theme}>

      <div className="App">
        <Form/>
        <Button onClick={() => {
          setTheme('light');
        }}>
          Switch to light theme
        </Button>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

type PanelProps={
  title:string,
  children: React.ReactNode
}

function Panel({ title, children } :PanelProps) {
  const theme = useContext(ThemeContext);
  console.log(theme)
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  const theme = useContext(ThemeContext);
  console.log( theme);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
