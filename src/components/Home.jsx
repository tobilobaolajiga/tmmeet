import NavBar from './NavBar';
import Hero from './Hero';

export default function Home({
  showLogin,
  closeLogin,
  showOptions,
  closeOptions,
  options,
  setOptions,
  login,
}) {
  return (
    <div>
      <NavBar
        showLogin={showLogin}
        closeLogin={closeLogin}
        login={login}
        closeOptions={closeOptions}
      />
      <Hero
        showLogin={showLogin}
        closeLogin={closeLogin}
        showOptions={showOptions}
        closeOptions={closeOptions}
        options={options}
        setOptions={setOptions}
        login={login}
      />
    </div>
  );
}
