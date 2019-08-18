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
      };var element = document.getElementById("9a31f44c-aa7b-4145-9ccc-359debb33442");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9a31f44c-aa7b-4145-9ccc-359debb33442' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"78694cdb-cb6a-4107-8373-f492a6824f3c":{"roots":{"references":[{"attributes":{},"id":"37384","type":"LinearScale"},{"attributes":{},"id":"37429","type":"Selection"},{"attributes":{},"id":"37428","type":"BasicTickFormatter"},{"attributes":{},"id":"37431","type":"Selection"},{"attributes":{"ticker":{"id":"37387","type":"BasicTicker"}},"id":"37390","type":"Grid"},{"attributes":{},"id":"37397","type":"WheelZoomTool"},{"attributes":{"source":{"id":"37414","type":"ColumnDataSource"}},"id":"37418","type":"CDSView"},{"attributes":{"renderers":[{"id":"37417","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"37420","type":"PolyDrawTool"},{"attributes":{},"id":"37399","type":"SaveTool"},{"attributes":{"active_drag":{"id":"37419","type":"PolyDrawTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37396","type":"PanTool"},{"id":"37397","type":"WheelZoomTool"},{"id":"37398","type":"BoxZoomTool"},{"id":"37399","type":"SaveTool"},{"id":"37400","type":"ResetTool"},{"id":"37401","type":"HelpTool"},{"id":"37419","type":"PolyDrawTool"},{"id":"37420","type":"PolyDrawTool"}]},"id":"37402","type":"Toolbar"},{"attributes":{"data_source":{"id":"37414","type":"ColumnDataSource"},"glyph":{"id":"37415","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37416","type":"MultiLine"},"selection_glyph":null,"view":{"id":"37418","type":"CDSView"}},"id":"37417","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37411","type":"Patches"},{"attributes":{},"id":"37387","type":"BasicTicker"},{"attributes":{},"id":"37401","type":"HelpTool"},{"attributes":{"below":[{"id":"37386","type":"LinearAxis"}],"center":[{"id":"37390","type":"Grid"},{"id":"37395","type":"Grid"}],"left":[{"id":"37391","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"37412","type":"GlyphRenderer"},{"id":"37417","type":"GlyphRenderer"}],"title":{"id":"37376","type":"Title"},"toolbar":{"id":"37402","type":"Toolbar"},"x_range":{"id":"37378","type":"Range1d"},"x_scale":{"id":"37382","type":"LinearScale"},"y_range":{"id":"37380","type":"Range1d"},"y_scale":{"id":"37384","type":"LinearScale"}},"id":"37375","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37430","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"37428","type":"BasicTickFormatter"},"ticker":{"id":"37387","type":"BasicTicker"}},"id":"37386","type":"LinearAxis"},{"attributes":{"source":{"id":"37409","type":"ColumnDataSource"}},"id":"37413","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"37392","type":"BasicTicker"}},"id":"37395","type":"Grid"},{"attributes":{"line_alpha":{"value":0.4},"line_color":{"value":"red"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37415","type":"MultiLine"},{"attributes":{"callback":null,"end":10},"id":"37380","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37416","type":"MultiLine"},{"attributes":{},"id":"37396","type":"PanTool"},{"attributes":{},"id":"37432","type":"UnionRenderers"},{"attributes":{"callback":null,"end":10},"id":"37378","type":"Range1d"},{"attributes":{"text":"Poly Draw Tool"},"id":"37376","type":"Title"},{"attributes":{},"id":"37426","type":"BasicTickFormatter"},{"attributes":{"renderers":[{"id":"37412","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"37419","type":"PolyDrawTool"},{"attributes":{"overlay":{"id":"37433","type":"BoxAnnotation"}},"id":"37398","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"xs":[[1,9]],"ys":[[5,5]]},"selected":{"id":"37431","type":"Selection"},"selection_policy":{"id":"37432","type":"UnionRenderers"}},"id":"37414","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"37409","type":"ColumnDataSource"},"glyph":{"id":"37410","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37411","type":"Patches"},"selection_glyph":null,"view":{"id":"37413","type":"CDSView"}},"id":"37412","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"37426","type":"BasicTickFormatter"},"ticker":{"id":"37392","type":"BasicTicker"}},"id":"37391","type":"LinearAxis"},{"attributes":{},"id":"37400","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37433","type":"BoxAnnotation"},{"attributes":{},"id":"37382","type":"LinearScale"},{"attributes":{},"id":"37392","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"xs":[[2,5,8]],"ys":[[2,8,2]]},"selected":{"id":"37429","type":"Selection"},"selection_policy":{"id":"37430","type":"UnionRenderers"}},"id":"37409","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.4},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37410","type":"Patches"}],"root_ids":["37375"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"78694cdb-cb6a-4107-8373-f492a6824f3c","roots":{"37375":"9a31f44c-aa7b-4145-9ccc-359debb33442"}}];
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