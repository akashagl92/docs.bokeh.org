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
      };var element = document.getElementById("d9a0d84b-b3e7-44c0-8588-48be4d5f7d4c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd9a0d84b-b3e7-44c0-8588-48be4d5f7d4c' but no matching script tag was found. ")
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
                var docs_json = {"9a58716f-5786-43f5-bcee-c7f3cf5e9e7f":{"roots":{"references":[{"attributes":{"callback":null},"id":"a65ae66d-848f-4652-a513-8bdcfd6b4108","type":"DataRange1d"},{"attributes":{},"id":"f4aecbef-2e8b-45e2-8cb0-01c0ac476ac8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"345a9792-44bf-4af1-bc3b-b72f3f6a03df","type":"DataRange1d"},{"attributes":{"formatter":{"id":"ea046fd4-8aba-46d6-b5aa-0351cf2f2e46","type":"BasicTickFormatter"},"plot":{"id":"d5072955-3a5d-4e3b-85c7-1aafb4016a95","type":"Plot"},"ticker":{"id":"40ff99d8-b35c-4f56-a42c-e75bdf151e66","type":"BasicTicker"}},"id":"65d8b9d4-7464-4734-95e8-8969dfdd8632","type":"LinearAxis"},{"attributes":{},"id":"ea046fd4-8aba-46d6-b5aa-0351cf2f2e46","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e9853313-7451-4f5a-8e36-a7ce2caed2fd","type":"BasicTickFormatter"},"plot":{"id":"d5072955-3a5d-4e3b-85c7-1aafb4016a95","type":"Plot"},"ticker":{"id":"f4aecbef-2e8b-45e2-8cb0-01c0ac476ac8","type":"BasicTicker"}},"id":"699acbdf-48c5-4032-9905-851bb7ac0663","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["top","x"],"data":{"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"54780bc0-2f3b-4dc3-bdd8-f8a8f6ef5e95","type":"ColumnDataSource"},{"attributes":{},"id":"e9853313-7451-4f5a-8e36-a7ce2caed2fd","type":"BasicTickFormatter"},{"attributes":{},"id":"40ff99d8-b35c-4f56-a42c-e75bdf151e66","type":"BasicTicker"},{"attributes":{"plot":{"id":"d5072955-3a5d-4e3b-85c7-1aafb4016a95","type":"Plot"},"ticker":{"id":"40ff99d8-b35c-4f56-a42c-e75bdf151e66","type":"BasicTicker"}},"id":"2fcf0b66-0a7d-4ae3-91cd-7d5f999d3e40","type":"Grid"},{"attributes":{"below":[{"id":"65d8b9d4-7464-4734-95e8-8969dfdd8632","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"699acbdf-48c5-4032-9905-851bb7ac0663","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"dc37b336-f1a6-4ebf-92aa-219768411669","type":"GlyphRenderer"},{"id":"65d8b9d4-7464-4734-95e8-8969dfdd8632","type":"LinearAxis"},{"id":"699acbdf-48c5-4032-9905-851bb7ac0663","type":"LinearAxis"},{"id":"2fcf0b66-0a7d-4ae3-91cd-7d5f999d3e40","type":"Grid"},{"id":"15649f7c-c964-407e-8fc0-ab69ef200b79","type":"Grid"}],"title":null,"tool_events":{"id":"1d1b88c6-6009-471a-a590-38362dcd08d4","type":"ToolEvents"},"toolbar":{"id":"753b1795-1347-4656-b7eb-d1d84bea94b8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a65ae66d-848f-4652-a513-8bdcfd6b4108","type":"DataRange1d"},"y_range":{"id":"345a9792-44bf-4af1-bc3b-b72f3f6a03df","type":"DataRange1d"}},"id":"d5072955-3a5d-4e3b-85c7-1aafb4016a95","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"753b1795-1347-4656-b7eb-d1d84bea94b8","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"8a8e707d-c55c-4c5d-b991-609a64bfa5bf","type":"VBar"},{"attributes":{"data_source":{"id":"54780bc0-2f3b-4dc3-bdd8-f8a8f6ef5e95","type":"ColumnDataSource"},"glyph":{"id":"8a8e707d-c55c-4c5d-b991-609a64bfa5bf","type":"VBar"},"hover_glyph":null,"muted_glyph":null},"id":"dc37b336-f1a6-4ebf-92aa-219768411669","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"d5072955-3a5d-4e3b-85c7-1aafb4016a95","type":"Plot"},"ticker":{"id":"f4aecbef-2e8b-45e2-8cb0-01c0ac476ac8","type":"BasicTicker"}},"id":"15649f7c-c964-407e-8fc0-ab69ef200b79","type":"Grid"},{"attributes":{},"id":"1d1b88c6-6009-471a-a590-38362dcd08d4","type":"ToolEvents"}],"root_ids":["d5072955-3a5d-4e3b-85c7-1aafb4016a95"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"9a58716f-5786-43f5-bcee-c7f3cf5e9e7f","elementid":"d9a0d84b-b3e7-44c0-8588-48be4d5f7d4c","modelid":"d5072955-3a5d-4e3b-85c7-1aafb4016a95"}];
                
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
