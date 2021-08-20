const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchThemeBtn = document.querySelector('.theme-switch__toggle');
let currentTheme = localStorage.getItem('currentTheme') || Theme.LIGHT;

switchThemeBtn.addEventListener('change', switchTheme);

changeTheme(currentTheme);

if (localStorage.getItem('currentTheme') === Theme.DARK) switchThemeBtn.checked = true;

function switchTheme() {
  if (currentTheme === Theme.LIGHT) {
    changeTheme(Theme.DARK);
    return;
  }
  changeTheme(Theme.LIGHT);
}

function changeTheme(theme) {
    document.body.classList.remove(currentTheme);
    currentTheme = theme;
    document.body.classList.add(currentTheme);
    localStorage.setItem('currentTheme', currentTheme);
}
