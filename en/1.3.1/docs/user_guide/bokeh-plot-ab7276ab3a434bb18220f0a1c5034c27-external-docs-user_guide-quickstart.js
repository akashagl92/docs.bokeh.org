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
      };var element = document.getElementById("4606ed8f-057c-40a9-ba69-72b7a5c4d719");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4606ed8f-057c-40a9-ba69-72b7a5c4d719' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"95295e85-47ff-4ef6-8db9-affd3a8aead5":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"31096","type":"Line"},{"attributes":{},"id":"31076","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"31150","type":"GlyphRenderer"}]},"id":"31168","type":"LegendItem"},{"attributes":{"source":{"id":"31110","type":"ColumnDataSource"}},"id":"31114","type":"CDSView"},{"attributes":{},"id":"31045","type":"LinearScale"},{"attributes":{"source":{"id":"31081","type":"ColumnDataSource"}},"id":"31085","type":"CDSView"},{"attributes":{},"id":"31047","type":"LogScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"31149","type":"Line"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"31129","type":"Circle"},{"attributes":{},"id":"31185","type":"Selection"},{"attributes":{},"id":"31166","type":"Selection"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"31069","type":"Line"},{"attributes":{"source":{"id":"31128","type":"ColumnDataSource"}},"id":"31132","type":"CDSView"},{"attributes":{"data_source":{"id":"31094","type":"ColumnDataSource"},"glyph":{"id":"31095","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31096","type":"Line"},"selection_glyph":null,"view":{"id":"31098","type":"CDSView"}},"id":"31097","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"31130","type":"Circle"},{"attributes":{"axis_label":"sections","formatter":{"id":"31076","type":"BasicTickFormatter"},"ticker":{"id":"31050","type":"BasicTicker"}},"id":"31049","type":"LinearAxis"},{"attributes":{"source":{"id":"31068","type":"ColumnDataSource"}},"id":"31072","type":"CDSView"},{"attributes":{"source":{"id":"31147","type":"ColumnDataSource"}},"id":"31151","type":"CDSView"},{"attributes":{"below":[{"id":"31049","type":"LinearAxis"}],"center":[{"id":"31053","type":"Grid"},{"id":"31058","type":"Grid"},{"id":"31079","type":"Legend"}],"left":[{"id":"31054","type":"LogAxis"}],"renderers":[{"id":"31071","type":"GlyphRenderer"},{"id":"31084","type":"GlyphRenderer"},{"id":"31097","type":"GlyphRenderer"},{"id":"31113","type":"GlyphRenderer"},{"id":"31131","type":"GlyphRenderer"},{"id":"31150","type":"GlyphRenderer"}],"title":{"id":"31039","type":"Title"},"toolbar":{"id":"31063","type":"Toolbar"},"x_range":{"id":"31041","type":"DataRange1d"},"x_scale":{"id":"31045","type":"LinearScale"},"y_range":{"id":"31043","type":"Range1d"},"y_scale":{"id":"31047","type":"LogScale"}},"id":"31038","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"31107","type":"Selection"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"31097","type":"GlyphRenderer"}]},"id":"31109","type":"LegendItem"},{"attributes":{},"id":"31146","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"31110","type":"ColumnDataSource"},"glyph":{"id":"31111","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31112","type":"Line"},"selection_glyph":null,"view":{"id":"31114","type":"CDSView"}},"id":"31113","type":"GlyphRenderer"},{"attributes":{},"id":"31061","type":"ResetTool"},{"attributes":{"callback":null},"id":"31041","type":"DataRange1d"},{"attributes":{"overlay":{"id":"31078","type":"BoxAnnotation"}},"id":"31060","type":"BoxZoomTool"},{"attributes":{"text":"log axis example"},"id":"31039","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"31095","type":"Line"},{"attributes":{},"id":"31167","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"31070","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"31082","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":{"id":"31185","type":"Selection"},"selection_policy":{"id":"31186","type":"UnionRenderers"}},"id":"31147","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"31113","type":"GlyphRenderer"},{"id":"31131","type":"GlyphRenderer"}]},"id":"31127","type":"LegendItem"},{"attributes":{"data_source":{"id":"31068","type":"ColumnDataSource"},"glyph":{"id":"31069","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31070","type":"Line"},"selection_glyph":null,"view":{"id":"31072","type":"CDSView"}},"id":"31071","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"31166","type":"Selection"},"selection_policy":{"id":"31167","type":"UnionRenderers"}},"id":"31128","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"31107","type":"Selection"},"selection_policy":{"id":"31108","type":"UnionRenderers"}},"id":"31081","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"31112","type":"Line"},{"attributes":{},"id":"31125","type":"Selection"},{"attributes":{},"id":"31108","type":"UnionRenderers"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"31111","type":"Line"},{"attributes":{},"id":"31092","type":"Selection"},{"attributes":{},"id":"31186","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"31078","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"31055","type":"LogTicker"}},"id":"31058","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"31092","type":"Selection"},"selection_policy":{"id":"31093","type":"UnionRenderers"}},"id":"31068","type":"ColumnDataSource"},{"attributes":{},"id":"31050","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"31059","type":"PanTool"},{"id":"31060","type":"BoxZoomTool"},{"id":"31061","type":"ResetTool"},{"id":"31062","type":"SaveTool"}]},"id":"31063","type":"Toolbar"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"31043","type":"Range1d"},{"attributes":{"items":[{"id":"31080","type":"LegendItem"},{"id":"31109","type":"LegendItem"},{"id":"31127","type":"LegendItem"},{"id":"31168","type":"LegendItem"}]},"id":"31079","type":"Legend"},{"attributes":{"axis_label":"particles","formatter":{"id":"31074","type":"LogTickFormatter"},"ticker":{"id":"31055","type":"LogTicker"}},"id":"31054","type":"LogAxis"},{"attributes":{"data_source":{"id":"31147","type":"ColumnDataSource"},"glyph":{"id":"31148","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31149","type":"Line"},"selection_glyph":null,"view":{"id":"31151","type":"CDSView"}},"id":"31150","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"31128","type":"ColumnDataSource"},"glyph":{"id":"31129","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31130","type":"Circle"},"selection_glyph":null,"view":{"id":"31132","type":"CDSView"}},"id":"31131","type":"GlyphRenderer"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"31148","type":"Line"},{"attributes":{"source":{"id":"31094","type":"ColumnDataSource"}},"id":"31098","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"31145","type":"Selection"},"selection_policy":{"id":"31146","type":"UnionRenderers"}},"id":"31110","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"31071","type":"GlyphRenderer"},{"id":"31084","type":"GlyphRenderer"}]},"id":"31080","type":"LegendItem"},{"attributes":{},"id":"31145","type":"Selection"},{"attributes":{},"id":"31126","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"31081","type":"ColumnDataSource"},"glyph":{"id":"31082","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31083","type":"Circle"},"selection_glyph":null,"view":{"id":"31085","type":"CDSView"}},"id":"31084","type":"GlyphRenderer"},{"attributes":{},"id":"31093","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"31083","type":"Circle"},{"attributes":{},"id":"31059","type":"PanTool"},{"attributes":{"num_minor_ticks":10},"id":"31055","type":"LogTicker"},{"attributes":{"ticker":null},"id":"31074","type":"LogTickFormatter"},{"attributes":{"ticker":{"id":"31050","type":"BasicTicker"}},"id":"31053","type":"Grid"},{"attributes":{},"id":"31062","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"31125","type":"Selection"},"selection_policy":{"id":"31126","type":"UnionRenderers"}},"id":"31094","type":"ColumnDataSource"}],"root_ids":["31038"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"95295e85-47ff-4ef6-8db9-affd3a8aead5","roots":{"31038":"4606ed8f-057c-40a9-ba69-72b7a5c4d719"}}];
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