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
      };var element = document.getElementById("e878f2f3-e14b-4fbc-b491-949343bc43ee");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e878f2f3-e14b-4fbc-b491-949343bc43ee' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dcb5de69-35f5-4a8f-9080-d2c2e8ac5ea9":{"roots":{"references":[{"attributes":{},"id":"19119","type":"HelpTool"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"19136","type":"BasicTickFormatter"},"ticker":{"id":"19110","type":"BasicTicker"}},"id":"19109","type":"LinearAxis"},{"attributes":{"ticker":{"id":"19105","type":"BasicTicker"}},"id":"19108","type":"Grid"},{"attributes":{"text":"Dist. of 10th Grade Students at Lee High"},"id":"19095","type":"Title"},{"attributes":{},"id":"19141","type":"Selection"},{"attributes":{},"id":"19114","type":"PanTool"},{"attributes":{},"id":"19110","type":"BasicTicker"},{"attributes":{"below":[{"id":"19104","type":"LinearAxis"}],"center":[{"id":"19108","type":"Grid"},{"id":"19113","type":"Grid"},{"id":"19132","type":"LabelSet"},{"id":"19134","type":"Label"}],"left":[{"id":"19109","type":"LinearAxis"}],"renderers":[{"id":"19130","type":"GlyphRenderer"}],"title":{"id":"19095","type":"Title"},"toolbar":{"id":"19120","type":"Toolbar"},"x_range":{"id":"19093","type":"Range1d"},"x_scale":{"id":"19100","type":"LinearScale"},"y_range":{"id":"19098","type":"DataRange1d"},"y_scale":{"id":"19102","type":"LinearScale"}},"id":"19094","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"19129","type":"Scatter"},{"attributes":{},"id":"19142","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"19098","type":"DataRange1d"},{"attributes":{},"id":"19118","type":"ResetTool"},{"attributes":{"source":{"id":"19092","type":"ColumnDataSource"}},"id":"19131","type":"CDSView"},{"attributes":{},"id":"19117","type":"SaveTool"},{"attributes":{},"id":"19102","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"19110","type":"BasicTicker"}},"id":"19113","type":"Grid"},{"attributes":{"data_source":{"id":"19092","type":"ColumnDataSource"},"glyph":{"id":"19128","type":"Scatter"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19129","type":"Scatter"},"selection_glyph":null,"view":{"id":"19131","type":"CDSView"}},"id":"19130","type":"GlyphRenderer"},{"attributes":{},"id":"19105","type":"BasicTicker"},{"attributes":{"level":"glyph","source":{"id":"19092","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"19132","type":"LabelSet"},{"attributes":{},"id":"19115","type":"WheelZoomTool"},{"attributes":{},"id":"19100","type":"LinearScale"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"19138","type":"BasicTickFormatter"},"ticker":{"id":"19105","type":"BasicTicker"}},"id":"19104","type":"LinearAxis"},{"attributes":{"overlay":{"id":"19140","type":"BoxAnnotation"}},"id":"19116","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19114","type":"PanTool"},{"id":"19115","type":"WheelZoomTool"},{"id":"19116","type":"BoxZoomTool"},{"id":"19117","type":"SaveTool"},{"id":"19118","type":"ResetTool"},{"id":"19119","type":"HelpTool"}]},"id":"19120","type":"Toolbar"},{"attributes":{"callback":null,"end":275,"start":140},"id":"19093","type":"Range1d"},{"attributes":{},"id":"19136","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19140","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"19128","type":"Scatter"},{"attributes":{},"id":"19138","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"19134","type":"Label"},{"attributes":{"callback":null,"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]},"selected":{"id":"19141","type":"Selection"},"selection_policy":{"id":"19142","type":"UnionRenderers"}},"id":"19092","type":"ColumnDataSource"}],"root_ids":["19094"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"dcb5de69-35f5-4a8f-9080-d2c2e8ac5ea9","roots":{"19094":"e878f2f3-e14b-4fbc-b491-949343bc43ee"}}];
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