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
      };var element = document.getElementById("dc48c1cb-bbe1-4462-a4e7-d5ff49c81529");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc48c1cb-bbe1-4462-a4e7-d5ff49c81529' but no matching script tag was found. ")
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
                    var docs_json = {"c2f369f8-745d-4c7f-9f4d-408319a6c4d3":{"roots":{"references":[{"attributes":{},"id":"11b52183-c2c6-4800-9260-992046cec5bc","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"008ceeaf-0bbb-468f-9060-633b85f1be93","type":"Square"},{"attributes":{},"id":"86ad6d02-e0ab-4a2a-b9d9-61285b126d41","type":"BasicTicker"},{"attributes":{"formatter":{"id":"401e3189-6fe3-490e-8192-8135a381ac7b","type":"BasicTickFormatter"},"plot":{"id":"9f094c1b-8510-4b45-bc85-14e88a33aaea","subtype":"Figure","type":"Plot"},"ticker":{"id":"11b52183-c2c6-4800-9260-992046cec5bc","type":"BasicTicker"}},"id":"7b18641a-f2c6-4f26-a24f-2abff0c65585","type":"LinearAxis"},{"attributes":{},"id":"401e3189-6fe3-490e-8192-8135a381ac7b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"400b1c2a-3fd9-4125-a8d0-a81299f58d47","type":"Square"},{"attributes":{"overlay":{"id":"6dee127f-b5bb-445b-807b-29c1c3b5527e","type":"BoxAnnotation"}},"id":"720903e4-5b72-48d9-95f6-21b3849bd522","type":"BoxZoomTool"},{"attributes":{},"id":"c452871f-380c-485a-be70-07c472d0b06c","type":"ResetTool"},{"attributes":{"source":{"id":"7d009019-037a-4f65-8a7f-088729bb4f24","type":"ColumnDataSource"}},"id":"a6726085-0f0f-46a1-89bc-a6482cddde11","type":"CDSView"},{"attributes":{"below":[{"id":"57c090f1-2c4b-4d97-9778-bd7ebb3243ec","type":"LinearAxis"}],"left":[{"id":"7b18641a-f2c6-4f26-a24f-2abff0c65585","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"57c090f1-2c4b-4d97-9778-bd7ebb3243ec","type":"LinearAxis"},{"id":"47e5aa53-c63a-4885-bfa5-13eeed2c33ce","type":"Grid"},{"id":"7b18641a-f2c6-4f26-a24f-2abff0c65585","type":"LinearAxis"},{"id":"c094f0b9-f243-47ec-991a-02e956d937fd","type":"Grid"},{"id":"6dee127f-b5bb-445b-807b-29c1c3b5527e","type":"BoxAnnotation"},{"id":"c152f445-3bd3-42ad-9a58-9f0a8ad0b99d","type":"GlyphRenderer"}],"title":{"id":"3702a009-4e3a-45c4-9295-fdb1ef9db6a0","type":"Title"},"toolbar":{"id":"4266164e-d361-46dc-9f9b-f54aa1345d8c","type":"Toolbar"},"x_range":{"id":"1f273ee0-ba63-4150-bde3-b32ca0a6e580","type":"DataRange1d"},"x_scale":{"id":"bac01d97-8a7e-422b-8a63-640f29567dd0","type":"LinearScale"},"y_range":{"id":"728e8a87-bc68-498e-9d93-ff1769ad26d8","type":"DataRange1d"},"y_scale":{"id":"07af861f-58c1-48f5-8576-e4a52b21de2a","type":"LinearScale"}},"id":"9f094c1b-8510-4b45-bc85-14e88a33aaea","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"bf7310d5-e863-44ee-8fca-9845747c7b0f","type":"SaveTool"},{"attributes":{"formatter":{"id":"2c879b69-c25a-4d55-ae7e-6127c6cd6999","type":"BasicTickFormatter"},"plot":{"id":"9f094c1b-8510-4b45-bc85-14e88a33aaea","subtype":"Figure","type":"Plot"},"ticker":{"id":"86ad6d02-e0ab-4a2a-b9d9-61285b126d41","type":"BasicTicker"}},"id":"57c090f1-2c4b-4d97-9778-bd7ebb3243ec","type":"LinearAxis"},{"attributes":{},"id":"ba9901a3-2231-40c7-8322-d427c9b22940","type":"HelpTool"},{"attributes":{"plot":{"id":"9f094c1b-8510-4b45-bc85-14e88a33aaea","subtype":"Figure","type":"Plot"},"ticker":{"id":"86ad6d02-e0ab-4a2a-b9d9-61285b126d41","type":"BasicTicker"}},"id":"47e5aa53-c63a-4885-bfa5-13eeed2c33ce","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a43fc608-ccaf-402a-8f2f-5a62e99fd9dc","type":"PanTool"},{"id":"3471df41-8335-44a1-9ad9-dcd999add701","type":"WheelZoomTool"},{"id":"720903e4-5b72-48d9-95f6-21b3849bd522","type":"BoxZoomTool"},{"id":"bf7310d5-e863-44ee-8fca-9845747c7b0f","type":"SaveTool"},{"id":"c452871f-380c-485a-be70-07c472d0b06c","type":"ResetTool"},{"id":"ba9901a3-2231-40c7-8322-d427c9b22940","type":"HelpTool"}]},"id":"4266164e-d361-46dc-9f9b-f54aa1345d8c","type":"Toolbar"},{"attributes":{"callback":null},"id":"728e8a87-bc68-498e-9d93-ff1769ad26d8","type":"DataRange1d"},{"attributes":{},"id":"3471df41-8335-44a1-9ad9-dcd999add701","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"7d009019-037a-4f65-8a7f-088729bb4f24","type":"ColumnDataSource"},{"attributes":{},"id":"2c879b69-c25a-4d55-ae7e-6127c6cd6999","type":"BasicTickFormatter"},{"attributes":{},"id":"bac01d97-8a7e-422b-8a63-640f29567dd0","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"3702a009-4e3a-45c4-9295-fdb1ef9db6a0","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"9f094c1b-8510-4b45-bc85-14e88a33aaea","subtype":"Figure","type":"Plot"},"ticker":{"id":"11b52183-c2c6-4800-9260-992046cec5bc","type":"BasicTicker"}},"id":"c094f0b9-f243-47ec-991a-02e956d937fd","type":"Grid"},{"attributes":{"data_source":{"id":"7d009019-037a-4f65-8a7f-088729bb4f24","type":"ColumnDataSource"},"glyph":{"id":"008ceeaf-0bbb-468f-9060-633b85f1be93","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"400b1c2a-3fd9-4125-a8d0-a81299f58d47","type":"Square"},"selection_glyph":null,"view":{"id":"a6726085-0f0f-46a1-89bc-a6482cddde11","type":"CDSView"}},"id":"c152f445-3bd3-42ad-9a58-9f0a8ad0b99d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6dee127f-b5bb-445b-807b-29c1c3b5527e","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"1f273ee0-ba63-4150-bde3-b32ca0a6e580","type":"DataRange1d"},{"attributes":{},"id":"07af861f-58c1-48f5-8576-e4a52b21de2a","type":"LinearScale"},{"attributes":{},"id":"a43fc608-ccaf-402a-8f2f-5a62e99fd9dc","type":"PanTool"}],"root_ids":["9f094c1b-8510-4b45-bc85-14e88a33aaea"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c2f369f8-745d-4c7f-9f4d-408319a6c4d3","elementid":"dc48c1cb-bbe1-4462-a4e7-d5ff49c81529","modelid":"9f094c1b-8510-4b45-bc85-14e88a33aaea"}];
                
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
