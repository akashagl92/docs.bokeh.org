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
      };var element = document.getElementById("3a6c615e-29df-4aee-b8f0-9affffcb1301");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a6c615e-29df-4aee-b8f0-9affffcb1301' but no matching script tag was found. ")
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
                    var docs_json = {"5d9c522f-7ace-4aa0-ad3f-8a1a687e4e77":{"roots":{"references":[{"attributes":{"source":{"id":"0e123f93-9f57-45b4-b809-f1560ca8011b","type":"ColumnDataSource"}},"id":"287eec00-70f5-48c5-91f9-47f65cb0ebc0","type":"CDSView"},{"attributes":{},"id":"d0093edd-46f0-410b-8950-feadd623b6f8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"0e123f93-9f57-45b4-b809-f1560ca8011b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0e123f93-9f57-45b4-b809-f1560ca8011b","type":"ColumnDataSource"},"glyph":{"id":"e35682c6-c1ec-4259-bc7b-e25e372c3a99","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b37ba3f1-c74a-4de1-b79b-816263d11524","type":"Square"},"selection_glyph":null,"view":{"id":"287eec00-70f5-48c5-91f9-47f65cb0ebc0","type":"CDSView"}},"id":"e1e882bf-6f84-4deb-b097-33daf906a141","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e35682c6-c1ec-4259-bc7b-e25e372c3a99","type":"Square"},{"attributes":{"formatter":{"id":"b3e8fa76-3aec-4f99-aac7-aa9cbf8ca8d3","type":"BasicTickFormatter"},"plot":{"id":"aacea622-177a-4902-b456-88a2faa1c2d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0093edd-46f0-410b-8950-feadd623b6f8","type":"BasicTicker"}},"id":"4ba1874d-9d26-40fe-9178-260bc4c1c238","type":"LinearAxis"},{"attributes":{},"id":"ee82191e-3f4c-437e-93a8-4687116bcc1d","type":"PanTool"},{"attributes":{},"id":"cb03b225-9377-4acc-8da1-a6564b94f151","type":"LinearScale"},{"attributes":{"below":[{"id":"589a1fc0-1086-46d9-86ce-d1b67f8bb187","type":"LinearAxis"}],"left":[{"id":"4ba1874d-9d26-40fe-9178-260bc4c1c238","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"589a1fc0-1086-46d9-86ce-d1b67f8bb187","type":"LinearAxis"},{"id":"653dab41-3e16-407f-bc78-906683cca6cf","type":"Grid"},{"id":"4ba1874d-9d26-40fe-9178-260bc4c1c238","type":"LinearAxis"},{"id":"7093cae4-ad32-437a-be52-2629640a9555","type":"Grid"},{"id":"2f7293f0-bfdc-4628-8a0c-1b79e6ec8596","type":"BoxAnnotation"},{"id":"e1e882bf-6f84-4deb-b097-33daf906a141","type":"GlyphRenderer"}],"title":{"id":"f6bf3940-050b-4fd9-8e61-e71001191d3b","type":"Title"},"toolbar":{"id":"fc329a9c-c8df-4b70-b223-57adb080bcd2","type":"Toolbar"},"x_range":{"id":"1fa90a45-61bd-41d2-8370-53698e744bb4","type":"DataRange1d"},"x_scale":{"id":"355e1dbf-adf6-4061-821d-d507894009ec","type":"LinearScale"},"y_range":{"id":"e2343132-4c38-4786-b622-a616b92cae8f","type":"DataRange1d"},"y_scale":{"id":"cb03b225-9377-4acc-8da1-a6564b94f151","type":"LinearScale"}},"id":"aacea622-177a-4902-b456-88a2faa1c2d5","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"f6bf3940-050b-4fd9-8e61-e71001191d3b","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b37ba3f1-c74a-4de1-b79b-816263d11524","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ee82191e-3f4c-437e-93a8-4687116bcc1d","type":"PanTool"},{"id":"3dab8ec4-037d-45cf-b42d-557a7d8e32c7","type":"WheelZoomTool"},{"id":"bedb2d8c-5a2a-41c4-97b3-c5f3e2fa2bcc","type":"BoxZoomTool"},{"id":"24ad110d-6562-41fe-9aab-689b38a2aef3","type":"SaveTool"},{"id":"9d69be7d-8cbb-478c-96a4-7308fbe1f066","type":"ResetTool"},{"id":"719548d3-cdae-4074-9ea4-35dd5735d3a5","type":"HelpTool"}]},"id":"fc329a9c-c8df-4b70-b223-57adb080bcd2","type":"Toolbar"},{"attributes":{"formatter":{"id":"8c733934-4df7-4f09-9489-4be56433c8ce","type":"BasicTickFormatter"},"plot":{"id":"aacea622-177a-4902-b456-88a2faa1c2d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"735c1759-4b5b-4e1c-9be8-403df5303069","type":"BasicTicker"}},"id":"589a1fc0-1086-46d9-86ce-d1b67f8bb187","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1fa90a45-61bd-41d2-8370-53698e744bb4","type":"DataRange1d"},{"attributes":{},"id":"735c1759-4b5b-4e1c-9be8-403df5303069","type":"BasicTicker"},{"attributes":{},"id":"8c733934-4df7-4f09-9489-4be56433c8ce","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"aacea622-177a-4902-b456-88a2faa1c2d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0093edd-46f0-410b-8950-feadd623b6f8","type":"BasicTicker"}},"id":"7093cae4-ad32-437a-be52-2629640a9555","type":"Grid"},{"attributes":{"overlay":{"id":"2f7293f0-bfdc-4628-8a0c-1b79e6ec8596","type":"BoxAnnotation"}},"id":"bedb2d8c-5a2a-41c4-97b3-c5f3e2fa2bcc","type":"BoxZoomTool"},{"attributes":{},"id":"b3e8fa76-3aec-4f99-aac7-aa9cbf8ca8d3","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e2343132-4c38-4786-b622-a616b92cae8f","type":"DataRange1d"},{"attributes":{"plot":{"id":"aacea622-177a-4902-b456-88a2faa1c2d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"735c1759-4b5b-4e1c-9be8-403df5303069","type":"BasicTicker"}},"id":"653dab41-3e16-407f-bc78-906683cca6cf","type":"Grid"},{"attributes":{},"id":"719548d3-cdae-4074-9ea4-35dd5735d3a5","type":"HelpTool"},{"attributes":{},"id":"355e1dbf-adf6-4061-821d-d507894009ec","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2f7293f0-bfdc-4628-8a0c-1b79e6ec8596","type":"BoxAnnotation"},{"attributes":{},"id":"9d69be7d-8cbb-478c-96a4-7308fbe1f066","type":"ResetTool"},{"attributes":{},"id":"24ad110d-6562-41fe-9aab-689b38a2aef3","type":"SaveTool"},{"attributes":{},"id":"3dab8ec4-037d-45cf-b42d-557a7d8e32c7","type":"WheelZoomTool"}],"root_ids":["aacea622-177a-4902-b456-88a2faa1c2d5"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"5d9c522f-7ace-4aa0-ad3f-8a1a687e4e77","elementid":"3a6c615e-29df-4aee-b8f0-9affffcb1301","modelid":"aacea622-177a-4902-b456-88a2faa1c2d5"}];
                
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
