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
      };var element = document.getElementById("85a1e066-a5b7-4356-8201-e133282a2137");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85a1e066-a5b7-4356-8201-e133282a2137' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"3a7e4acd-befe-401b-8138-3f18d50f5daf":{"roots":{"references":[{"attributes":{"below":[{"id":"20045","type":"CategoricalAxis"}],"left":[{"id":"20049","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"20045","type":"CategoricalAxis"},{"id":"20048","type":"Grid"},{"id":"20049","type":"LinearAxis"},{"id":"20053","type":"Grid"},{"id":"20059","type":"GlyphRenderer"}],"title":{"id":"20035","type":"Title"},"toolbar":{"id":"20054","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20034","type":"FactorRange"},"x_scale":{"id":"20041","type":"CategoricalScale"},"y_range":{"id":"20039","type":"DataRange1d"},"y_scale":{"id":"20043","type":"LinearScale"}},"id":"20036","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"20058","type":"VBar"},{"attributes":{},"id":"20046","type":"CategoricalTicker"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"20055","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"20057","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"20039","type":"DataRange1d"},{"attributes":{},"id":"20043","type":"LinearScale"},{"attributes":{"callback":null,"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":{"id":"20066","type":"Selection"},"selection_policy":{"id":"20067","type":"UnionRenderers"}},"id":"20033","type":"ColumnDataSource"},{"attributes":{},"id":"20066","type":"Selection"},{"attributes":{},"id":"20050","type":"BasicTicker"},{"attributes":{},"id":"20067","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"20035","type":"Title"},{"attributes":{},"id":"20065","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"20033","type":"ColumnDataSource"}},"id":"20060","type":"CDSView"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"20034","type":"FactorRange"},{"attributes":{},"id":"20063","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20054","type":"Toolbar"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"20055","type":"CategoricalColorMapper"},{"attributes":{"data_source":{"id":"20033","type":"ColumnDataSource"},"glyph":{"id":"20057","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20058","type":"VBar"},"selection_glyph":null,"view":{"id":"20060","type":"CDSView"}},"id":"20059","type":"GlyphRenderer"},{"attributes":{},"id":"20041","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"20036","subtype":"Figure","type":"Plot"},"ticker":{"id":"20046","type":"CategoricalTicker"}},"id":"20048","type":"Grid"},{"attributes":{"formatter":{"id":"20065","type":"BasicTickFormatter"},"plot":{"id":"20036","subtype":"Figure","type":"Plot"},"ticker":{"id":"20050","type":"BasicTicker"}},"id":"20049","type":"LinearAxis"},{"attributes":{"formatter":{"id":"20063","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"20036","subtype":"Figure","type":"Plot"},"ticker":{"id":"20046","type":"CategoricalTicker"}},"id":"20045","type":"CategoricalAxis"},{"attributes":{"dimension":1,"plot":{"id":"20036","subtype":"Figure","type":"Plot"},"ticker":{"id":"20050","type":"BasicTicker"}},"id":"20053","type":"Grid"}],"root_ids":["20036"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"3a7e4acd-befe-401b-8138-3f18d50f5daf","roots":{"20036":"85a1e066-a5b7-4356-8201-e133282a2137"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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