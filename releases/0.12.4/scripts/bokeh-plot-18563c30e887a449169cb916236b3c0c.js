(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("d877f30c-8d31-49de-8952-a70cdd009f03");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd877f30c-8d31-49de-8952-a70cdd009f03' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"41b488d2-4697-4533-b95b-9ff06c01a6c4":{"roots":{"references":[{"attributes":{"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e501598-ba0c-43b4-8d9c-a4e3c5fa4f90","type":"BasicTicker"}},"id":"ef4cb0fd-b9df-41ee-a15c-15cd82ae3181","type":"Grid"},{"attributes":{"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"}},"id":"175d4c8a-d492-4a34-8ebe-d28b7e1e128a","type":"PanTool"},{"attributes":{},"id":"15739536-28cb-4edd-97a8-2fecb195289f","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"f12d12ed-d73e-4b56-810e-144782e72ff5","type":"LinearAxis"}],"left":[{"id":"283e64dc-cf97-4c7f-9e7d-35ead64f168e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f12d12ed-d73e-4b56-810e-144782e72ff5","type":"LinearAxis"},{"id":"ef4cb0fd-b9df-41ee-a15c-15cd82ae3181","type":"Grid"},{"id":"283e64dc-cf97-4c7f-9e7d-35ead64f168e","type":"LinearAxis"},{"id":"ebc841fa-20e5-4af0-a686-9a7bea156c61","type":"Grid"},{"id":"dfcd4227-5c12-4047-a6f4-4e2df1d90e02","type":"BoxAnnotation"},{"id":"6b4c6261-788b-4973-bf48-e8c8ec82d38e","type":"GlyphRenderer"}],"title":{"id":"79743341-ecd5-4ea2-84a9-da4e51832267","type":"Title"},"tool_events":{"id":"12f5be1d-b171-4645-a1ae-64822e0b9b3e","type":"ToolEvents"},"toolbar":{"id":"2aa72c42-158b-4e75-a283-ce6db7c1c2f2","type":"Toolbar"},"x_range":{"id":"ee7b3c74-8812-4fe8-9e40-ad184a6f03aa","type":"Range1d"},"y_range":{"id":"906d561b-e012-4022-9c39-8d777a792c8a","type":"Range1d"}},"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"dfcd4227-5c12-4047-a6f4-4e2df1d90e02","type":"BoxAnnotation"},"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"}},"id":"337f6372-373d-462e-9ef3-bac2e995ebc2","type":"BoxZoomTool"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"072a98dd-2897-42f2-8086-ff6d0463a78d","type":"ImageRGBA"},{"attributes":{"callback":null,"column_names":["x","image","y","dh","dw"],"data":{"dh":[10],"dw":[10],"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}],"x":[0],"y":[0]}},"id":"949d0a96-e696-462b-8c7d-f0059e38a21c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"}},"id":"67dd3eb8-23b9-45b7-a546-d3c5076c33bd","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"79743341-ecd5-4ea2-84a9-da4e51832267","type":"Title"},{"attributes":{},"id":"a23834b4-a936-4192-83ba-9016369db49d","type":"BasicTickFormatter"},{"attributes":{},"id":"12f5be1d-b171-4645-a1ae-64822e0b9b3e","type":"ToolEvents"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"81556892-93c2-441b-89a5-b7b28a30acd0","type":"ImageRGBA"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dfcd4227-5c12-4047-a6f4-4e2df1d90e02","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"}},"id":"f8afd3c0-6ae3-49c7-a037-af1169677347","type":"SaveTool"},{"attributes":{"formatter":{"id":"15739536-28cb-4edd-97a8-2fecb195289f","type":"BasicTickFormatter"},"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac7bad4d-b46d-4403-b0d3-98db2f9fb614","type":"BasicTicker"}},"id":"283e64dc-cf97-4c7f-9e7d-35ead64f168e","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"906d561b-e012-4022-9c39-8d777a792c8a","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"175d4c8a-d492-4a34-8ebe-d28b7e1e128a","type":"PanTool"},{"id":"2c6c9f9e-c335-4905-b3e5-abef613b76e5","type":"WheelZoomTool"},{"id":"337f6372-373d-462e-9ef3-bac2e995ebc2","type":"BoxZoomTool"},{"id":"f8afd3c0-6ae3-49c7-a037-af1169677347","type":"SaveTool"},{"id":"395d4359-1145-48e1-b1aa-3da55a87049a","type":"ResetTool"},{"id":"67dd3eb8-23b9-45b7-a546-d3c5076c33bd","type":"HelpTool"}]},"id":"2aa72c42-158b-4e75-a283-ce6db7c1c2f2","type":"Toolbar"},{"attributes":{},"id":"ac7bad4d-b46d-4403-b0d3-98db2f9fb614","type":"BasicTicker"},{"attributes":{"data_source":{"id":"949d0a96-e696-462b-8c7d-f0059e38a21c","type":"ColumnDataSource"},"glyph":{"id":"81556892-93c2-441b-89a5-b7b28a30acd0","type":"ImageRGBA"},"hover_glyph":null,"nonselection_glyph":{"id":"072a98dd-2897-42f2-8086-ff6d0463a78d","type":"ImageRGBA"},"selection_glyph":null},"id":"6b4c6261-788b-4973-bf48-e8c8ec82d38e","type":"GlyphRenderer"},{"attributes":{},"id":"1e501598-ba0c-43b4-8d9c-a4e3c5fa4f90","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a23834b4-a936-4192-83ba-9016369db49d","type":"BasicTickFormatter"},"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e501598-ba0c-43b4-8d9c-a4e3c5fa4f90","type":"BasicTicker"}},"id":"f12d12ed-d73e-4b56-810e-144782e72ff5","type":"LinearAxis"},{"attributes":{"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"}},"id":"2c6c9f9e-c335-4905-b3e5-abef613b76e5","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":10},"id":"ee7b3c74-8812-4fe8-9e40-ad184a6f03aa","type":"Range1d"},{"attributes":{"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"}},"id":"395d4359-1145-48e1-b1aa-3da55a87049a","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac7bad4d-b46d-4403-b0d3-98db2f9fb614","type":"BasicTicker"}},"id":"ebc841fa-20e5-4af0-a686-9a7bea156c61","type":"Grid"}],"root_ids":["621a8b21-82ae-4f1e-a33a-5ebb2cb85219"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"41b488d2-4697-4533-b95b-9ff06c01a6c4","elementid":"d877f30c-8d31-49de-8952-a70cdd009f03","modelid":"621a8b21-82ae-4f1e-a33a-5ebb2cb85219"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
