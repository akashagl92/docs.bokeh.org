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
      };var element = document.getElementById("d61442a3-549f-4f5e-982c-53059c95e19d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd61442a3-549f-4f5e-982c-53059c95e19d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cc1507c7-0744-4769-9a7e-981798653822":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"30285","type":"Annulus"},{"attributes":{},"id":"30262","type":"BasicTicker"},{"attributes":{},"id":"30274","type":"SaveTool"},{"attributes":{"source":{"id":"30284","type":"ColumnDataSource"}},"id":"30288","type":"CDSView"},{"attributes":{},"id":"30259","type":"LinearScale"},{"attributes":{},"id":"30271","type":"PanTool"},{"attributes":{"data_source":{"id":"30284","type":"ColumnDataSource"},"glyph":{"id":"30285","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30286","type":"Annulus"},"selection_glyph":null,"view":{"id":"30288","type":"CDSView"}},"id":"30287","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"30267","type":"BasicTicker"}},"id":"30270","type":"Grid"},{"attributes":{},"id":"30276","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"30296","type":"Selection"},"selection_policy":{"id":"30297","type":"UnionRenderers"}},"id":"30284","type":"ColumnDataSource"},{"attributes":{},"id":"30291","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"30295","type":"BoxAnnotation"}},"id":"30273","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"30253","type":"DataRange1d"},{"attributes":{},"id":"30296","type":"Selection"},{"attributes":{"formatter":{"id":"30293","type":"BasicTickFormatter"},"ticker":{"id":"30262","type":"BasicTicker"}},"id":"30261","type":"LinearAxis"},{"attributes":{"ticker":{"id":"30262","type":"BasicTicker"}},"id":"30265","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30295","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"30286","type":"Annulus"},{"attributes":{},"id":"30297","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30271","type":"PanTool"},{"id":"30272","type":"WheelZoomTool"},{"id":"30273","type":"BoxZoomTool"},{"id":"30274","type":"SaveTool"},{"id":"30275","type":"ResetTool"},{"id":"30276","type":"HelpTool"}]},"id":"30277","type":"Toolbar"},{"attributes":{},"id":"30257","type":"LinearScale"},{"attributes":{},"id":"30267","type":"BasicTicker"},{"attributes":{},"id":"30275","type":"ResetTool"},{"attributes":{"below":[{"id":"30261","type":"LinearAxis"}],"center":[{"id":"30265","type":"Grid"},{"id":"30270","type":"Grid"}],"left":[{"id":"30266","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30287","type":"GlyphRenderer"}],"title":{"id":"30290","type":"Title"},"toolbar":{"id":"30277","type":"Toolbar"},"x_range":{"id":"30253","type":"DataRange1d"},"x_scale":{"id":"30257","type":"LinearScale"},"y_range":{"id":"30255","type":"DataRange1d"},"y_scale":{"id":"30259","type":"LinearScale"}},"id":"30252","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30293","type":"BasicTickFormatter"},{"attributes":{},"id":"30272","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"30290","type":"Title"},{"attributes":{"formatter":{"id":"30291","type":"BasicTickFormatter"},"ticker":{"id":"30267","type":"BasicTicker"}},"id":"30266","type":"LinearAxis"},{"attributes":{"callback":null},"id":"30255","type":"DataRange1d"}],"root_ids":["30252"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"cc1507c7-0744-4769-9a7e-981798653822","roots":{"30252":"d61442a3-549f-4f5e-982c-53059c95e19d"}}];
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