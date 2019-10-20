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
      };var element = document.getElementById("a0d9f80f-d511-446e-a0ee-465c60b9e7f0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0d9f80f-d511-446e-a0ee-465c60b9e7f0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"2eaa4a6c-2f5d-4844-929c-cb19010e71b1":{"roots":{"references":[{"attributes":{},"id":"abba340b-ace3-45f4-854f-fa9d4de4eb3b","type":"LinearScale"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"84e5be94-1ca2-440f-a0e5-5f1b5c2d1604","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"d0ed0692-0902-4125-86a4-88d042f7f285","type":"VBar"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"84e5be94-1ca2-440f-a0e5-5f1b5c2d1604","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"start":0},"id":"8d1127c8-0386-448b-b40a-ad7beaafd358","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":{"id":"a360cf0a-a34e-4d70-ba31-b3cbd4e67112","type":"Selection"},"selection_policy":{"id":"b67c22ac-9b06-4711-8f24-b19bde7bef32","type":"UnionRenderers"}},"id":"896b3bfe-8ab6-478d-8d50-f0fd91aecec4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"896b3bfe-8ab6-478d-8d50-f0fd91aecec4","type":"ColumnDataSource"},"glyph":{"id":"d0ed0692-0902-4125-86a4-88d042f7f285","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b2d7e847-aea0-4b5f-b59f-16c3feb4df2a","type":"VBar"},"selection_glyph":null,"view":{"id":"b3b460cd-8431-4e89-9d1c-6f10cf57c0a0","type":"CDSView"}},"id":"74c9d6cd-c3bd-4afa-a292-6c39b0448a44","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"900399ee-53e9-41e7-9450-9316fc859f8b","type":"FactorRange"},{"attributes":{"dimension":1,"plot":{"id":"539254cf-a0a1-413c-b872-f36dce71f18e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ec36d2fc-be95-4dc9-a4a0-dbb5468737f9","type":"BasicTicker"}},"id":"4de9bf6e-dede-46e3-986a-940abc9f16c3","type":"Grid"},{"attributes":{"formatter":{"id":"186bdb9b-91d8-4811-a10c-7b701e912d74","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"539254cf-a0a1-413c-b872-f36dce71f18e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9dac8c9b-0c65-4da1-8f3d-2675b902b48d","type":"CategoricalTicker"}},"id":"d2539ffb-e283-436b-bdba-7931aface1d8","type":"CategoricalAxis"},{"attributes":{},"id":"186bdb9b-91d8-4811-a10c-7b701e912d74","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"74baaf93-d22f-43a5-a0ee-1dafdb2d4659","type":"BasicTickFormatter"},"plot":{"id":"539254cf-a0a1-413c-b872-f36dce71f18e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ec36d2fc-be95-4dc9-a4a0-dbb5468737f9","type":"BasicTicker"}},"id":"4f3680c1-7a40-4c63-b39e-400d9a7cd8b1","type":"LinearAxis"},{"attributes":{},"id":"9dac8c9b-0c65-4da1-8f3d-2675b902b48d","type":"CategoricalTicker"},{"attributes":{},"id":"74baaf93-d22f-43a5-a0ee-1dafdb2d4659","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"539254cf-a0a1-413c-b872-f36dce71f18e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9dac8c9b-0c65-4da1-8f3d-2675b902b48d","type":"CategoricalTicker"}},"id":"45347b62-4f82-43aa-b8ec-53e040d081ed","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"b2d7e847-aea0-4b5f-b59f-16c3feb4df2a","type":"VBar"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"5700603c-651f-4de0-afae-edde741d7200","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"7ef57cb1-9b11-42e1-bcf2-82c4b2169e04","type":"Toolbar"},{"attributes":{},"id":"6d59be2b-e1c1-4f1a-96a4-d3ed93299ff4","type":"CategoricalScale"},{"attributes":{"source":{"id":"896b3bfe-8ab6-478d-8d50-f0fd91aecec4","type":"ColumnDataSource"}},"id":"b3b460cd-8431-4e89-9d1c-6f10cf57c0a0","type":"CDSView"},{"attributes":{},"id":"ec36d2fc-be95-4dc9-a4a0-dbb5468737f9","type":"BasicTicker"},{"attributes":{"below":[{"id":"d2539ffb-e283-436b-bdba-7931aface1d8","type":"CategoricalAxis"}],"left":[{"id":"4f3680c1-7a40-4c63-b39e-400d9a7cd8b1","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"d2539ffb-e283-436b-bdba-7931aface1d8","type":"CategoricalAxis"},{"id":"45347b62-4f82-43aa-b8ec-53e040d081ed","type":"Grid"},{"id":"4f3680c1-7a40-4c63-b39e-400d9a7cd8b1","type":"LinearAxis"},{"id":"4de9bf6e-dede-46e3-986a-940abc9f16c3","type":"Grid"},{"id":"74c9d6cd-c3bd-4afa-a292-6c39b0448a44","type":"GlyphRenderer"}],"title":{"id":"5700603c-651f-4de0-afae-edde741d7200","type":"Title"},"toolbar":{"id":"7ef57cb1-9b11-42e1-bcf2-82c4b2169e04","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"900399ee-53e9-41e7-9450-9316fc859f8b","type":"FactorRange"},"x_scale":{"id":"6d59be2b-e1c1-4f1a-96a4-d3ed93299ff4","type":"CategoricalScale"},"y_range":{"id":"8d1127c8-0386-448b-b40a-ad7beaafd358","type":"DataRange1d"},"y_scale":{"id":"abba340b-ace3-45f4-854f-fa9d4de4eb3b","type":"LinearScale"}},"id":"539254cf-a0a1-413c-b872-f36dce71f18e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b67c22ac-9b06-4711-8f24-b19bde7bef32","type":"UnionRenderers"},{"attributes":{},"id":"a360cf0a-a34e-4d70-ba31-b3cbd4e67112","type":"Selection"}],"root_ids":["539254cf-a0a1-413c-b872-f36dce71f18e"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"2eaa4a6c-2f5d-4844-929c-cb19010e71b1","roots":{"539254cf-a0a1-413c-b872-f36dce71f18e":"a0d9f80f-d511-446e-a0ee-465c60b9e7f0"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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