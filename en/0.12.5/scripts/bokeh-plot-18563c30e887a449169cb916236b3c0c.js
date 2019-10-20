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
      };var element = document.getElementById("a15c7daf-0ce4-453f-b7eb-28a2bc38ae3b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a15c7daf-0ce4-453f-b7eb-28a2bc38ae3b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"56cdc15d-869b-41bf-8dd4-ed5f921de69b":{"roots":{"references":[{"attributes":{"below":[{"id":"7c6ec933-b95e-4648-8f34-63f109911718","type":"LinearAxis"}],"left":[{"id":"db66c2aa-7ac7-491a-85fa-bda8d7bfb7da","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7c6ec933-b95e-4648-8f34-63f109911718","type":"LinearAxis"},{"id":"398e7d12-7731-427c-81df-bc2f0e0d2a10","type":"Grid"},{"id":"db66c2aa-7ac7-491a-85fa-bda8d7bfb7da","type":"LinearAxis"},{"id":"8771c3df-9c13-4ca4-ba0b-66c1a31437ad","type":"Grid"},{"id":"55ab2612-664c-46de-b6cf-10b922d8eb30","type":"BoxAnnotation"},{"id":"c6b74e8c-5d9c-4bb8-baa1-5a9d559143fb","type":"GlyphRenderer"}],"title":{"id":"d706cde3-43d4-4545-977c-33b5fe23d466","type":"Title"},"tool_events":{"id":"ee4e8df1-038a-45c1-a64c-13c228a9002d","type":"ToolEvents"},"toolbar":{"id":"5e6ea8e9-58eb-49e4-8a49-44511590b03a","type":"Toolbar"},"x_range":{"id":"32017dd6-b648-4b83-85ed-780633884c15","type":"Range1d"},"y_range":{"id":"767754e2-7f58-44d0-9d5a-6f7e8f960824","type":"Range1d"}},"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"}},"id":"e01fdda3-a157-44c2-addc-5db233f72cfd","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"}},"id":"84dd7fc9-fbe6-4386-ba13-561f523befe6","type":"ResetTool"},{"attributes":{},"id":"0e243781-4316-4c7b-afea-5d38ba71efbb","type":"BasicTicker"},{"attributes":{},"id":"ee4e8df1-038a-45c1-a64c-13c228a9002d","type":"ToolEvents"},{"attributes":{"data_source":{"id":"9e4ecffa-9507-413c-bc46-61ce431ba606","type":"ColumnDataSource"},"glyph":{"id":"f9b88b1b-c90f-41bf-a41c-9aa6438054c5","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8257c805-a7b3-49cd-89e8-0a6425e602e7","type":"ImageRGBA"},"selection_glyph":null},"id":"c6b74e8c-5d9c-4bb8-baa1-5a9d559143fb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e243781-4316-4c7b-afea-5d38ba71efbb","type":"BasicTicker"}},"id":"398e7d12-7731-427c-81df-bc2f0e0d2a10","type":"Grid"},{"attributes":{},"id":"ce6f11cc-48b2-443b-95c1-4a44353fb119","type":"BasicTicker"},{"attributes":{"overlay":{"id":"55ab2612-664c-46de-b6cf-10b922d8eb30","type":"BoxAnnotation"},"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"}},"id":"48c07b9c-be9a-4a58-9c7a-a6b18bbac2e9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"}},"id":"087208bc-1b01-4a48-a5b1-f1b58a3d5d84","type":"HelpTool"},{"attributes":{"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"}},"id":"011e271c-9cec-452b-bac0-2a22370d2214","type":"SaveTool"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f9b88b1b-c90f-41bf-a41c-9aa6438054c5","type":"ImageRGBA"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8257c805-a7b3-49cd-89e8-0a6425e602e7","type":"ImageRGBA"},{"attributes":{"callback":null,"end":10},"id":"767754e2-7f58-44d0-9d5a-6f7e8f960824","type":"Range1d"},{"attributes":{"formatter":{"id":"c78ba18c-ec95-4478-838b-002b65fcab1b","type":"BasicTickFormatter"},"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce6f11cc-48b2-443b-95c1-4a44353fb119","type":"BasicTicker"}},"id":"db66c2aa-7ac7-491a-85fa-bda8d7bfb7da","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"55ab2612-664c-46de-b6cf-10b922d8eb30","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"fd6d96a4-5c26-43f2-ae27-d4aecd71230c","type":"BasicTickFormatter"},"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e243781-4316-4c7b-afea-5d38ba71efbb","type":"BasicTicker"}},"id":"7c6ec933-b95e-4648-8f34-63f109911718","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0908cbfb-c2d7-4853-b841-e5190fbf3ad7","type":"PanTool"},{"id":"e01fdda3-a157-44c2-addc-5db233f72cfd","type":"WheelZoomTool"},{"id":"48c07b9c-be9a-4a58-9c7a-a6b18bbac2e9","type":"BoxZoomTool"},{"id":"011e271c-9cec-452b-bac0-2a22370d2214","type":"SaveTool"},{"id":"84dd7fc9-fbe6-4386-ba13-561f523befe6","type":"ResetTool"},{"id":"087208bc-1b01-4a48-a5b1-f1b58a3d5d84","type":"HelpTool"}]},"id":"5e6ea8e9-58eb-49e4-8a49-44511590b03a","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"d706cde3-43d4-4545-977c-33b5fe23d466","type":"Title"},{"attributes":{"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"}},"id":"0908cbfb-c2d7-4853-b841-e5190fbf3ad7","type":"PanTool"},{"attributes":{"callback":null,"column_names":["dw","dh","image","x","y"],"data":{"dh":[10],"dw":[10],"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}],"x":[0],"y":[0]}},"id":"9e4ecffa-9507-413c-bc46-61ce431ba606","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"262c0904-8304-479d-85ae-d97e9a6e18f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce6f11cc-48b2-443b-95c1-4a44353fb119","type":"BasicTicker"}},"id":"8771c3df-9c13-4ca4-ba0b-66c1a31437ad","type":"Grid"},{"attributes":{},"id":"c78ba18c-ec95-4478-838b-002b65fcab1b","type":"BasicTickFormatter"},{"attributes":{},"id":"fd6d96a4-5c26-43f2-ae27-d4aecd71230c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"32017dd6-b648-4b83-85ed-780633884c15","type":"Range1d"}],"root_ids":["262c0904-8304-479d-85ae-d97e9a6e18f8"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"56cdc15d-869b-41bf-8dd4-ed5f921de69b","elementid":"a15c7daf-0ce4-453f-b7eb-28a2bc38ae3b","modelid":"262c0904-8304-479d-85ae-d97e9a6e18f8"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
