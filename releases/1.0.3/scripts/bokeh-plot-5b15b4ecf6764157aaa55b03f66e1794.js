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
      };var element = document.getElementById("b0cafcde-3cc3-4596-9209-031ba4264bb9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b0cafcde-3cc3-4596-9209-031ba4264bb9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"3b73f6d8-ba80-423f-8323-bf8519cd2485":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"8999","type":"Title"},{"attributes":{},"id":"8971","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8986","type":"Circle"},{"attributes":{"plot":{"id":"8951","subtype":"Figure","type":"Plot"},"ticker":{"id":"8961","type":"BasicTicker"}},"id":"8964","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8987","type":"Circle"},{"attributes":{"callback":null},"id":"8954","type":"DataRange1d"},{"attributes":{},"id":"8966","type":"BasicTicker"},{"attributes":{},"id":"8975","type":"HelpTool"},{"attributes":{"overlay":{"id":"8978","type":"BoxAnnotation"}},"id":"8972","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"8960","type":"LinearAxis"}],"left":[{"id":"8965","type":"LinearAxis"}],"renderers":[{"id":"8960","type":"LinearAxis"},{"id":"8964","type":"Grid"},{"id":"8965","type":"LinearAxis"},{"id":"8969","type":"Grid"},{"id":"8978","type":"BoxAnnotation"},{"id":"8988","type":"GlyphRenderer"},{"id":"8991","type":"Arrow"},{"id":"8994","type":"Arrow"},{"id":"8997","type":"Arrow"}],"title":{"id":"8999","type":"Title"},"toolbar":{"id":"8976","type":"Toolbar"},"x_range":{"id":"8952","type":"DataRange1d"},"x_scale":{"id":"8956","type":"LinearScale"},"y_range":{"id":"8954","type":"DataRange1d"},"y_scale":{"id":"8958","type":"LinearScale"}},"id":"8951","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"9001","type":"BasicTickFormatter"},"plot":{"id":"8951","subtype":"Figure","type":"Plot"},"ticker":{"id":"8966","type":"BasicTicker"}},"id":"8965","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8985","type":"ColumnDataSource"},"glyph":{"id":"8986","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8987","type":"Circle"},"selection_glyph":null,"view":{"id":"8989","type":"CDSView"}},"id":"8988","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]},"selected":{"id":"9006","type":"Selection"},"selection_policy":{"id":"9007","type":"UnionRenderers"}},"id":"8985","type":"ColumnDataSource"},{"attributes":{},"id":"9006","type":"Selection"},{"attributes":{},"id":"9001","type":"BasicTickFormatter"},{"attributes":{"end":{"id":"8993","type":"NormalHead"},"plot":{"id":"8951","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"8994","type":"Arrow"},{"attributes":{},"id":"9003","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9003","type":"BasicTickFormatter"},"plot":{"id":"8951","subtype":"Figure","type":"Plot"},"ticker":{"id":"8961","type":"BasicTicker"}},"id":"8960","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8951","subtype":"Figure","type":"Plot"},"ticker":{"id":"8966","type":"BasicTicker"}},"id":"8969","type":"Grid"},{"attributes":{},"id":"8973","type":"SaveTool"},{"attributes":{"plot":null,"size":35},"id":"8996","type":"VeeHead"},{"attributes":{"end":{"id":"8996","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"8951","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"8997","type":"Arrow"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8978","type":"BoxAnnotation"},{"attributes":{},"id":"8961","type":"BasicTicker"},{"attributes":{"source":{"id":"8985","type":"ColumnDataSource"}},"id":"8989","type":"CDSView"},{"attributes":{},"id":"9007","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8970","type":"PanTool"},{"id":"8971","type":"WheelZoomTool"},{"id":"8972","type":"BoxZoomTool"},{"id":"8973","type":"SaveTool"},{"id":"8974","type":"ResetTool"},{"id":"8975","type":"HelpTool"}]},"id":"8976","type":"Toolbar"},{"attributes":{},"id":"8956","type":"LinearScale"},{"attributes":{},"id":"8970","type":"PanTool"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"8990","type":"OpenHead"},{"attributes":{},"id":"8958","type":"LinearScale"},{"attributes":{"end":{"id":"8990","type":"OpenHead"},"plot":{"id":"8951","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"8991","type":"Arrow"},{"attributes":{},"id":"8974","type":"ResetTool"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"8993","type":"NormalHead"},{"attributes":{"callback":null},"id":"8952","type":"DataRange1d"}],"root_ids":["8951"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"3b73f6d8-ba80-423f-8323-bf8519cd2485","roots":{"8951":"b0cafcde-3cc3-4596-9209-031ba4264bb9"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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