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
      };var element = document.getElementById("5b8a8a50-568e-47ed-9f77-f6d8058f2981");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5b8a8a50-568e-47ed-9f77-f6d8058f2981' but no matching script tag was found. ")
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
                    var docs_json = {"38da7fd0-6f1c-482d-82ec-c61314aaaad1":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"49439d1b-fa11-4b31-9605-c67d86ad8303","type":"Title"},{"attributes":{"data_source":{"id":"012720d2-eb75-42ce-980e-1607d1ed45cb","type":"ColumnDataSource"},"glyph":{"id":"1293c408-1d3f-4bf9-9ad3-dcad5f29e31b","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"484ea36c-af99-437d-bd92-dd4f464a5c22","type":"Square"},"selection_glyph":null,"view":{"id":"5580844e-a055-4bab-a003-f939ce45cb06","type":"CDSView"}},"id":"9ded32b5-5e81-4eef-92c5-952381fa9e58","type":"GlyphRenderer"},{"attributes":{},"id":"cefa5cb4-dbcd-4434-b821-edbd11c5d65d","type":"ResetTool"},{"attributes":{},"id":"e547d792-d3a0-483c-88c7-d17df75793ed","type":"BasicTicker"},{"attributes":{"overlay":{"id":"9ecf3084-64da-4cbd-91dc-50bb6dc45430","type":"BoxAnnotation"}},"id":"edab16f2-5c9e-4e4c-a718-de408b7051ca","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"012720d2-eb75-42ce-980e-1607d1ed45cb","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"a65227b7-277d-4c06-8bbc-e93c50479be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e547d792-d3a0-483c-88c7-d17df75793ed","type":"BasicTicker"}},"id":"66484cf2-bace-4be9-aa7b-160ff0836b86","type":"Grid"},{"attributes":{"below":[{"id":"272e99d2-39e0-468e-b4b0-9324c5af0e4e","type":"LinearAxis"}],"left":[{"id":"ef6d363f-f973-4af4-a538-73900213949b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"272e99d2-39e0-468e-b4b0-9324c5af0e4e","type":"LinearAxis"},{"id":"38d02229-9e99-4c39-a7e0-e98b33ff0180","type":"Grid"},{"id":"ef6d363f-f973-4af4-a538-73900213949b","type":"LinearAxis"},{"id":"66484cf2-bace-4be9-aa7b-160ff0836b86","type":"Grid"},{"id":"9ecf3084-64da-4cbd-91dc-50bb6dc45430","type":"BoxAnnotation"},{"id":"9ded32b5-5e81-4eef-92c5-952381fa9e58","type":"GlyphRenderer"}],"title":{"id":"49439d1b-fa11-4b31-9605-c67d86ad8303","type":"Title"},"toolbar":{"id":"3e9b05df-235c-42a7-a882-f2d77aad9e8b","type":"Toolbar"},"x_range":{"id":"c58f9d7d-0f90-4667-9d0f-fd03ae40e173","type":"DataRange1d"},"x_scale":{"id":"d210ad7a-acd4-4663-bedb-c61aef45fc17","type":"LinearScale"},"y_range":{"id":"20926d99-29b2-49d5-8f6b-ceb852269f63","type":"DataRange1d"},"y_scale":{"id":"d210db36-af1c-448a-8562-d635aff7c603","type":"LinearScale"}},"id":"a65227b7-277d-4c06-8bbc-e93c50479be6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d210db36-af1c-448a-8562-d635aff7c603","type":"LinearScale"},{"attributes":{},"id":"76c6c42a-01ae-4155-b298-fa6cd50736e6","type":"SaveTool"},{"attributes":{"callback":null},"id":"c58f9d7d-0f90-4667-9d0f-fd03ae40e173","type":"DataRange1d"},{"attributes":{"callback":null},"id":"20926d99-29b2-49d5-8f6b-ceb852269f63","type":"DataRange1d"},{"attributes":{},"id":"236ad211-fa51-43b8-bf9f-c53ea57943ab","type":"WheelZoomTool"},{"attributes":{},"id":"c6dd227e-c51b-48e3-bb70-d098f6ff2b30","type":"HelpTool"},{"attributes":{},"id":"d210ad7a-acd4-4663-bedb-c61aef45fc17","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"484ea36c-af99-437d-bd92-dd4f464a5c22","type":"Square"},{"attributes":{},"id":"b108741f-3eab-48b7-bc48-cd866a80a89a","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9ecf3084-64da-4cbd-91dc-50bb6dc45430","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1293c408-1d3f-4bf9-9ad3-dcad5f29e31b","type":"Square"},{"attributes":{"source":{"id":"012720d2-eb75-42ce-980e-1607d1ed45cb","type":"ColumnDataSource"}},"id":"5580844e-a055-4bab-a003-f939ce45cb06","type":"CDSView"},{"attributes":{"formatter":{"id":"b575498b-541a-41cf-8722-40e733ec6dc7","type":"BasicTickFormatter"},"plot":{"id":"a65227b7-277d-4c06-8bbc-e93c50479be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fad12d6-7069-4a6a-8db5-ec454cc97a42","type":"BasicTicker"}},"id":"272e99d2-39e0-468e-b4b0-9324c5af0e4e","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9097c441-daa8-48e9-bf05-af2d1c288d4d","type":"PanTool"},{"id":"236ad211-fa51-43b8-bf9f-c53ea57943ab","type":"WheelZoomTool"},{"id":"edab16f2-5c9e-4e4c-a718-de408b7051ca","type":"BoxZoomTool"},{"id":"76c6c42a-01ae-4155-b298-fa6cd50736e6","type":"SaveTool"},{"id":"cefa5cb4-dbcd-4434-b821-edbd11c5d65d","type":"ResetTool"},{"id":"c6dd227e-c51b-48e3-bb70-d098f6ff2b30","type":"HelpTool"}]},"id":"3e9b05df-235c-42a7-a882-f2d77aad9e8b","type":"Toolbar"},{"attributes":{},"id":"b575498b-541a-41cf-8722-40e733ec6dc7","type":"BasicTickFormatter"},{"attributes":{},"id":"9097c441-daa8-48e9-bf05-af2d1c288d4d","type":"PanTool"},{"attributes":{},"id":"8fad12d6-7069-4a6a-8db5-ec454cc97a42","type":"BasicTicker"},{"attributes":{"plot":{"id":"a65227b7-277d-4c06-8bbc-e93c50479be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fad12d6-7069-4a6a-8db5-ec454cc97a42","type":"BasicTicker"}},"id":"38d02229-9e99-4c39-a7e0-e98b33ff0180","type":"Grid"},{"attributes":{"formatter":{"id":"b108741f-3eab-48b7-bc48-cd866a80a89a","type":"BasicTickFormatter"},"plot":{"id":"a65227b7-277d-4c06-8bbc-e93c50479be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e547d792-d3a0-483c-88c7-d17df75793ed","type":"BasicTicker"}},"id":"ef6d363f-f973-4af4-a538-73900213949b","type":"LinearAxis"}],"root_ids":["a65227b7-277d-4c06-8bbc-e93c50479be6"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"38da7fd0-6f1c-482d-82ec-c61314aaaad1","elementid":"5b8a8a50-568e-47ed-9f77-f6d8058f2981","modelid":"a65227b7-277d-4c06-8bbc-e93c50479be6"}];
                
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
