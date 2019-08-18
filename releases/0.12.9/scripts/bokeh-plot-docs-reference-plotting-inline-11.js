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
      };var element = document.getElementById("2dde6af4-4f30-4e7c-a950-5a92acf977d9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2dde6af4-4f30-4e7c-a950-5a92acf977d9' but no matching script tag was found. ")
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
                    var docs_json = {"cd8e5518-3bbe-4472-bb4f-e473605f31f1":{"roots":{"references":[{"attributes":{"callback":null},"id":"410d6a76-dcfe-4b92-853a-7d613634fed3","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"0c3f53e9-8195-47ac-907b-d0e0c8da9e71","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"c45b7163-e886-47ed-bd65-1b9842c457e7","type":"LinearAxis"}],"left":[{"id":"39c3cacd-9500-490d-9362-650b4ed6f447","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c45b7163-e886-47ed-bd65-1b9842c457e7","type":"LinearAxis"},{"id":"fbf6b713-ca4a-4925-b0a7-9b7abebcecc2","type":"Grid"},{"id":"39c3cacd-9500-490d-9362-650b4ed6f447","type":"LinearAxis"},{"id":"36417e00-9d77-44f3-8d5a-af98ba612029","type":"Grid"},{"id":"8112cb22-583d-4db4-a883-988cc764ab28","type":"BoxAnnotation"},{"id":"37240b49-539d-4b93-8c7e-398216c9168d","type":"GlyphRenderer"}],"title":{"id":"326d2238-5bfd-4a95-9a7c-4ad2e7026000","type":"Title"},"toolbar":{"id":"0599555d-db17-4858-8b8c-603bab7628fe","type":"Toolbar"},"x_range":{"id":"410d6a76-dcfe-4b92-853a-7d613634fed3","type":"DataRange1d"},"x_scale":{"id":"ac0bf8ff-3ff8-4da0-8b80-58b75d743112","type":"LinearScale"},"y_range":{"id":"c2f34a10-b70e-4a55-bde0-faa2427750d5","type":"DataRange1d"},"y_scale":{"id":"88cdfbd7-2ae7-4a5f-86f4-5a9e13482ee7","type":"LinearScale"}},"id":"8e77d3a1-af78-4554-8a5a-8dac42db503e","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"18c7222d-c7c9-478e-8524-2facfc6ef4cb","type":"PanTool"},{"id":"9d776571-d915-4122-a775-e6a0251e2947","type":"WheelZoomTool"},{"id":"4054a9cd-ce7e-43b1-b535-04d088520194","type":"BoxZoomTool"},{"id":"a54c9948-c6dd-4fae-8429-f8d66df28e5b","type":"SaveTool"},{"id":"30d88529-7882-4579-a3b2-3847b3e276dd","type":"ResetTool"},{"id":"df9d6e81-830a-4ac2-996d-4e8150f9afe9","type":"HelpTool"}]},"id":"0599555d-db17-4858-8b8c-603bab7628fe","type":"Toolbar"},{"attributes":{"data_source":{"id":"0c3f53e9-8195-47ac-907b-d0e0c8da9e71","type":"ColumnDataSource"},"glyph":{"id":"01204f7f-5789-4bac-9d42-21e405e6dd54","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3dc3ec00-13c4-4d7e-83b8-a965bceb7325","type":"Line"},"selection_glyph":null,"view":{"id":"3ba13a06-8067-4e0a-9def-e0fcc6eefd7f","type":"CDSView"}},"id":"37240b49-539d-4b93-8c7e-398216c9168d","type":"GlyphRenderer"},{"attributes":{},"id":"9d776571-d915-4122-a775-e6a0251e2947","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"c2f34a10-b70e-4a55-bde0-faa2427750d5","type":"DataRange1d"},{"attributes":{},"id":"f4b2f85c-a9f3-449b-878b-24b691097e71","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"8112cb22-583d-4db4-a883-988cc764ab28","type":"BoxAnnotation"}},"id":"4054a9cd-ce7e-43b1-b535-04d088520194","type":"BoxZoomTool"},{"attributes":{},"id":"88cdfbd7-2ae7-4a5f-86f4-5a9e13482ee7","type":"LinearScale"},{"attributes":{},"id":"0487ac3d-4a6a-4576-b88a-f6eceec22862","type":"BasicTicker"},{"attributes":{},"id":"df9d6e81-830a-4ac2-996d-4e8150f9afe9","type":"HelpTool"},{"attributes":{},"id":"ac0bf8ff-3ff8-4da0-8b80-58b75d743112","type":"LinearScale"},{"attributes":{"plot":null,"text":"line"},"id":"326d2238-5bfd-4a95-9a7c-4ad2e7026000","type":"Title"},{"attributes":{},"id":"a54c9948-c6dd-4fae-8429-f8d66df28e5b","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3dc3ec00-13c4-4d7e-83b8-a965bceb7325","type":"Line"},{"attributes":{"source":{"id":"0c3f53e9-8195-47ac-907b-d0e0c8da9e71","type":"ColumnDataSource"}},"id":"3ba13a06-8067-4e0a-9def-e0fcc6eefd7f","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8112cb22-583d-4db4-a883-988cc764ab28","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8e77d3a1-af78-4554-8a5a-8dac42db503e","subtype":"Figure","type":"Plot"},"ticker":{"id":"31480478-8596-4c5f-82d3-e62dac29c919","type":"BasicTicker"}},"id":"fbf6b713-ca4a-4925-b0a7-9b7abebcecc2","type":"Grid"},{"attributes":{},"id":"9ea2cc4b-7664-4744-8280-cc905a40d1ae","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"01204f7f-5789-4bac-9d42-21e405e6dd54","type":"Line"},{"attributes":{"formatter":{"id":"f4b2f85c-a9f3-449b-878b-24b691097e71","type":"BasicTickFormatter"},"plot":{"id":"8e77d3a1-af78-4554-8a5a-8dac42db503e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0487ac3d-4a6a-4576-b88a-f6eceec22862","type":"BasicTicker"}},"id":"39c3cacd-9500-490d-9362-650b4ed6f447","type":"LinearAxis"},{"attributes":{},"id":"31480478-8596-4c5f-82d3-e62dac29c919","type":"BasicTicker"},{"attributes":{},"id":"18c7222d-c7c9-478e-8524-2facfc6ef4cb","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"8e77d3a1-af78-4554-8a5a-8dac42db503e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0487ac3d-4a6a-4576-b88a-f6eceec22862","type":"BasicTicker"}},"id":"36417e00-9d77-44f3-8d5a-af98ba612029","type":"Grid"},{"attributes":{},"id":"30d88529-7882-4579-a3b2-3847b3e276dd","type":"ResetTool"},{"attributes":{"formatter":{"id":"9ea2cc4b-7664-4744-8280-cc905a40d1ae","type":"BasicTickFormatter"},"plot":{"id":"8e77d3a1-af78-4554-8a5a-8dac42db503e","subtype":"Figure","type":"Plot"},"ticker":{"id":"31480478-8596-4c5f-82d3-e62dac29c919","type":"BasicTicker"}},"id":"c45b7163-e886-47ed-bd65-1b9842c457e7","type":"LinearAxis"}],"root_ids":["8e77d3a1-af78-4554-8a5a-8dac42db503e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"cd8e5518-3bbe-4472-bb4f-e473605f31f1","elementid":"2dde6af4-4f30-4e7c-a950-5a92acf977d9","modelid":"8e77d3a1-af78-4554-8a5a-8dac42db503e"}];
                
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
