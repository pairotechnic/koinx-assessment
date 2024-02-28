import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {

      // Check if the script already exists in the DOM
      const existingScript = document.getElementById('tradingview-widget-script');
      if (existingScript) return; // If the script exists, do nothing

      const script = document.createElement("script");
      script.id = 'tradingview-widget-script'; // Assign an ID to the script for future reference
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(241, 194, 50, 0.06)",
          "hide_top_toolbar": false,
          "range": "5D",
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);

      // After the script has loaded, override the height
      const overrideHeight = () => {
        const widgetContainer = document.querySelector('.tradingview-widget-container');
        if (widgetContainer) {
          widgetContainer.style.height = '711px';
        }
      };

      // Wait for the script to load and then override the height
      setTimeout(overrideHeight, 2000); // Adjust the timeout as needed

    }, []);

  return (
    <div className="tradingview-widget-container " ref={container} style={{ height: "711px", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
    </div>
  );
}

export default memo(TradingViewWidget);


