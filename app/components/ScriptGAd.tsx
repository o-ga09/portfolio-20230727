import Script from 'next/script'

export const ScriptGAd = () => {
  return (
    <Script 
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5172485903469849' 
        crossOrigin='anonymous'
    />
  );
};
export default ScriptGAd;