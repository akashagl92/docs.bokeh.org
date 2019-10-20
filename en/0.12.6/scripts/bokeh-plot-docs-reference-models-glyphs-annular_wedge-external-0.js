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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("2e45c6a1-0696-4bd4-be93-f426eabb6418");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2e45c6a1-0696-4bd4-be93-f426eabb6418' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"6f20bf29-f6a8-49dc-ad7d-648ac49d704d":{"roots":{"references":[{"attributes":{},"id":"1604841f-965c-4ddc-a784-703ca63d4f39","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1666f1f4-fc2b-4ea1-afff-94d0b1619c2b","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","r","x"],"data":{"r":{"__ndarray__":"393d3d3dzT+amZmZmZnRP0VERERERNQ/7+7u7u7u1j+amZmZmZnZP0VERERERNw/7+7u7u7u3j/NzMzMzMzgPyIiIiIiIuI/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"2aca72c0-fc42-441e-b080-e3c5287e4b6d","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3c99453b-f6e3-43ca-82d2-7e7f30a83913","type":"Toolbar"},{"attributes":{"plot":{"id":"5cdf27f3-f0c9-4eff-bc7f-82cd92829a81","type":"Plot"},"ticker":{"id":"1604841f-965c-4ddc-a784-703ca63d4f39","type":"BasicTicker"}},"id":"bb375cd1-284d-4d51-a03c-ddf1f823ed77","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"5cdf27f3-f0c9-4eff-bc7f-82cd92829a81","type":"Plot"},"ticker":{"id":"4350dba4-6315-420c-b96e-82a4c4c77a15","type":"BasicTicker"}},"id":"7ff05b7b-47a1-4b58-8026-7b32fa7b4780","type":"Grid"},{"attributes":{},"id":"7efcc5cf-817f-4996-8d72-fa9a962a8436","type":"LinearScale"},{"attributes":{},"id":"4350dba4-6315-420c-b96e-82a4c4c77a15","type":"BasicTicker"},{"attributes":{},"id":"51bee2a5-ff1f-4ccf-9a41-76e69fe7d5cd","type":"ToolEvents"},{"attributes":{"formatter":{"id":"5b7e9f23-1ad5-4b04-8566-be3ae41c933f","type":"BasicTickFormatter"},"plot":{"id":"5cdf27f3-f0c9-4eff-bc7f-82cd92829a81","type":"Plot"},"ticker":{"id":"4350dba4-6315-420c-b96e-82a4c4c77a15","type":"BasicTicker"}},"id":"f7cdff97-a883-4680-bdac-8fd4058475e7","type":"LinearAxis"},{"attributes":{"callback":null},"id":"0c7ba627-f879-41fd-bc5a-eb777a41ada6","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2aca72c0-fc42-441e-b080-e3c5287e4b6d","type":"ColumnDataSource"},"glyph":{"id":"99088d71-0b44-4b6a-81ce-6c73f973a761","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null},"id":"afe55e81-d762-4b57-955e-fd9c1d5bfc34","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6a6c544f-a00e-47fd-b054-cc2f7c42f46b","type":"BasicTickFormatter"},"plot":{"id":"5cdf27f3-f0c9-4eff-bc7f-82cd92829a81","type":"Plot"},"ticker":{"id":"1604841f-965c-4ddc-a784-703ca63d4f39","type":"BasicTicker"}},"id":"7aaf6c00-56fc-46a3-9712-1602e55d8511","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"99088d71-0b44-4b6a-81ce-6c73f973a761","type":"AnnularWedge"},{"attributes":{"below":[{"id":"7aaf6c00-56fc-46a3-9712-1602e55d8511","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f7cdff97-a883-4680-bdac-8fd4058475e7","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"afe55e81-d762-4b57-955e-fd9c1d5bfc34","type":"GlyphRenderer"},{"id":"7aaf6c00-56fc-46a3-9712-1602e55d8511","type":"LinearAxis"},{"id":"f7cdff97-a883-4680-bdac-8fd4058475e7","type":"LinearAxis"},{"id":"bb375cd1-284d-4d51-a03c-ddf1f823ed77","type":"Grid"},{"id":"7ff05b7b-47a1-4b58-8026-7b32fa7b4780","type":"Grid"}],"title":null,"tool_events":{"id":"51bee2a5-ff1f-4ccf-9a41-76e69fe7d5cd","type":"ToolEvents"},"toolbar":{"id":"3c99453b-f6e3-43ca-82d2-7e7f30a83913","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1666f1f4-fc2b-4ea1-afff-94d0b1619c2b","type":"DataRange1d"},"x_scale":{"id":"7efcc5cf-817f-4996-8d72-fa9a962a8436","type":"LinearScale"},"y_range":{"id":"0c7ba627-f879-41fd-bc5a-eb777a41ada6","type":"DataRange1d"},"y_scale":{"id":"04d019e8-ecac-40ff-b11e-867ee447674d","type":"LinearScale"}},"id":"5cdf27f3-f0c9-4eff-bc7f-82cd92829a81","type":"Plot"},{"attributes":{},"id":"04d019e8-ecac-40ff-b11e-867ee447674d","type":"LinearScale"},{"attributes":{},"id":"5b7e9f23-1ad5-4b04-8566-be3ae41c933f","type":"BasicTickFormatter"},{"attributes":{},"id":"6a6c544f-a00e-47fd-b054-cc2f7c42f46b","type":"BasicTickFormatter"}],"root_ids":["5cdf27f3-f0c9-4eff-bc7f-82cd92829a81"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"6f20bf29-f6a8-49dc-ad7d-648ac49d704d","elementid":"2e45c6a1-0696-4bd4-be93-f426eabb6418","modelid":"5cdf27f3-f0c9-4eff-bc7f-82cd92829a81"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
