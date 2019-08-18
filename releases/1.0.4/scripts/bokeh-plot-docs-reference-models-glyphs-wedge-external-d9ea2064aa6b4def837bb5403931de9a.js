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
      };var element = document.getElementById("d4c5bd05-9f29-48bb-891b-df8cced02b14");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd4c5bd05-9f29-48bb-891b-df8cced02b14' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"bb936f9a-89a8-415a-8f2f-5526663a47a3":{"roots":{"references":[{"attributes":{"callback":null},"id":"29884","type":"DataRange1d"},{"attributes":{},"id":"29890","type":"BasicTickFormatter"},{"attributes":{},"id":"29893","type":"Selection"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#b3de69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"29874","type":"Wedge"},{"attributes":{"plot":{"id":"29872","type":"Plot"},"ticker":{"id":"29879","type":"BasicTicker"}},"id":"29880","type":"Grid"},{"attributes":{"callback":null},"id":"29887","type":"DataRange1d"},{"attributes":{},"id":"29881","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29886","type":"Toolbar"},{"attributes":{"formatter":{"id":"29890","type":"BasicTickFormatter"},"plot":{"id":"29872","type":"Plot"},"ticker":{"id":"29879","type":"BasicTicker"}},"id":"29877","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"29893","type":"Selection"},"selection_policy":{"id":"29892","type":"UnionRenderers"}},"id":"29871","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"29871","type":"ColumnDataSource"},"glyph":{"id":"29874","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29876","type":"CDSView"}},"id":"29875","type":"GlyphRenderer"},{"attributes":{},"id":"29885","type":"LinearScale"},{"attributes":{"formatter":{"id":"29888","type":"BasicTickFormatter"},"plot":{"id":"29872","type":"Plot"},"ticker":{"id":"29881","type":"BasicTicker"}},"id":"29878","type":"LinearAxis"},{"attributes":{"source":{"id":"29871","type":"ColumnDataSource"}},"id":"29876","type":"CDSView"},{"attributes":{},"id":"29883","type":"LinearScale"},{"attributes":{"below":[{"id":"29877","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29878","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29875","type":"GlyphRenderer"},{"id":"29877","type":"LinearAxis"},{"id":"29878","type":"LinearAxis"},{"id":"29880","type":"Grid"},{"id":"29882","type":"Grid"}],"title":null,"toolbar":{"id":"29886","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29884","type":"DataRange1d"},"x_scale":{"id":"29883","type":"LinearScale"},"y_range":{"id":"29887","type":"DataRange1d"},"y_scale":{"id":"29885","type":"LinearScale"}},"id":"29872","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"29872","type":"Plot"},"ticker":{"id":"29881","type":"BasicTicker"}},"id":"29882","type":"Grid"},{"attributes":{},"id":"29888","type":"BasicTickFormatter"},{"attributes":{},"id":"29892","type":"UnionRenderers"},{"attributes":{},"id":"29879","type":"BasicTicker"}],"root_ids":["29872"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"bb936f9a-89a8-415a-8f2f-5526663a47a3","roots":{"29872":"d4c5bd05-9f29-48bb-891b-df8cced02b14"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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