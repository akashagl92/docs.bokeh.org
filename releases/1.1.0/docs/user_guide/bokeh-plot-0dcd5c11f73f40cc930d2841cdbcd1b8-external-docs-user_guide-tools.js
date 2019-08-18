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
      };var element = document.getElementById("1e016f3c-14ba-472b-9b97-46d40b8879d9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1e016f3c-14ba-472b-9b97-46d40b8879d9' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"3952ffd1-58dc-457f-8ed7-25ed896a7f1b":{"roots":{"references":[{"attributes":{},"id":"35932","type":"Selection"},{"attributes":{},"id":"35884","type":"LinearScale"},{"attributes":{"callback":null,"end":10},"id":"35882","type":"Range1d"},{"attributes":{"overlay":{"id":"35935","type":"BoxAnnotation"}},"id":"35900","type":"BoxZoomTool"},{"attributes":{},"id":"35933","type":"UnionRenderers"},{"attributes":{},"id":"35901","type":"SaveTool"},{"attributes":{},"id":"35934","type":"Selection"},{"attributes":{"callback":null,"end":10},"id":"35880","type":"Range1d"},{"attributes":{},"id":"35902","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35935","type":"BoxAnnotation"},{"attributes":{},"id":"35903","type":"HelpTool"},{"attributes":{"active_drag":{"id":"35921","type":"PolyDrawTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35898","type":"PanTool"},{"id":"35899","type":"WheelZoomTool"},{"id":"35900","type":"BoxZoomTool"},{"id":"35901","type":"SaveTool"},{"id":"35902","type":"ResetTool"},{"id":"35903","type":"HelpTool"},{"id":"35921","type":"PolyDrawTool"},{"id":"35922","type":"PolyDrawTool"}]},"id":"35904","type":"Toolbar"},{"attributes":{},"id":"35899","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"35911","type":"ColumnDataSource"},"glyph":{"id":"35912","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35913","type":"Patches"},"selection_glyph":null,"view":{"id":"35915","type":"CDSView"}},"id":"35914","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35911","type":"ColumnDataSource"}},"id":"35915","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.4},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35912","type":"Patches"},{"attributes":{"callback":null,"data":{"xs":[[1,9]],"ys":[[5,5]]},"selected":{"id":"35934","type":"Selection"},"selection_policy":{"id":"35933","type":"UnionRenderers"}},"id":"35916","type":"ColumnDataSource"},{"attributes":{},"id":"35886","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.4},"line_color":{"value":"red"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35917","type":"MultiLine"},{"attributes":{"formatter":{"id":"35930","type":"BasicTickFormatter"},"ticker":{"id":"35889","type":"BasicTicker"}},"id":"35888","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35918","type":"MultiLine"},{"attributes":{"text":"Poly Draw Tool"},"id":"35878","type":"Title"},{"attributes":{},"id":"35889","type":"BasicTicker"},{"attributes":{"data_source":{"id":"35916","type":"ColumnDataSource"},"glyph":{"id":"35917","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35918","type":"MultiLine"},"selection_glyph":null,"view":{"id":"35920","type":"CDSView"}},"id":"35919","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35913","type":"Patches"},{"attributes":{"ticker":{"id":"35889","type":"BasicTicker"}},"id":"35892","type":"Grid"},{"attributes":{"source":{"id":"35916","type":"ColumnDataSource"}},"id":"35920","type":"CDSView"},{"attributes":{"below":[{"id":"35888","type":"LinearAxis"}],"center":[{"id":"35892","type":"Grid"},{"id":"35897","type":"Grid"}],"left":[{"id":"35893","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"35914","type":"GlyphRenderer"},{"id":"35919","type":"GlyphRenderer"}],"title":{"id":"35878","type":"Title"},"toolbar":{"id":"35904","type":"Toolbar"},"x_range":{"id":"35880","type":"Range1d"},"x_scale":{"id":"35884","type":"LinearScale"},"y_range":{"id":"35882","type":"Range1d"},"y_scale":{"id":"35886","type":"LinearScale"}},"id":"35877","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"35928","type":"BasicTickFormatter"},"ticker":{"id":"35894","type":"BasicTicker"}},"id":"35893","type":"LinearAxis"},{"attributes":{"renderers":[{"id":"35914","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"35921","type":"PolyDrawTool"},{"attributes":{},"id":"35894","type":"BasicTicker"},{"attributes":{"renderers":[{"id":"35919","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"35922","type":"PolyDrawTool"},{"attributes":{"dimension":1,"ticker":{"id":"35894","type":"BasicTicker"}},"id":"35897","type":"Grid"},{"attributes":{},"id":"35928","type":"BasicTickFormatter"},{"attributes":{},"id":"35930","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"xs":[[2,5,8]],"ys":[[2,8,2]]},"selected":{"id":"35932","type":"Selection"},"selection_policy":{"id":"35931","type":"UnionRenderers"}},"id":"35911","type":"ColumnDataSource"},{"attributes":{},"id":"35931","type":"UnionRenderers"},{"attributes":{},"id":"35898","type":"PanTool"}],"root_ids":["35877"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"3952ffd1-58dc-457f-8ed7-25ed896a7f1b","roots":{"35877":"1e016f3c-14ba-472b-9b97-46d40b8879d9"}}];
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