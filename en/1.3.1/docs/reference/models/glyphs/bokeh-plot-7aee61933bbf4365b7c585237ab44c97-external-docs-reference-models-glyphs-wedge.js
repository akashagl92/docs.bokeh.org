(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("ff075f73-393e-420a-aeb3-325a62e437db");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ff075f73-393e-420a-aeb3-325a62e437db' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"7d87eae9-c690-4544-a827-5652afbcf170":{"roots":{"references":[{"attributes":{},"id":"12316","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"12299","type":"ColumnDataSource"},"glyph":{"id":"12302","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"12304","type":"CDSView"}},"id":"12303","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"12307","type":"BasicTicker"}},"id":"12308","type":"Grid"},{"attributes":{},"id":"12309","type":"BasicTicker"},{"attributes":{},"id":"12318","type":"BasicTickFormatter"},{"attributes":{},"id":"12314","type":"LinearScale"},{"attributes":{},"id":"12313","type":"LinearScale"},{"attributes":{"below":[{"id":"12305","type":"LinearAxis"}],"center":[{"id":"12308","type":"Grid"},{"id":"12310","type":"Grid"}],"left":[{"id":"12306","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"12303","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"12311","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"12315","type":"DataRange1d"},"x_scale":{"id":"12313","type":"LinearScale"},"y_range":{"id":"12312","type":"DataRange1d"},"y_scale":{"id":"12314","type":"LinearScale"}},"id":"12300","type":"Plot"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#b3de69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"12302","type":"Wedge"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"12320","type":"Selection"},"selection_policy":{"id":"12321","type":"UnionRenderers"}},"id":"12299","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"12318","type":"BasicTickFormatter"},"ticker":{"id":"12307","type":"BasicTicker"}},"id":"12305","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"12311","type":"Toolbar"},{"attributes":{"formatter":{"id":"12316","type":"BasicTickFormatter"},"ticker":{"id":"12309","type":"BasicTicker"}},"id":"12306","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"12309","type":"BasicTicker"}},"id":"12310","type":"Grid"},{"attributes":{"source":{"id":"12299","type":"ColumnDataSource"}},"id":"12304","type":"CDSView"},{"attributes":{},"id":"12320","type":"Selection"},{"attributes":{"callback":null},"id":"12315","type":"DataRange1d"},{"attributes":{},"id":"12321","type":"UnionRenderers"},{"attributes":{},"id":"12307","type":"BasicTicker"},{"attributes":{"callback":null},"id":"12312","type":"DataRange1d"}],"root_ids":["12300"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"7d87eae9-c690-4544-a827-5652afbcf170","roots":{"12300":"ff075f73-393e-420a-aeb3-325a62e437db"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();