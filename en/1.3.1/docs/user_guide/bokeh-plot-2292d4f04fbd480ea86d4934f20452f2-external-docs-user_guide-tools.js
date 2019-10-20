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
      };var element = document.getElementById("a303c630-faf8-45d2-8634-3778cbbe8175");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a303c630-faf8-45d2-8634-3778cbbe8175' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"c366be8a-d4aa-48eb-b47f-64e8431e1548":{"roots":{"references":[{"attributes":{"source":{"id":"37228","type":"ColumnDataSource"}},"id":"37233","type":"CDSView"},{"attributes":{},"id":"37201","type":"LinearScale"},{"attributes":{"text":"Box Edit Tool"},"id":"37195","type":"Title"},{"attributes":{"overlay":{"id":"37242","type":"BoxAnnotation"}},"id":"37217","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"37228","type":"ColumnDataSource"},"glyph":{"id":"37230","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37231","type":"Rect"},"selection_glyph":null,"view":{"id":"37233","type":"CDSView"}},"id":"37232","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"37199","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37231","type":"Rect"},{"attributes":{},"id":"37218","type":"SaveTool"},{"attributes":{},"id":"37243","type":"Selection"},{"attributes":{},"id":"37203","type":"LinearScale"},{"attributes":{},"id":"37219","type":"ResetTool"},{"attributes":{"callback":null,"data":{"alpha":[0.5,0.5,0.5],"height":[2,1,1.5],"width":[2,1,2],"x":[5,2,8],"y":[5,7,8]},"selected":{"id":"37243","type":"Selection"},"selection_policy":{"id":"37244","type":"UnionRenderers"}},"id":"37228","type":"ColumnDataSource"},{"attributes":{},"id":"37220","type":"HelpTool"},{"attributes":{},"id":"37244","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37242","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"37211","type":"BasicTicker"}},"id":"37214","type":"Grid"},{"attributes":{},"id":"37206","type":"BasicTicker"},{"attributes":{},"id":"37240","type":"BasicTickFormatter"},{"attributes":{},"id":"37211","type":"BasicTicker"},{"attributes":{"formatter":{"id":"37240","type":"BasicTickFormatter"},"ticker":{"id":"37206","type":"BasicTicker"}},"id":"37205","type":"LinearAxis"},{"attributes":{"callback":null,"end":10},"id":"37197","type":"Range1d"},{"attributes":{},"id":"37238","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"37206","type":"BasicTicker"}},"id":"37209","type":"Grid"},{"attributes":{"fill_alpha":{"field":"alpha"},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"field":"alpha"},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37230","type":"Rect"},{"attributes":{"formatter":{"id":"37238","type":"BasicTickFormatter"},"ticker":{"id":"37211","type":"BasicTicker"}},"id":"37210","type":"LinearAxis"},{"attributes":{"active_drag":{"id":"37234","type":"BoxEditTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37215","type":"PanTool"},{"id":"37216","type":"WheelZoomTool"},{"id":"37217","type":"BoxZoomTool"},{"id":"37218","type":"SaveTool"},{"id":"37219","type":"ResetTool"},{"id":"37220","type":"HelpTool"},{"id":"37234","type":"BoxEditTool"}]},"id":"37221","type":"Toolbar"},{"attributes":{},"id":"37215","type":"PanTool"},{"attributes":{"empty_value":1,"renderers":[{"id":"37232","type":"GlyphRenderer"}]},"id":"37234","type":"BoxEditTool"},{"attributes":{"below":[{"id":"37205","type":"LinearAxis"}],"center":[{"id":"37209","type":"Grid"},{"id":"37214","type":"Grid"}],"left":[{"id":"37210","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"37232","type":"GlyphRenderer"}],"title":{"id":"37195","type":"Title"},"toolbar":{"id":"37221","type":"Toolbar"},"x_range":{"id":"37197","type":"Range1d"},"x_scale":{"id":"37201","type":"LinearScale"},"y_range":{"id":"37199","type":"Range1d"},"y_scale":{"id":"37203","type":"LinearScale"}},"id":"37194","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37216","type":"WheelZoomTool"}],"root_ids":["37194"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"c366be8a-d4aa-48eb-b47f-64e8431e1548","roots":{"37194":"a303c630-faf8-45d2-8634-3778cbbe8175"}}];
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