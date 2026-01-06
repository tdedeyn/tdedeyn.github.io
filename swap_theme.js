// document.getElementById("theme").addEventListener('click', () => {
//       const isLightOrDark = (getComputedStyle(document.body).getPropertyValue('background').includes('rgb(243')) ? 'dark' : 'light';
//       document.body.style.setProperty('color-scheme', isLightOrDark);
//     });
//     /*
//       Browser's like Chrome should automatically switch the theme.
//       But if you need to do things on the theme switching, you can
//       catch it with the following.
//     */
//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
//       /* const isLightOrDark = (event.matches) ? 'dark' : 'light';
//       document.body.style.setProperty('color-scheme', isLightOrDark); */
//       console.log("System theme changed to: " + isLightOrDark);
//     });

const themeButton = document.getElementById('theme');

let isLightOrDark = (getComputedStyle(document.body).getPropertyValue('background').includes('rgb(243')) ? 'light' : 'dark';
document.body.style.setProperty('color-scheme', isLightOrDark);

if (isLightOrDark == "dark") {
  themeButton.textContent = '☀️';
} else {
  themeButton.textContent = '🌒';
}

themeButton.addEventListener('click', function () {
  // console.log(document.body.style.contains('dark'));
  if (isLightOrDark == "dark") {
    isLightOrDark = "light";
    themeButton.textContent = '🌒';
  } else {
    isLightOrDark = "dark";
    themeButton.textContent = '☀️';
  }
  document.body.style.setProperty('color-scheme', isLightOrDark);
});