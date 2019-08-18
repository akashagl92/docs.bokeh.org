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
      };var element = document.getElementById("af2089c3-59f3-4d4f-8181-56f6760dcd5f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'af2089c3-59f3-4d4f-8181-56f6760dcd5f' but no matching script tag was found. ")
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
                var docs_json = {"78926970-a6ea-4e04-a015-1f16c94e2c2a":{"roots":{"references":[{"attributes":{},"id":"80590f3d-2727-4dca-8eff-cb6ed9c0a107","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"debb85db-7932-4855-8215-f19f0906996a","type":"ColumnDataSource"}},"id":"69fe4613-3624-4c2e-8b9a-308958699ec0","type":"CDSView"},{"attributes":{},"id":"7c8dc29c-f0f2-4902-b552-725d1bc5a24f","type":"LinearScale"},{"attributes":{},"id":"8ea8868d-4643-4ec2-92d0-388efe4dd554","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c978c119-4bce-4e6f-8785-e546a6d1fb06","type":"Toolbar"},{"attributes":{"plot":{"id":"ca307394-c1a0-41e0-bcff-2d6b96d9d419","type":"Plot"},"ticker":{"id":"0a9d9eba-494e-4c2c-b518-a33484de123f","type":"BasicTicker"}},"id":"6317758d-d44e-4c93-9f7b-968f9396cd27","type":"Grid"},{"attributes":{},"id":"c3553904-dfdf-47ee-a772-2818a1377e5d","type":"LinearScale"},{"attributes":{},"id":"bedc8a06-8c28-421e-a4ee-42812a52e478","type":"BasicTicker"},{"attributes":{"formatter":{"id":"80590f3d-2727-4dca-8eff-cb6ed9c0a107","type":"BasicTickFormatter"},"plot":{"id":"ca307394-c1a0-41e0-bcff-2d6b96d9d419","type":"Plot"},"ticker":{"id":"0a9d9eba-494e-4c2c-b518-a33484de123f","type":"BasicTicker"}},"id":"3d2aa2ab-25b4-481e-a451-21aff84d8132","type":"LinearAxis"},{"attributes":{"data_source":{"id":"debb85db-7932-4855-8215-f19f0906996a","type":"ColumnDataSource"},"glyph":{"id":"c896a875-a81e-4a36-bb81-1152400f656c","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"69fe4613-3624-4c2e-8b9a-308958699ec0","type":"CDSView"}},"id":"fa758a20-2944-4cf6-ace0-88964426e506","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7a2fa811-3e8a-4965-8880-91f28402f3d1","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"ca307394-c1a0-41e0-bcff-2d6b96d9d419","type":"Plot"},"ticker":{"id":"bedc8a06-8c28-421e-a4ee-42812a52e478","type":"BasicTicker"}},"id":"cbe3abab-155b-4efb-8df0-6192bfa346fa","type":"Grid"},{"attributes":{"callback":null},"id":"afcd9143-2b8b-462a-b012-289b0bbe19d3","type":"DataRange1d"},{"attributes":{"below":[{"id":"3d2aa2ab-25b4-481e-a451-21aff84d8132","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0fb77337-91d5-413d-89db-d5dfb0f846f0","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fa758a20-2944-4cf6-ace0-88964426e506","type":"GlyphRenderer"},{"id":"3d2aa2ab-25b4-481e-a451-21aff84d8132","type":"LinearAxis"},{"id":"0fb77337-91d5-413d-89db-d5dfb0f846f0","type":"LinearAxis"},{"id":"6317758d-d44e-4c93-9f7b-968f9396cd27","type":"Grid"},{"id":"cbe3abab-155b-4efb-8df0-6192bfa346fa","type":"Grid"}],"title":null,"toolbar":{"id":"c978c119-4bce-4e6f-8785-e546a6d1fb06","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7a2fa811-3e8a-4965-8880-91f28402f3d1","type":"DataRange1d"},"x_scale":{"id":"7c8dc29c-f0f2-4902-b552-725d1bc5a24f","type":"LinearScale"},"y_range":{"id":"afcd9143-2b8b-462a-b012-289b0bbe19d3","type":"DataRange1d"},"y_scale":{"id":"c3553904-dfdf-47ee-a772-2818a1377e5d","type":"LinearScale"}},"id":"ca307394-c1a0-41e0-bcff-2d6b96d9d419","type":"Plot"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"c896a875-a81e-4a36-bb81-1152400f656c","type":"Annulus"},{"attributes":{"formatter":{"id":"8ea8868d-4643-4ec2-92d0-388efe4dd554","type":"BasicTickFormatter"},"plot":{"id":"ca307394-c1a0-41e0-bcff-2d6b96d9d419","type":"Plot"},"ticker":{"id":"bedc8a06-8c28-421e-a4ee-42812a52e478","type":"BasicTicker"}},"id":"0fb77337-91d5-413d-89db-d5dfb0f846f0","type":"LinearAxis"},{"attributes":{},"id":"0a9d9eba-494e-4c2c-b518-a33484de123f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"debb85db-7932-4855-8215-f19f0906996a","type":"ColumnDataSource"}],"root_ids":["ca307394-c1a0-41e0-bcff-2d6b96d9d419"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"78926970-a6ea-4e04-a015-1f16c94e2c2a","elementid":"af2089c3-59f3-4d4f-8181-56f6760dcd5f","modelid":"ca307394-c1a0-41e0-bcff-2d6b96d9d419"}];
                
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
