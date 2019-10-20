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
      };var element = document.getElementById("e22ba014-e882-47c1-adf5-b2e82802d73b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e22ba014-e882-47c1-adf5-b2e82802d73b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"db992962-96a4-4631-becf-9785a94bda2a":{"roots":{"references":[{"attributes":{},"id":"32060","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32100","type":"PanTool"},{"id":"32101","type":"WheelZoomTool"},{"id":"32102","type":"BoxZoomTool"},{"id":"32103","type":"SaveTool"},{"id":"32104","type":"ResetTool"},{"id":"32105","type":"HelpTool"}]},"id":"32106","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"32124","type":"Title"},{"attributes":{"plot":{"id":"32041","subtype":"Figure","type":"Plot"},"ticker":{"id":"32051","type":"BasicTicker"}},"id":"32054","type":"Grid"},{"attributes":{},"id":"32132","type":"BasicTickFormatter"},{"attributes":{},"id":"32086","type":"LinearScale"},{"attributes":{"plot":{"id":"32081","subtype":"Figure","type":"Plot"},"ticker":{"id":"32091","type":"BasicTicker"}},"id":"32094","type":"Grid"},{"attributes":{"source":{"id":"32115","type":"ColumnDataSource"}},"id":"32119","type":"CDSView"},{"attributes":{"below":[{"id":"32090","type":"LinearAxis"}],"left":[{"id":"32095","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32090","type":"LinearAxis"},{"id":"32094","type":"Grid"},{"id":"32095","type":"LinearAxis"},{"id":"32099","type":"Grid"},{"id":"32108","type":"BoxAnnotation"},{"id":"32118","type":"GlyphRenderer"}],"title":{"id":"32124","type":"Title"},"toolbar":{"id":"32106","type":"Toolbar"},"x_range":{"id":"32082","type":"DataRange1d"},"x_scale":{"id":"32086","type":"LinearScale"},"y_range":{"id":"32084","type":"DataRange1d"},"y_scale":{"id":"32088","type":"LinearScale"}},"id":"32081","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32128","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"32075","type":"ColumnDataSource"},"glyph":{"id":"32076","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32077","type":"Circle"},"selection_glyph":null,"view":{"id":"32079","type":"CDSView"}},"id":"32078","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"32108","type":"BoxAnnotation"}},"id":"32102","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"32116","type":"Line"},{"attributes":{},"id":"32096","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"32041","subtype":"Figure","type":"Plot"},"ticker":{"id":"32056","type":"BasicTicker"}},"id":"32059","type":"Grid"},{"attributes":{"callback":null,"tabs":[{"id":"32080","type":"Panel"},{"id":"32120","type":"Panel"}]},"id":"32121","type":"Tabs"},{"attributes":{},"id":"32104","type":"ResetTool"},{"attributes":{},"id":"32091","type":"BasicTicker"},{"attributes":{"below":[{"id":"32050","type":"LinearAxis"}],"left":[{"id":"32055","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32050","type":"LinearAxis"},{"id":"32054","type":"Grid"},{"id":"32055","type":"LinearAxis"},{"id":"32059","type":"Grid"},{"id":"32068","type":"BoxAnnotation"},{"id":"32078","type":"GlyphRenderer"}],"title":{"id":"32122","type":"Title"},"toolbar":{"id":"32066","type":"Toolbar"},"x_range":{"id":"32042","type":"DataRange1d"},"x_scale":{"id":"32046","type":"LinearScale"},"y_range":{"id":"32044","type":"DataRange1d"},"y_scale":{"id":"32048","type":"LinearScale"}},"id":"32041","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"32117","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"32081","subtype":"Figure","type":"Plot"},"ticker":{"id":"32096","type":"BasicTicker"}},"id":"32099","type":"Grid"},{"attributes":{"callback":null},"id":"32082","type":"DataRange1d"},{"attributes":{},"id":"32065","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32077","type":"Circle"},{"attributes":{},"id":"32101","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"32042","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32076","type":"Circle"},{"attributes":{},"id":"32135","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32068","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"32126","type":"BasicTickFormatter"},"plot":{"id":"32041","subtype":"Figure","type":"Plot"},"ticker":{"id":"32056","type":"BasicTicker"}},"id":"32055","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32108","type":"BoxAnnotation"},{"attributes":{},"id":"32048","type":"LinearScale"},{"attributes":{"child":{"id":"32081","subtype":"Figure","type":"Plot"},"title":"line"},"id":"32120","type":"Panel"},{"attributes":{"formatter":{"id":"32130","type":"BasicTickFormatter"},"plot":{"id":"32081","subtype":"Figure","type":"Plot"},"ticker":{"id":"32096","type":"BasicTicker"}},"id":"32095","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"32122","type":"Title"},{"attributes":{},"id":"32046","type":"LinearScale"},{"attributes":{},"id":"32064","type":"ResetTool"},{"attributes":{"formatter":{"id":"32128","type":"BasicTickFormatter"},"plot":{"id":"32041","subtype":"Figure","type":"Plot"},"ticker":{"id":"32051","type":"BasicTicker"}},"id":"32050","type":"LinearAxis"},{"attributes":{},"id":"32139","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"32044","type":"DataRange1d"},{"attributes":{},"id":"32100","type":"PanTool"},{"attributes":{},"id":"32138","type":"Selection"},{"attributes":{"child":{"id":"32041","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"32080","type":"Panel"},{"attributes":{},"id":"32088","type":"LinearScale"},{"attributes":{},"id":"32103","type":"SaveTool"},{"attributes":{},"id":"32063","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"32138","type":"Selection"},"selection_policy":{"id":"32139","type":"UnionRenderers"}},"id":"32115","type":"ColumnDataSource"},{"attributes":{"source":{"id":"32075","type":"ColumnDataSource"}},"id":"32079","type":"CDSView"},{"attributes":{"data_source":{"id":"32115","type":"ColumnDataSource"},"glyph":{"id":"32116","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32117","type":"Line"},"selection_glyph":null,"view":{"id":"32119","type":"CDSView"}},"id":"32118","type":"GlyphRenderer"},{"attributes":{},"id":"32126","type":"BasicTickFormatter"},{"attributes":{},"id":"32051","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"32135","type":"Selection"},"selection_policy":{"id":"32136","type":"UnionRenderers"}},"id":"32075","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"32084","type":"DataRange1d"},{"attributes":{"formatter":{"id":"32132","type":"BasicTickFormatter"},"plot":{"id":"32081","subtype":"Figure","type":"Plot"},"ticker":{"id":"32091","type":"BasicTicker"}},"id":"32090","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32060","type":"PanTool"},{"id":"32061","type":"WheelZoomTool"},{"id":"32062","type":"BoxZoomTool"},{"id":"32063","type":"SaveTool"},{"id":"32064","type":"ResetTool"},{"id":"32065","type":"HelpTool"}]},"id":"32066","type":"Toolbar"},{"attributes":{},"id":"32061","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"32068","type":"BoxAnnotation"}},"id":"32062","type":"BoxZoomTool"},{"attributes":{},"id":"32056","type":"BasicTicker"},{"attributes":{},"id":"32130","type":"BasicTickFormatter"},{"attributes":{},"id":"32105","type":"HelpTool"},{"attributes":{},"id":"32136","type":"UnionRenderers"}],"root_ids":["32121"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"db992962-96a4-4631-becf-9785a94bda2a","roots":{"32121":"e22ba014-e882-47c1-adf5-b2e82802d73b"}}];
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