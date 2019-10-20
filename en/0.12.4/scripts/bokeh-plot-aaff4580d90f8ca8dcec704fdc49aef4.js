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
      };var element = document.getElementById("054f2235-d07e-48a0-8564-d91d78f5ceae");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '054f2235-d07e-48a0-8564-d91d78f5ceae' but no matching script tag was found. ")
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
                var docs_json = {"562b6401-1134-4654-bc33-d130c984423e":{"roots":{"references":[{"attributes":{"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"}},"id":"4c1cc13d-25cd-4996-bdab-0e7fdc239366","type":"PanTool"},{"attributes":{},"id":"271ba54b-c454-44a6-aceb-cc6b8b26a539","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"6d6b3d1e-c9dc-4959-a4e9-99d718070601","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4c1cc13d-25cd-4996-bdab-0e7fdc239366","type":"PanTool"},{"id":"f63c1696-1e15-447d-86df-ca46ef24b114","type":"WheelZoomTool"},{"id":"32cdb4f4-fd9d-45d2-b602-4e3bbaf155e1","type":"BoxZoomTool"},{"id":"41569414-4c92-477e-a50a-bb5c01957a5c","type":"SaveTool"},{"id":"13b99efc-98b8-4cb4-92b7-10bb3111764d","type":"ResetTool"},{"id":"62930cd2-a7c5-40b9-a6c7-b787b0c2ace8","type":"HelpTool"}]},"id":"0f3cc2cf-ffc0-45ea-8fb4-4dac489ffb1e","type":"Toolbar"},{"attributes":{"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"}},"id":"13b99efc-98b8-4cb4-92b7-10bb3111764d","type":"ResetTool"},{"attributes":{},"id":"8686efd6-2dd7-4dca-8ec5-cd9398da510d","type":"BasicTicker"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"b719d71b-40b9-49be-a005-2606410953d3","type":"ImageRGBA"},{"attributes":{"plot":null,"text":""},"id":"c4da9496-dec8-4a68-86e3-54cebb68de5c","type":"Title"},{"attributes":{"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"}},"id":"62930cd2-a7c5-40b9-a6c7-b787b0c2ace8","type":"HelpTool"},{"attributes":{},"id":"d026631b-5836-4837-a445-221e469cb507","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f6a85dc7-97e1-46f4-8c77-b404b2c03b2f","type":"ColumnDataSource"},"glyph":{"id":"70e93969-f918-44bb-858e-c7ccf2eda6f5","type":"ImageRGBA"},"hover_glyph":null,"nonselection_glyph":{"id":"b719d71b-40b9-49be-a005-2606410953d3","type":"ImageRGBA"},"selection_glyph":null},"id":"81a62088-4bce-4566-9147-bcbe2793a739","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"271ba54b-c454-44a6-aceb-cc6b8b26a539","type":"BasicTickFormatter"},"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d026631b-5836-4837-a445-221e469cb507","type":"BasicTicker"}},"id":"2985e372-5eba-475b-be8f-6133e3c53275","type":"LinearAxis"},{"attributes":{"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"},"ticker":{"id":"8686efd6-2dd7-4dca-8ec5-cd9398da510d","type":"BasicTicker"}},"id":"77992bae-c7d3-4363-b143-80174a07542c","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"534e5511-70ce-4c82-be31-828bea7e6c6b","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"},"ticker":{"id":"d026631b-5836-4837-a445-221e469cb507","type":"BasicTicker"}},"id":"9283bc88-59ac-4cc3-aeac-febd3100a322","type":"Grid"},{"attributes":{"callback":null,"end":10},"id":"4701e642-c738-466a-8487-87acaab31006","type":"Range1d"},{"attributes":{"formatter":{"id":"3fd3d4d5-43fa-4d02-978b-8bddc89bbf2c","type":"BasicTickFormatter"},"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"},"ticker":{"id":"8686efd6-2dd7-4dca-8ec5-cd9398da510d","type":"BasicTicker"}},"id":"684fd7fd-3661-4a6b-b968-c873afe42861","type":"LinearAxis"},{"attributes":{"overlay":{"id":"534e5511-70ce-4c82-be31-828bea7e6c6b","type":"BoxAnnotation"},"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"}},"id":"32cdb4f4-fd9d-45d2-b602-4e3bbaf155e1","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"}},"id":"41569414-4c92-477e-a50a-bb5c01957a5c","type":"SaveTool"},{"attributes":{"plot":{"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"}},"id":"f63c1696-1e15-447d-86df-ca46ef24b114","type":"WheelZoomTool"},{"attributes":{},"id":"3fd3d4d5-43fa-4d02-978b-8bddc89bbf2c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["image"],"data":{"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}]}},"id":"f6a85dc7-97e1-46f4-8c77-b404b2c03b2f","type":"ColumnDataSource"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"70e93969-f918-44bb-858e-c7ccf2eda6f5","type":"ImageRGBA"},{"attributes":{},"id":"7637eeaf-5d97-4e40-8958-1e8afd0a0378","type":"ToolEvents"},{"attributes":{"below":[{"id":"684fd7fd-3661-4a6b-b968-c873afe42861","type":"LinearAxis"}],"left":[{"id":"2985e372-5eba-475b-be8f-6133e3c53275","type":"LinearAxis"}],"renderers":[{"id":"684fd7fd-3661-4a6b-b968-c873afe42861","type":"LinearAxis"},{"id":"77992bae-c7d3-4363-b143-80174a07542c","type":"Grid"},{"id":"2985e372-5eba-475b-be8f-6133e3c53275","type":"LinearAxis"},{"id":"9283bc88-59ac-4cc3-aeac-febd3100a322","type":"Grid"},{"id":"534e5511-70ce-4c82-be31-828bea7e6c6b","type":"BoxAnnotation"},{"id":"81a62088-4bce-4566-9147-bcbe2793a739","type":"GlyphRenderer"}],"title":{"id":"c4da9496-dec8-4a68-86e3-54cebb68de5c","type":"Title"},"tool_events":{"id":"7637eeaf-5d97-4e40-8958-1e8afd0a0378","type":"ToolEvents"},"toolbar":{"id":"0f3cc2cf-ffc0-45ea-8fb4-4dac489ffb1e","type":"Toolbar"},"x_range":{"id":"4701e642-c738-466a-8487-87acaab31006","type":"Range1d"},"y_range":{"id":"6d6b3d1e-c9dc-4959-a4e9-99d718070601","type":"Range1d"}},"id":"77f1a48c-6300-4be4-8444-de42d87b378d","subtype":"Figure","type":"Plot"}],"root_ids":["77f1a48c-6300-4be4-8444-de42d87b378d"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"562b6401-1134-4654-bc33-d130c984423e","elementid":"054f2235-d07e-48a0-8564-d91d78f5ceae","modelid":"77f1a48c-6300-4be4-8444-de42d87b378d"}];
                
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
