(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("db845d8f-cd25-4dc6-ab1e-e936f2e6190c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'db845d8f-cd25-4dc6-ab1e-e936f2e6190c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"d975fe86-80f0-4b8b-a420-7e98d6e50508":{"roots":{"references":[{"attributes":{},"id":"29b90bc5-10e5-47bf-a435-d54bf9be6d5f","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8aed369c-6bb9-449a-970b-d56869a6581f","type":"BoxAnnotation"},{"attributes":{},"id":"1f18214c-28a4-4af7-9393-750a9a4f97c1","type":"PanTool"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"bf42cb2f-002d-48df-b2a3-84246375a7ff","type":"ImageRGBA"},{"attributes":{},"id":"4b78038f-049e-47f9-9428-91fa522a7a15","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["image"],"data":{"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}]}},"id":"2179a8ca-2659-4768-8494-52f0256371d2","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"5aca4610-44c9-41ce-be11-853dc0ebd6d2","type":"BasicTickFormatter"},"plot":{"id":"69d1effb-9839-4efd-9fd5-83daffb90f9b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fe434d2-8d60-45c8-abfe-be60d9b4633a","type":"BasicTicker"}},"id":"3ef7d7eb-30cf-43aa-9764-c8ea6d76d725","type":"LinearAxis"},{"attributes":{},"id":"8fe434d2-8d60-45c8-abfe-be60d9b4633a","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2179a8ca-2659-4768-8494-52f0256371d2","type":"ColumnDataSource"},"glyph":{"id":"11f32875-7d99-48c2-871f-0f232e281f5a","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bf42cb2f-002d-48df-b2a3-84246375a7ff","type":"ImageRGBA"},"selection_glyph":null,"view":{"id":"83d3a526-72d9-4e16-be61-dc7dfa878ed7","type":"CDSView"}},"id":"8b7e90b1-7aa2-4807-b353-e50ccf97316a","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"69d1effb-9839-4efd-9fd5-83daffb90f9b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fe434d2-8d60-45c8-abfe-be60d9b4633a","type":"BasicTicker"}},"id":"211e029d-9327-443c-baaa-a01b750a3841","type":"Grid"},{"attributes":{"below":[{"id":"a5cbd329-b38d-4552-8c93-5ce1967f6f18","type":"LinearAxis"}],"left":[{"id":"3ef7d7eb-30cf-43aa-9764-c8ea6d76d725","type":"LinearAxis"}],"renderers":[{"id":"a5cbd329-b38d-4552-8c93-5ce1967f6f18","type":"LinearAxis"},{"id":"4f9c8e97-6bd3-4270-a85f-b54bd9a497e1","type":"Grid"},{"id":"3ef7d7eb-30cf-43aa-9764-c8ea6d76d725","type":"LinearAxis"},{"id":"211e029d-9327-443c-baaa-a01b750a3841","type":"Grid"},{"id":"8aed369c-6bb9-449a-970b-d56869a6581f","type":"BoxAnnotation"},{"id":"8b7e90b1-7aa2-4807-b353-e50ccf97316a","type":"GlyphRenderer"}],"title":{"id":"dd39d2b5-4105-43cd-9990-b6f7f8d77dc2","type":"Title"},"toolbar":{"id":"e671f18c-bab6-4d1f-a2af-7370c3c3985d","type":"Toolbar"},"x_range":{"id":"ce12e2c8-b06d-469a-ac2b-0a766224625f","type":"Range1d"},"x_scale":{"id":"bc003166-b9d4-46d1-afae-c6f7d485b95c","type":"LinearScale"},"y_range":{"id":"f62cf88e-5abc-405d-83f1-813a5bc91c55","type":"Range1d"},"y_scale":{"id":"ee90dbe1-97ea-4c55-ab62-6f81c8b967ba","type":"LinearScale"}},"id":"69d1effb-9839-4efd-9fd5-83daffb90f9b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"039b7570-c8c9-4a63-82ae-330804bf9976","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1f18214c-28a4-4af7-9393-750a9a4f97c1","type":"PanTool"},{"id":"039b7570-c8c9-4a63-82ae-330804bf9976","type":"WheelZoomTool"},{"id":"5086957e-ef58-47c5-b1d1-a8f5969f3083","type":"BoxZoomTool"},{"id":"99589838-a121-4162-be72-1fa25c472e86","type":"SaveTool"},{"id":"a8b7a4c0-ce49-4481-8620-b626445cca1a","type":"ResetTool"},{"id":"206075df-0e01-485e-969b-2253b459c991","type":"HelpTool"}]},"id":"e671f18c-bab6-4d1f-a2af-7370c3c3985d","type":"Toolbar"},{"attributes":{"callback":null,"end":10},"id":"ce12e2c8-b06d-469a-ac2b-0a766224625f","type":"Range1d"},{"attributes":{"overlay":{"id":"8aed369c-6bb9-449a-970b-d56869a6581f","type":"BoxAnnotation"}},"id":"5086957e-ef58-47c5-b1d1-a8f5969f3083","type":"BoxZoomTool"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"11f32875-7d99-48c2-871f-0f232e281f5a","type":"ImageRGBA"},{"attributes":{},"id":"99589838-a121-4162-be72-1fa25c472e86","type":"SaveTool"},{"attributes":{"callback":null,"end":10},"id":"f62cf88e-5abc-405d-83f1-813a5bc91c55","type":"Range1d"},{"attributes":{},"id":"a8b7a4c0-ce49-4481-8620-b626445cca1a","type":"ResetTool"},{"attributes":{},"id":"bc003166-b9d4-46d1-afae-c6f7d485b95c","type":"LinearScale"},{"attributes":{"plot":{"id":"69d1effb-9839-4efd-9fd5-83daffb90f9b","subtype":"Figure","type":"Plot"},"ticker":{"id":"29b90bc5-10e5-47bf-a435-d54bf9be6d5f","type":"BasicTicker"}},"id":"4f9c8e97-6bd3-4270-a85f-b54bd9a497e1","type":"Grid"},{"attributes":{},"id":"5aca4610-44c9-41ce-be11-853dc0ebd6d2","type":"BasicTickFormatter"},{"attributes":{},"id":"ee90dbe1-97ea-4c55-ab62-6f81c8b967ba","type":"LinearScale"},{"attributes":{},"id":"206075df-0e01-485e-969b-2253b459c991","type":"HelpTool"},{"attributes":{"formatter":{"id":"4b78038f-049e-47f9-9428-91fa522a7a15","type":"BasicTickFormatter"},"plot":{"id":"69d1effb-9839-4efd-9fd5-83daffb90f9b","subtype":"Figure","type":"Plot"},"ticker":{"id":"29b90bc5-10e5-47bf-a435-d54bf9be6d5f","type":"BasicTicker"}},"id":"a5cbd329-b38d-4552-8c93-5ce1967f6f18","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"dd39d2b5-4105-43cd-9990-b6f7f8d77dc2","type":"Title"},{"attributes":{"source":{"id":"2179a8ca-2659-4768-8494-52f0256371d2","type":"ColumnDataSource"}},"id":"83d3a526-72d9-4e16-be61-dc7dfa878ed7","type":"CDSView"}],"root_ids":["69d1effb-9839-4efd-9fd5-83daffb90f9b"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"d975fe86-80f0-4b8b-a420-7e98d6e50508","elementid":"db845d8f-cd25-4dc6-ab1e-e936f2e6190c","modelid":"69d1effb-9839-4efd-9fd5-83daffb90f9b"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
