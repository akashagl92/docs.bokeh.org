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
      };var element = document.getElementById("7ecd441f-5578-4a9a-86a0-d56f59ff7378");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7ecd441f-5578-4a9a-86a0-d56f59ff7378' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"fd201d10-fccd-47b2-aa27-b2b67555e2f7":{"roots":{"references":[{"attributes":{"callback":null},"id":"db9d894e-075c-4957-aade-cce478123193","type":"DataRange1d"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"0ac2d042-ab41-4794-bc6e-d8a834794f11","type":"Patches"},{"attributes":{"data_source":{"id":"88a6eb0a-70d7-4457-bac4-47cddfa10a5b","type":"ColumnDataSource"},"glyph":{"id":"0ac2d042-ab41-4794-bc6e-d8a834794f11","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8aa61a6e-4b50-4542-8e9f-2d21a3ec26eb","type":"Patches"},"selection_glyph":null,"view":{"id":"b642476d-b8a4-4050-b761-8131fb0a5680","type":"CDSView"}},"id":"fc0d40c7-7970-4c7a-91dd-385d2a10639f","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b3b6bffa-ef93-461d-a3fd-c33b9444ab88","type":"DataRange1d"},{"attributes":{},"id":"f0de4f6c-33c5-4a23-a05f-9fea8fa9aaf2","type":"LinearScale"},{"attributes":{},"id":"5ffc59ba-dd29-46c7-9828-4680506e6279","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"107fb085-1c64-4280-9697-24c598ba7cf3","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd10c975-e764-4965-be0e-b31d4b8a7b0f","type":"BasicTicker"}},"id":"c815d7ef-d5fa-4cf4-9c21-088c35813298","type":"Grid"},{"attributes":{"formatter":{"id":"a6a2cf95-acc2-4b5c-bcf8-4db2169fee80","type":"BasicTickFormatter"},"plot":{"id":"107fb085-1c64-4280-9697-24c598ba7cf3","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd10c975-e764-4965-be0e-b31d4b8a7b0f","type":"BasicTicker"}},"id":"b429ddc3-252a-4feb-90f8-e3592c2409f0","type":"LinearAxis"},{"attributes":{"source":{"id":"88a6eb0a-70d7-4457-bac4-47cddfa10a5b","type":"ColumnDataSource"}},"id":"b642476d-b8a4-4050-b761-8131fb0a5680","type":"CDSView"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color","line_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"88a6eb0a-70d7-4457-bac4-47cddfa10a5b","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4388dcf6-1588-4808-bd8a-6d29e289abc8","type":"BoxAnnotation"},{"attributes":{},"id":"fd820536-03f5-43e0-b4be-9307e742e635","type":"LinearScale"},{"attributes":{},"id":"4ece6fe6-7f08-4d0e-8242-d5a305b1dd90","type":"SaveTool"},{"attributes":{"plot":{"id":"107fb085-1c64-4280-9697-24c598ba7cf3","subtype":"Figure","type":"Plot"},"ticker":{"id":"16f0d4be-26e4-4698-b7d3-ea8088372b73","type":"BasicTicker"}},"id":"a5f2cb15-e1b4-4f14-868e-2acad99e7b98","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"67252d3c-4640-4fdf-a5a0-6f2cf13d1b2a","type":"PanTool"},{"id":"4ad51076-ef75-4c8b-9595-7f7888399303","type":"WheelZoomTool"},{"id":"f32adc1e-1411-47a7-a70c-9edfbee834a0","type":"BoxZoomTool"},{"id":"4ece6fe6-7f08-4d0e-8242-d5a305b1dd90","type":"SaveTool"},{"id":"f6319a0e-84f2-4399-8021-b06987d7166b","type":"ResetTool"},{"id":"5ffc59ba-dd29-46c7-9828-4680506e6279","type":"HelpTool"}]},"id":"c3d714d3-1d69-447f-b2f3-a2e863d019cd","type":"Toolbar"},{"attributes":{},"id":"67252d3c-4640-4fdf-a5a0-6f2cf13d1b2a","type":"PanTool"},{"attributes":{"overlay":{"id":"4388dcf6-1588-4808-bd8a-6d29e289abc8","type":"BoxAnnotation"}},"id":"f32adc1e-1411-47a7-a70c-9edfbee834a0","type":"BoxZoomTool"},{"attributes":{},"id":"16f0d4be-26e4-4698-b7d3-ea8088372b73","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4dc6294e-db34-4237-8a9c-52bf21b007a3","type":"BasicTickFormatter"},"plot":{"id":"107fb085-1c64-4280-9697-24c598ba7cf3","subtype":"Figure","type":"Plot"},"ticker":{"id":"16f0d4be-26e4-4698-b7d3-ea8088372b73","type":"BasicTicker"}},"id":"8894f1e5-35ab-4f67-a0db-578984d88d6c","type":"LinearAxis"},{"attributes":{},"id":"4ad51076-ef75-4c8b-9595-7f7888399303","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"8aa61a6e-4b50-4542-8e9f-2d21a3ec26eb","type":"Patches"},{"attributes":{"below":[{"id":"8894f1e5-35ab-4f67-a0db-578984d88d6c","type":"LinearAxis"}],"left":[{"id":"b429ddc3-252a-4feb-90f8-e3592c2409f0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8894f1e5-35ab-4f67-a0db-578984d88d6c","type":"LinearAxis"},{"id":"a5f2cb15-e1b4-4f14-868e-2acad99e7b98","type":"Grid"},{"id":"b429ddc3-252a-4feb-90f8-e3592c2409f0","type":"LinearAxis"},{"id":"c815d7ef-d5fa-4cf4-9c21-088c35813298","type":"Grid"},{"id":"4388dcf6-1588-4808-bd8a-6d29e289abc8","type":"BoxAnnotation"},{"id":"fc0d40c7-7970-4c7a-91dd-385d2a10639f","type":"GlyphRenderer"}],"title":{"id":"cb92f046-3935-43b1-b0a5-5add5e3b8ec3","type":"Title"},"toolbar":{"id":"c3d714d3-1d69-447f-b2f3-a2e863d019cd","type":"Toolbar"},"x_range":{"id":"b3b6bffa-ef93-461d-a3fd-c33b9444ab88","type":"DataRange1d"},"x_scale":{"id":"f0de4f6c-33c5-4a23-a05f-9fea8fa9aaf2","type":"LinearScale"},"y_range":{"id":"db9d894e-075c-4957-aade-cce478123193","type":"DataRange1d"},"y_scale":{"id":"fd820536-03f5-43e0-b4be-9307e742e635","type":"LinearScale"}},"id":"107fb085-1c64-4280-9697-24c598ba7cf3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fd10c975-e764-4965-be0e-b31d4b8a7b0f","type":"BasicTicker"},{"attributes":{},"id":"4dc6294e-db34-4237-8a9c-52bf21b007a3","type":"BasicTickFormatter"},{"attributes":{},"id":"a6a2cf95-acc2-4b5c-bcf8-4db2169fee80","type":"BasicTickFormatter"},{"attributes":{},"id":"f6319a0e-84f2-4399-8021-b06987d7166b","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"cb92f046-3935-43b1-b0a5-5add5e3b8ec3","type":"Title"}],"root_ids":["107fb085-1c64-4280-9697-24c598ba7cf3"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"fd201d10-fccd-47b2-aa27-b2b67555e2f7","elementid":"7ecd441f-5578-4a9a-86a0-d56f59ff7378","modelid":"107fb085-1c64-4280-9697-24c598ba7cf3"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
