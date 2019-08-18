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
      };var element = document.getElementById("e455a6a4-2c8b-4205-8240-f82214c69b38");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e455a6a4-2c8b-4205-8240-f82214c69b38' but no matching script tag was found. ")
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
                var docs_json = {"a228c9a6-092e-438f-945f-8785f68a744f":{"roots":{"references":[{"attributes":{"formatter":{"id":"2124568b-07af-4e8c-8975-ebdc67b34c31","type":"BasicTickFormatter"},"plot":{"id":"57c557a9-a179-4e79-8596-cf839428eb24","type":"Plot"},"ticker":{"id":"86c21b5c-d8ae-41bc-861b-fcc8c8753143","type":"BasicTicker"}},"id":"23f9133b-20e0-4a36-9f79-42867aff8611","type":"LinearAxis"},{"attributes":{"plot":{"id":"57c557a9-a179-4e79-8596-cf839428eb24","type":"Plot"},"ticker":{"id":"86c21b5c-d8ae-41bc-861b-fcc8c8753143","type":"BasicTicker"}},"id":"df7f26d6-a25a-4f59-a5ab-3c03dd0a3fe0","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"6893e287-23c2-4bf1-8a2d-b9db4fdca6a1","type":"Toolbar"},{"attributes":{"below":[{"id":"23f9133b-20e0-4a36-9f79-42867aff8611","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6251e4a4-914f-4725-be2e-dee41bb120db","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"24469c31-6ea2-4679-bcf2-c4dd06073dc7","type":"GlyphRenderer"},{"id":"23f9133b-20e0-4a36-9f79-42867aff8611","type":"LinearAxis"},{"id":"6251e4a4-914f-4725-be2e-dee41bb120db","type":"LinearAxis"},{"id":"df7f26d6-a25a-4f59-a5ab-3c03dd0a3fe0","type":"Grid"},{"id":"0cc442e2-78e3-4185-8016-2df317de6984","type":"Grid"}],"title":null,"tool_events":{"id":"c473a08b-4afb-49db-b620-e5e687242e1a","type":"ToolEvents"},"toolbar":{"id":"6893e287-23c2-4bf1-8a2d-b9db4fdca6a1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ddd3ca5b-13cf-4341-a5d4-d088497b1993","type":"DataRange1d"},"y_range":{"id":"70de0aff-b2f1-4544-b74b-31735b9eb722","type":"DataRange1d"}},"id":"57c557a9-a179-4e79-8596-cf839428eb24","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"57c557a9-a179-4e79-8596-cf839428eb24","type":"Plot"},"ticker":{"id":"097655a1-af7c-4acb-9c83-00fde896dd7b","type":"BasicTicker"}},"id":"0cc442e2-78e3-4185-8016-2df317de6984","type":"Grid"},{"attributes":{"callback":null},"id":"70de0aff-b2f1-4544-b74b-31735b9eb722","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ddd3ca5b-13cf-4341-a5d4-d088497b1993","type":"DataRange1d"},{"attributes":{},"id":"4c47c571-61fd-42b4-abef-ca417dbac35c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","yp01","xp02","xp01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"e671d98f-3a6a-4291-b98e-9d99c311009d","type":"ColumnDataSource"},{"attributes":{},"id":"2124568b-07af-4e8c-8975-ebdc67b34c31","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4c47c571-61fd-42b4-abef-ca417dbac35c","type":"BasicTickFormatter"},"plot":{"id":"57c557a9-a179-4e79-8596-cf839428eb24","type":"Plot"},"ticker":{"id":"097655a1-af7c-4acb-9c83-00fde896dd7b","type":"BasicTicker"}},"id":"6251e4a4-914f-4725-be2e-dee41bb120db","type":"LinearAxis"},{"attributes":{},"id":"097655a1-af7c-4acb-9c83-00fde896dd7b","type":"BasicTicker"},{"attributes":{},"id":"86c21b5c-d8ae-41bc-861b-fcc8c8753143","type":"BasicTicker"},{"attributes":{"data_source":{"id":"e671d98f-3a6a-4291-b98e-9d99c311009d","type":"ColumnDataSource"},"glyph":{"id":"bf86fe09-fd88-4e49-8fc7-ded113f344bc","type":"Quadratic"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"24469c31-6ea2-4679-bcf2-c4dd06073dc7","type":"GlyphRenderer"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"bf86fe09-fd88-4e49-8fc7-ded113f344bc","type":"Quadratic"},{"attributes":{},"id":"c473a08b-4afb-49db-b620-e5e687242e1a","type":"ToolEvents"}],"root_ids":["57c557a9-a179-4e79-8596-cf839428eb24"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a228c9a6-092e-438f-945f-8785f68a744f","elementid":"e455a6a4-2c8b-4205-8240-f82214c69b38","modelid":"57c557a9-a179-4e79-8596-cf839428eb24"}];
                
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
