const copyData = (btnSelector, dataSelector) => {

  const btn = document.querySelector(btnSelector);
  const data = document.querySelector(dataSelector).innerHTML;
 

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(data);
    } catch (e) {}
  }

  btn.addEventListener('click',copyContent);
  
};

export default copyData;