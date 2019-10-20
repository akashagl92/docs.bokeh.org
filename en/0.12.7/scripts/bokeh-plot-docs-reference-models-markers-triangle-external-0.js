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
      };var element = document.getElementById("09666f17-bf0f-4958-b2b9-43e36ddb8747");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '09666f17-bf0f-4958-b2b9-43e36ddb8747' but no matching script tag was found. ")
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
                var docs_json = {"f54fdd21-3e39-4c8f-9a66-21990b35dd60":{"roots":{"references":[{"attributes":{"plot":{"id":"0400e0dc-b5fd-485d-8c91-f489341d1b55","type":"Plot"},"ticker":{"id":"60f303d7-af27-470b-be41-c64976715f11","type":"BasicTicker"}},"id":"e3141706-481e-4c69-8391-320eadc33096","type":"Grid"},{"attributes":{},"id":"d634bd0b-ac45-4dd6-9d0c-728439b61447","type":"BasicTicker"},{"attributes":{"source":{"id":"039749e9-571b-4ef4-a144-ac6bdc7c0fea","type":"ColumnDataSource"}},"id":"055d78a7-6a0e-4d07-a8b2-9d1591349087","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f32048d-7345-4c81-8275-daba98fd15f4","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"0400e0dc-b5fd-485d-8c91-f489341d1b55","type":"Plot"},"ticker":{"id":"d634bd0b-ac45-4dd6-9d0c-728439b61447","type":"BasicTicker"}},"id":"28a6896c-5d10-470d-9c43-744df07a3596","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ac3f1097-7110-4be2-b867-94667320c58a","type":"Toolbar"},{"attributes":{},"id":"880fb687-8913-46ec-8e8c-022bba5c1ba5","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"039749e9-571b-4ef4-a144-ac6bdc7c0fea","type":"ColumnDataSource"},"glyph":{"id":"2f32048d-7345-4c81-8275-daba98fd15f4","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"055d78a7-6a0e-4d07-a8b2-9d1591349087","type":"CDSView"}},"id":"822091cc-af79-4aa3-aa44-f6009cbae84e","type":"GlyphRenderer"},{"attributes":{},"id":"a77c315d-fc49-4562-8ad9-6cc2907e6b73","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"039749e9-571b-4ef4-a144-ac6bdc7c0fea","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"a77c315d-fc49-4562-8ad9-6cc2907e6b73","type":"BasicTickFormatter"},"plot":{"id":"0400e0dc-b5fd-485d-8c91-f489341d1b55","type":"Plot"},"ticker":{"id":"d634bd0b-ac45-4dd6-9d0c-728439b61447","type":"BasicTicker"}},"id":"778dbc49-476c-418b-8e5c-da97065da39e","type":"LinearAxis"},{"attributes":{},"id":"d69aad86-7959-43bf-9ba4-c2e4540a1069","type":"LinearScale"},{"attributes":{},"id":"60f303d7-af27-470b-be41-c64976715f11","type":"BasicTicker"},{"attributes":{"callback":null},"id":"efe5562a-bbf4-48d1-a6c7-5add9089b53c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"880fb687-8913-46ec-8e8c-022bba5c1ba5","type":"BasicTickFormatter"},"plot":{"id":"0400e0dc-b5fd-485d-8c91-f489341d1b55","type":"Plot"},"ticker":{"id":"60f303d7-af27-470b-be41-c64976715f11","type":"BasicTicker"}},"id":"440b2895-b34d-4514-b030-f8d7d2e4d6bb","type":"LinearAxis"},{"attributes":{"callback":null},"id":"98d87abd-f435-41bd-b541-23e03a40ff9e","type":"DataRange1d"},{"attributes":{},"id":"f1f5778d-d8c4-4973-aa2f-a520f9ed692a","type":"LinearScale"},{"attributes":{"below":[{"id":"440b2895-b34d-4514-b030-f8d7d2e4d6bb","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"778dbc49-476c-418b-8e5c-da97065da39e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"822091cc-af79-4aa3-aa44-f6009cbae84e","type":"GlyphRenderer"},{"id":"440b2895-b34d-4514-b030-f8d7d2e4d6bb","type":"LinearAxis"},{"id":"778dbc49-476c-418b-8e5c-da97065da39e","type":"LinearAxis"},{"id":"e3141706-481e-4c69-8391-320eadc33096","type":"Grid"},{"id":"28a6896c-5d10-470d-9c43-744df07a3596","type":"Grid"}],"title":null,"toolbar":{"id":"ac3f1097-7110-4be2-b867-94667320c58a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"98d87abd-f435-41bd-b541-23e03a40ff9e","type":"DataRange1d"},"x_scale":{"id":"f1f5778d-d8c4-4973-aa2f-a520f9ed692a","type":"LinearScale"},"y_range":{"id":"efe5562a-bbf4-48d1-a6c7-5add9089b53c","type":"DataRange1d"},"y_scale":{"id":"d69aad86-7959-43bf-9ba4-c2e4540a1069","type":"LinearScale"}},"id":"0400e0dc-b5fd-485d-8c91-f489341d1b55","type":"Plot"}],"root_ids":["0400e0dc-b5fd-485d-8c91-f489341d1b55"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f54fdd21-3e39-4c8f-9a66-21990b35dd60","elementid":"09666f17-bf0f-4958-b2b9-43e36ddb8747","modelid":"0400e0dc-b5fd-485d-8c91-f489341d1b55"}];
                
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
