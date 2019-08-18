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
      };var element = document.getElementById("2ef1cefc-61ef-4a81-bdd3-2d50528e4011");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2ef1cefc-61ef-4a81-bdd3-2d50528e4011' but no matching script tag was found. ")
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
                var docs_json = {"5c00c232-7c1a-418d-86f0-d112fa67341c":{"roots":{"references":[{"attributes":{},"id":"f6270c11-08d3-4e66-8a14-5f90fa3fecb0","type":"LinearScale"},{"attributes":{},"id":"5ef13a50-5789-4d0f-8a1c-a0fe2cdbcfb9","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"d5eb34bf-b4a2-408f-98e2-c28139c17288","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"2c937ae4-c872-4713-85b4-cb7ea8809c72","type":"Plot"},"ticker":{"id":"3a068029-0d97-432b-9ccf-d6fb4bd557e6","type":"BasicTicker"}},"id":"7321a93a-ebb0-43f1-ba40-4dd427086012","type":"Grid"},{"attributes":{},"id":"f6222492-a582-4ed9-94f1-82a6db92d7c2","type":"LinearScale"},{"attributes":{},"id":"468a0afa-c85a-4d3d-91d4-73d374133716","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b40c6150-c26a-41cf-9451-5590df779d4e","type":"BasicTickFormatter"},"plot":{"id":"2c937ae4-c872-4713-85b4-cb7ea8809c72","type":"Plot"},"ticker":{"id":"5ef13a50-5789-4d0f-8a1c-a0fe2cdbcfb9","type":"BasicTicker"}},"id":"ffa6b79d-14e1-466d-8a36-b295baec1e78","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d5eb34bf-b4a2-408f-98e2-c28139c17288","type":"ColumnDataSource"},"glyph":{"id":"43ad0437-92a2-46d3-b909-3017f31ebeb0","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0d2ec850-29bd-450f-9e2c-72759b9433c8","type":"CDSView"}},"id":"2e2ac2c2-7322-464e-9fa9-35c77d3b8342","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4f7c1137-00e1-4746-84b0-a0d2c74d2db7","type":"DataRange1d"},{"attributes":{"plot":{"id":"2c937ae4-c872-4713-85b4-cb7ea8809c72","type":"Plot"},"ticker":{"id":"5ef13a50-5789-4d0f-8a1c-a0fe2cdbcfb9","type":"BasicTicker"}},"id":"8656c772-348f-4741-b02c-25731dcaf912","type":"Grid"},{"attributes":{"below":[{"id":"ffa6b79d-14e1-466d-8a36-b295baec1e78","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7bbcad5f-14ea-4985-8be6-e1051aa0d42a","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2e2ac2c2-7322-464e-9fa9-35c77d3b8342","type":"GlyphRenderer"},{"id":"ffa6b79d-14e1-466d-8a36-b295baec1e78","type":"LinearAxis"},{"id":"7bbcad5f-14ea-4985-8be6-e1051aa0d42a","type":"LinearAxis"},{"id":"8656c772-348f-4741-b02c-25731dcaf912","type":"Grid"},{"id":"7321a93a-ebb0-43f1-ba40-4dd427086012","type":"Grid"}],"title":null,"toolbar":{"id":"9abdf9d6-7b8d-412b-903d-ad9d6a46d916","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"90f96116-c857-41bd-a5e0-7c7317b4e3a2","type":"DataRange1d"},"x_scale":{"id":"f6270c11-08d3-4e66-8a14-5f90fa3fecb0","type":"LinearScale"},"y_range":{"id":"4f7c1137-00e1-4746-84b0-a0d2c74d2db7","type":"DataRange1d"},"y_scale":{"id":"f6222492-a582-4ed9-94f1-82a6db92d7c2","type":"LinearScale"}},"id":"2c937ae4-c872-4713-85b4-cb7ea8809c72","type":"Plot"},{"attributes":{},"id":"3a068029-0d97-432b-9ccf-d6fb4bd557e6","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"43ad0437-92a2-46d3-b909-3017f31ebeb0","type":"Diamond"},{"attributes":{"callback":null},"id":"90f96116-c857-41bd-a5e0-7c7317b4e3a2","type":"DataRange1d"},{"attributes":{"formatter":{"id":"468a0afa-c85a-4d3d-91d4-73d374133716","type":"BasicTickFormatter"},"plot":{"id":"2c937ae4-c872-4713-85b4-cb7ea8809c72","type":"Plot"},"ticker":{"id":"3a068029-0d97-432b-9ccf-d6fb4bd557e6","type":"BasicTicker"}},"id":"7bbcad5f-14ea-4985-8be6-e1051aa0d42a","type":"LinearAxis"},{"attributes":{},"id":"b40c6150-c26a-41cf-9451-5590df779d4e","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9abdf9d6-7b8d-412b-903d-ad9d6a46d916","type":"Toolbar"},{"attributes":{"source":{"id":"d5eb34bf-b4a2-408f-98e2-c28139c17288","type":"ColumnDataSource"}},"id":"0d2ec850-29bd-450f-9e2c-72759b9433c8","type":"CDSView"}],"root_ids":["2c937ae4-c872-4713-85b4-cb7ea8809c72"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"5c00c232-7c1a-418d-86f0-d112fa67341c","elementid":"2ef1cefc-61ef-4a81-bdd3-2d50528e4011","modelid":"2c937ae4-c872-4713-85b4-cb7ea8809c72"}];
                
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
