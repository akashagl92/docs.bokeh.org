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
      };var element = document.getElementById("65ac28c8-a869-4293-8b62-38adaf9842e9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '65ac28c8-a869-4293-8b62-38adaf9842e9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"d3b92d75-4d4b-4a07-9ec8-6e7419b735b8":{"roots":{"references":[{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"c006d2f2-dc37-4d4f-907a-9484aacf6cca","type":"Quad"},{"attributes":{},"id":"04eeec1d-5ecb-4e09-859c-40b5b4ddbfb8","type":"SaveTool"},{"attributes":{"below":[{"id":"4686273e-861e-4e1e-8495-290a2c041fc3","type":"LinearAxis"}],"left":[{"id":"9683e68d-0608-4aa6-9a69-5d889ab427eb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4686273e-861e-4e1e-8495-290a2c041fc3","type":"LinearAxis"},{"id":"7ad6127a-4331-4386-841f-c2f8c6c1ba59","type":"Grid"},{"id":"9683e68d-0608-4aa6-9a69-5d889ab427eb","type":"LinearAxis"},{"id":"4d653e41-c912-4ede-a9d7-e93f77ccc86c","type":"Grid"},{"id":"f87863d4-513e-43d0-82af-83782c36f1d8","type":"BoxAnnotation"},{"id":"5a154694-19a1-4edf-9c64-f82746a2d0c4","type":"GlyphRenderer"}],"title":{"id":"786777b7-b0e4-4d3b-89b6-3f40a630738a","type":"Title"},"toolbar":{"id":"e93ba6a0-9847-42c8-a16b-7a3ab4cf892f","type":"Toolbar"},"x_range":{"id":"3ac04b9e-3763-4bb3-b97b-bc6e76b44e67","type":"DataRange1d"},"x_scale":{"id":"d78ed1dd-b2a7-4449-ad28-5dfd59351f4d","type":"LinearScale"},"y_range":{"id":"eb357f68-8ed5-42a1-b861-1a3664ee4f39","type":"DataRange1d"},"y_scale":{"id":"d57d2208-07a8-43a9-b1fc-e607a0bf1aa2","type":"LinearScale"}},"id":"32056d21-969b-4a5c-9a75-041c9e372631","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"05516685-ad06-4e5b-a641-0273942f2a54","type":"ResetTool"},{"attributes":{"source":{"id":"08b15d3a-b940-42d8-bcc8-4eae78bb7abe","type":"ColumnDataSource"}},"id":"54486ec2-bab1-48d0-8727-d7d5796395a4","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b186d39a-a5c7-4e7a-8d09-9a52eba46218","type":"PanTool"},{"id":"7a9ba596-e927-4dcc-9cb2-a12a543743ad","type":"WheelZoomTool"},{"id":"2af2baab-fb49-4554-a607-2cd0e0ea95bd","type":"BoxZoomTool"},{"id":"04eeec1d-5ecb-4e09-859c-40b5b4ddbfb8","type":"SaveTool"},{"id":"05516685-ad06-4e5b-a641-0273942f2a54","type":"ResetTool"},{"id":"d3bfb299-d1d5-4e16-b4ea-7f58d31a9ad8","type":"HelpTool"}]},"id":"e93ba6a0-9847-42c8-a16b-7a3ab4cf892f","type":"Toolbar"},{"attributes":{"plot":{"id":"32056d21-969b-4a5c-9a75-041c9e372631","subtype":"Figure","type":"Plot"},"ticker":{"id":"a02ebfa2-603b-4e18-8976-7728ab2e158f","type":"BasicTicker"}},"id":"7ad6127a-4331-4386-841f-c2f8c6c1ba59","type":"Grid"},{"attributes":{"callback":null},"id":"3ac04b9e-3763-4bb3-b97b-bc6e76b44e67","type":"DataRange1d"},{"attributes":{},"id":"a02ebfa2-603b-4e18-8976-7728ab2e158f","type":"BasicTicker"},{"attributes":{},"id":"d3bfb299-d1d5-4e16-b4ea-7f58d31a9ad8","type":"HelpTool"},{"attributes":{"callback":null},"id":"eb357f68-8ed5-42a1-b861-1a3664ee4f39","type":"DataRange1d"},{"attributes":{},"id":"d78ed1dd-b2a7-4449-ad28-5dfd59351f4d","type":"LinearScale"},{"attributes":{},"id":"8b77399a-f4c7-4ba7-9d7c-ffd6703b0bb9","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"585003ad-075a-48e5-bbd4-41f31637f440","type":"BasicTickFormatter"},"plot":{"id":"32056d21-969b-4a5c-9a75-041c9e372631","subtype":"Figure","type":"Plot"},"ticker":{"id":"750baaf6-b0cc-426f-8e20-e2cc91e08493","type":"BasicTicker"}},"id":"9683e68d-0608-4aa6-9a69-5d889ab427eb","type":"LinearAxis"},{"attributes":{},"id":"d57d2208-07a8-43a9-b1fc-e607a0bf1aa2","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"2c3b3fa3-c0e0-4808-a603-a08357201bbb","type":"Quad"},{"attributes":{"formatter":{"id":"8b77399a-f4c7-4ba7-9d7c-ffd6703b0bb9","type":"BasicTickFormatter"},"plot":{"id":"32056d21-969b-4a5c-9a75-041c9e372631","subtype":"Figure","type":"Plot"},"ticker":{"id":"a02ebfa2-603b-4e18-8976-7728ab2e158f","type":"BasicTicker"}},"id":"4686273e-861e-4e1e-8495-290a2c041fc3","type":"LinearAxis"},{"attributes":{},"id":"750baaf6-b0cc-426f-8e20-e2cc91e08493","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["left","right","top","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"08b15d3a-b940-42d8-bcc8-4eae78bb7abe","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"32056d21-969b-4a5c-9a75-041c9e372631","subtype":"Figure","type":"Plot"},"ticker":{"id":"750baaf6-b0cc-426f-8e20-e2cc91e08493","type":"BasicTicker"}},"id":"4d653e41-c912-4ede-a9d7-e93f77ccc86c","type":"Grid"},{"attributes":{},"id":"585003ad-075a-48e5-bbd4-41f31637f440","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"f87863d4-513e-43d0-82af-83782c36f1d8","type":"BoxAnnotation"}},"id":"2af2baab-fb49-4554-a607-2cd0e0ea95bd","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"08b15d3a-b940-42d8-bcc8-4eae78bb7abe","type":"ColumnDataSource"},"glyph":{"id":"c006d2f2-dc37-4d4f-907a-9484aacf6cca","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2c3b3fa3-c0e0-4808-a603-a08357201bbb","type":"Quad"},"selection_glyph":null,"view":{"id":"54486ec2-bab1-48d0-8727-d7d5796395a4","type":"CDSView"}},"id":"5a154694-19a1-4edf-9c64-f82746a2d0c4","type":"GlyphRenderer"},{"attributes":{},"id":"7a9ba596-e927-4dcc-9cb2-a12a543743ad","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f87863d4-513e-43d0-82af-83782c36f1d8","type":"BoxAnnotation"},{"attributes":{},"id":"b186d39a-a5c7-4e7a-8d09-9a52eba46218","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"786777b7-b0e4-4d3b-89b6-3f40a630738a","type":"Title"}],"root_ids":["32056d21-969b-4a5c-9a75-041c9e372631"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d3b92d75-4d4b-4a07-9ec8-6e7419b735b8","elementid":"65ac28c8-a869-4293-8b62-38adaf9842e9","modelid":"32056d21-969b-4a5c-9a75-041c9e372631"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
