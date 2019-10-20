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
      };var element = document.getElementById("2b890b17-f64a-43e4-9209-b675defd28ff");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2b890b17-f64a-43e4-9209-b675defd28ff' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f4f82f47-3378-4d45-b6c0-491301ec85e6":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37540","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":10},"id":"37480","type":"Range1d"},{"attributes":{},"id":"37501","type":"HelpTool"},{"attributes":{"callback":null,"data":{"xs":[],"ys":[]},"selected":{"id":"37534","type":"Selection"},"selection_policy":{"id":"37535","type":"UnionRenderers"}},"id":"37509","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"37492","type":"BasicTicker"}},"id":"37495","type":"Grid"},{"attributes":{"overlay":{"id":"37540","type":"BoxAnnotation"}},"id":"37498","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":10},"id":"37478","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"green"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37515","type":"Patches"},{"attributes":{},"id":"37533","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"37509","type":"ColumnDataSource"}},"id":"37513","type":"CDSView"},{"attributes":{"source":{"id":"37519","type":"ColumnDataSource"}},"id":"37523","type":"CDSView"},{"attributes":{},"id":"37538","type":"Selection"},{"attributes":{"below":[{"id":"37486","type":"LinearAxis"}],"center":[{"id":"37490","type":"Grid"},{"id":"37495","type":"Grid"}],"left":[{"id":"37491","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"37512","type":"GlyphRenderer"},{"id":"37517","type":"GlyphRenderer"},{"id":"37522","type":"GlyphRenderer"}],"title":{"id":"37476","type":"Title"},"toolbar":{"id":"37502","type":"Toolbar"},"x_range":{"id":"37478","type":"Range1d"},"x_scale":{"id":"37482","type":"LinearScale"},"y_range":{"id":"37480","type":"Range1d"},"y_scale":{"id":"37484","type":"LinearScale"}},"id":"37475","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37500","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37511","type":"Patches"},{"attributes":{"renderers":[{"id":"37512","type":"GlyphRenderer"},{"id":"37517","type":"GlyphRenderer"}],"vertex_renderer":{"id":"37522","type":"GlyphRenderer"}},"id":"37525","type":"PolyEditTool"},{"attributes":{"renderers":[{"id":"37512","type":"GlyphRenderer"},{"id":"37517","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"37524","type":"PolyDrawTool"},{"attributes":{"formatter":{"id":"37531","type":"BasicTickFormatter"},"ticker":{"id":"37492","type":"BasicTicker"}},"id":"37491","type":"LinearAxis"},{"attributes":{"active_drag":{"id":"37525","type":"PolyEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37496","type":"PanTool"},{"id":"37497","type":"WheelZoomTool"},{"id":"37498","type":"BoxZoomTool"},{"id":"37499","type":"SaveTool"},{"id":"37500","type":"ResetTool"},{"id":"37501","type":"HelpTool"},{"id":"37524","type":"PolyDrawTool"},{"id":"37525","type":"PolyEditTool"}]},"id":"37502","type":"Toolbar"},{"attributes":{"data_source":{"id":"37514","type":"ColumnDataSource"},"glyph":{"id":"37515","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37516","type":"Patches"},"selection_glyph":null,"view":{"id":"37518","type":"CDSView"}},"id":"37517","type":"GlyphRenderer"},{"attributes":{},"id":"37531","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37510","type":"Patches"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37520","type":"Circle"},{"attributes":{},"id":"37534","type":"Selection"},{"attributes":{"ticker":{"id":"37487","type":"BasicTicker"}},"id":"37490","type":"Grid"},{"attributes":{},"id":"37487","type":"BasicTicker"},{"attributes":{},"id":"37535","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37516","type":"Patches"},{"attributes":{},"id":"37484","type":"LinearScale"},{"attributes":{},"id":"37497","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"37533","type":"BasicTickFormatter"},"ticker":{"id":"37487","type":"BasicTicker"}},"id":"37486","type":"LinearAxis"},{"attributes":{},"id":"37496","type":"PanTool"},{"attributes":{},"id":"37536","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37521","type":"Circle"},{"attributes":{},"id":"37492","type":"BasicTicker"},{"attributes":{},"id":"37499","type":"SaveTool"},{"attributes":{},"id":"37537","type":"UnionRenderers"},{"attributes":{"text":"Poly Edit Tool"},"id":"37476","type":"Title"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"37538","type":"Selection"},"selection_policy":{"id":"37539","type":"UnionRenderers"}},"id":"37519","type":"ColumnDataSource"},{"attributes":{},"id":"37482","type":"LinearScale"},{"attributes":{"data_source":{"id":"37519","type":"ColumnDataSource"},"glyph":{"id":"37520","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37521","type":"Circle"},"selection_glyph":null,"view":{"id":"37523","type":"CDSView"}},"id":"37522","type":"GlyphRenderer"},{"attributes":{"source":{"id":"37514","type":"ColumnDataSource"}},"id":"37518","type":"CDSView"},{"attributes":{},"id":"37539","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"37509","type":"ColumnDataSource"},"glyph":{"id":"37510","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37511","type":"Patches"},"selection_glyph":null,"view":{"id":"37513","type":"CDSView"}},"id":"37512","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"xs":[[1,2,3]],"ys":[[3,5,2]]},"selected":{"id":"37536","type":"Selection"},"selection_policy":{"id":"37537","type":"UnionRenderers"}},"id":"37514","type":"ColumnDataSource"}],"root_ids":["37475"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"f4f82f47-3378-4d45-b6c0-491301ec85e6","roots":{"37475":"2b890b17-f64a-43e4-9209-b675defd28ff"}}];
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