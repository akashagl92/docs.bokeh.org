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
      };var element = document.getElementById("e12b20a0-e264-4f5f-8a4e-0b598ecd553d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e12b20a0-e264-4f5f-8a4e-0b598ecd553d' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"13c88010-adc9-4c5e-ae45-a32de2945be4":{"roots":{"references":[{"attributes":{},"id":"37365","type":"BasicTicker"},{"attributes":{},"id":"37360","type":"BasicTicker"},{"attributes":{"source":{"id":"37382","type":"ColumnDataSource"}},"id":"37386","type":"CDSView"},{"attributes":{},"id":"37405","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37384","type":"Patches"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.4},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37383","type":"Patches"},{"attributes":{"ticker":{"id":"37360","type":"BasicTicker"}},"id":"37363","type":"Grid"},{"attributes":{},"id":"37374","type":"HelpTool"},{"attributes":{"formatter":{"id":"37400","type":"BasicTickFormatter"},"ticker":{"id":"37360","type":"BasicTicker"}},"id":"37359","type":"LinearAxis"},{"attributes":{"active_drag":{"id":"37392","type":"PolyDrawTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37369","type":"PanTool"},{"id":"37370","type":"WheelZoomTool"},{"id":"37371","type":"BoxZoomTool"},{"id":"37372","type":"SaveTool"},{"id":"37373","type":"ResetTool"},{"id":"37374","type":"HelpTool"},{"id":"37392","type":"PolyDrawTool"},{"id":"37393","type":"PolyDrawTool"}]},"id":"37375","type":"Toolbar"},{"attributes":{"callback":null,"end":10},"id":"37353","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37389","type":"MultiLine"},{"attributes":{},"id":"37370","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"37365","type":"BasicTicker"}},"id":"37368","type":"Grid"},{"attributes":{},"id":"37357","type":"LinearScale"},{"attributes":{"source":{"id":"37387","type":"ColumnDataSource"}},"id":"37391","type":"CDSView"},{"attributes":{"data_source":{"id":"37387","type":"ColumnDataSource"},"glyph":{"id":"37388","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37389","type":"MultiLine"},"selection_glyph":null,"view":{"id":"37391","type":"CDSView"}},"id":"37390","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"xs":[[1,9]],"ys":[[5,5]]},"selected":{"id":"37404","type":"Selection"},"selection_policy":{"id":"37405","type":"UnionRenderers"}},"id":"37387","type":"ColumnDataSource"},{"attributes":{},"id":"37373","type":"ResetTool"},{"attributes":{},"id":"37372","type":"SaveTool"},{"attributes":{"text":"Poly Draw Tool"},"id":"37349","type":"Title"},{"attributes":{"callback":null,"end":10},"id":"37351","type":"Range1d"},{"attributes":{},"id":"37404","type":"Selection"},{"attributes":{"data_source":{"id":"37382","type":"ColumnDataSource"},"glyph":{"id":"37383","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37384","type":"Patches"},"selection_glyph":null,"view":{"id":"37386","type":"CDSView"}},"id":"37385","type":"GlyphRenderer"},{"attributes":{},"id":"37398","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"xs":[[2,5,8]],"ys":[[2,8,2]]},"selected":{"id":"37402","type":"Selection"},"selection_policy":{"id":"37403","type":"UnionRenderers"}},"id":"37382","type":"ColumnDataSource"},{"attributes":{},"id":"37369","type":"PanTool"},{"attributes":{"formatter":{"id":"37398","type":"BasicTickFormatter"},"ticker":{"id":"37365","type":"BasicTicker"}},"id":"37364","type":"LinearAxis"},{"attributes":{"overlay":{"id":"37406","type":"BoxAnnotation"}},"id":"37371","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.4},"line_color":{"value":"red"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37388","type":"MultiLine"},{"attributes":{"renderers":[{"id":"37385","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"37392","type":"PolyDrawTool"},{"attributes":{},"id":"37403","type":"UnionRenderers"},{"attributes":{"below":[{"id":"37359","type":"LinearAxis"}],"center":[{"id":"37363","type":"Grid"},{"id":"37368","type":"Grid"}],"left":[{"id":"37364","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"37385","type":"GlyphRenderer"},{"id":"37390","type":"GlyphRenderer"}],"title":{"id":"37349","type":"Title"},"toolbar":{"id":"37375","type":"Toolbar"},"x_range":{"id":"37351","type":"Range1d"},"x_scale":{"id":"37355","type":"LinearScale"},"y_range":{"id":"37353","type":"Range1d"},"y_scale":{"id":"37357","type":"LinearScale"}},"id":"37348","subtype":"Figure","type":"Plot"},{"attributes":{"renderers":[{"id":"37390","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"37393","type":"PolyDrawTool"},{"attributes":{},"id":"37402","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37406","type":"BoxAnnotation"},{"attributes":{},"id":"37355","type":"LinearScale"},{"attributes":{},"id":"37400","type":"BasicTickFormatter"}],"root_ids":["37348"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"13c88010-adc9-4c5e-ae45-a32de2945be4","roots":{"37348":"e12b20a0-e264-4f5f-8a4e-0b598ecd553d"}}];
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