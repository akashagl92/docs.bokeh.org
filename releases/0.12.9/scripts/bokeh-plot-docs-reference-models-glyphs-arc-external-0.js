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
      };var element = document.getElementById("c6fc726d-a614-4379-8da5-60a0fedd9306");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c6fc726d-a614-4379-8da5-60a0fedd9306' but no matching script tag was found. ")
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
                    var docs_json = {"29bd6355-c6c4-4e08-aab4-342f54508259":{"roots":{"references":[{"attributes":{"data_source":{"id":"ad26ea80-2f66-4877-a882-266c983591b1","type":"ColumnDataSource"},"glyph":{"id":"35120196-65f3-4cf2-a75f-8621dbea1db5","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"894c4209-abf6-4bd5-94dc-f528e980684b","type":"CDSView"}},"id":"a4347b5b-4b77-4f32-ad5d-658d8bc97c97","type":"GlyphRenderer"},{"attributes":{},"id":"c8d16e49-ae01-4344-97dc-613439814b59","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"500350d3-4cbc-4061-b7d4-1d44c73bfce5","type":"DataRange1d"},{"attributes":{},"id":"06ae2a77-b36b-4928-b071-f1af8d5999f6","type":"LinearScale"},{"attributes":{"formatter":{"id":"4f0477d3-6395-4e80-b2ff-478db6257aa9","type":"BasicTickFormatter"},"plot":{"id":"de4ba0fb-7ca0-4c18-9085-21ec877e09d5","type":"Plot"},"ticker":{"id":"1c25d66d-7d41-4ef4-9c59-011e20cce37c","type":"BasicTicker"}},"id":"e14335db-ead6-40ba-9150-a1ac3e1734a3","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"ad26ea80-2f66-4877-a882-266c983591b1","type":"ColumnDataSource"},{"attributes":{},"id":"4f0477d3-6395-4e80-b2ff-478db6257aa9","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"35120196-65f3-4cf2-a75f-8621dbea1db5","type":"Arc"},{"attributes":{"source":{"id":"ad26ea80-2f66-4877-a882-266c983591b1","type":"ColumnDataSource"}},"id":"894c4209-abf6-4bd5-94dc-f528e980684b","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"de4ba0fb-7ca0-4c18-9085-21ec877e09d5","type":"Plot"},"ticker":{"id":"9207113c-f47f-4d19-b935-d4efa0829b8b","type":"BasicTicker"}},"id":"8b7c195e-b6b2-4608-bac4-899fe4b90412","type":"Grid"},{"attributes":{},"id":"9207113c-f47f-4d19-b935-d4efa0829b8b","type":"BasicTicker"},{"attributes":{"below":[{"id":"e14335db-ead6-40ba-9150-a1ac3e1734a3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5aea0a0c-b24e-4726-b850-57e413b23f1c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a4347b5b-4b77-4f32-ad5d-658d8bc97c97","type":"GlyphRenderer"},{"id":"e14335db-ead6-40ba-9150-a1ac3e1734a3","type":"LinearAxis"},{"id":"5aea0a0c-b24e-4726-b850-57e413b23f1c","type":"LinearAxis"},{"id":"3f9aec09-354f-4f45-8ebf-02ae2cb65f0d","type":"Grid"},{"id":"8b7c195e-b6b2-4608-bac4-899fe4b90412","type":"Grid"}],"title":null,"toolbar":{"id":"4bd93859-f952-431a-96e4-dc6a313a8faf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4b51eaa1-d279-465d-b439-cc5a5b2713e8","type":"DataRange1d"},"x_scale":{"id":"5bc85bf1-231a-4fb7-89aa-20a83916c81e","type":"LinearScale"},"y_range":{"id":"500350d3-4cbc-4061-b7d4-1d44c73bfce5","type":"DataRange1d"},"y_scale":{"id":"06ae2a77-b36b-4928-b071-f1af8d5999f6","type":"LinearScale"}},"id":"de4ba0fb-7ca0-4c18-9085-21ec877e09d5","type":"Plot"},{"attributes":{"formatter":{"id":"c8d16e49-ae01-4344-97dc-613439814b59","type":"BasicTickFormatter"},"plot":{"id":"de4ba0fb-7ca0-4c18-9085-21ec877e09d5","type":"Plot"},"ticker":{"id":"9207113c-f47f-4d19-b935-d4efa0829b8b","type":"BasicTicker"}},"id":"5aea0a0c-b24e-4726-b850-57e413b23f1c","type":"LinearAxis"},{"attributes":{},"id":"1c25d66d-7d41-4ef4-9c59-011e20cce37c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4b51eaa1-d279-465d-b439-cc5a5b2713e8","type":"DataRange1d"},{"attributes":{"plot":{"id":"de4ba0fb-7ca0-4c18-9085-21ec877e09d5","type":"Plot"},"ticker":{"id":"1c25d66d-7d41-4ef4-9c59-011e20cce37c","type":"BasicTicker"}},"id":"3f9aec09-354f-4f45-8ebf-02ae2cb65f0d","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4bd93859-f952-431a-96e4-dc6a313a8faf","type":"Toolbar"},{"attributes":{},"id":"5bc85bf1-231a-4fb7-89aa-20a83916c81e","type":"LinearScale"}],"root_ids":["de4ba0fb-7ca0-4c18-9085-21ec877e09d5"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"29bd6355-c6c4-4e08-aab4-342f54508259","elementid":"c6fc726d-a614-4379-8da5-60a0fedd9306","modelid":"de4ba0fb-7ca0-4c18-9085-21ec877e09d5"}];
                
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
