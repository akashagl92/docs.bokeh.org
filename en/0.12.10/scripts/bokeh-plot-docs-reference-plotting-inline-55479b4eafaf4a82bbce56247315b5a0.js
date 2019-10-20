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
      };var element = document.getElementById("85d7ebbf-e154-4656-8a38-b9d917db68f0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85d7ebbf-e154-4656-8a38-b9d917db68f0' but no matching script tag was found. ")
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
                    var docs_json = {"f9d933d3-d965-4e92-b3a1-1743523b5ed3":{"roots":{"references":[{"attributes":{},"id":"4079cb2e-1508-41a0-ac18-6a7700bc2e12","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"98d2df8e-3c3a-45ac-8082-3e7d50b248b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b05b56c-5423-4530-8b32-5c76ed6a963e","type":"BasicTicker"}},"id":"7cb87aff-db6c-4015-be0a-759472a97f0c","type":"Grid"},{"attributes":{"formatter":{"id":"ed025526-576d-43a5-ba5e-74d0bb1c413b","type":"BasicTickFormatter"},"plot":{"id":"98d2df8e-3c3a-45ac-8082-3e7d50b248b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"78f08d5a-a437-466c-b894-8802f7466100","type":"BasicTicker"}},"id":"56c6e31f-b3d4-467f-b2c4-6f1928b3cd8e","type":"LinearAxis"},{"attributes":{"source":{"id":"47b88937-e9e5-4604-9fa5-1a537d364af4","type":"ColumnDataSource"}},"id":"a09adc34-c931-43a0-928b-5ee886559641","type":"CDSView"},{"attributes":{},"id":"78f08d5a-a437-466c-b894-8802f7466100","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"51afb8ca-b95e-44d6-801a-2469dc767c29","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"98d2df8e-3c3a-45ac-8082-3e7d50b248b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"78f08d5a-a437-466c-b894-8802f7466100","type":"BasicTicker"}},"id":"393e0b34-a0fc-4725-bf65-4100295d021e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c1b0ebb-0246-422c-9c86-8c98b2249002","type":"X"},{"attributes":{},"id":"ed025526-576d-43a5-ba5e-74d0bb1c413b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"47b88937-e9e5-4604-9fa5-1a537d364af4","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a6f8d5c5-fb83-479d-9c8a-65e92f6de6d1","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"6298a5b9-159c-4abd-91e7-8624734b2d14","type":"LinearAxis"}],"left":[{"id":"56c6e31f-b3d4-467f-b2c4-6f1928b3cd8e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6298a5b9-159c-4abd-91e7-8624734b2d14","type":"LinearAxis"},{"id":"7cb87aff-db6c-4015-be0a-759472a97f0c","type":"Grid"},{"id":"56c6e31f-b3d4-467f-b2c4-6f1928b3cd8e","type":"LinearAxis"},{"id":"393e0b34-a0fc-4725-bf65-4100295d021e","type":"Grid"},{"id":"a6f8d5c5-fb83-479d-9c8a-65e92f6de6d1","type":"BoxAnnotation"},{"id":"e6ba4362-4558-427f-a964-2c987ad67235","type":"GlyphRenderer"}],"title":{"id":"51afb8ca-b95e-44d6-801a-2469dc767c29","type":"Title"},"toolbar":{"id":"04b4e9c3-b934-400a-9366-25e3ac159228","type":"Toolbar"},"x_range":{"id":"201b3c0c-f89a-44bb-8471-2725a57c8b47","type":"DataRange1d"},"x_scale":{"id":"1fea8bfa-3eb7-48c7-99d7-ab5bda038795","type":"LinearScale"},"y_range":{"id":"6ea1bd43-d010-4a34-9b14-a23038822b52","type":"DataRange1d"},"y_scale":{"id":"ff79c509-b2ff-4454-8708-deb1e1a272a4","type":"LinearScale"}},"id":"98d2df8e-3c3a-45ac-8082-3e7d50b248b7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"401b6709-a792-4eb3-953d-da363e713cd9","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"401b6709-a792-4eb3-953d-da363e713cd9","type":"PanTool"},{"id":"5fa267ff-9d53-49d9-be45-b92eecf9adc7","type":"WheelZoomTool"},{"id":"8b10db77-befc-4c39-8b96-49f9298ea089","type":"BoxZoomTool"},{"id":"526ac07e-eca3-482e-a949-63df27deeeeb","type":"SaveTool"},{"id":"feb0980d-555b-4458-8857-8c951a058c13","type":"ResetTool"},{"id":"5958edfd-4479-423c-be2d-c7d44d28a494","type":"HelpTool"}]},"id":"04b4e9c3-b934-400a-9366-25e3ac159228","type":"Toolbar"},{"attributes":{"data_source":{"id":"47b88937-e9e5-4604-9fa5-1a537d364af4","type":"ColumnDataSource"},"glyph":{"id":"1e4d6eaa-2d3a-43ea-9e80-c7949b4b43b8","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9c1b0ebb-0246-422c-9c86-8c98b2249002","type":"X"},"selection_glyph":null,"view":{"id":"a09adc34-c931-43a0-928b-5ee886559641","type":"CDSView"}},"id":"e6ba4362-4558-427f-a964-2c987ad67235","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"201b3c0c-f89a-44bb-8471-2725a57c8b47","type":"DataRange1d"},{"attributes":{},"id":"5fa267ff-9d53-49d9-be45-b92eecf9adc7","type":"WheelZoomTool"},{"attributes":{},"id":"3b05b56c-5423-4530-8b32-5c76ed6a963e","type":"BasicTicker"},{"attributes":{"overlay":{"id":"a6f8d5c5-fb83-479d-9c8a-65e92f6de6d1","type":"BoxAnnotation"}},"id":"8b10db77-befc-4c39-8b96-49f9298ea089","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e4d6eaa-2d3a-43ea-9e80-c7949b4b43b8","type":"X"},{"attributes":{},"id":"526ac07e-eca3-482e-a949-63df27deeeeb","type":"SaveTool"},{"attributes":{"formatter":{"id":"4079cb2e-1508-41a0-ac18-6a7700bc2e12","type":"BasicTickFormatter"},"plot":{"id":"98d2df8e-3c3a-45ac-8082-3e7d50b248b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3b05b56c-5423-4530-8b32-5c76ed6a963e","type":"BasicTicker"}},"id":"6298a5b9-159c-4abd-91e7-8624734b2d14","type":"LinearAxis"},{"attributes":{},"id":"feb0980d-555b-4458-8857-8c951a058c13","type":"ResetTool"},{"attributes":{"callback":null},"id":"6ea1bd43-d010-4a34-9b14-a23038822b52","type":"DataRange1d"},{"attributes":{},"id":"5958edfd-4479-423c-be2d-c7d44d28a494","type":"HelpTool"},{"attributes":{},"id":"1fea8bfa-3eb7-48c7-99d7-ab5bda038795","type":"LinearScale"},{"attributes":{},"id":"ff79c509-b2ff-4454-8708-deb1e1a272a4","type":"LinearScale"}],"root_ids":["98d2df8e-3c3a-45ac-8082-3e7d50b248b7"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"f9d933d3-d965-4e92-b3a1-1743523b5ed3","elementid":"85d7ebbf-e154-4656-8a38-b9d917db68f0","modelid":"98d2df8e-3c3a-45ac-8082-3e7d50b248b7"}];
                
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
