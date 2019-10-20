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
      };var element = document.getElementById("b1a38685-5e10-43f0-b59d-22bd8098798e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b1a38685-5e10-43f0-b59d-22bd8098798e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b79241d8-c2eb-4e98-9723-653766dd7f7b":{"roots":{"references":[{"attributes":{},"id":"26322","type":"PanTool"},{"attributes":{"below":[{"id":"26312","type":"LinearAxis"}],"center":[{"id":"26316","type":"Grid"},{"id":"26321","type":"Grid"}],"left":[{"id":"26317","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"26338","type":"GlyphRenderer"}],"title":{"id":"26344","type":"Title"},"toolbar":{"id":"26328","type":"Toolbar"},"x_range":{"id":"26304","type":"DataRange1d"},"x_scale":{"id":"26308","type":"LinearScale"},"y_range":{"id":"26306","type":"DataRange1d"},"y_scale":{"id":"26310","type":"LinearScale"}},"id":"26303","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26323","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"26313","type":"BasicTicker"}},"id":"26316","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"26318","type":"BasicTicker"}},"id":"26321","type":"Grid"},{"attributes":{"callback":null},"id":"26304","type":"DataRange1d"},{"attributes":{"formatter":{"id":"26346","type":"BasicTickFormatter"},"ticker":{"id":"26318","type":"BasicTicker"}},"id":"26317","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26306","type":"DataRange1d"},{"attributes":{},"id":"26325","type":"SaveTool"},{"attributes":{},"id":"26308","type":"LinearScale"},{"attributes":{},"id":"26318","type":"BasicTicker"},{"attributes":{},"id":"26326","type":"ResetTool"},{"attributes":{},"id":"26348","type":"BasicTickFormatter"},{"attributes":{},"id":"26349","type":"Selection"},{"attributes":{"formatter":{"id":"26348","type":"BasicTickFormatter"},"ticker":{"id":"26313","type":"BasicTicker"}},"id":"26312","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26337","type":"Circle"},{"attributes":{},"id":"26327","type":"HelpTool"},{"attributes":{},"id":"26310","type":"LinearScale"},{"attributes":{"data_source":{"id":"26335","type":"ColumnDataSource"},"glyph":{"id":"26336","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26337","type":"Circle"},"selection_glyph":null,"view":{"id":"26339","type":"CDSView"}},"id":"26338","type":"GlyphRenderer"},{"attributes":{},"id":"26313","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26351","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"26351","type":"BoxAnnotation"}},"id":"26324","type":"BoxZoomTool"},{"attributes":{"source":{"id":"26335","type":"ColumnDataSource"}},"id":"26339","type":"CDSView"},{"attributes":{},"id":"26350","type":"UnionRenderers"},{"attributes":{"callback":null,"end":2,"js_property_callbacks":{"change:value":[{"id":"26341","type":"CustomJS"}]},"start":0.1,"step":0.01,"value":0.2},"id":"26340","type":"Slider"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[3,2,5,6,4]},"selected":{"id":"26349","type":"Selection"},"selection_policy":{"id":"26350","type":"UnionRenderers"}},"id":"26335","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"26344","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26322","type":"PanTool"},{"id":"26323","type":"WheelZoomTool"},{"id":"26324","type":"BoxZoomTool"},{"id":"26325","type":"SaveTool"},{"id":"26326","type":"ResetTool"},{"id":"26327","type":"HelpTool"}]},"id":"26328","type":"Toolbar"},{"attributes":{"args":{"other":{"id":"26336","type":"Circle"}},"code":"other.radius = this.value"},"id":"26341","type":"CustomJS"},{"attributes":{},"id":"26346","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"26336","type":"Circle"},{"attributes":{"children":[{"id":"26303","subtype":"Figure","type":"Plot"},{"id":"26340","type":"Slider"}]},"id":"26342","type":"Column"}],"root_ids":["26342"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"b79241d8-c2eb-4e98-9723-653766dd7f7b","roots":{"26342":"b1a38685-5e10-43f0-b59d-22bd8098798e"}}];
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