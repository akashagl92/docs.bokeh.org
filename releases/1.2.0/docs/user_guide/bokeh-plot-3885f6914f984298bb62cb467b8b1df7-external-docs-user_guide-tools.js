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
      };var element = document.getElementById("eff6e668-d7c0-4695-a420-06e65b230332");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'eff6e668-d7c0-4695-a420-06e65b230332' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"22639283-0dd9-4a04-b0dd-1480688a8c5f":{"roots":{"references":[{"attributes":{"below":[{"id":"37459","type":"LinearAxis"}],"center":[{"id":"37463","type":"Grid"},{"id":"37468","type":"Grid"}],"left":[{"id":"37464","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"37485","type":"GlyphRenderer"},{"id":"37490","type":"GlyphRenderer"},{"id":"37495","type":"GlyphRenderer"}],"title":{"id":"37449","type":"Title"},"toolbar":{"id":"37475","type":"Toolbar"},"x_range":{"id":"37451","type":"Range1d"},"x_scale":{"id":"37455","type":"LinearScale"},"y_range":{"id":"37453","type":"Range1d"},"y_scale":{"id":"37457","type":"LinearScale"}},"id":"37448","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37489","type":"Patches"},{"attributes":{"source":{"id":"37487","type":"ColumnDataSource"}},"id":"37491","type":"CDSView"},{"attributes":{},"id":"37474","type":"HelpTool"},{"attributes":{"callback":null,"end":10},"id":"37451","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37483","type":"Patches"},{"attributes":{},"id":"37511","type":"Selection"},{"attributes":{},"id":"37505","type":"BasicTickFormatter"},{"attributes":{"active_drag":{"id":"37498","type":"PolyEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37469","type":"PanTool"},{"id":"37470","type":"WheelZoomTool"},{"id":"37471","type":"BoxZoomTool"},{"id":"37472","type":"SaveTool"},{"id":"37473","type":"ResetTool"},{"id":"37474","type":"HelpTool"},{"id":"37497","type":"PolyDrawTool"},{"id":"37498","type":"PolyEditTool"}]},"id":"37475","type":"Toolbar"},{"attributes":{"data_source":{"id":"37487","type":"ColumnDataSource"},"glyph":{"id":"37488","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37489","type":"Patches"},"selection_glyph":null,"view":{"id":"37491","type":"CDSView"}},"id":"37490","type":"GlyphRenderer"},{"attributes":{},"id":"37509","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37484","type":"Patches"},{"attributes":{"source":{"id":"37492","type":"ColumnDataSource"}},"id":"37496","type":"CDSView"},{"attributes":{},"id":"37465","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"37465","type":"BasicTicker"}},"id":"37468","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37494","type":"Circle"},{"attributes":{"formatter":{"id":"37505","type":"BasicTickFormatter"},"ticker":{"id":"37460","type":"BasicTicker"}},"id":"37459","type":"LinearAxis"},{"attributes":{},"id":"37472","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37513","type":"BoxAnnotation"},{"attributes":{},"id":"37455","type":"LinearScale"},{"attributes":{},"id":"37473","type":"ResetTool"},{"attributes":{},"id":"37510","type":"UnionRenderers"},{"attributes":{},"id":"37457","type":"LinearScale"},{"attributes":{"text":"Poly Edit Tool"},"id":"37449","type":"Title"},{"attributes":{"callback":null,"end":10},"id":"37453","type":"Range1d"},{"attributes":{"ticker":{"id":"37460","type":"BasicTicker"}},"id":"37463","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"green"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37488","type":"Patches"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37493","type":"Circle"},{"attributes":{},"id":"37470","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"xs":[[1,2,3]],"ys":[[3,5,2]]},"selected":{"id":"37509","type":"Selection"},"selection_policy":{"id":"37510","type":"UnionRenderers"}},"id":"37487","type":"ColumnDataSource"},{"attributes":{"source":{"id":"37482","type":"ColumnDataSource"}},"id":"37486","type":"CDSView"},{"attributes":{},"id":"37503","type":"BasicTickFormatter"},{"attributes":{},"id":"37469","type":"PanTool"},{"attributes":{"overlay":{"id":"37513","type":"BoxAnnotation"}},"id":"37471","type":"BoxZoomTool"},{"attributes":{},"id":"37512","type":"UnionRenderers"},{"attributes":{},"id":"37507","type":"Selection"},{"attributes":{"callback":null,"data":{"xs":[],"ys":[]},"selected":{"id":"37507","type":"Selection"},"selection_policy":{"id":"37508","type":"UnionRenderers"}},"id":"37482","type":"ColumnDataSource"},{"attributes":{},"id":"37508","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"37482","type":"ColumnDataSource"},"glyph":{"id":"37483","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37484","type":"Patches"},"selection_glyph":null,"view":{"id":"37486","type":"CDSView"}},"id":"37485","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"37492","type":"ColumnDataSource"},"glyph":{"id":"37493","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37494","type":"Circle"},"selection_glyph":null,"view":{"id":"37496","type":"CDSView"}},"id":"37495","type":"GlyphRenderer"},{"attributes":{},"id":"37460","type":"BasicTicker"},{"attributes":{"renderers":[{"id":"37485","type":"GlyphRenderer"},{"id":"37490","type":"GlyphRenderer"}],"vertex_renderer":{"id":"37495","type":"GlyphRenderer"}},"id":"37498","type":"PolyEditTool"},{"attributes":{"callback":null,"data":{"x":[],"y":[]},"selected":{"id":"37511","type":"Selection"},"selection_policy":{"id":"37512","type":"UnionRenderers"}},"id":"37492","type":"ColumnDataSource"},{"attributes":{"renderers":[{"id":"37485","type":"GlyphRenderer"},{"id":"37490","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"37497","type":"PolyDrawTool"},{"attributes":{"formatter":{"id":"37503","type":"BasicTickFormatter"},"ticker":{"id":"37465","type":"BasicTicker"}},"id":"37464","type":"LinearAxis"}],"root_ids":["37448"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"22639283-0dd9-4a04-b0dd-1480688a8c5f","roots":{"37448":"eff6e668-d7c0-4695-a420-06e65b230332"}}];
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