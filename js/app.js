const createToast = (message, type = 'success') => {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  switch (type) {
    case 'success':
      toast.classList.add('style-green');
      break;
    case 'warning':
      toast.classList.add('style-yellow');
      break;
    case 'error':
      toast.classList.add('style-red');
      break;
  }
  toast.innerHTML = `<p class="toast-message">${message}</p>`;
  const container = document.getElementById('container');
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 1000);
};

const formatSnippet = (text) => {
  // remove the first tab
  return text
    .split('\n')
    .map((line) => line.replace(/^\t/, ''))
    .join('\n');
};

const replaceTabs = (text) => {
  // replace a tab by 4 spaces
  return text.replace(/\t/g, '    ');
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    createToast('Failed to copy to clipboard', 'error');
  }
};

// const btnFormat = document.querySelector('#format');
// btnFormat.addEventListener('click', () => {
//   const code = document.getElementById('code');
//   code.value = formatSnippet(code.value);
//   copyToClipboard(code.value);
//   createToast('Code formatted & copied to clipboard');
// });

const btnReplaceTab = document.querySelector('#replaceTab');
btnReplaceTab.addEventListener('click', () => {
  const code = document.getElementById('code');
  code.value = replaceTabs(code.value);
  copyToClipboard(code.value);
  createToast('Tabs replaced & copied to clipboard');
});

const btnFormatReplaceTabs = document.querySelector('#formatReplaceTabs');
btnFormatReplaceTabs.addEventListener('click', () => {
  const code = document.getElementById('code');
  code.value = formatSnippet(code.value);
  code.value = replaceTabs(code.value);
  copyToClipboard(code.value);
  createToast('Tabs replaced & formatted & copied to clipboard');
});
