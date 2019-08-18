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
      };var element = document.getElementById("6ae1f4b3-a3ed-4af9-bf9d-0d187d76821d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6ae1f4b3-a3ed-4af9-bf9d-0d187d76821d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"c62ea9c5-c7ae-4ef2-b77b-131fcc0949cf":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c01ee388-13a1-4296-979a-8f666304095d","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":10},"id":"7e177c8a-246c-4198-905e-9b156c073677","type":"Range1d"},{"attributes":{},"id":"f03c7dad-c96c-4d31-8aa6-c90ead4341ba","type":"WheelZoomTool"},{"attributes":{},"id":"cd8d7446-02c6-44f3-bc0d-9143bc81435a","type":"HelpTool"},{"attributes":{"overlay":{"id":"c01ee388-13a1-4296-979a-8f666304095d","type":"BoxAnnotation"}},"id":"e423ccd8-73b3-4cbd-91ae-77b9c2061ddc","type":"BoxZoomTool"},{"attributes":{},"id":"670f6af0-c321-443d-9978-79cf371b50ee","type":"PanTool"},{"attributes":{},"id":"9b02e324-d2f9-4364-9bb4-e11a9b290adf","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e97a227d-1bcc-476b-8791-3676b71cf9cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"7594ef1f-e943-4776-8eb8-b43d7dca0033","type":"BasicTicker"}},"id":"fbf925a3-e691-4906-a9ab-0418ba7a49af","type":"Grid"},{"attributes":{},"id":"7594ef1f-e943-4776-8eb8-b43d7dca0033","type":"BasicTicker"},{"attributes":{"data_source":{"id":"06f40c18-3b8a-43ed-8764-fb18fbacbee7","type":"ColumnDataSource"},"glyph":{"id":"5b62f3e4-779b-4689-b0e6-4b47d09981c8","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a5d343df-d377-45a9-8d1f-be567d7a999a","type":"ImageRGBA"},"selection_glyph":null,"view":{"id":"a5c92d2d-8725-4358-89f4-f4abe3cc708d","type":"CDSView"}},"id":"18e97427-7256-4274-aaf3-6f721f62598b","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"7ed1960c-707f-4ac4-bbff-b30612dbcea0","type":"LinearAxis"}],"left":[{"id":"8394369f-a30d-459c-a238-a1f604f6e495","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7ed1960c-707f-4ac4-bbff-b30612dbcea0","type":"LinearAxis"},{"id":"fbf925a3-e691-4906-a9ab-0418ba7a49af","type":"Grid"},{"id":"8394369f-a30d-459c-a238-a1f604f6e495","type":"LinearAxis"},{"id":"feb1694b-bf3c-4ce8-9f6f-c720b329d3a0","type":"Grid"},{"id":"c01ee388-13a1-4296-979a-8f666304095d","type":"BoxAnnotation"},{"id":"18e97427-7256-4274-aaf3-6f721f62598b","type":"GlyphRenderer"}],"title":{"id":"a3496f4d-87e2-4244-ae2a-bce743e8aa39","type":"Title"},"toolbar":{"id":"fd63b5e2-0ec1-41b8-9b91-a740ac80c6be","type":"Toolbar"},"x_range":{"id":"7e177c8a-246c-4198-905e-9b156c073677","type":"Range1d"},"x_scale":{"id":"f97db9ed-6791-4f1e-91d1-d7294998abbc","type":"LinearScale"},"y_range":{"id":"1def1084-0003-43a1-b7de-b70bf3a8c2a2","type":"Range1d"},"y_scale":{"id":"edc50566-fc53-4f58-a51c-fe5108d0cd82","type":"LinearScale"}},"id":"e97a227d-1bcc-476b-8791-3676b71cf9cc","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":10},"id":"1def1084-0003-43a1-b7de-b70bf3a8c2a2","type":"Range1d"},{"attributes":{},"id":"3347ce16-7b0c-43b9-b573-5ccb285f1178","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"a3496f4d-87e2-4244-ae2a-bce743e8aa39","type":"Title"},{"attributes":{},"id":"93a6a0dc-7f57-4df8-8172-c8bac5c05a74","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9b02e324-d2f9-4364-9bb4-e11a9b290adf","type":"BasicTickFormatter"},"plot":{"id":"e97a227d-1bcc-476b-8791-3676b71cf9cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"7594ef1f-e943-4776-8eb8-b43d7dca0033","type":"BasicTicker"}},"id":"7ed1960c-707f-4ac4-bbff-b30612dbcea0","type":"LinearAxis"},{"attributes":{"source":{"id":"06f40c18-3b8a-43ed-8764-fb18fbacbee7","type":"ColumnDataSource"}},"id":"a5c92d2d-8725-4358-89f4-f4abe3cc708d","type":"CDSView"},{"attributes":{},"id":"edc50566-fc53-4f58-a51c-fe5108d0cd82","type":"LinearScale"},{"attributes":{},"id":"84f24042-10b2-4863-997a-3735d60fa148","type":"ResetTool"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b62f3e4-779b-4689-b0e6-4b47d09981c8","type":"ImageRGBA"},{"attributes":{},"id":"44c11f00-15c0-48d8-8712-a0b3297ae086","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"3347ce16-7b0c-43b9-b573-5ccb285f1178","type":"BasicTickFormatter"},"plot":{"id":"e97a227d-1bcc-476b-8791-3676b71cf9cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"93a6a0dc-7f57-4df8-8172-c8bac5c05a74","type":"BasicTicker"}},"id":"8394369f-a30d-459c-a238-a1f604f6e495","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"670f6af0-c321-443d-9978-79cf371b50ee","type":"PanTool"},{"id":"f03c7dad-c96c-4d31-8aa6-c90ead4341ba","type":"WheelZoomTool"},{"id":"e423ccd8-73b3-4cbd-91ae-77b9c2061ddc","type":"BoxZoomTool"},{"id":"36b1e1ea-b1bf-4e3b-ae55-7533067cb73c","type":"SaveTool"},{"id":"84f24042-10b2-4863-997a-3735d60fa148","type":"ResetTool"},{"id":"cd8d7446-02c6-44f3-bc0d-9143bc81435a","type":"HelpTool"}]},"id":"fd63b5e2-0ec1-41b8-9b91-a740ac80c6be","type":"Toolbar"},{"attributes":{},"id":"06097a34-d3cb-4f4f-bde2-fb77eeaa8fba","type":"Selection"},{"attributes":{},"id":"f97db9ed-6791-4f1e-91d1-d7294998abbc","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"e97a227d-1bcc-476b-8791-3676b71cf9cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"93a6a0dc-7f57-4df8-8172-c8bac5c05a74","type":"BasicTicker"}},"id":"feb1694b-bf3c-4ce8-9f6f-c720b329d3a0","type":"Grid"},{"attributes":{},"id":"36b1e1ea-b1bf-4e3b-ae55-7533067cb73c","type":"SaveTool"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5d343df-d377-45a9-8d1f-be567d7a999a","type":"ImageRGBA"},{"attributes":{"callback":null,"data":{"dh":[10],"dw":[10],"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}],"x":[0],"y":[0]},"selected":{"id":"06097a34-d3cb-4f4f-bde2-fb77eeaa8fba","type":"Selection"},"selection_policy":{"id":"44c11f00-15c0-48d8-8712-a0b3297ae086","type":"UnionRenderers"}},"id":"06f40c18-3b8a-43ed-8764-fb18fbacbee7","type":"ColumnDataSource"}],"root_ids":["e97a227d-1bcc-476b-8791-3676b71cf9cc"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"c62ea9c5-c7ae-4ef2-b77b-131fcc0949cf","roots":{"e97a227d-1bcc-476b-8791-3676b71cf9cc":"6ae1f4b3-a3ed-4af9-bf9d-0d187d76821d"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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