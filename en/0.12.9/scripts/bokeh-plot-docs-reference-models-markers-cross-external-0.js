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
      };var element = document.getElementById("00ce72fa-8082-4336-899e-f58b644eb894");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '00ce72fa-8082-4336-899e-f58b644eb894' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"f2e6a15d-f2ab-4971-ada5-6a86c53f3686":{"roots":{"references":[{"attributes":{"formatter":{"id":"2320e34c-5c22-45db-aa41-b28c6154e072","type":"BasicTickFormatter"},"plot":{"id":"18f9d66b-28c9-4262-ab73-4df27d825433","type":"Plot"},"ticker":{"id":"c73e621b-0952-4cb9-84a7-1ddc68230d17","type":"BasicTicker"}},"id":"6dcc95d6-5ac9-43e1-b6aa-0e528824f97f","type":"LinearAxis"},{"attributes":{"plot":{"id":"18f9d66b-28c9-4262-ab73-4df27d825433","type":"Plot"},"ticker":{"id":"2f83c281-0fda-4999-8b61-7143d8e27a38","type":"BasicTicker"}},"id":"0571479a-6d8a-4a8f-88c6-867feaa24baf","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5285c29e-329a-402a-821b-c981a1008d9f","type":"Cross"},{"attributes":{"data_source":{"id":"0bfc6c77-ccca-4a5d-b72a-7201267a824c","type":"ColumnDataSource"},"glyph":{"id":"5285c29e-329a-402a-821b-c981a1008d9f","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"9f85f7ee-2fdb-4d35-a9b9-91ee0b875ef5","type":"CDSView"}},"id":"3a4d8bc7-81e3-4355-ba66-f09e50f67090","type":"GlyphRenderer"},{"attributes":{},"id":"2320e34c-5c22-45db-aa41-b28c6154e072","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"2d4fc221-464b-46aa-829f-047c8a80bda4","type":"DataRange1d"},{"attributes":{"callback":null},"id":"9ba1e968-dea9-4a53-a27b-f672d5418c7a","type":"DataRange1d"},{"attributes":{},"id":"c73e621b-0952-4cb9-84a7-1ddc68230d17","type":"BasicTicker"},{"attributes":{},"id":"2fd8410e-6e46-48a3-8458-f432c83b9a6f","type":"LinearScale"},{"attributes":{"source":{"id":"0bfc6c77-ccca-4a5d-b72a-7201267a824c","type":"ColumnDataSource"}},"id":"9f85f7ee-2fdb-4d35-a9b9-91ee0b875ef5","type":"CDSView"},{"attributes":{},"id":"2f83c281-0fda-4999-8b61-7143d8e27a38","type":"BasicTicker"},{"attributes":{},"id":"3784de6a-cb65-4edc-924f-80d054fc236a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"0bfc6c77-ccca-4a5d-b72a-7201267a824c","type":"ColumnDataSource"},{"attributes":{},"id":"f8faa2b8-ef8a-4718-8633-a2c04ca34f93","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7fbbb328-0418-4de6-9fe3-87c4b1523484","type":"Toolbar"},{"attributes":{"formatter":{"id":"3784de6a-cb65-4edc-924f-80d054fc236a","type":"BasicTickFormatter"},"plot":{"id":"18f9d66b-28c9-4262-ab73-4df27d825433","type":"Plot"},"ticker":{"id":"2f83c281-0fda-4999-8b61-7143d8e27a38","type":"BasicTicker"}},"id":"47027573-852d-4527-9d2e-4a81100962da","type":"LinearAxis"},{"attributes":{"below":[{"id":"47027573-852d-4527-9d2e-4a81100962da","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6dcc95d6-5ac9-43e1-b6aa-0e528824f97f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3a4d8bc7-81e3-4355-ba66-f09e50f67090","type":"GlyphRenderer"},{"id":"47027573-852d-4527-9d2e-4a81100962da","type":"LinearAxis"},{"id":"6dcc95d6-5ac9-43e1-b6aa-0e528824f97f","type":"LinearAxis"},{"id":"0571479a-6d8a-4a8f-88c6-867feaa24baf","type":"Grid"},{"id":"c2f4613b-45c2-491f-b1bd-4901790ff683","type":"Grid"}],"title":null,"toolbar":{"id":"7fbbb328-0418-4de6-9fe3-87c4b1523484","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2d4fc221-464b-46aa-829f-047c8a80bda4","type":"DataRange1d"},"x_scale":{"id":"2fd8410e-6e46-48a3-8458-f432c83b9a6f","type":"LinearScale"},"y_range":{"id":"9ba1e968-dea9-4a53-a27b-f672d5418c7a","type":"DataRange1d"},"y_scale":{"id":"f8faa2b8-ef8a-4718-8633-a2c04ca34f93","type":"LinearScale"}},"id":"18f9d66b-28c9-4262-ab73-4df27d825433","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"18f9d66b-28c9-4262-ab73-4df27d825433","type":"Plot"},"ticker":{"id":"c73e621b-0952-4cb9-84a7-1ddc68230d17","type":"BasicTicker"}},"id":"c2f4613b-45c2-491f-b1bd-4901790ff683","type":"Grid"}],"root_ids":["18f9d66b-28c9-4262-ab73-4df27d825433"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"f2e6a15d-f2ab-4971-ada5-6a86c53f3686","elementid":"00ce72fa-8082-4336-899e-f58b644eb894","modelid":"18f9d66b-28c9-4262-ab73-4df27d825433"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
