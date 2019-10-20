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
      };var element = document.getElementById("adf768ea-4238-40fa-b3f6-db5fd489e3b9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'adf768ea-4238-40fa-b3f6-db5fd489e3b9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8242bfaa-eebf-488b-8c56-77c5a833e2a8":{"roots":{"references":[{"attributes":{"formatter":{"id":"22206","type":"BasicTickFormatter"},"ticker":{"id":"22178","type":"BasicTicker"}},"id":"22177","type":"LinearAxis"},{"attributes":{},"id":"22146","type":"BasicTicker"},{"attributes":{},"id":"22152","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22182","type":"BoxSelectTool"},{"id":"22183","type":"HoverTool"},{"id":"22184","type":"ResetTool"}]},"id":"22185","type":"Toolbar"},{"attributes":{"text":""},"id":"22194","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22159","type":"Circle"},{"attributes":{"callback":null},"id":"22134","type":"DataRange1d"},{"attributes":{},"id":"22178","type":"BasicTicker"},{"attributes":{},"id":"22184","type":"ResetTool"},{"attributes":{"filters":[{"id":"22129","type":"IndexFilter"}],"source":{"id":"22128","type":"ColumnDataSource"}},"id":"22130","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22160","type":"Circle"},{"attributes":{"tools":[{"id":"22150","type":"BoxSelectTool"},{"id":"22151","type":"HoverTool"},{"id":"22152","type":"ResetTool"},{"id":"22182","type":"BoxSelectTool"},{"id":"22183","type":"HoverTool"},{"id":"22184","type":"ResetTool"}]},"id":"22215","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"22216","type":"ToolbarBox"},{"id":"22214","type":"GridBox"}]},"id":"22217","type":"Column"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"22200","type":"Selection"},"selection_policy":{"id":"22201","type":"UnionRenderers"}},"id":"22128","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22191","type":"Circle"},{"attributes":{"formatter":{"id":"22196","type":"BasicTickFormatter"},"ticker":{"id":"22146","type":"BasicTicker"}},"id":"22145","type":"LinearAxis"},{"attributes":{"data_source":{"id":"22128","type":"ColumnDataSource"},"glyph":{"id":"22190","type":"Circle"},"hover_glyph":{"id":"22192","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22191","type":"Circle"},"selection_glyph":null,"view":{"id":"22130","type":"CDSView"}},"id":"22193","type":"GlyphRenderer"},{"attributes":{},"id":"22168","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22190","type":"Circle"},{"attributes":{"data_source":{"id":"22128","type":"ColumnDataSource"},"glyph":{"id":"22158","type":"Circle"},"hover_glyph":{"id":"22160","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22159","type":"Circle"},"selection_glyph":null,"view":{"id":"22162","type":"CDSView"}},"id":"22161","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"22198","type":"BasicTickFormatter"},"ticker":{"id":"22141","type":"BasicTicker"}},"id":"22140","type":"LinearAxis"},{"attributes":{},"id":"22196","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"22215","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22216","type":"ToolbarBox"},{"attributes":{"text":""},"id":"22204","type":"Title"},{"attributes":{"callback":null},"id":"22132","type":"DataRange1d"},{"attributes":{},"id":"22170","type":"LinearScale"},{"attributes":{},"id":"22208","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22158","type":"Circle"},{"attributes":{"callback":null},"id":"22183","type":"HoverTool"},{"attributes":{"formatter":{"id":"22208","type":"BasicTickFormatter"},"ticker":{"id":"22173","type":"BasicTicker"}},"id":"22172","type":"LinearAxis"},{"attributes":{},"id":"22138","type":"LinearScale"},{"attributes":{"callback":null},"id":"22164","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"22202","type":"BoxAnnotation"}},"id":"22150","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22202","type":"BoxAnnotation"},{"attributes":{},"id":"22141","type":"BasicTicker"},{"attributes":{"ticker":{"id":"22173","type":"BasicTicker"}},"id":"22176","type":"Grid"},{"attributes":{"indices":[0,2,4]},"id":"22129","type":"IndexFilter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22192","type":"Circle"},{"attributes":{"callback":null},"id":"22166","type":"DataRange1d"},{"attributes":{},"id":"22200","type":"Selection"},{"attributes":{"below":[{"id":"22140","type":"LinearAxis"}],"center":[{"id":"22144","type":"Grid"},{"id":"22149","type":"Grid"}],"left":[{"id":"22145","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22161","type":"GlyphRenderer"}],"title":{"id":"22194","type":"Title"},"toolbar":{"id":"22153","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22132","type":"DataRange1d"},"x_scale":{"id":"22136","type":"LinearScale"},"y_range":{"id":"22134","type":"DataRange1d"},"y_scale":{"id":"22138","type":"LinearScale"}},"id":"22131","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"22131","subtype":"Figure","type":"Plot"},0,0],[{"id":"22163","subtype":"Figure","type":"Plot"},0,1]]},"id":"22214","type":"GridBox"},{"attributes":{"source":{"id":"22128","type":"ColumnDataSource"}},"id":"22162","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"22212","type":"BoxAnnotation"}},"id":"22182","type":"BoxSelectTool"},{"attributes":{},"id":"22201","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22212","type":"BoxAnnotation"},{"attributes":{},"id":"22173","type":"BasicTicker"},{"attributes":{"below":[{"id":"22172","type":"LinearAxis"}],"center":[{"id":"22176","type":"Grid"},{"id":"22181","type":"Grid"}],"left":[{"id":"22177","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22193","type":"GlyphRenderer"}],"title":{"id":"22204","type":"Title"},"toolbar":{"id":"22185","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22164","type":"DataRange1d"},"x_scale":{"id":"22168","type":"LinearScale"},"y_range":{"id":"22166","type":"DataRange1d"},"y_scale":{"id":"22170","type":"LinearScale"}},"id":"22163","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"22141","type":"BasicTicker"}},"id":"22144","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22150","type":"BoxSelectTool"},{"id":"22151","type":"HoverTool"},{"id":"22152","type":"ResetTool"}]},"id":"22153","type":"Toolbar"},{"attributes":{},"id":"22206","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"22151","type":"HoverTool"},{"attributes":{"dimension":1,"ticker":{"id":"22178","type":"BasicTicker"}},"id":"22181","type":"Grid"},{"attributes":{},"id":"22136","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"22146","type":"BasicTicker"}},"id":"22149","type":"Grid"},{"attributes":{},"id":"22198","type":"BasicTickFormatter"}],"root_ids":["22217"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"8242bfaa-eebf-488b-8c56-77c5a833e2a8","roots":{"22217":"adf768ea-4238-40fa-b3f6-db5fd489e3b9"}}];
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