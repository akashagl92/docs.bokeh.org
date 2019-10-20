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
      };var element = document.getElementById("1b3fd6ef-1cd2-4b13-b93e-c0c79c3a1a07");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1b3fd6ef-1cd2-4b13-b93e-c0c79c3a1a07' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"239391cf-34f5-45d6-a6ef-67bdc7652ead":{"roots":{"references":[{"attributes":{"source":{"id":"37299","type":"ColumnDataSource"}},"id":"37304","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37302","type":"Scatter"},{"attributes":{"editor":{"id":"37322","type":"StringEditor"},"field":"x","formatter":{"id":"37321","type":"StringFormatter"},"title":"x"},"id":"37305","type":"TableColumn"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37301","type":"Scatter"},{"attributes":{"data_source":{"id":"37299","type":"ColumnDataSource"},"glyph":{"id":"37301","type":"Scatter"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37302","type":"Scatter"},"selection_glyph":null,"view":{"id":"37304","type":"CDSView"}},"id":"37303","type":"GlyphRenderer"},{"attributes":{"editor":{"id":"37324","type":"StringEditor"},"field":"y","formatter":{"id":"37323","type":"StringFormatter"},"title":"y"},"id":"37306","type":"TableColumn"},{"attributes":{},"id":"37324","type":"StringEditor"},{"attributes":{"background_fill_color":{"value":"lightgrey"},"below":[{"id":"37288","type":"LinearAxis"}],"center":[{"id":"37292","type":"Grid"},{"id":"37297","type":"Grid"}],"left":[{"id":"37293","type":"LinearAxis"}],"renderers":[{"id":"37303","type":"GlyphRenderer"}],"title":{"id":"37278","type":"Title"},"toolbar":{"id":"37298","type":"Toolbar"},"x_range":{"id":"37280","type":"Range1d"},"x_scale":{"id":"37284","type":"LinearScale"},"y_range":{"id":"37282","type":"Range1d"},"y_scale":{"id":"37286","type":"LinearScale"}},"id":"37277","subtype":"Figure","type":"Plot"},{"attributes":{"editor":{"id":"37326","type":"StringEditor"},"field":"color","formatter":{"id":"37325","type":"StringFormatter"},"title":"color"},"id":"37307","type":"TableColumn"},{"attributes":{},"id":"37325","type":"StringFormatter"},{"attributes":{"callback":null,"data":{"color":["red","green","yellow"],"x":[1,5,9],"y":[1,5,9]},"selected":{"id":"37320","type":"Selection"},"selection_policy":{"id":"37319","type":"UnionRenderers"}},"id":"37299","type":"ColumnDataSource"},{"attributes":{"columns":[{"id":"37305","type":"TableColumn"},{"id":"37306","type":"TableColumn"},{"id":"37307","type":"TableColumn"}],"editable":true,"height":200,"source":{"id":"37299","type":"ColumnDataSource"},"view":{"id":"37309","type":"CDSView"}},"id":"37308","type":"DataTable"},{"attributes":{"text":"Point Draw Tool"},"id":"37278","type":"Title"},{"attributes":{},"id":"37326","type":"StringEditor"},{"attributes":{"source":{"id":"37299","type":"ColumnDataSource"}},"id":"37309","type":"CDSView"},{"attributes":{"callback":null,"end":10},"id":"37280","type":"Range1d"},{"attributes":{"empty_value":"black","renderers":[{"id":"37303","type":"GlyphRenderer"}]},"id":"37310","type":"PointDrawTool"},{"attributes":{"callback":null,"end":10},"id":"37282","type":"Range1d"},{"attributes":{"children":[{"id":"37277","subtype":"Figure","type":"Plot"},{"id":"37308","type":"DataTable"}]},"id":"37313","type":"Column"},{"attributes":{},"id":"37284","type":"LinearScale"},{"attributes":{},"id":"37286","type":"LinearScale"},{"attributes":{},"id":"37316","type":"BasicTickFormatter"},{"attributes":{},"id":"37318","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"37316","type":"BasicTickFormatter"},"ticker":{"id":"37289","type":"BasicTicker"}},"id":"37288","type":"LinearAxis"},{"attributes":{},"id":"37289","type":"BasicTicker"},{"attributes":{},"id":"37319","type":"UnionRenderers"},{"attributes":{},"id":"37323","type":"StringFormatter"},{"attributes":{},"id":"37320","type":"Selection"},{"attributes":{"ticker":{"id":"37289","type":"BasicTicker"}},"id":"37292","type":"Grid"},{"attributes":{},"id":"37322","type":"StringEditor"},{"attributes":{},"id":"37321","type":"StringFormatter"},{"attributes":{"formatter":{"id":"37318","type":"BasicTickFormatter"},"ticker":{"id":"37294","type":"BasicTicker"}},"id":"37293","type":"LinearAxis"},{"attributes":{},"id":"37294","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"37294","type":"BasicTicker"}},"id":"37297","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":{"id":"37310","type":"PointDrawTool"},"tools":[{"id":"37310","type":"PointDrawTool"}]},"id":"37298","type":"Toolbar"}],"root_ids":["37313"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"239391cf-34f5-45d6-a6ef-67bdc7652ead","roots":{"37313":"1b3fd6ef-1cd2-4b13-b93e-c0c79c3a1a07"}}];
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