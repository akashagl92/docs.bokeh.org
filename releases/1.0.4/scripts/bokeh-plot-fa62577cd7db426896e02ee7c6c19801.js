(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("147c90fe-cdc4-4b44-ac2d-3ecd4b65d739");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '147c90fe-cdc4-4b44-ac2d-3ecd4b65d739' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"5e66c5a6-ae7b-48b8-addf-64b53486a6cc":{"roots":{"references":[{"attributes":{"overlay":{"id":"12348","type":"BoxAnnotation"}},"id":"12342","type":"BoxZoomTool"},{"attributes":{},"id":"12344","type":"ResetTool"},{"attributes":{"plot":{"id":"12321","subtype":"Figure","type":"Plot"},"ticker":{"id":"12331","type":"BasicTicker"}},"id":"12334","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"12357","type":"Circle"},{"attributes":{"axis_label":"y","formatter":{"id":"12363","type":"BasicTickFormatter"},"plot":{"id":"12321","subtype":"Figure","type":"Plot"},"ticker":{"id":"12336","type":"BasicTicker"}},"id":"12335","type":"LinearAxis"},{"attributes":{"source":{"id":"12355","type":"ColumnDataSource"}},"id":"12359","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12340","type":"PanTool"},{"id":"12341","type":"WheelZoomTool"},{"id":"12342","type":"BoxZoomTool"},{"id":"12343","type":"SaveTool"},{"id":"12344","type":"ResetTool"},{"id":"12345","type":"HelpTool"}]},"id":"12346","type":"Toolbar"},{"attributes":{"axis_label":"x","formatter":{"id":"12365","type":"BasicTickFormatter"},"plot":{"id":"12321","subtype":"Figure","type":"Plot"},"ticker":{"id":"12331","type":"BasicTicker"}},"id":"12330","type":"LinearAxis"},{"attributes":{"gradient":2,"line_color":{"value":"orange"},"line_dash":[6],"line_width":{"value":3.5},"plot":{"id":"12321","subtype":"Figure","type":"Plot"},"y_intercept":10},"id":"12360","type":"Slope"},{"attributes":{},"id":"12363","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12348","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"12322","type":"DataRange1d"},{"attributes":{},"id":"12365","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"12355","type":"ColumnDataSource"},"glyph":{"id":"12356","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12357","type":"Circle"},"selection_glyph":null,"view":{"id":"12359","type":"CDSView"}},"id":"12358","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"12356","type":"Circle"},{"attributes":{},"id":"12340","type":"PanTool"},{"attributes":{},"id":"12336","type":"BasicTicker"},{"attributes":{},"id":"12328","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"12321","subtype":"Figure","type":"Plot"},"ticker":{"id":"12336","type":"BasicTicker"}},"id":"12339","type":"Grid"},{"attributes":{},"id":"12343","type":"SaveTool"},{"attributes":{"below":[{"id":"12330","type":"LinearAxis"}],"left":[{"id":"12335","type":"LinearAxis"}],"plot_height":450,"plot_width":450,"renderers":[{"id":"12330","type":"LinearAxis"},{"id":"12334","type":"Grid"},{"id":"12335","type":"LinearAxis"},{"id":"12339","type":"Grid"},{"id":"12348","type":"BoxAnnotation"},{"id":"12358","type":"GlyphRenderer"},{"id":"12360","type":"Slope"}],"title":{"id":"12361","type":"Title"},"toolbar":{"id":"12346","type":"Toolbar"},"x_range":{"id":"12322","type":"DataRange1d"},"x_scale":{"id":"12326","type":"LinearScale"},"y_range":{"id":"12324","type":"Range1d"},"y_scale":{"id":"12328","type":"LinearScale"}},"id":"12321","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12345","type":"HelpTool"},{"attributes":{},"id":"12331","type":"BasicTicker"},{"attributes":{"callback":null,"end":56.42758805644495},"id":"12324","type":"Range1d"},{"attributes":{},"id":"12368","type":"Selection"},{"attributes":{},"id":"12326","type":"LinearScale"},{"attributes":{},"id":"12341","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"y":{"__ndarray__":"eKpgSAcd9r9Aaqyin0gtQFRdDrt9oipArMmJLNUlOUAW4G4Et3oqQPPMD7RlpjZAOlyL4vFrNUA4jAqm8Yg8QGY+8q8MWDpARluP+WfqQUBkHgNl9iFAQFbNLsQKpkFAXEL1BWooQ0A/OimnCRVAQM6/B81Z5EJAfeR66N2CRkBhiimKS9JDQME8cI0NAkZA46HmjB6mSUBJbKFoJwdHQA==","dtype":"float64","shape":[20]}},"selected":{"id":"12368","type":"Selection"},"selection_policy":{"id":"12367","type":"UnionRenderers"}},"id":"12355","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"12361","type":"Title"},{"attributes":{},"id":"12367","type":"UnionRenderers"}],"root_ids":["12321"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"5e66c5a6-ae7b-48b8-addf-64b53486a6cc","roots":{"12321":"147c90fe-cdc4-4b44-ac2d-3ecd4b65d739"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();