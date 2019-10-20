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
      };var element = document.getElementById("a4fbea9a-f363-48bb-8986-b3d41ad2896a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a4fbea9a-f363-48bb-8986-b3d41ad2896a' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"4b81a16a-0b2e-4b79-93f1-077ad29de313":{"roots":{"references":[{"attributes":{"formatter":{"id":"29130","type":"BasicTickFormatter"},"ticker":{"id":"29105","type":"BasicTicker"}},"id":"29104","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29109","type":"PanTool"},{"id":"29110","type":"WheelZoomTool"},{"id":"29111","type":"BoxZoomTool"},{"id":"29112","type":"SaveTool"},{"id":"29113","type":"ResetTool"},{"id":"29114","type":"HelpTool"}]},"id":"29115","type":"Toolbar"},{"attributes":{},"id":"29130","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"29099","type":"LinearAxis"}],"center":[{"id":"29103","type":"Grid"},{"id":"29108","type":"Grid"}],"left":[{"id":"29104","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29125","type":"GlyphRenderer"}],"title":{"id":"29128","type":"Title"},"toolbar":{"id":"29115","type":"Toolbar"},"x_range":{"id":"29091","type":"DataRange1d"},"x_scale":{"id":"29095","type":"LinearScale"},"y_range":{"id":"29093","type":"DataRange1d"},"y_scale":{"id":"29097","type":"LinearScale"}},"id":"29090","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"29135","type":"BoxAnnotation"}},"id":"29111","type":"BoxZoomTool"},{"attributes":{},"id":"29134","type":"UnionRenderers"},{"attributes":{},"id":"29100","type":"BasicTicker"},{"attributes":{},"id":"29097","type":"LinearScale"},{"attributes":{"source":{"id":"29122","type":"ColumnDataSource"}},"id":"29126","type":"CDSView"},{"attributes":{},"id":"29112","type":"SaveTool"},{"attributes":{},"id":"29132","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"29132","type":"BasicTickFormatter"},"ticker":{"id":"29100","type":"BasicTicker"}},"id":"29099","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29135","type":"BoxAnnotation"},{"attributes":{},"id":"29114","type":"HelpTool"},{"attributes":{"callback":null},"id":"29091","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"29105","type":"BasicTicker"}},"id":"29108","type":"Grid"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29123","type":"Patches"},{"attributes":{"ticker":{"id":"29100","type":"BasicTicker"}},"id":"29103","type":"Grid"},{"attributes":{},"id":"29133","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29124","type":"Patches"},{"attributes":{},"id":"29095","type":"LinearScale"},{"attributes":{"callback":null},"id":"29093","type":"DataRange1d"},{"attributes":{},"id":"29105","type":"BasicTicker"},{"attributes":{"text":""},"id":"29128","type":"Title"},{"attributes":{},"id":"29110","type":"WheelZoomTool"},{"attributes":{},"id":"29113","type":"ResetTool"},{"attributes":{},"id":"29109","type":"PanTool"},{"attributes":{"callback":null,"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"29133","type":"Selection"},"selection_policy":{"id":"29134","type":"UnionRenderers"}},"id":"29122","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"29122","type":"ColumnDataSource"},"glyph":{"id":"29123","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29124","type":"Patches"},"selection_glyph":null,"view":{"id":"29126","type":"CDSView"}},"id":"29125","type":"GlyphRenderer"}],"root_ids":["29090"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"4b81a16a-0b2e-4b79-93f1-077ad29de313","roots":{"29090":"a4fbea9a-f363-48bb-8986-b3d41ad2896a"}}];
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
        
        
        }
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